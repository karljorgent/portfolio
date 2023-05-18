
const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#00A5E3]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='text-xl'>Greetings! I'm Karl-Jörgen Tormet, a passionate software developer residing in Estonia. Programming and exploring the ever-evolving world of technology have been my lifelong interests.</p>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default About