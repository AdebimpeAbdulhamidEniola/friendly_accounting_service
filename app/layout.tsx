import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";
import "./globals.css";
import {workSans} from "@/font";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noble Finances - Professional Accounting & Tax Services Built by Abdulhamid Eniola Adebimpe",
  description: "Trusted financial guidance for individuals and small businesses since 1987. Expert tax preparation, bookkeeping, and accounting services."
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
