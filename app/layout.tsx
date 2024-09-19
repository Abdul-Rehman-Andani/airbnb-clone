import type { Metadata } from "next";
import { Nunito } from 'next/font/google';
import NavBar from "@/components/NavBar";
import "./globals.css";

const font = Nunito({
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: "Airbnb",
  description: "welcome to Airbnb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
