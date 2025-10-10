"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import { safeParse } from "zod";
import { formSchema } from "@/schemas/formSchema.validation";

export default function Contact() {

  const [userInput, setUserInput] = useState({
    business: "", 
    lastname: "", 
    firstname: "",
    email:"", 
    message: ""
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setUserInput({
      ...userInput,
      [name]: value
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    // input validation :
    const validationSubmit =  formSchema.safeParse(userInput);

    if(!validationSubmit.success) {
      for(const error of validationSubmit.error.issues) {
        toast.error(error.message);
      }
      return;
    }  

    try {
      const emailParams= {
        business: userInput.business || "Non renseigné",
        user_lastname: userInput.lastname,
        user_firstname: userInput.firstname || "Non renseigné",
        user_email: userInput.email,
        message: userInput.message
      };
      const res = await emailjs.send(serviceID, templateID, emailParams, userID)
      if(res.status === 200) {
        toast.success("Votre demande de contact à bien été envoyée")
        setUserInput({
          business: "", 
          lastname: "" , 
          firstname: "",
          email:"", 
          message: ""
        })
      }
    } catch (error) {
      toast.error("Erreur lors de l'envoi de la demande. Merci de réessayer plus tard")
    }
  }
 
  const inputRef= useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <main>
      <h1 className="text-2xl font-bold m-4 text-center">DEMANDE DE CONTACT</h1>
      <form className="flex flex-col items-center gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:w-sm">
          <label htmlFor="business">Entreprise</label>
          <input 
            ref={inputRef} 
            className="bg-[var(--bg-box)] border-[var(--border)] border-2 rounded-full p-2" 
            type="text" 
            id="business" 
            name="business"
            value={userInput.business}
            onChange={handleChange}
            />
        </div>
        <div className="flex flex-col sm:w-sm">
          <label htmlFor="lastname">Nom</label>
          <input 
            className="bg-[var(--bg-box)] border-[var(--border)] border-2 rounded-full p-2" 
            type="text" 
            id="lastname" 
            name="lastname"
            value={userInput.lastname}
            onChange={handleChange}
            // required
            />
        </div>
        <div className="flex flex-col sm:w-sm">
          <label htmlFor="firstname">Prénom</label>
          <input 
            className="bg-[var(--bg-box)] border-[var(--border)] border-2 rounded-full p-2" 
            type="text" 
            id="firstname" 
            name="firstname"
            value={userInput.firstname}
            onChange={handleChange}
            />
        </div>
        <div className="flex flex-col sm:w-sm">
          <label htmlFor="email">E-mail</label>
          <input 
            className="bg-[var(--bg-box)] border-[var(--border)] border-2 rounded-full p-2" 
            type="email" 
            id="email" 
            name="email"
            value={userInput.email}
            onChange={handleChange}
            // required
            />
        </div>
        <div className="flex flex-col sm:w-sm">
          <label htmlFor="message">Message</label>
          <textarea 
            className="bg-[var(--bg-box)] border_custom p-2 h-40" 
            name="message" 
            id="message" 
            value={userInput.message}
            onChange={handleChange}
            // required
            />
        </div>
        <button type="submit" className="border-solid border-2 p-3 m-2 rounded-full hover:bg-[var(--main-text)] hover:text-[var(--bg-box)] duration-300 ease-in w-30">Envoyer</button>
      </form>
    
    </main>
    );
}