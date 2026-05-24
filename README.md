# Fauzi Developer SAMP

Website portfolio dan price list jasa developer SAMP Pawn milik Fauzi.
Fokus layanan hanya paket harian dan mingguan.

## Isi Website

- `index.html`: halaman utama jasa developer SAMP.
- `about.html`: profil singkat Fauzi.
- `projects.html`: daftar harga paket harian dan mingguan.
- `css/style.css`: styling urban game poster.
- `js/script.js`: menu mobile, filter harga, copy info, dan reveal animation.
- `assets/`: gambar, icon, dan folder font.

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
- Tidak ada paket bulanan

Nominal bisa diganti langsung di `projects.html`.

## Yang Perlu Diganti

1. Email sudah diset ke `Fluzyyxstore@gmail.com`.
2. Link Discord sudah diset ke `https://discord.com/users/1318970252138385441`.
3. Format link Discord: `https://discord.com/users/user-id-discord`.
4. Ganti gambar profil di `assets/images/foto-profil.png` kalau sudah punya foto sendiri.
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
- `assets/images/foto-profil.png`
- `assets/images/mockup-project1.jpg`

Visual di project ini adalah aset original bergaya urban game poster, bukan aset resmi dari game tertentu.
