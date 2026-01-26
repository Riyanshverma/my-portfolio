import { experienceInfo } from "@/Data"

const Experience = () => {
  return (
    <div className="flex flex-col text-4xl">
      {experienceInfo.map(({name}) => (
        <div>
            {name}
        </div>
      ))}
    </div>
  )
}

export default Experience
