import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Peter Williams-Key - IT Support Specialist Portfolio",
  description: "IT Support Specialist specializing in technical troubleshooting, customer service, and system maintenance. Experienced in Windows administration, network support, and CompTIA A+ certified professional.",
  keywords: ["IT Support Specialist", "Help Desk Technician", "Technical Support", "Windows Administration", "Network Troubleshooting", "CompTIA A+", "Customer Service", "System Maintenance"],
  authors: [{ name: "Peter Williams-Key" }],
  creator: "Peter Williams-Key",
  publisher: "Peter Williams-Key",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://your-domain.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Peter Williams-Key - IT Support Specialist Portfolio",
    description: "IT Support Specialist specializing in technical troubleshooting, customer service, and system maintenance. Experienced in Windows administration, network support, and CompTIA A+ certified professional.",
    url: "https://your-domain.com", // Replace with your actual domain
    siteName: "Peter Williams-Key Portfolio",
    images: [
      {
        url: "/images/profile-pic.png",
        width: 1200,
        height: 630,
        alt: "Peter Williams-Key - IT Support Specialist",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peter Williams-Key - IT Support Specialist Portfolio",
    description: "IT Support Specialist specializing in technical troubleshooting, customer service, and system maintenance.",
    images: ["/images/profile-pic.png"],
    creator: "@peterkey", // Replace with your Twitter handle
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
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#06090F" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body 
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-body bg-trueAutumn-dark text-trueAutumn-textDark`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
} 