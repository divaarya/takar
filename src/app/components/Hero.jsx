import "./Hero.css";

export default function Hero({ site, wa }) {
  return (
    <section className="hero">
      <div className="wrap">
        <h1>{site.heroJudul}</h1>
        <div className="hero-bawah">
          <div>
            <p className="hero-desk">{site.heroDeskripsi}</p>
            <div className="hero-aksi">
              <a
                className="btn utama"
                href={wa}
                target="_blank"
                rel="noreferrer"
              >
                {site.ctaTeks}
              </a>
              <a className="btn" href="#fitur">
                Lihat lima fitur
              </a>
            </div>
          </div>
          <div className="blok" aria-label="Contoh ringkasan hari ini">
            <div className="blok-kepala mono">
              <span>{site.nama}</span>
              <span>Ringkasan hari ini</span>
            </div>
            <div className="blok-baris">
              <span>Hadir</span>
              <b>128 / 134</b>
              <div className="meter">
                <i />
              </div>
            </div>
            <div className="blok-baris">
              <span>Izin menunggu</span>
              <b>7</b>
            </div>
            <div className="blok-baris">
              <span>Gaji bulan ini</span>
              <b className="siap">Siap dibayar</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
