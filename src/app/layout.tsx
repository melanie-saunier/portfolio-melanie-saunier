

import "./globals.css";
import { ToastContainer } from "react-toastify";
import Nav from "@/components/Nav";
import { Metadata } from "next";

export const metadata : Metadata = {
  title: "Mon Portfolio",
  description: "Portfolio de Mélanie Saunier, développeuse web fullstack",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="fr">

      <body>
        <div className="bg-[url('/images/background.png')] bg-cover min-h-screen p-4">

            <Nav />
            <ToastContainer />
            
              {children}
            
        </div>
      </body>
    </html>
  );
}
