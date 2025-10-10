import OneSkill from "@/components/OneSkill";


export default function Skills() {
  return (
    <main>
      <div className="flex flex-col w-full items-center">
        <h1 className="text-2xl font-bold m-4">SKILLS</h1>
          <OneSkill category={"Frontend"}/>
          <OneSkill category={"Backend"}/>
          <OneSkill category={"Manage"}/>
      </div>
    </main>
  );
}