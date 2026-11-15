
# Tugas UTS Pemrograman Web Service / API

**Nama:** Fitria Rafiqoh Duri  
**NIM:** 2410061  
**Program Studi:** Teknik Informatika  
**Kampus:** STMIK Antar Bangsa

## Deskripsi
Membangun RESTful API CRUD sederhana menggunakan Node.js dan Express.js dengan penyimpanan data menggunakan Array JavaScript (In-Memory Data Store).

## Teknologi
- Node.js
- Express.js
- JavaScript
- JSON

## Daftar Endpoint

| Method | Endpoint | Fungsi |
|---|---|---|
| GET | /api/biodata | Menampilkan semua biodata |
| GET | /api/biodata/:id | Menampilkan detail biodata |
| POST | /api/biodata | Menambahkan biodata |
| PUT | /api/biodata/:id | Memperbarui biodata |
| DELETE | /api/biodata/:id | Menghapus biodata |

## Cara Menjalankan

1. Install Node.js.
2. Jalankan `npm install`.
3. Jalankan `npm start`.
4. Buka API melalui `http://localhost:3000/api/biodata`.

## Penyimpanan Data
Data disimpan menggunakan Array JavaScript dan tidak menggunakan database.
