import "./globals.css";
import {workSans} from "@/font";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className= {workSans.variable}
      >
           {children}
      </body>
    </html>
  );
}
