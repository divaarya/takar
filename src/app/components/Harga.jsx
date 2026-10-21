"use client";
import { useState } from "react";
import { Check } from "lucide-react";
import { harga } from "@/data/konten";
import "./Harga.css";

const rp = (n) => "Rp " + n.toLocaleString("id-ID");

export default function Harga({ wa }) {
  const [tahunan, setTahunan] = useState(false);
  return (
    <section id="harga" className="seksi putih">
      <div className="wrap">
        <div className="judul-seksi">
          <h2>Bayar per karyawan aktif.</h2>
          <p>
            Tanpa biaya pemasangan. Harga ilustratif, hubungi kami untuk
            penawaran sesuai jumlah tim.
          </p>
        </div>
        <div className="periode" role="group" aria-label="Periode tagihan">
          <button aria-pressed={!tahunan} onClick={() => setTahunan(false)}>
            Bulanan
          </button>
          <button aria-pressed={tahunan} onClick={() => setTahunan(true)}>
            Tahunan, gratis 2 bulan
          </button>
        </div>
        <div className="paket">
          {harga.map((p) => (
            <div key={p.nama} className={p.populer ? "kartu populer" : "kartu"}>
              {p.populer && (
                <span className="lencana mono">Paling dipilih</span>
              )}
              <h3>{p.nama}</h3>
              <p className="batas">{p.batas}</p>
              <p className="angka">
                {p.bulanan
                  ? rp(
                      tahunan
                        ? Math.round((p.bulanan * 10) / 12 / 100) * 100
                        : p.bulanan,
                    )
                  : "Hubungi kami"}
                {p.bulanan && <small> / karyawan / bulan</small>}
              </p>
              <ul>
                {p.fitur.map((f) => (
                  <li key={f}>
                    <Check size={18} strokeWidth={3} /> {f}
                  </li>
                ))}
              </ul>
              <a
                className={p.populer ? "btn utama" : "btn"}
                href={wa}
                target="_blank"
                rel="noreferrer"
              >
                Minta demo {p.nama}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
