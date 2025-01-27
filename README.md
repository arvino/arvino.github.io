# Personal Website - Arvino Zulka

Repository ini berisi kode sumber untuk website personal saya yang dapat diakses di [arvino.github.io](https://arvino.github.io).

## Langkah-Langkah Membuat Personal Website di GitHub Pages

### 1. Persiapan Repository
1. Buat akun GitHub jika belum memiliki
2. Buat repository baru dengan format: `username.github.io`
   - Username harus sama persis dengan username GitHub Anda
   - Repository harus public
3. Clone repository ke komputer lokal:
```bash
git clone https://github.com/username/username.github.io.git
```

### 2. Struktur Proyek
Buat struktur folder seperti berikut:
```
username.github.io/
│
├── index.html          # File utama untuk halaman beranda
├── style.css           # File CSS untuk styling
├── script.js           # File JavaScript untuk interaktivitas
├── assets/            # Folder untuk menyimpan gambar dan aset
│   ├── profile.jpg    # Foto profil
│   └── projects/      # Folder untuk gambar proyek
└── README.md          # Deskripsi repositori
```

### 3. Pengembangan Lokal
1. Edit file HTML, CSS, dan JavaScript sesuai kebutuhan
2. Test website secara lokal dengan membuka file index.html di browser
3. Atau gunakan live server extension di VS Code

### 4. Deploy ke GitHub Pages
1. Add semua perubahan ke Git:
```bash
git add .
```
2. Commit perubahan:
```bash
git commit -m "Initial website setup"
```
3. Push ke GitHub:
```bash
git push origin main
```
4. Aktifkan GitHub Pages:
   - Buka repository di GitHub
   - Klik Settings > Pages
   - Pilih Source: main branch
   - Klik Save
5. Website akan tersedia di `https://username.github.io`

### 5. Custom Domain (Opsional)
1. Beli domain dari provider domain
2. Tambahkan CNAME record di DNS provider:
   - Type: CNAME
   - Host: www
   - Value: username.github.io
3. Tambahkan file CNAME di repository:
```bash
echo "www.yourdomain.com" > CNAME
```
4. Update di GitHub Pages settings dengan custom domain Anda

## Fitur
- Responsive design untuk semua ukuran layar
- Dark/Light mode toggle
- Smooth scrolling navigation
- Timeline untuk pengalaman kerja
- Grid layout untuk sertifikasi dan pendidikan
- Integrasi dengan social media links
- Mobile-friendly navigation menu
- Chatbot AI untuk interaksi dengan pengunjung

## Teknologi yang Digunakan
- HTML5
- CSS3 (Flexbox & Grid)
- JavaScript (Vanilla)
- Font Awesome untuk ikon
- Google Fonts

## Cara Menjalankan Proyek
1. Clone repository ini:
```bash
git clone https://github.com/arvino/arvino.github.io.git
```
2. Buka file `index.html` di browser Anda
3. Atau deploy ke GitHub Pages untuk hosting online

## Pengembangan
- Fork repository ini
- Buat branch baru untuk fitur yang ingin ditambahkan
- Commit perubahan Anda
- Buat pull request

## Pemeliharaan
1. Update konten secara berkala
2. Test responsiveness di berbagai perangkat
3. Periksa broken links
4. Update dependencies jika ada
5. Backup repository secara regular

## Kontak
- Website: https://www.arvino.my.id/
- Email: arvinozulka@gmail.com
- LinkedIn: https://www.linkedin.com/in/arvino-zulka/
- GitHub: https://github.com/arvino
- YouTube: https://www.youtube.com/@ArvinoZulka

## Lisensi
Copyright © 2024 Arvino Zulka. All rights reserved. 