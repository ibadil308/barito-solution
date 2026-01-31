# Panduan Deploy ke Vercel/GitHub - Full Source Code

File `barito-solution-full-source.zip` berisi **SEMUA source code** yang dibutuhkan untuk deploy di Vercel atau platform lain yang membutuhkan build process.

---

## 📦 Isi File Zip

File ini berisi **LENGKAP source code**:

```
barito-solution/
├── 📄 package.json          ✅ Dependencies dan scripts
├── 📄 pnpm-lock.yaml        ✅ Lock file dependencies
├── 📄 vite.config.ts        ✅ Config Vite
├── 📄 tsconfig.json         ✅ Config TypeScript
├── 📄 components.json       ✅ Config shadcn/ui
├── 📄 netlify.toml          ✅ Config Netlify
├── 📄 DEPLOYMENT.md         📖 Panduan deployment
├── 📄 PANDUAN-EDIT-MANUAL.md 📖 Panduan edit manual
├── 📁 client/               ✅ Source code frontend
│   ├── index.html
│   ├── public/              ✅ Static assets (images, icons)
│   └── src/                 ✅ React components
│       ├── App.tsx
│       ├── main.tsx
│       ├── index.css
│       ├── pages/           ✅ Halaman (Home, Layanan, Tentang)
│       ├── components/      ✅ Komponen reusable
│       ├── contexts/
│       ├── hooks/
│       └── lib/
├── 📁 server/               ✅ Server code
│   └── index.ts
└── 📁 shared/               ✅ Shared constants
    └── const.ts
```

**CATATAN:** Folder `node_modules/` dan `dist/` TIDAK disertakan (akan di-generate saat build).

---

## 🚀 Cara Deploy ke Vercel

### Metode 1: Via GitHub (Recommended)

**Step 1: Extract File**
```bash
unzip barito-solution-full-source.zip
cd barito-solution
```

**Step 2: Upload ke GitHub**
```bash
# Inisialisasi Git
git init

# Add semua file
git add .

# Commit
git commit -m "Initial commit - Barito Solution"

# Buat repository di GitHub (https://github.com/new)
# Nama: barito-solution

# Connect ke GitHub
git branch -M main
git remote add origin https://github.com/USERNAME/barito-solution.git

# Push
git push -u origin main
```

**Step 3: Deploy di Vercel**
1. Login ke https://vercel.com
2. Klik **"Add New..."** → **"Project"**
3. Klik **"Import Git Repository"**
4. Pilih repository **barito-solution**
5. Vercel akan auto-detect:
   - **Framework Preset:** Vite ✅
   - **Root Directory:** `.` atau kosong ✅
   - **Build Command:** `pnpm run build` ✅
   - **Output Directory:** `dist/public` ✅
6. Klik **"Deploy"**
7. Tunggu 2-3 menit
8. Website online! 🎉

---

### Metode 2: Via Vercel CLI

**Step 1: Install Vercel CLI**
```bash
npm install -g vercel
```

**Step 2: Extract dan Deploy**
```bash
# Extract file
unzip barito-solution-full-source.zip
cd barito-solution

# Login ke Vercel
vercel login

# Deploy
vercel

# Ikuti instruksi:
# - Set up and deploy? Y
# - Which scope? (pilih akun Anda)
# - Link to existing project? N
# - What's your project's name? barito-solution
# - In which directory is your code located? ./
# - Want to override the settings? N

# Vercel akan otomatis detect dan deploy!
```

---

### Metode 3: Upload Langsung (Tanpa GitHub)

**Step 1: Extract File**
```bash
unzip barito-solution-full-source.zip
```

**Step 2: Buka Vercel Dashboard**
1. Login ke https://vercel.com
2. Klik **"Add New..."** → **"Project"**
3. Pilih **"Deploy from a folder"**

**Step 3: Upload Folder**
- Drag & drop **seluruh folder `barito-solution`** (yang berisi `package.json`)
- JANGAN upload folder `client/` atau `dist/` saja
- Upload **ROOT FOLDER** yang ada `package.json`-nya

