import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";
import "./globals.css";
import {workSans} from "@/font";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noble Finances - Professional Accounting & Tax Services Built by Abdulhamid Eniola Adebimpe",
  description: "Trusted financial guidance for individuals and small businesses since 1987. Expert tax preparation, bookkeeping, and accounting services.",
  openGraph: {
    title: "Noble Finances - Professional Accounting & Tax Services",
    description: "Trusted financial guidance for individuals and small businesses since 1987. Expert tax preparation, bookkeeping, and accounting services.",
    type: "website",
    locale: "en_US",
    url: "https://noblefinance.vercel.app",
    siteName: "Noble Finances",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Noble Finances - Professional Accounting Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noble Finances - Professional Accounting & Tax Services",
    description: "Trusted financial guidance for individuals and small businesses since 1987. Expert tax preparation, bookkeeping, and accounting services.",
    images: ["/images/og-image.jpg"],
    creator: "@noblefinances",
  },
  other: {
    "article:author": "Abdulhamid Eniola Adebimpe",
    "article:publisher": "Noble Finances",
    "og:site_name": "Noble Finances",
    "fb:app_id": "",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:type": "image/jpeg",
    "og:image:alt": "Noble Finances - Professional Accounting Services",
    "twitter:site": "@noblefinances",
    "twitter:creator": "@noblefinances",
    "twitter:image:alt": "Noble Finances - Professional Accounting Services",
    "whatsapp:title": "Noble Finances - Professional Accounting & Tax Services",
    "whatsapp:description": "Trusted financial guidance for individuals and small businesses since 1987. Expert tax preparation, bookkeeping, and accounting services.",
    "whatsapp:url": "https://noblefinances.com",
    "whatsapp:site": "Noble Finances",
    "whatsapp:image": "/images/og-image.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} bg-background md:bg-background-mobile`}
      >
          <Navigation />
           {children}
           <Footer />
      </body>
    </html>
  );
}
