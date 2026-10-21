import { formatNomor } from "@/lib/whatsapp";
import "./Footer.css";

const modul = [
  "Modul Absensi & GPS",
  "Modul Gaji & Slip Digital",
  "Modul Exam & Kuis",
  "Modul Library & SOP",
  "Modul Perizinan & Cuti",
];

const perusahaan = [
  ["Keunggulan", "#keunggulan"],
  ["Cara Kerja & Setup", "#cara-kerja"],
  ["Paket & Biaya", "#harga"],
  ["Pusat Tanya Jawab (FAQ)", "#faq"],
];

export default function Footer({ site, wa }) {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-atas">
          <div className="footer-merek">
            <a href="#" className="footer-logo">
              <span className="footer-kotak" aria-hidden="true" />
              {site.nama}
            </a>
            <p>
              Ukur kerja tim dengan tepat. Sistem HRIS untuk absensi, gaji,
              exam, library, dan perizinan karyawan di Indonesia.
            </p>
            <p className="footer-kontak">
              Kontak Tim: <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>

          <nav className="footer-kolom" aria-label="Modul">
            <h3 className="mono">5 Modul Utama</h3>
            <ul>
              {modul.map((m) => (
                <li key={m}>
                  <a href="#fitur">{m}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer-kolom" aria-label="Perusahaan">
            <h3 className="mono">Perusahaan</h3>
            <ul>
              {perusahaan.map(([t, h]) => (
                <li key={h}>
                  <a href={h}>{t}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-kolom">
            <h3 className="mono">Kontak</h3>
            <ul>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={wa} target="_blank" rel="noreferrer">
                  WhatsApp {formatNomor(site.whatsappNomor)}
                </a>
              </li>
              <li>
                <span>{site.kota}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bawah">
          <span>
            © 2026 {site.nama}. Seluruh hak cipta dilindungi undang-undang.
          </span>
          <span>
            Data, harga, dan testimoni pada halaman ini bersifat ilustratif.
          </span>
        </div>
      </div>
    </footer>
  );
}
