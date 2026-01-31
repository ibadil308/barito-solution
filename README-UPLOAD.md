# Panduan Upload Website ke Netlify

File `barito-solution-netlify.zip` sudah siap untuk di-upload ke Netlify!

## Cara Upload (Drag & Drop - Paling Mudah)

### Langkah 1: Extract File
1. Download file `barito-solution-netlify.zip`
2. Extract/unzip file tersebut
3. Anda akan mendapat folder `dist/public` yang berisi semua file website

### Langkah 2: Upload ke Netlify
1. Buka browser dan kunjungi: **https://app.netlify.com/drop**
2. Login atau daftar akun Netlify (gratis)
3. **Drag & drop folder `dist/public`** (bukan zip-nya, tapi folder hasil extract) ke area yang tersedia
4. Tunggu proses upload selesai (sekitar 1-2 menit)
5. Website Anda akan langsung online dengan URL seperti: `https://random-name-123.netlify.app`

### Langkah 3: Konfigurasi Custom Domain (Opsional)
Jika ingin menggunakan domain `baritosol.my.id`:

1. Di Netlify Dashboard, klik site Anda
2. Klik **"Domain settings"**
3. Klik **"Add custom domain"**
4. Masukkan: `baritosol.my.id`
5. Netlify akan memberikan instruksi untuk setting DNS
6. Di provider domain Anda, tambahkan CNAME record:
   ```
   Type: CNAME
   Name: @ atau baritosol
   Value: [your-site-name].netlify.app
   ```
7. Tunggu propagasi DNS (5 menit - 48 jam)

## Isi File yang Sudah Di-build

File `barito-solution-netlify.zip` berisi:
- ✅ **dist/public/** - Semua file website yang sudah di-build dan siap production
  - index.html
  - assets/ (CSS dan JavaScript yang sudah dioptimasi)
  - images/ (semua gambar termasuk logo)
  - favicon.ico dan icon-*.png
  - manifest.json
- ✅ **netlify.toml** - Konfigurasi Netlify (routing, headers, caching)
- ✅ **DEPLOYMENT.md** - Panduan lengkap deployment

## Fitur Website yang Sudah Terintegrasi

✅ Logo Barito Solution di Navbar dan Footer  
✅ Favicon dan app icons untuk semua device  
✅ Responsive design (mobile, tablet, desktop)  
✅ Google Maps dengan lokasi bisnis Anda  
✅ SEO-friendly (meta tags, descriptions)  
✅ PWA-ready (Progressive Web App)  
✅ Optimasi performa dan caching  

## Troubleshooting

### Website tidak muncul dengan benar
- Pastikan Anda upload folder `dist/public`, bukan folder lain
- Cek apakah semua file ter-upload dengan lengkap

### Routing tidak berfungsi (404 error)
- File `netlify.toml` harus ikut ter-upload
- Netlify akan otomatis mendeteksi konfigurasi ini

### Custom domain tidak berfungsi
- Cek DNS records sudah benar
- Gunakan https://www.whatsmydns.net/ untuk cek propagasi
- Tunggu hingga 48 jam untuk propagasi penuh

## Update Website di Kemudian Hari

Jika ingin update website:
1. Minta file build terbaru
2. Extract file zip baru
3. Drag & drop folder `dist/public` ke site yang sama di Netlify
4. Netlify akan otomatis replace dengan versi baru

## Kontak Support

Jika ada masalah:
- Netlify Support: https://answers.netlify.com/
- Dokumentasi: https://docs.netlify.com/

---

**Selamat! Website Barito Solution siap online! 🎉**
