import { testimoni } from "@/data/konten";
import "./Testimoni.css";

export default function Testimoni() {
  return (
    <section id="testimoni" className="seksi">
      <div className="wrap">
        <div className="judul-seksi">
          <h2>Kata tim yang berganti shift tiap hari.</h2>
          <p>
            Nama bisnis dan persona di bawah ini ilustratif untuk keperluan
            tampilan.
          </p>
        </div>
        <div className="kutipan">
          {testimoni.map((t) => (
            <figure key={t.nama}>
              <blockquote>“{t.teks}”</blockquote>
              <figcaption>
                <b>{t.nama}</b>
                <span className="mono">{t.jabatan}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
