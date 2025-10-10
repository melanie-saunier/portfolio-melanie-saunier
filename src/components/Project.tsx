import { stack } from "@/@types/project";
import Image from "next/image";

interface ProjectPropsInt {
  title: string;
  description: string;
  stacks: stack[];
  variant: "small" | "large";
  showStacks: boolean;
}

export default function Project({title, description, stacks, variant, showStacks} : ProjectPropsInt) {
  const imageSize = variant === "large" ? 500 : 200;
  return (
    <div className="bg-[var(--backgroundsecond)] border_custom p-2 m-2 w-1/2 flex flex-col items-center neon-hover transition-all duration-300">
      <h4 className="font-bold pb-2">{title}</h4>
      <Image 
        src={`/images/${title}.png`}
        alt="profil"
        width={imageSize}
        height={imageSize}
      />
      <p className="pt-4">
        {variant === "large" ? `${description}` : `${description.slice(0, 100)}...`}
      </p>

      {showStacks && (
        <div>
          <h5 className="font-bold text-center text-base">Stacks</h5>
          <div className="md:flex md:justify-center flex-wrap">
          {stacks.map((stack) => {
            return (
              <div key={stack.id} className="flex flex-col items-center">

                <span className="px-2 border rounded-full m-2">{stack.name}</span>
                {stack.logo && 
                  <Image 
                    src={stack.logo}
                    alt={`logo de ${stack.name}`}
                    width={50}
                    height={50}
                  />}
              </div>
            )
          })}
            
          </div>
        </div>
      )}

    </div>
  );
}