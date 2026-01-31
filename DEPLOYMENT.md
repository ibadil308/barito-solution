# Panduan Deployment ke Netlify

Website Barito Solution siap untuk di-deploy ke Netlify. Ikuti langkah-langkah berikut:

## Persiapan

1. **Buat akun Netlify** (jika belum punya):
   - Kunjungi [netlify.com](https://www.netlify.com/)
   - Daftar menggunakan email atau GitHub

2. **Install Netlify CLI** (opsional, untuk deployment via terminal):
   ```bash
   npm install -g netlify-cli
   ```

## Cara 1: Deploy via Drag & Drop (Paling Mudah)

1. **Build website** terlebih dahulu:
   ```bash
   pnpm install
   pnpm run build
   ```

2. Setelah build selesai, folder `dist/public` akan berisi file website yang siap di-deploy

3. Buka [app.netlify.com/drop](https://app.netlify.com/drop)

4. **Drag & drop** folder `dist/public` ke area yang tersedia

5. Netlify akan otomatis meng-upload dan men-deploy website Anda

6. Setelah selesai, Anda akan mendapat URL seperti: `https://random-name-123.netlify.app`

## Cara 2: Deploy via GitHub (Recommended untuk Update Otomatis)

1. **Push code ke GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/repo-name.git
   git push -u origin main
   ```

2. **Connect ke Netlify**:
   - Login ke Netlify
   - Klik "Add new site" → "Import an existing project"
   - Pilih "GitHub" dan authorize
   - Pilih repository Anda

3. **Konfigurasi Build Settings**:
   - Build command: `pnpm install && pnpm run build`
   - Publish directory: `dist/public`
   - Netlify akan otomatis mendeteksi `netlify.toml`

4. Klik "Deploy site"

5. **Setiap kali Anda push ke GitHub**, Netlify akan otomatis rebuild dan redeploy website

## Cara 3: Deploy via Netlify CLI

1. **Login ke Netlify**:
   ```bash
   netlify login
   ```

2. **Deploy**:
   ```bash
   pnpm run build
   netlify deploy --prod --dir=dist/public
   ```

## Custom Domain (baritosol.my.id)

Setelah website ter-deploy:

1. Di Netlify Dashboard, buka site Anda
2. Klik "Domain settings"
3. Klik "Add custom domain"
4. Masukkan: `baritosol.my.id`
5. Netlify akan memberikan DNS records yang perlu Anda tambahkan di provider domain Anda
6. Tambahkan records berikut di DNS management domain Anda:
   ```
   Type: CNAME
   Name: @
   Value: [your-site-name].netlify.app
   ```
7. Tunggu propagasi DNS (bisa 5 menit - 48 jam)

## Environment Variables (Jika Diperlukan)

Jika ada environment variables yang perlu ditambahkan:

1. Di Netlify Dashboard → Site settings → Environment variables
2. Tambahkan variable yang diperlukan
3. Redeploy site

## Troubleshooting

### Build Gagal
- Pastikan `pnpm` terinstall
- Cek error message di build log
- Pastikan semua dependencies ada di `package.json`

### 404 Error pada Routing
- Pastikan file `netlify.toml` ada di root project
- Redirect rules sudah dikonfigurasi dengan benar

### Custom Domain Tidak Berfungsi
- Cek DNS records sudah benar
- Tunggu propagasi DNS
- Gunakan [whatsmydns.net](https://www.whatsmydns.net/) untuk cek status propagasi

## Monitoring

Setelah deployment:
- Cek website di URL yang diberikan
- Test di berbagai device (mobile, tablet, desktop)
- Test di berbagai browser (Chrome, Firefox, Safari, Edge)
- Pastikan semua link dan fitur berfungsi

## Update Website

### Via GitHub (Auto-deploy):
```bash
git add .
git commit -m "Update website"
git push
```

### Via CLI:
```bash
pnpm run build
netlify deploy --prod --dir=dist/public
```

### Via Drag & Drop:
- Build ulang dengan `pnpm run build`
- Upload folder `dist/public` lagi

---

**Catatan**: Website ini sudah dikonfigurasi dengan:
- ✅ Client-side routing support
- ✅ Security headers
- ✅ Asset caching optimization
- ✅ Responsive design untuk semua device
- ✅ Google Maps integration
- ✅ SEO-friendly structure

Jika ada pertanyaan atau masalah, hubungi support Netlify atau dokumentasi di [docs.netlify.com](https://docs.netlify.com/)
