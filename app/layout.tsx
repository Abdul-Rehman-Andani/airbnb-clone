// app/layout.tsx or similar
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import NavBar from "@/components/NavBar";
import "./globals.css";
import ReduxProvider from "@/components/ReduxProvider"; // Import the new client component
import RegisterModel from "@/components/Model/RegisterModel";

const font = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Airbnb",
  description: "welcome to Airbnb",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ReduxProvider>
          <RegisterModel /> 
          <NavBar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
