# DOKB V2.3 — Design System

**Arah visual:** Modern Institutional — Barito × Meratus.

## 1. Prinsip desain
- **Institusional:** resmi, kredibel, tertib, tidak bergaya komunitas nongkrong.
- **Modern:** bersih, lapang, rounded card, hierarchy jelas.
- **Banua identity:** Barito dan Meratus menjadi identitas visual, bukan ornamen berlebihan.
- **Regulatory-first:** halaman legalitas, regulasi, advokasi, transparansi harus terasa paling terpercaya.
- **Mobile-first:** mayoritas anggota mengakses dari ponsel.

## 2. Warna
- Navy 950 `#07111f` — fondasi identitas.
- Navy 900 `#0b1b31` — header/footer/hero.
- Blue 700 `#1558a6` — primary action.
- Blue 600 `#1f6fc4` — link dan aksen.
- Cyan 500 `#20a9c7` — aksen digital.
- Teal 500 `#1d9b8a` — program/keberlanjutan.
- Red 600 `#c62828` — hanya aksen identitas/peringatan, bukan warna dominan.
- Gold 500 `#d8a62b` — penanda khusus.
- Slate — teks, border, dan background netral.

## 3. Tipografi
Font utama: **Inter**, fallback system sans-serif.
- H1: 32–54px, weight 800.
- H2: 25–36px, weight 800.
- H3: 19px, weight 750.
- Body: 16px / 1.65.
- Small/meta: 14px.
- Eyebrow: 12px, uppercase, letter-spacing 0.12em.

## 4. Spacing
Basis 4px. Gunakan token `--dokb-space-*` daripada angka acak.

## 5. Komponen wajib
1. **Page Hero** — judul halaman + konteks singkat.
2. **Card** — informasi/program/berita.
3. **Button** — primary, secondary, danger, ghost.
4. **Badge** — status legalitas/program/data.
5. **Stat** — angka kunci organisasi.
6. **Callout** — catatan regulasi/peringatan/poin penting.
7. **Table** — regulasi, data, tarif, transparansi.
8. **Form** — formulir kontak/pelaporan/keanggotaan.
9. **Identity Grid** — status, sifat, fokus, wilayah.
10. **Media Card** — publikasi dan dokumentasi.

## 6. Aturan halaman
### Legalitas
Gunakan page hero biru-navy, identity grid, kartu dokumen, dan tabel informasi. Hindari efek visual berlebihan.

### Regulasi
Prioritaskan tabel, badge status, callout dasar hukum, dan tombol menuju dokumen. Informasi harus mudah dipindai.

### Advokasi
Gunakan timeline/status card. Bahasa visual tegas tetapi tidak agresif. Hindari dominasi warna merah.

### Program
Gunakan card grid 3 kolom desktop / 1 kolom mobile. Setiap program memiliki tujuan, manfaat, status, dan CTA.

### Keanggotaan
Fokus pada alur: **Kenali → Daftar → Verifikasi → Aktif**. CTA utama harus jelas.

### Transparansi
Gunakan stat + tabel + dokumen. Prioritaskan keterbacaan data daripada dekorasi.

### Publikasi
Gunakan media card dengan metadata tanggal/kategori/platform.

### Kontak
Gunakan dua kolom desktop: informasi sekretariat + formulir. Di mobile menjadi satu kolom.

## 7. Tone visual
**Tegas, bersih, profesional, Banua, terpercaya.**

Jangan menggunakan:
- neon berlebihan,
- gradient startup yang terlalu mencolok,
- animasi berat,
- ikon berlebihan,
- layout yang menyerupai aplikasi transportasi.

## 8. Responsive breakpoints
- Desktop: > 900px
- Tablet: 620–900px
- Mobile: < 620px

## 9. Asset rule
- Logo utama halaman: `/logo-dokb-bulat.png`.
- Jangan menghapus `/logo-dokb.png` sampai seluruh halaman selesai dimigrasikan.
- Foto hero Barito/Meratus sebaiknya kelak disimpan lokal di repository untuk performa dan reliabilitas.

## 10. Urutan implementasi V2.3
1. Homepage — selesai.
2. Shared header/footer dan design tokens — ini paketnya.
3. Legalitas + Tentang.
4. Regulasi + Advokasi.
5. Program + Keanggotaan.
6. Publikasi + Transparansi.
7. Kontak + Privacy + Terms.
8. Mobile QA, SEO, accessibility, performance.
