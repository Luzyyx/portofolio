const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    document.body.classList.toggle("nav-open", !isOpen);
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    });
  });
}

const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-menu a").forEach((link) => {
  const href = link.getAttribute("href");
  if (href === currentPage) {
    link.setAttribute("aria-current", "page");
  }
});

const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const isMatch = filter === "all" || card.dataset.category === filter;
      card.toggleAttribute("hidden", !isMatch);
    });
  });
});

document.querySelectorAll(".copy-email").forEach((button) => {
  button.addEventListener("click", async () => {
    const info = button.dataset.copy;
    const originalText = button.textContent;

    try {
      await copyText(info);
      button.textContent = "Info Copied";
    } catch {
      button.textContent = info;
    }

    window.setTimeout(() => {
      button.textContent = originalText;
    }, 1800);
  });
});

document.querySelectorAll(".discord-order").forEach((link) => {
  link.addEventListener("click", async () => {
    const message = link.dataset.message;
    if (!message) return;

    try {
      await copyText(message);
      if (link.classList.contains("btn")) {
        const originalText = link.textContent;
        link.textContent = "Pesan Dicopy";
        window.setTimeout(() => {
          link.textContent = originalText;
        }, 1600);
      }
    } catch {
      // Discord still opens; the user can type the message manually if clipboard is blocked.
    }
  });
});
