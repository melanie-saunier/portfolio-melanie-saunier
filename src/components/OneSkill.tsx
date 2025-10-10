import { Skill } from "@/@types/skills";
import { skillsData } from "@/data/skills";
import Image from "next/image";
import Subtitle from "./Subtitle";

interface OneskillProps {
  category: string
}
export default function OneSkill({category}:OneskillProps) {
  const skillsByCategory: Skill[] = skillsData.filter((skill) => skill.category === category);

  return (

      <div className="bg-[var(--bg-box)] border_custom p-2 flex flex-col m-2  items-center w-1/2  neon-hover transition-all duration-300">
          <Subtitle  title={category}/>
          <div className={category === "Manage" ? "w-full":  "md:flex md:flex-wrap gap-4 p-2 justify-around w-full"}>
            {skillsByCategory.map((skill: Skill) => {
            return (
                    <div key={skill.id} className="flex flex-col items-center">

                        <h3 className="text-base">{skill.name}</h3>
                        { skill.logo && (
                          <Image 
                            src={skill.logo}
                            alt={`logo de ${skill.name}`}
                            width={50}
                            height={50}
                          />
                        )}
                      
                    </div>
                  );

          })}
        </div>
      </div>

      

  );
}