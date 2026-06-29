import "./globals.css";
import Navbar from "@/components/Navbar";
import GrassFooter from "@/components/GrassFooter";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: "Learn Rohingya Fonna",
  description: "Learn the Hanifi Rohingya script — alphabets, vowels, numbers, and words. Free offline app.",
  manifest: "/manifest.json",
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
    /*
     * dir="ltr" on <html>: the app shell (navigation, labels, buttons) is
     * English / LTR. All Rohingya Hanifi script elements carry their own
     * dir="rtl" + unicode-bidi:isolate so they render RTL correctly inside
     * the LTR layout without affecting surrounding elements.
     */
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
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        <meta name="google-site-verification" content="-vNXOHJzAJLadGqgV8LjMX5BmcBOz63CISuLHuEp2x4" />
      </head>
      <body className="bg-sky-bg min-h-dvh flex flex-col" dir="ltr">
        <GoogleAnalytics gaId="G-FLVCT8T6PL"/>
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="mt-auto shrink-0">
        <div className="text-center text-xs text-gray-600 py-2">
          © {new Date().getFullYear()} Learn Rohingya Fonna · <a href="https://eduboardrp.netlify.app " target="_blank">EduBoard</a>
        </div>
        <GrassFooter/>
        </footer>
      </body>
    </html>
  );
}