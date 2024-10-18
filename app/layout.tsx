import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import NavBar from "@/components/NavBar";
import "./globals.css";
import ReduxProvider from "@/components/ReduxProvider";
import RegisterModel from "@/components/Model/RegisterModel";
import SignInModel from "@/components/Model/SignInModel";
import { getCurrentUser } from "@/actions/getCurrentUser";

const font = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Airbnb",
  description: "welcome to Airbnb",
};


export default async function RootLayout({children,}: {children: React.ReactNode;}) {

  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ReduxProvider>
          <RegisterModel /> 
          <SignInModel />
          <NavBar currentUser={currentUser}/>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
