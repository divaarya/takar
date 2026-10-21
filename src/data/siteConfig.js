// Data bawaan. Nanti diganti oleh data dari API admin panel (lewat lib/getSite.js).
export const siteConfig = {
  nama: "Takar",
  warnaUtama: "#ff5a1f",
  warnaAksen: "#14171c",
  heroJudul: "Ukur kerja tim dengan tepat.",
  heroDeskripsi:
    "Takar menyatukan absensi, gaji, exam, library, dan perizinan karyawan dalam satu sistem HRIS yang rapi, terukur, dan mudah dipakai semua orang.",
  ctaTeks: "Minta demo",
  // Nomor asli cukup ditulis di .env.local, bukan di file ini.
  whatsappNomor: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890",
  whatsappPesan:
    "Halo Takar, saya ingin meminta demo sistem HRIS untuk perusahaan kami.",
  email: "halo@takar.gmail",
  kota: "Semarang, Jawa Tengah",
  seo: {
    metaTitle: "Takar - HRIS Absensi, Gaji, Exam, Library, dan Perizinan",
    metaDescription:
      "Kelola absensi, gaji, exam, library, dan perizinan karyawan dalam satu sistem HRIS yang rapi dan terukur.",
    ogImage: "",
  },
};
