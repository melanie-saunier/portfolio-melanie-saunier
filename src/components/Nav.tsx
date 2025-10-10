"use client"
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
  return (
            <nav className="text-base font-semibold flex flex-col items-center justify-center p-2">

              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="border-solid border-2 mb-2 p-2 rounded-full hover:bg-[var(--main-text)] hover:text-[var(--bg-box)] duration-300 ease-in w-40 sm:hidden"
              >{isOpen?"Fermer" : "Menu"}</button>
              <div className={`${isOpen ? "flex flex-col items-center gap-2" : "hidden"} sm:flex sm:items-center sm:flex-row`}>
                <Link href="/" className="mx-2 p-2 hover:bg-[var(--main-text)] hover:rounded-full hover:text-[var(--bg-box)] duration-300 ease-in">Accueil</Link>
                <Link href="/about" className="mx-2 p-2 hover:bg-[var(--main-text)] hover:rounded-full hover:text-[var(--bg-box)] duration-300 ease-in">A propos</Link>
                <Link href="/projects" className="mx-2 p-2 hover:bg-[var(--main-text)] hover:rounded-full hover:text-[var(--bg-box)] duration-300 ease-in">Projets</Link>
                <Link href="/skills" className="mx-2 p-2 hover:bg-[var(--main-text)] hover:rounded-full hover:text-[var(--bg-box)] duration-300 ease-in">Skills</Link>
                <Link href="/contact" className="mx-2 border-solid border-2 p-2 rounded-full hover:bg-[var(--main-text)] hover:text-[var(--bg-box)] duration-300 ease-in" >Contact</Link>
              </div>
            </nav>
  );
}