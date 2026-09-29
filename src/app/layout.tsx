import type { Metadata } from "next";
import { Geist, Geist_Mono, Spectral } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "Md Sadik Hasan - Full-Stack Web Developer",
  description:
    "Experienced full-stack web developer specializing in Node.js, React.js, Next.js, and modern web technologies. Creating innovative solutions across diverse industries.",
  keywords: [
    "Full-Stack Developer",
    "Web Developer",
    "Node.js",
    "React.js",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
  ],
  authors: [{ name: "Md Sadik Hasan" }],
  creator: "Md Sadik Hasan",
  openGraph: {
    title: "Md Sadik Hasan - Full-Stack Web Developer",
    description:
      "Crafting innovative digital solutions that drive business growth and enhance user experiences",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Sadik Hasan - Full-Stack Web Developer",
    description:
      "Crafting innovative digital solutions that drive business growth and enhance user experiences",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spectral.variable} antialiased`}
      >
        {children}
      </body>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-51HK2PWXB6"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-51HK2PWXB6');
        `}
      </Script>
    </html>
  );
}
