import { keunggulan } from "@/data/konten";
import "./Keunggulan.css";

export default function Keunggulan() {
  return (
    <section id="keunggulan" className="seksi">
      <div className="wrap">
        <div className="judul-seksi">
          <h2>Dibuat supaya HR tidak lagi menghitung ulang.</h2>
          <p>
            Empat hal yang membuat tim HR dan karyawan sama-sama lebih tenang.
          </p>
        </div>
        <div className="kelebihan">
          {keunggulan.map((k) => (
            <article key={k.judul}>
              <h3>{k.judul}</h3>
              <p>{k.teks}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