**Step 4: Konfigurasi**
Vercel akan auto-detect, tapi pastikan:
- **Framework Preset:** Vite
- **Root Directory:** `.` atau kosong
- **Build Command:** `pnpm install && pnpm run build`
- **Output Directory:** `dist/public`

**Step 5: Deploy**
Klik **"Deploy"** dan tunggu 2-3 menit.

---

## 🌐 Deploy ke Platform Lain

### Cloudflare Pages

1. Login ke https://dash.cloudflare.com
2. Pages → **"Create a project"**
3. Upload folder atau connect GitHub
4. Settings:
   - **Build command:** `pnpm install && pnpm run build`
   - **Build output directory:** `dist/public`
5. Deploy

---

### Render

1. Login ke https://render.com
2. New → **"Static Site"**
3. Connect GitHub atau upload
4. Settings:
   - **Build Command:** `pnpm install && pnpm run build`
   - **Publish Directory:** `dist/public`
5. Deploy

---

### Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Extract file
unzip barito-solution-full-source.zip
cd barito-solution

# Build dulu
pnpm install
pnpm run build

# Init Firebase
firebase init hosting
# - Pilih folder: dist/public
# - Single-page app: Yes
# - Set up automatic builds: No

# Deploy
firebase deploy
```

---

## 🔧 Build di Local (Opsional)

Jika mau test dulu sebelum deploy:

```bash
# Extract file
unzip barito-solution-full-source.zip
cd barito-solution

# Install dependencies
pnpm install
# atau: npm install

# Run development server
pnpm run dev
# atau: npm run dev

# Buka browser: http://localhost:3000

# Build untuk production
pnpm run build
# atau: npm run build

# Hasil build ada di: dist/public/
```

---

## 📋 Konfigurasi Vercel yang Benar

```
┌────────────────────────────────────────┐
│ Framework Preset: Vite                 │
├────────────────────────────────────────┤
│ Root Directory: .                      │
│ (titik saja, atau KOSONG)              │
├────────────────────────────────────────┤
│ Build Command:                         │
│ pnpm install && pnpm run build         │
│ (atau: npm install && npm run build)   │
├────────────────────────────────────────┤
│ Output Directory: dist/public          │
├────────────────────────────────────────┤
│ Install Command: pnpm install          │
│ (atau: npm install)                    │
└────────────────────────────────────────┘
```

---

## ⚠️ Troubleshooting

### Error: "No package.json found"
**Solusi:** Pastikan upload **ROOT FOLDER** (yang ada `package.json`), bukan subfolder.

### Error: "Build failed"
**Solusi:** 
1. Cek Build Command: `pnpm install && pnpm run build`
2. Atau ganti ke npm: `npm install && npm run build`

### Error: "Module not found"
**Solusi:** 
1. Pastikan `pnpm-lock.yaml` ikut ter-upload
2. Atau delete lock file dan pakai npm

### Routing tidak jalan (404 di subpage)
**Solusi:** Tambahkan file `vercel.json` di root:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 🆚 Perbedaan dengan Zip Sebelumnya

**`barito-solution-netlify.zip`** (zip lama):
- ❌ Hanya berisi hasil build (`dist/public/`)
- ✅ Cocok untuk Netlify Drag & Drop
- ❌ TIDAK bisa untuk Vercel/GitHub (tidak ada source code)

**`barito-solution-full-source.zip`** (zip baru):
- ✅ Berisi SEMUA source code
- ✅ Cocok untuk Vercel/GitHub/Cloudflare/Render
- ✅ Bisa di-build ulang
- ✅ Bisa di-edit dan di-customize

---

## 💡 Rekomendasi

**Untuk Deploy Cepat (1 menit):**
→ Pakai `barito-solution-netlify.zip` + Netlify Drag & Drop

**Untuk Deploy dengan Auto-Update dari GitHub:**
→ Pakai `barito-solution-full-source.zip` + GitHub + Vercel

**Untuk Edit dan Customize:**
→ Pakai `barito-solution-full-source.zip` + edit lokal + push ke GitHub

---

**Selamat Deploy! 🚀**

Jika ada masalah, cek dokumentasi lengkap di `DEPLOYMENT.md` atau `PANDUAN-EDIT-MANUAL.md`.
