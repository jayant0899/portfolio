import type { Metadata, Viewport } from "next";
import "./globals.css";

import { geistMono, geistSans, jetbrainsMono } from "@/lib/fonts";
import { RootProviders } from "./providers";
import { siteConfig } from "@/config/site-config";
import { userConfig } from "@/config/user-config";

export const viewport: Viewport = {
  themeColor: "#04060D",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: userConfig.keywords,
  authors: [
    {
      name: userConfig.displayName,
      url: siteConfig.url,
    },
  ],
  creator: userConfig.displayName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: `@${userConfig.twitter.split("/").pop()}`,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${jetbrainsMono.variable} scroll-smooth`} 
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative text-WHITE_PURE selection:bg-primary`}
      >
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
}