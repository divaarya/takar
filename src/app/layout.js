import { Familjen_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { getSite } from "@/lib/getSite";

const sans = Familjen_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export async function generateMetadata() {
  const site = await getSite();

  const { metaTitle: title, metaDescription: description, ogImage } = site.seo;

  // Gunakan domain publik saat deployment di Vercel.
  const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || "https://takar-azure.vercel.app"
  ).replace(/\/+$/, "");

  // Gunakan gambar dari admin jika tersedia.
  // Jika tidak, gunakan gambar OG bawaan Next.js.
  const imageUrl = ogImage
    ? /^https?:\/\//i.test(ogImage)
      ? ogImage
      : `${siteUrl}${ogImage.startsWith("/") ? "" : "/"}${ogImage}`
    : `${siteUrl}/opengraph-image`;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,

    openGraph: {
      title,
      description,
      type: "website",
      locale: "id_ID",
      siteName: site.nama,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `Gambar pratinjau ${site.nama}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function RootLayout({ children }) {
  const site = await getSite();

  return (
    <html
      lang="id"
      className={`${sans.variable} ${mono.variable}`}
      style={{
        "--utama": site.warnaUtama,
        "--aksen": site.warnaAksen,
      }}
    >
      <body>{children}</body>
    </html>
  );
}
