import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import SmoothScroll from "@/app/components/SmoothScroll";
import CustomCursor from "@/app/components/CustomCursor";
import RouteKey from "@/app/components/RouteKey";
import ScrollProgress from "@/app/components/ScrollProgress";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: '--font-plex',
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Peter Williams-Key — IT Support & Infrastructure",
  description: "IT support professional based in Wales, UK. Strong home lab background, CompTIA Network+ in progress, and a genuine interest in keeping systems running.",
  keywords: ["IT Support", "Service Desk", "Infrastructure", "Docker", "Linux", "Proxmox", "Home Lab", "Wales", "CompTIA"],
  authors: [{ name: "Peter Williams-Key" }],
  creator: "Peter Williams-Key",
  metadataBase: new URL("https://peterkey.dev"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Peter Williams-Key — IT Support & Infrastructure",
    description: "IT support professional based in Wales, UK. Strong home lab background, CompTIA Network+ in progress, and a genuine interest in keeping systems running.",
    url: "https://peterkey.dev",
    siteName: "Peter Williams-Key",
    locale: "en_GB",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Peter Williams-Key — IT Support & Infrastructure" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peter Williams-Key — IT Support & Infrastructure",
    description: "IT support professional based in Wales, UK. Strong home lab background, CompTIA Network+ in progress, and a genuine interest in keeping systems running.",
    creator: "@peterkey",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0E1512" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Fontshare — Clash Display (headings). Body is IBM Plex Sans, self-hosted via next/font. */}
        {/* crossOrigin required so the preconnected socket can be reused for CORS font fetches */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        {/* Preload the CSS so @font-face declarations are parsed sooner, starting font fetches earlier */}
        <link rel="preload" as="style" href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
        />
      </head>
      <body
        className={`${ibmPlexMono.variable} ${ibmPlexSans.variable} bg-base text-text`}
        suppressHydrationWarning={true}
      >
        <SmoothScroll>
          <ScrollProgress />
          <CustomCursor />
          <RouteKey>{children}</RouteKey>
        </SmoothScroll>
      </body>
    </html>
  );
}
