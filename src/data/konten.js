// Isi statis landing page. Kalau nanti mau dibuat dinamis, pindahkan ke API.
export const fitur = [
  {
    id: "absensi",
    nama: "Absensi",
    judul: "Absen dari ponsel, lokasi terverifikasi.",
    deskripsi:
      "Karyawan clock-in dengan selfie dan GPS. Atasan melihat siapa hadir, terlambat, atau di luar radius secara langsung.",
    poin: [
      "Clock-in dan clock-out satu ketukan",
      "Selfie dicocokkan dengan foto referensi",
      "Radius GPS per lokasi kerja",
      "Rekap hadir dan terlambat real-time",
    ],
    contoh: {
      judul: "Rekap hari ini",
      baris: [
        ["Sari Wulandari", "07:58", "Hadir", "ok"],
        ["Rudi Hartono", "08:19", "Terlambat", "warn"],
        ["Nadia Putri", "08:05", "Di luar radius", "bad"],
      ],
    },
  },
  {
    id: "gaji",
    nama: "Gaji",
    judul: "Slip gaji terhitung sendiri dari data absensi.",
    deskripsi:
      "Gaji pokok, tunjangan, lembur, dan potongan dihitung otomatis dari kehadiran nyata, lalu dikirim sebagai slip digital.",
    poin: [
      "Hitung dari jam dan hari hadir",
      "Lembur dan tunjangan otomatis",
      "Potongan BPJS dan pajak",
      "Slip gaji digital untuk karyawan",
    ],
    contoh: {
      judul: "Slip Oktober 2026",
      baris: [
        ["Gaji pokok", "Rp 4.500.000", "Tetap", "info"],
        ["Lembur 4 jam", "Rp 156.000", "Disetujui", "ok"],
        ["Diterima", "Rp 4.476.000", "Siap dibayar", "ok"],
      ],
    },
  },
  {
    id: "exam",
    nama: "Exam",
    judul: "Kuis dan uji kompetensi langsung dari sistem.",
    deskripsi:
      "Buat kuis briefing, uji kompetensi, atau tes rekrutmen. Nilai masuk otomatis ke profil karyawan.",
    poin: [
      "Soal pilihan ganda dengan timer",
      "Briefing SOP harian",
      "Nilai tersimpan di profil",
      "Cocok untuk tes calon karyawan",
    ],
    contoh: {
      judul: "Daftar ujian",
      baris: [
        ["Kuis K3 dasar", "10 soal", "Lulus 90", "ok"],
        ["Briefing SOP harian", "5 soal", "Menunggu", "warn"],
        ["Uji kompetensi", "20 soal", "Belum mulai", "info"],
      ],
    },
  },
  {
    id: "library",
    nama: "Library",
    judul: "Semua dokumen perusahaan di satu rak.",
    deskripsi:
      "Peraturan, SOP, dan materi pelatihan tersimpan rapi dan bisa dicari. Karyawan selalu membuka versi terbaru.",
    poin: [
      "Arsip peraturan dan surat edaran",
      "SOP yang bisa dicari cepat",
      "Materi pelatihan dan e-learning",
      "Penanda dokumen yang sudah dibaca",
    ],
    contoh: {
      judul: "Dokumen terbaru",
      baris: [
        ["Peraturan Perusahaan 2026", "PDF · 2,1 MB", "Baru", "ok"],
        ["SOP serah terima shift", "PDF · 0,8 MB", "Dibaca", "info"],
        ["Pelatihan keselamatan", "Video", "Belum", "warn"],
      ],
    },
  },
  {
    id: "perizinan",
    nama: "Perizinan",
    judul: "Cuti dan izin selesai tanpa grup chat.",
    deskripsi:
      "Karyawan mengajukan cuti, izin sakit, atau tukar shift. Persetujuan berjenjang tercatat dan langsung memengaruhi absensi dan gaji.",
    poin: [
      "Pengajuan cuti, sakit, dan tukar shift",
      "Persetujuan berjenjang",
      "Saldo cuti terlihat jelas",
      "Sinkron ke absensi dan gaji",
    ],
    contoh: {
      judul: "Pengajuan masuk",
      baris: [
        ["Cuti tahunan 3 hari", "Dewi", "Menunggu atasan", "warn"],
        ["Izin sakit + surat dokter", "Budi", "Disetujui", "ok"],
        ["Tukar shift 14 Okt", "Andi", "Ditolak", "bad"],
      ],
    },
  },
];

