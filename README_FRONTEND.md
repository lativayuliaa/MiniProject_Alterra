# Elara Beauty
## _Web Klinik Kecantikan_
![Elara Beauty](https://github.com/lativayuliaa/MiniProject_Alterra/blob/main/elara-beauty/public/images/elara-logo.png?raw=true)

Proyek ini merupakan pembuatan situs web untuk klinik kecantikan Elara Beauty. Situs web ini dirancang untuk memberikan informasi yang dibutuhkan tentang layanan kecantikan di Elara Beauty, menyediakan artikel-artikel menarik tentang kecantikan, serta memberikan rekomendasi treatment yang dipersonalisasi menggunakan teknologi kecerdasan buatan (AI). Proyek ini juga bertujuan untuk memenuhi tugas mini project sebagai bagian dari pembelajaran mengimplementasikan materi yang telah dipelajari.

## Features
### User
- **Landing/Home Page Statis**: Halaman utama yang memberikan gambaran umum tentang klinik dan layanan yang ditawarkan.
- **Artikel Kecantikan Dinamis**: Halaman yang menampilkan artikel-artikel terbaru tentang perawatan kecantikan dan tips kecantikan.
- **AI Rekomendasi Treatment**: Fitur yang memberikan rekomendasi treatment kecantikan berdasarkan data yang diinput pengguna.

### Admin
- **Login Admin**: Fitur untuk autentikasi dan mengakses dashboard admin menggunakan Supabase Auth.
- **Halaman Manajemen Artikel**: Admin dapat menambah, mengedit, dan menghapus artikel kecantikan melalui dashboard.
- **Dashboard Admin**: Menampilkan ringkasan data dan fitur manajemen situs web.

## Tech Stack
- Node.js
- React
- React Router DOM
- Tailwind CSS
- Daisy UI
- Flowbite
- Supabase (untuk autentikasi dan penyimpanan data)
- Visual Studio Code (Editor)
- Github (Version Control)

## Sample App Demo
[Elara Beauty](https://elara-beauty-clinic.vercel.app/) 

## Setup
Berikut adalah langkah-langkah untuk menjalankan proyek ini secara lokal:
1. **Clone repository ini:**
   ```bash
   git clone https://github.com/lativayuliaa/elara-beauty.git
   cd elara-beauty
   
2. **Install dependencies:**
    ```bash
    npm install

3. **Konfigurasi environment variables:**
Buat file `.env` di root proyek dan tambahkan variabel berikut:
    ```bash
    VITE_API_KEY="sk-proj-I8gY7bR1k1WP7wab2GVxT3BlbkFJ5uXNr3sUOMOVxPFqcynh"
    VITE_SUPABASE_URL="https://vdatjsebmawluyjwvnyh.supabase.co"
    VITE_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkYXRqc2VibWF3bHV5and2bnloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUwOTM0NjgsImV4cCI6MjAzMDY2OTQ2OH0.Ha_RgEZJLJfi2yj3w2NBqKLmbuOOkxvb8qWuHAyHJYc"

4. **Jalankan servel lokal**
    ```bash
    npm run dev
