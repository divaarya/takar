import { Mail, MapPin, Phone } from "lucide-react";
import { formatNomor } from "@/lib/whatsapp";
import "./Kontak.css";

export default function Kontak({ site, wa }) {
  return (
    <section id="kontak" className="kontak">
      <div className="wrap kontak-isi">
        <h2>Coba untuk satu lokasi dulu, tanpa komitmen.</h2>
        <div>
          <a className="btn utama" href={wa} target="_blank" rel="noreferrer">
            {site.ctaTeks} lewat WhatsApp
          </a>
          <ul>
            <li>
              <Phone size={18} /> {formatNomor(site.whatsappNomor)}
            </li>
            <li>
              <Mail size={18} /> {site.email}
            </li>
            <li>
              <MapPin size={18} /> {site.kota}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
