"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import { ToastContainer } from "react-toastify";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="fr">
      <body>
        <div className="bg-[url('/images/background.png')] bg-cover min-h-screen p-4">
            <nav className="text-base font-semibold flex flex-col items-center justify-center p-2">

              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="border-solid border-2 mb-2 p-2 rounded-full hover:bg-[var(--main-text)] hover:text-[var(--bg-box)] duration-300 ease-in w-40 sm:hidden"
              >{isOpen?"Fermer" : "Menu"}</button>
              <div className={`${isOpen ? "flex flex-col items-center gap-2" : "hidden"} sm:flex sm:items-center sm:flex-row`}>
                <a href="/" className="mx-2 p-2 hover:bg-[var(--main-text)] hover:rounded-full hover:text-[var(--bg-box)] duration-300 ease-in">Accueil</a>
                <a href="/about" className="mx-2 p-2 hover:bg-[var(--main-text)] hover:rounded-full hover:text-[var(--bg-box)] duration-300 ease-in">A propos</a>
                <a href="/projects" className="mx-2 p-2 hover:bg-[var(--main-text)] hover:rounded-full hover:text-[var(--bg-box)] duration-300 ease-in">Projets</a>
                <a href="/skills" className="mx-2 p-2 hover:bg-[var(--main-text)] hover:rounded-full hover:text-[var(--bg-box)] duration-300 ease-in">Skills</a>
                <a href="/contact" className="mx-2 border-solid border-2 p-2 rounded-full hover:bg-[var(--main-text)] hover:text-[var(--bg-box)] duration-300 ease-in" >Contact</a>
              </div>
            </nav>
            <ToastContainer />
            
              {children}
            
        </div>
      </body>
    </html>
  );
}
