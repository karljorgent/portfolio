
import moviesImg from '../../public/assets/projects/movies.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#00A5E3]'>
                Projects
            </p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <ProjectItem title='Movies' key='movies' backgroundImg={moviesImg} projectUrl='/movies' />
            </div>
        </div>
    </div>
  )
}

export default Projects