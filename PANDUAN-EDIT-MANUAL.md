# Panduan Edit Website Barito Solution Secara Manual

Dokumen ini menjelaskan cara mengedit konten website Anda sendiri tanpa perlu bantuan programmer.

---

## 📁 Struktur File Penting

```
barito-solution/
├── client/
│   ├── public/
│   │   └── images/          ← Tempat semua gambar
│   │       ├── logo.jpg     ← Logo Anda
│   │       └── ...
│   └── src/
│       ├── pages/           ← Halaman website
│       │   ├── Home.tsx     ← Halaman Home
│       │   ├── Layanan.tsx  ← Halaman Layanan
│       │   └── Tentang.tsx  ← Halaman Tentang
│       ├── components/      ← Komponen yang dipakai berulang
│       │   ├── Navbar.tsx   ← Menu navigasi atas
│       │   └── Footer.tsx   ← Footer bawah
│       └── index.css        ← Pengaturan warna tema
└── netlify.toml             ← Konfigurasi Netlify
```

---

## 🎨 Mengubah Warna Tema

**File:** `client/src/index.css`

Cari bagian `:root {` (sekitar baris 60-90), ubah warna sesuai keinginan:

```css
:root {
  /* Warna Utama (Deep Teal) - untuk button, logo box */
  --primary: oklch(0.35 0.08 180); 
  
  /* Warna Background (Warm Sand) - background website */
  --background: oklch(0.98 0.01 60);
  
  /* Warna Teks (Dark Teal) - teks utama */
  --foreground: oklch(0.25 0.08 180);
  
  /* Warna Aksen (Coral) - untuk highlight */
  --accent: oklch(0.68 0.18 25);
}
```

**Tips:** Gunakan generator warna OKLCH online untuk mendapatkan kode warna yang sesuai.

---

## 📝 Mengedit Konten Halaman Home

**File:** `client/src/pages/Home.tsx`

### 1. Mengubah Judul dan Deskripsi Hero

Cari bagian ini (sekitar baris 59-64):

```tsx
<h1 className="...">
  Solusi Teknologi Terpercaya untuk Bisnis Anda  {/* ← EDIT INI */}
</h1>
<p className="...">
  Barito Solution menyediakan layanan instalasi komputer...  {/* ← EDIT INI */}
</p>
```

### 2. Menambah/Mengurangi Layanan di Preview

Cari bagian `const services = [` (sekitar baris 25-48):

```tsx
const services = [
  {
    icon: Laptop,              // Icon (Laptop, Package, Globe, dll)
    title: "Instalasi Laptop/PC",  // ← Judul layanan
    description: "Instalasi sistem operasi...",  // ← Deskripsi
    image: "/images/service-installation.png",   // ← Gambar
  },
  // Tambah layanan baru di sini dengan format yang sama
  {
    icon: Wrench,  // Ganti dengan icon lain
    title: "Layanan Baru Anda",
    description: "Deskripsi layanan baru",
    image: "/images/layanan-baru.png",
  },
];
```

**Icon yang tersedia:**
- `Laptop` - untuk komputer/laptop
- `Package` - untuk aplikasi/software
- `Globe` - untuk website
- `Wrench` - untuk perbaikan
- `Code` - untuk programming
- `Smartphone` - untuk mobile

**Cara menambah icon baru:**
Di bagian atas file, tambahkan di baris import:
```tsx
import { ArrowRight, Laptop, Globe, Package, Wrench } from "lucide-react";
//                                            ^^^^^^ tambah di sini
```

---

## 🛠️ Mengedit Halaman Layanan

**File:** `client/src/pages/Layanan.tsx`

### 1. Menambah/Edit Layanan Utama

Cari `const services = [` (sekitar baris 15-50):

```tsx
const services = [
  {
    icon: Laptop,
    title: "Instalasi Laptop/PC",  // ← Judul
    description: "Layanan instalasi dan perbaikan...",  // ← Deskripsi pendek
    image: "/images/service-installation.png",
    features: [  // ← Daftar fitur (bisa tambah/kurangi)
      "Instalasi sistem operasi (Windows, Linux)",
      "Upgrade RAM, SSD, dan hardware lainnya",
      "Pembersihan dan maintenance rutin",
      // Tambah fitur baru di sini
      "Fitur baru Anda",
    ],
  },
  // Untuk menambah layanan baru, copy paste block di atas
];
```

