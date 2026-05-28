import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Lub Run Enterprises | Printing, Branding & Corporate Uniforms",
    template: "%s | Lub Run Enterprises",
  },
  description:
    "Lub Run Enterprises provides professional printing, branding, corporate uniforms, promotional products, banners, signage, and bulk printing services in Dar es Salaam, Tanzania.",
  keywords: [
    "Lub Run Enterprises",
    "printing Tanzania",
    "printing Dar es Salaam",
    "branding company Tanzania",
    "corporate uniforms Tanzania",
    "t-shirt printing Tanzania",
    "bulk printing Tanzania",
    "promotional products Tanzania",
    "banner printing Tanzania",
    "signage Tanzania",
  ],
  authors: [{ name: "Lub Run Enterprises" }],
  creator: "Lub Run Enterprises",
  publisher: "Lub Run Enterprises",
  metadataBase: new URL("https://lubrun-website-ozvi.vercel.app"),
  openGraph: {
    title: "Lub Run Enterprises | Printing, Branding & Corporate Uniforms",
    description:
      "Professional printing, branding, corporate uniforms, promotional products, banners, signage, and bulk printing services in Dar es Salaam, Tanzania.",
    url: "https://lubrun-website-ozvi.vercel.app",
    siteName: "Lub Run Enterprises",
    locale: "en_TZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lub Run Enterprises | Printing, Branding & Corporate Uniforms",
    description:
      "Professional printing, branding, corporate uniforms, promotional products, banners, signage, and bulk printing services in Tanzania.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-white text-gray-900">{children}</body>
    </html>
  );
}
