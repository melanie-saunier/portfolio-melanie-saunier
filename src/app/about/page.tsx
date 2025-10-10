"use-client"
import Image from "next/image";

export default function About() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between m-4 items-center w-full">
          <div className="w-64 h-64 overflow-hidden rounded-full">
                  <Image 
                    src="/images/profil.png"
                    alt="profil"
                    width={500}
                    height={500}
                  />
          </div>
          <div className="w-1/2">
            
              <h1 className="text-2xl font-bold m-4 text-center">MÉLANIE SAUNIER</h1>
              <h2 className="text-xl pb-8 text-center">Développeuse Web Fullstack</h2>
          
            <div className="bg-[var(--bg-box)] border_custom py-4 px-10 neon-hover transition-all duration-300">
              <h3 className="text-center font-bold">SOFTSKILLS</h3>
              <ul>
                <li>- Adaptabilité</li>
                <li>- Curiosité</li>
                <li>- Créativité</li>
                <li>- Sens de la logique</li>
                <li>- Polyvalence</li>
                <li>- Bienveillance</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[var(--bg-box)] border_custom m-4 py-4 px-10 w-4/5 neon-hover transition-all duration-300">
            <h3 className="text-center font-bold">A PROPOS</h3>
            <p className="text-justify m-2">
              Après 10 ans en tant que technicienne de laboratoire en
              biologie médicale, j'ai souhaité donner un nouvel élan à ma
              carrière. Un bilan de compétences a confirmé mon besoin
              d'exprimer mon côté logique, mon attirance pour la résolution
              de problèmes et le web.
            </p>
            <p className="text-justify m-2">
              J'ai intégré la formation Concepteur Développeur d'Applications de l'école O'clock en mars 2025, dans le but de me former au métier de développeur web.
            </p>
            <p className="text-justify m-2">
              Je suis actuellement à la recherche d'une entreprise dans laquelle je
              pourrai exprimer mes compétences tout en continuant à
              progresser.
            </p>
        </div>
        <a href="/contact" className="border-solid border-2 p-3 m-2 rounded-full hover:bg-[var(--main-text)] hover:text-[var(--bg-box)] duration-300 ease-in">Contactez-moi pour plus d'informations</a>
      </div>
    </main>
  );

}