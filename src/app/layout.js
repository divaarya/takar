import { Familjen_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { getSite } from "@/lib/getSite";

const sans = Familjen_Grotesk({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export async function generateMetadata() {
  const site = await getSite();
  const { metaTitle: title, metaDescription: description, ogImage } = site.seo;
  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    ),
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "id_ID",
      siteName: site.nama,
      // Kalau admin panel mengirim gambar, pakai itu. Kalau kosong, otomatis
      // memakai app/opengraph-image.js.
      ...(ogImage ? { images: [ogImage] } : {}),
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function RootLayout({ children }) {
  const site = await getSite();
  return (
    <html
      lang="id"
      className={`${sans.variable} ${mono.variable}`}
      style={{ "--utama": site.warnaUtama, "--aksen": site.warnaAksen }}
    >
      <body>{children}</body>
    </html>
  );
}
