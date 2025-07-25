import React from "react";
import { Poppins } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import PWAHandler from "./components/PWAHandler";


const poppins = Poppins(
  {
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  }
);


const metadata = {
  title: "Events App",
  description: "Application mobile pour découvrir et s'inscrire aux événements",
  manifest: "/manifest.json",
  themeColor: "#000000",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Events App",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="manifest" href={metadata.manifest} />
        <meta name="theme-color" content={metadata.themeColor} />
        <meta name="viewport" content={metadata.viewport} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={metadata.appleWebApp.title} />
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body suppressHydrationWarning className={`antialiased ${poppins.className} bg-[#F6F7F8]`}>
        <PWAHandler />
        <div className="min-h-screen flex justify-center bg-gray-100  w-full">
          <div className="w-full max-w-[375px] md:max-w-screen-2xl md:w-full bg-white min-h-screen shadow-lg mx-auto">
            <ClientBody>{children}</ClientBody>
          </div>
        </div>
      </body>
    </html>
  );
}