export const keunggulan = [
  {
    judul: "Satu data, lima fitur",
    teks: "Absensi mengisi gaji, izin mengubah absensi. Tidak ada input ganda dan tidak ada angka yang berbeda antar menu.",
  },
  {
    judul: "Dipakai tanpa pelatihan",
    teks: "Tampilan sederhana di ponsel. Karyawan baru bisa absen dan mengajukan izin di hari pertama.",
  },
  {
    judul: "Terukur dan bisa diaudit",
    teks: "Setiap clock-in, persetujuan, dan perubahan gaji punya jejak waktu dan nama yang melakukannya.",
  },
  {
    judul: "Tumbuh bersama tim",
    teks: "Dari 10 karyawan sampai ratusan, dengan banyak lokasi kerja dalam satu akun.",
  },
];

export const langkah = [
  {
    judul: "Impor tim dan lokasi",
    teks: "Unggah daftar karyawan dari Excel, lalu tentukan lokasi kerja dan jam kerjanya.",
  },
  {
    judul: "Atur aturan perusahaan",
    teks: "Isi pola shift, tarif lembur, tunjangan, dan alur persetujuan izin.",
  },
  {
    judul: "Karyawan mulai memakai",
    teks: "Tim membuka aplikasi dari ponsel. Data pertama masuk di hari yang sama.",
  },
];

export const testimoni = [
  {
    nama: "Intan Permata",
    jabatan: "HR Manager, Kopi Lereng",
    teks: "Rekap kehadiran sembilan outlet selesai dalam satu layar. Kami berhenti mengejar laporan manual tiap akhir bulan.",
  },
  {
    nama: "Hendra Wijaya",
    jabatan: "Kepala Operasional, Lintas Kirim",
    teks: "Lembur dan tunjangan sudah ada di slip. Karyawan berhenti menanyakan hitungan gaji ke kami.",
  },
  {
    nama: "Made Arta",
    jabatan: "Kepala Housekeeping, Hotel Senja",
    teks: "Izin dan tukar shift dulu lewat chat dan sering lupa dicatat. Sekarang semuanya tercatat dan jelas statusnya.",
  },
];

export const harga = [
  {
    nama: "Starter",
    batas: "Sampai 50 karyawan",
    bulanan: 15000,
    fitur: [
      "Absensi dan perizinan",
      "Library dokumen",
      "Rekap bulanan",
      "Dukungan WhatsApp",
    ],
  },
  {
    nama: "Bisnis",
    batas: "50 sampai 250 karyawan",
    bulanan: 12000,
    populer: true,
    fitur: [
      "Semua fitur Starter",
      "Gaji dan slip digital",
      "Exam dan kuis",
      "Persetujuan berjenjang",
    ],
  },
  {
    nama: "Enterprise",
    batas: "Di atas 250 karyawan",
    bulanan: null,
    fitur: [
      "Semua fitur Bisnis",
      "Banyak perusahaan dan cabang",
      "Ekspor payroll untuk bank",
      "Pendamping khusus",
    ],
  },
];

export const faq = [
  {
    t: "Apakah karyawan harus memasang aplikasi?",
    j: "Karyawan membuka Takar dari ponsel. Akun dibuat dari daftar karyawan yang kamu impor, jadi tidak perlu daftar satu per satu.",
  },
  {
    t: "Bagaimana kalau data kami masih di Excel?",
    j: "Unggah file Excel atau CSV, lalu sistem membantu mencocokkan kolomnya. Kamu bisa menjalankannya berdampingan dengan cara lama selama satu siklus gaji.",
  },
  {
    t: "Apakah gaji dihitung otomatis?",
    j: "Ya. Gaji pokok, lembur, tunjangan, dan potongan dihitung dari data absensi dan izin yang sudah disetujui.",
  },
  {
    t: "Bagaimana keamanan datanya?",
    j: "Akses dibatasi per peran, data lokasi hanya diambil saat karyawan absen, dan setiap perubahan penting tercatat.",
  },
  {
    t: "Berapa lama sampai bisa dipakai?",
    j: "Untuk satu lokasi biasanya cukup satu sampai dua hari, termasuk impor karyawan dan pengaturan shift.",
  },
];
