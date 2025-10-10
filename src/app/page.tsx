import Project from "@/components/Project";
import Subtitle from "@/components/Subtitle";
import { projectsData } from "@/data/projects";
import { skillsData } from "@/data/skills";
import Image from "next/image";

export default function Home() {
    const mainData = skillsData.filter((skill) => [4, 14, 5, 8].includes(skill.id));
  return (
    <main className="md:m-8">
      <section className="my-8 flex flex-col items-center justify-center">
        <div className="w-64 h-64 overflow-hidden rounded-full">
          <Image 
            src="/images/profil.png"
            alt="profil"
            width={500}
            height={500}
          />
        </div>
        <h1 className="text-2xl font-bold m-4">MÉLANIE SAUNIER</h1>
        <h2 className="text-xl">Développeuse Web Fullstack</h2>
      </section>
      <section className="flex flex-wrap gap-4 items-start md:flex-nowrap">
        <div className="bg-[var(--bg-box)] border_custom p-2 flex flex-col items-center w-full md:w-1/4 neon-hover transition-all duration-300 ">
          <Subtitle title="SKILLS"/>
          <div className="flex flex-wrap">
              {mainData.map((skill) => {
                return (
                  <div key={skill.id} className="flex flex-col items-center">
                    <span className="px-2 border rounded-full m-2">{skill.name}</span>
                    <Image 
                      src={skill.logo}
                      alt={`logo de ${skill.name}`}
                      width={50}
                      height={50}
                    /> 
                  </div>
                )})
              }
          </div>
            <a href="/skills" className="border-solid border-2 p-3 m-2 rounded-full hover:bg-[var(--main-text)] hover:text-[var(--bg-box)] duration-300 ease-in">Et plus encore ...</a>

        </div>
        <div className="bg-[var(--bg-box)] border_custom p-2 w-full flex flex-col items-center md:w-1/4 neon-hover transition-all duration-300">
          <Subtitle title="A PROPOS"/>
          <p className="text-justify"> Après 10 ans en tant que technicienne de laboratoire en
            biologie médicale, j'ai souhaité donner un nouvel élan à ma
            carrière. J'ai réalisé la formation Concepteur Développeur d'Applications de l'école O'clock, dans le but d'exercer le métier de développeuse web.</p>
          <a href="/about" className="border-solid border-2 p-3 m-2 rounded-full hover:bg-[var(--main-text)] hover:text-[var(--bg-box)] duration-300 ease-in">En savoir plus</a>
        </div>
        <div className="bg-[var(--bg-box)] border_custom w-full p-2 flex flex-col items-center md:w-2/4 neon-hover transition-all duration-300">
          <Subtitle title="LES DERNIERS PROJETS"/>
          <div className="flex gap-2">
            {projectsData.map((project) => {
              return (
                <Project key={project.id} title={project.title} description={project.description} stacks={project.stack} variant={"small"} showStacks={false}/>
              )
            })}
          </div>
          <a href="/projects" className="border-solid border-2 p-3 m-2 rounded-full hover:bg-[var(--main-text)] hover:text-[var(--bg-box)] duration-300 ease-in"> Tous les projets</a>

        </div>
      </section>
    </main>
  );
}
