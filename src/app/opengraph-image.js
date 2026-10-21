import { ImageResponse } from "next/og";
import { getSite } from "@/lib/getSite";

export const alt = "Gambar pratinjau situs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Gambar Open Graph dibuat otomatis dari data situs (nama, judul, warna).
export default async function Image() {
  const s = await getSite();
  const ink = s.warnaAksen;
  const rows = [
    ["Hadir hari ini", "128"],
    ["Izin menunggu", "7"],
    ["Gaji bulan ini", "Siap"],
  ];
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 56,
        background: "#f6f8fb",
        color: ink,
        backgroundImage:
          "linear-gradient(#d5dde8 2px, transparent 2px), linear-gradient(90deg, #d5dde8 2px, transparent 2px)",
        backgroundSize: "48px 48px",
        border: `10px solid ${ink}`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            width: 44,
            height: 44,
            background: s.warnaUtama,
            border: `4px solid ${ink}`,
            display: "flex",
          }}
        />
        <div style={{ fontSize: 42, fontWeight: 700, display: "flex" }}>
          {s.nama}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: 40,
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", maxWidth: 640 }}
        >
          <div
            style={{
              fontSize: 84,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: -3,
              display: "flex",
            }}
          >
            {s.heroJudul}
          </div>
          <div
            style={{
              fontSize: 26,
              marginTop: 20,
              color: "#586273",
              display: "flex",
            }}
          >
            Absensi, gaji, exam, library, dan perizinan.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 360,
            background: "#fff",
            border: `4px solid ${ink}`,
          }}
        >
          {rows.map(([a, b], i) => (
            <div
              key={a}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "14px 20px",
                fontSize: 26,
                borderTop: i ? `2px solid ${ink}` : "none",
              }}
            >
              <div style={{ display: "flex" }}>{a}</div>
              <div
                style={{
                  display: "flex",
                  fontWeight: 800,
                  color: i === 2 ? s.warnaUtama : ink,
                }}
              >
                {b}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>,
    size,
  );
}
