# Fauzi Developer SAMP

Website portfolio dan price list jasa developer SAMP Pawn dan Bot JS milik Fauzi.
Fokus layanan SAMP: harian, mingguan, dan bulanan. Bot JS tersedia sebagai layanan tambahan.

## Isi Website

- `index.html`: halaman utama jasa developer SAMP.
- `about.html`: profil singkat Fauzi.
- `projects.html`: daftar harga paket harian, mingguan, bulanan, dan Bot JS.
- `css/style.css`: styling urban game poster.
- `js/script.js`: menu mobile, filter harga, copy info, dan reveal animation.
- `assets/`: gambar, icon, dan folder font.
- `assets/images/price-daily.jpg`: poster paket harian.
- `assets/images/price-weekly.jpg`: poster paket mingguan.
- `assets/images/price-monthly.jpg`: poster paket bulanan.
- `assets/images/bot-js.jpg`: poster layanan Bot JS.
- `assets/icons/discord-logo.png`: logo Discord untuk tombol order.
- `assets/icons/vscode-logo.png`: logo VS Code untuk visual paket.
- `assets/images/foto-about.jpg`: foto profil About dari link referensi.

## Data Profil

- Nama: Fauzi
- Hobi: SAMP Pawn development
- Status: belum punya apa-apa
- Keseharian: ngoding
- Game favorit: SAMP
- Jenis kelamin: pria

## Harga Default

- Paket harian: Rp 50K / hari
- Paket mingguan: Rp 300K / minggu
- Paket bulanan: Rp 500K / bulan
- Bot JS: mulai Rp 20K sampai Rp 50K, tergantung fitur

## Aturan Pengerjaan

- Jam operasional: Senin sampai Jumat, 10.00-22.00 WIB.
- Sabtu dan Minggu libur.
- Paket harian dihitung per hari kerja aktif.
- Paket mingguan maksimal 10 fitur, fix bug, atau update yang jelas.
- Paket bulanan maksimal 10 fitur, fix bug, atau update yang jelas.
- Scope wajib jelas sebelum pengerjaan dimulai.

Nominal bisa diganti langsung di `projects.html`.

## Yang Perlu Diganti

1. Email sudah diset ke `Fluzyyxstore@gmail.com`.
2. Link Discord sudah diset ke `https://discord.com/users/1318970252138385441`.
3. Format link Discord: `https://discord.com/users/user-id-discord`.
4. Tombol order Discord akan menyalin template pesan otomatis ke clipboard lalu membuka profil Discord.
4. Ganti gambar profil di `assets/images/foto-about.jpg` kalau sudah punya foto sendiri.
5. Update harga di `projects.html` kalau nominal berubah.

## Cara Ambil User ID Discord

1. Buka Discord.
2. Masuk ke User Settings.
3. Buka Advanced.
4. Aktifkan Developer Mode.
5. Klik kanan profil kamu lalu pilih Copy User ID.

## Deploy ke Vercel

1. Push project ke GitHub.
2. Import repository di Vercel.
3. Tidak perlu build command karena ini static HTML.
4. Pastikan `index.html` tetap berada di root project.

## Catatan Path

Semua file web memakai nama lowercase agar aman di server Linux:

- `css/style.css`
- `js/script.js`
- `assets/images/foto-about.jpg`
- `assets/images/price-daily.jpg`

Visual di project ini adalah aset original bergaya urban game poster, bukan aset resmi dari game tertentu.
