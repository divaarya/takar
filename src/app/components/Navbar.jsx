"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const links = [
  ["Fitur", "#fitur"],
  ["Keunggulan", "#keunggulan"],
  ["Cara kerja", "#cara-kerja"],
  ["Harga", "#harga"],
  ["Tanya jawab", "#faq"],
  ["Kontak", "#kontak"],
];

export default function Navbar({ nama, wa, cta }) {
  const [buka, setBuka] = useState(false);
  return (
    <header className="navbar">
      <div className="wrap navbar-isi">
        <a href="#" className="logo" aria-label={nama}>
          <span className="logo-kotak" aria-hidden="true" />
          {nama}
        </a>
        <nav className={buka ? "menu buka" : "menu"} aria-label="Menu utama">
          {links.map(([t, h]) => (
            <a key={h} href={h} onClick={() => setBuka(false)}>
              {t}
            </a>
          ))}
        </nav>
        <a
          className="btn utama navbar-cta"
          href={wa}
          target="_blank"
          rel="noreferrer"
        >
          {cta}
        </a>
        <button
          className="toggle"
          onClick={() => setBuka(!buka)}
          aria-label="Buka menu"
          aria-expanded={buka}
        >
          {buka ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
