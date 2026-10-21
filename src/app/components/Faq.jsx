import { MessageCircle } from "lucide-react";
import { faq } from "@/data/konten";
import "./Faq.css";

export default function Faq({ wa }) {
  return (
    <section id="faq" className="seksi">
      <div className="wrap faq-grid">
        <div className="faq-kiri">
          <h2>Pertanyaan yang sering muncul.</h2>
          <p className="faq-desk">
            Jawaban singkat untuk hal yang biasanya ditanyakan HR sebelum mulai memakai.
          </p>
          <div className="faq-tanya">
            <b>Belum ketemu jawabannya?</b>
            <p>Tanyakan langsung ke tim kami lewat WhatsApp.</p>
            <a className="btn utama" href={wa} target="_blank" rel="noreferrer">
              <MessageCircle size={18} /> Tanya lewat WhatsApp
            </a>
          </div>
        </div>
        <div>
          {faq.map((x, i) => (
            <details key={x.t} open={i === 0}>
              <summary>{x.t}</summary>
              <p>{x.j}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}