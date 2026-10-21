"use client";
import { useState } from "react";
import {
  Clock,
  Wallet,
  ClipboardCheck,
  BookOpen,
  CalendarCheck,
  Check,
} from "lucide-react";
import { fitur } from "@/data/konten";
import "./Fitur.css";

const ikon = {
  absensi: Clock,
  gaji: Wallet,
  exam: ClipboardCheck,
  library: BookOpen,
  perizinan: CalendarCheck,
};

export default function Fitur() {
  const [aktif, setAktif] = useState(fitur[0].id);
  const f = fitur.find((x) => x.id === aktif);
  return (
    <section id="fitur" className="seksi putih">
      <div className="wrap">
        <div className="judul-seksi">
          <h2>Lima fitur, satu sumber data.</h2>
          <p>
            Pilih satu fitur untuk melihat contoh tampilannya. Semuanya saling
            terhubung, jadi data hanya dimasukkan sekali.
          </p>
        </div>
        <div className="fitur-grid">
          <div className="tab-daftar" role="tablist" aria-label="Fitur">
            {fitur.map((x) => {
              const Ikon = ikon[x.id];
              return (
                <button
                  key={x.id}
                  role="tab"
                  id={`tab-${x.id}`}
                  aria-selected={aktif === x.id}
                  aria-controls="panel-fitur"
                  className="tab"
                  onClick={() => setAktif(x.id)}
                >
                  <Ikon size={22} /> {x.nama}
                </button>
              );
            })}
          </div>
          <div
            className="panel"
            id="panel-fitur"
            role="tabpanel"
            aria-labelledby={`tab-${f.id}`}
            key={f.id}
          >
            <div>
              <h3>{f.judul}</h3>
              <p className="panel-desk">{f.deskripsi}</p>
              <ul className="poin">
                {f.poin.map((p) => (
                  <li key={p}>
                    <Check size={18} strokeWidth={3} /> {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="contoh">
              <div className="contoh-kepala mono">{f.contoh.judul}</div>
              {f.contoh.baris.map(([a, b, c, tone]) => (
                <div className="contoh-baris" key={a}>
                  <div>
                    <b>{a}</b>
                    <span className="mono">{b}</span>
                  </div>
                  <em className={`tone-${tone}`}>{c}</em>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
