import { SkillCard } from "./common/Card"

export default function Skills() {
  return (
    <>
    <div className="mt-20">
      <h1 className="font-bold text-3xl mb-4">My Field of Expertise</h1>
      <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus recusandae aut, velit quis similique porro, quae quasi, deleniti nemo nesciunt reiciendis unde sit animi voluptatum rem eius soluta facere distinctio.</p>
      <div>
        <h3 className="text-xl mb-2">Geospatial Tools</h3>
        <p className="mb-4">User Frienly with seamless user experience</p>
        <div className="flex flex-row gap-5">
          <SkillCard 
            className="flex-1"
            logo="/images.png"
            skillName="react"
          />
          <SkillCard 
            className="flex-1"
            logo="/images.png"
            skillName="react"
          />
          <SkillCard 
            className="flex-1"
            logo="/images.png"
            skillName="react"
          />
          <SkillCard 
            className="flex-1"
            logo="/images.png"
            skillName="react"
          />
        </div>
      </div>
    </div>
    </>
  )
}