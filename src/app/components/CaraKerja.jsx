import { langkah } from "@/data/konten";
import "./CaraKerja.css";

export default function CaraKerja() {
  return (
    <section id="cara-kerja" className="seksi putih">
      <div className="wrap">
        <div className="judul-seksi">
          <h2>Dari daftar karyawan ke absen pertama.</h2>
          <p>
            Tidak perlu alat khusus. Tiga langkah, semuanya dari ponsel dan
            komputer yang sudah ada.
          </p>
        </div>
        <ol className="langkah">
          {langkah.map((l, i) => (
            <li key={l.judul}>
              <span className="nomor">{i + 1}</span>
              <h3>{l.judul}</h3>
              <p>{l.teks}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
