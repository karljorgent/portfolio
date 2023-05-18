
import Image from 'next/image'
import SkillItem from './SkillItem'

const Skills = () => {

  // configure skills (add image to public/assets/skills/)
  let skills = ['Javascript', 'React', 'NextJS', 'HTML', 'CSS', 'Tailwind', 'NodeJS', 'MySQL', 'Github']

  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#00A5E3]'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
              {skills.map((skill) => (
                <SkillItem name={skill} key={skill} url={skill.toLowerCase()} />
              ))}

            </div>
        </div>
    </div>
  )
}

export default Skills