### 2. Mengedit Layanan Tambahan

Cari `const additionalServices = [` (sekitar baris 52-70):

```tsx
const additionalServices = [
  {
    icon: Wrench,
    title: "Maintenance & Support",  // ← Edit judul
    description: "Pemeliharaan berkala...",  // ← Edit deskripsi
  },
  // Tambah layanan tambahan baru di sini
];
```

---

## 📍 Mengedit Halaman Tentang

**File:** `client/src/pages/Tentang.tsx`

### 1. Mengubah Deskripsi Perusahaan

Cari bagian `<div className="space-y-4 text-muted-foreground">` (sekitar baris 98-110):

```tsx
<p>
  Barito Solution adalah penyedia layanan teknologi...  {/* ← EDIT INI */}
</p>
<p>
  Dengan pengalaman dan keahlian...  {/* ← EDIT INI */}
</p>
```

### 2. Mengubah Jam Operasional

Cari `const workingHours = [` (sekitar baris 45-49):

```tsx
const workingHours = [
  { day: "Senin - Jumat", hours: "09:00 - 17:00" },  // ← Edit jam
  { day: "Sabtu", hours: "09:00 - 15:00" },
  { day: "Minggu", hours: "Tutup" },
  // Tambah hari lain jika perlu
];
```

### 3. Mengubah Lokasi Peta

Cari bagian `const businessLocation = {` (sekitar baris 17-20):

```tsx
const businessLocation = {
  lat: -0.959743,    // ← Latitude lokasi Anda
  lng: 114.905878,   // ← Longitude lokasi Anda
};
```

**Cara mendapat koordinat:**
1. Buka Google Maps
2. Klik kanan di lokasi Anda
3. Pilih koordinat yang muncul (akan otomatis copy)
4. Paste di sini

---

## 📞 Mengubah Informasi Kontak

### Di Navbar (Menu Atas)

**File:** `client/src/components/Navbar.tsx`

Cari bagian button "Hubungi Kami" (sekitar baris 54-60):

```tsx
<a href="https://wa.me/6283160077367" ...>  {/* ← Ganti nomor WA */}
  Hubungi Kami
</a>
```

### Di Footer (Bagian Bawah)

**File:** `client/src/components/Footer.tsx`

Cari bagian Contact (sekitar baris 56-90):

```tsx
<a href="https://wa.me/6283160077367" ...>  {/* ← Nomor WhatsApp */}
  <Phone size={18} />
  <span>083160077367</span>  {/* ← Tampilan nomor */}
</a>

<a href="https://instagram.com/barito.solution" ...>  {/* ← Username IG */}
  <Instagram size={18} />
  <span>@barito.solution</span>  {/* ← Tampilan username */}
</a>

<a href="https://baritosol.my.id" ...>  {/* ← Website */}
  <Mail size={18} />
  <span>baritosol.my.id</span>  {/* ← Tampilan website */}
</a>
```

### Di Halaman Tentang

**File:** `client/src/pages/Tentang.tsx`

Cari `const contactInfo = [` (sekitar baris 32-44):

```tsx
const contactInfo = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "083160077367",  // ← Nomor yang ditampilkan
    link: "https://wa.me/6283160077367",  // ← Link WhatsApp
  },
  // ... edit yang lain dengan format sama
];
```

---

## 🖼️ Mengganti Gambar

### 1. Mengganti Logo

1. Siapkan logo baru Anda (format JPG/PNG)
2. Rename menjadi `logo.jpg`
3. Replace file di `client/public/images/logo.jpg`

### 2. Mengganti Gambar Layanan

Gambar layanan ada di `client/public/images/`:
- `service-installation.png` - Gambar instalasi laptop/PC
- `service-software.png` - Gambar instalasi aplikasi
- `service-website.png` - Gambar pembuatan website

**Cara ganti:**
1. Siapkan gambar baru (ukuran persegi 1:1 lebih bagus)
2. Rename sesuai nama file yang mau diganti
3. Replace file lama dengan file baru

### 3. Mengganti Background Hero

Background hero ada di `client/public/images/hero-bg.png`

