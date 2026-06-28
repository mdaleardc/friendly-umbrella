import "./globals.css";
import InstallBanner from "@/components/InstallBanner";
import Navbar from "@/components/Navbar"; // Import the new Navbar component
import ClearStorage from "@/components/ClearStorage";

export const metadata = {
  title: "Learn Rohingya Language",
  description: "Learn the Hanifi Rohingya script — alphabets, vowels, numbers, and words. Free offline app.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Learn Rohingya",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7BB8DC",
};

export default function RootLayout({ children }) {
  return (
    /*
     * dir="ltr" on <html>: the app shell (navigation, labels, buttons) is
     * English / LTR. All Rohingya Hanifi script elements carry their own
     * dir="rtl" + unicode-bidi:isolate so they render RTL correctly inside
     * the LTR layout without affecting surrounding elements.
     */
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Hanifi+Rohingya:wght@400;700&family=Nunito:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
      </head>
      <body className="bg-sky-bg min-h-screen" dir="ltr">
        <ClearStorage/>
        <Navbar />
        <main>{children}</main>
        <InstallBanner />
      </body>
    </html>
  );
}