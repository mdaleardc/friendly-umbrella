import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
//import ClearStorage from "@/components/ClearStorage"

export const metadata = {
  title: "Learn Rohingya Fonna",
  description:
    "Learn the Hanifi Rohingya script — alphabets, vowels, numbers, and words. Free offline app.",
  manifest: "/manifest.json",

  openGraph: {
    title: "Learn Rohingya Fonna",
    description:
      "Learn the Hanifi Rohingya script — alphabets, vowels, numbers, and words. Free offline app.",
    url: "https://rohingyaapp.netlify.app",
    siteName: "Learn Rohingya Fonna",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Learn Rohingya Fonna",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Learn Rohingya Fonna",
    description:
      "Learn the Hanifi Rohingya script — alphabets, vowels, numbers, and words. Free offline app.",
    images: ["/og-image.png"],
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Learn Rohingya Fonna",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2A091B",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" style={{ background: "#d0e8f5" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
       <link
  href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap"
  rel="stylesheet"
/>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="google-site-verification" content="-vNXOHJzAJLadGqgV8LjMX5BmcBOz63CISuLHuEp2x4" />
      </head>
      <body className="bg-sky-bg min-h-dvh flex flex-col" dir="ltr">
        <GoogleAnalytics gaId="G-FLVCT8T6PL"/>
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="mt-auto shrink-0">
        <Footer/>
        </footer>
      </body>
    </html>
  );
}