**Cara ganti:**
1. Siapkan gambar landscape (16:9 atau 21:9)
2. Rename menjadi `hero-bg.png`
3. Replace file yang ada

---

## 🔄 Cara Build Ulang Setelah Edit

Setelah edit file, Anda perlu build ulang untuk upload ke Netlify:

### 1. Buka Terminal/Command Prompt

```bash
cd /path/ke/barito-solution
```

### 2. Install Dependencies (hanya sekali pertama kali)

```bash
pnpm install
```

### 3. Build Website

```bash
pnpm run build
```

### 4. Hasil Build

File siap upload ada di folder `dist/public/`

### 5. Upload ke Netlify

- Buka https://app.netlify.com/drop
- Drag & drop folder `dist/public`
- Tunggu selesai

---

## ⚠️ Tips Penting

### 1. Backup Sebelum Edit
Selalu backup file sebelum edit, copy paste file asli dengan nama berbeda.

### 2. Edit Sedikit-Sedikit
Jangan edit banyak sekaligus. Edit 1-2 hal, test, baru lanjut.

### 3. Perhatikan Tanda Kutip dan Koma
```tsx
// ✅ BENAR
{ title: "Judul", description: "Deskripsi" },

// ❌ SALAH - kurang koma
{ title: "Judul" description: "Deskripsi" }

// ❌ SALAH - kutip tidak match
{ title: "Judul', description: "Deskripsi" }
```

### 4. Jangan Hapus Bagian Kode
Hanya edit teks di dalam tanda kutip `"..."`, jangan hapus:
- `className=`
- `const`
- `{` dan `}`
- Tag HTML seperti `<div>`, `<p>`, dll

### 5. Test di Local Dulu (Opsional)

Sebelum upload ke Netlify, test dulu di komputer:

```bash
pnpm run dev
```

Buka browser: `http://localhost:3000`

---

## 🆘 Troubleshooting

### Error saat Build

**"Cannot find module..."**
→ Jalankan: `pnpm install`

**"Unexpected token..."**
→ Ada kesalahan syntax, cek tanda kutip, koma, kurung

**"Module parse failed..."**
→ Ada karakter aneh, cek copy-paste dari Word/PDF

### Website Tidak Update

1. Clear cache browser (Ctrl+Shift+Delete)
2. Hard refresh (Ctrl+F5)
3. Tunggu 5-10 menit untuk Netlify update

### Gambar Tidak Muncul

1. Cek nama file sama persis dengan yang di kode
2. Cek file ada di folder `client/public/images/`
3. Cek huruf besar/kecil (case-sensitive)

---

## 📚 Referensi Tambahan

### Belajar Edit Lebih Lanjut

- **React Basics**: https://react.dev/learn
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Lucide Icons**: https://lucide.dev/icons/

### Tools yang Berguna

- **VS Code**: Editor kode terbaik (gratis)
- **Node.js**: Harus diinstall untuk build (https://nodejs.org)
- **PNPM**: Package manager (install: `npm install -g pnpm`)

---

## 💡 Contoh Edit Lengkap

### Menambah Layanan Baru "Instalasi CCTV"

**1. Edit `client/src/pages/Layanan.tsx`**

Tambahkan di array `services`:

```tsx
{
  icon: Camera,  // Jangan lupa import Camera dari lucide-react
  title: "Instalasi CCTV",
  description: "Pemasangan dan konfigurasi sistem CCTV profesional",
  image: "/images/service-cctv.png",
  features: [
    "Pemasangan kamera CCTV indoor/outdoor",
    "Konfigurasi DVR/NVR",
    "Remote viewing via smartphone",
    "Maintenance dan support",
  ],
},
```

**2. Tambah import icon Camera**

Di baris paling atas file `Layanan.tsx`:

```tsx
import { Check, Laptop, Package, Globe, Wrench, Code, Smartphone, Camera } from "lucide-react";
//                                                                  ^^^^^^ tambah ini
```

**3. Tambah gambar**

Siapkan gambar `service-cctv.png` dan taruh di `client/public/images/`

**4. Build dan Upload**

```bash
pnpm run build
# Upload folder dist/public ke Netlify
```

---

**Selamat mengedit! Jika ada pertanyaan, jangan ragu untuk bertanya.** 🚀
