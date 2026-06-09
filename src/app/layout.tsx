import type { Metadata } from "next";
import { Bai_Jamjuree, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";

// Technical bilingual workhorse — matched Thai + Latin, engineered grotesque.
const baiJamjuree = Bai_Jamjuree({
  variable: "--font-bai-jamjuree",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Mono for annotations, dimension labels, and spec readouts.
const splineMono = Spline_Sans_Mono({
  variable: "--font-spline-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const SITE_URL = "https://eikphaibun.github.io/portforio";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Phaibun Poonmaroeng — Full-Stack & Enterprise Systems Developer",
    template: "%s · Phaibun Poonmaroeng",
  },
  description:
    "Phaibun (Ikkyu) Poonmaroeng builds enterprise systems end to end: NetSuite and Dynamics 365 ERP customization, full-stack web platforms, and offline-first mobile apps. Based in Bangkok.",
  keywords: [
    "Phaibun Poonmaroeng",
    "NetSuite Developer",
    "SuiteScript",
    "Dynamics 365 Business Central",
    "ERP Developer",
    "Full-Stack Developer",
    "React",
    "Flutter",
    "Flask",
    "Bangkok",
  ],
  authors: [{ name: "Phaibun Poonmaroeng" }],
  creator: "Phaibun Poonmaroeng",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "th_TH",
    url: SITE_URL,
    siteName: "Phaibun Poonmaroeng",
    title:
      "Phaibun Poonmaroeng — Full-Stack & Enterprise Systems Developer",
    description:
      "Enterprise systems, end to end: ERP customization, full-stack platforms, and offline-first mobile apps.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Phaibun Poonmaroeng — Full-Stack & Enterprise Systems Developer",
    description:
      "Enterprise systems, end to end: ERP customization, full-stack platforms, and offline-first mobile apps.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${baiJamjuree.variable} ${splineMono.variable} custom-scrollbar antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
