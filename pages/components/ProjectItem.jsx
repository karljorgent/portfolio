import Image from 'next/image'
import Link from 'next/link'

const ProjectItem = (props) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#00A5E3] to-[#37bee0]'>
      <Image className='rounded-xl group-hover:opacity-10' src={props.backgroundImg} alt='/' />
      <div className='hidden group-hover:block absolute'>
        <h3 className='text-2xl text-white tracking-widest text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>{props.title}</h3>
        <p className='pb-4 pt-2 text-white text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>NextJS / API</p>
        <Link href={props.projectUrl ?? ''}>
          <p className='text-center px-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
        </Link>
      </div>
    </div>
  )
}

export default ProjectItem