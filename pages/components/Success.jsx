

const Success = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex justify-center items-center'>
        <div className='duration-300 bg-white w-60 h-60 md:w-96 rounded-xl shadow-xl shadow-gray-400 p-4'>
            <div className='flex flex-col justify-center items-center h-full'>
                <h2 className='text-2xl font-bold text-[#00A5E3]'>Message Sent!</h2>
                <p className='text-lg text-center mt-5'>Thank you for your message. I will get back to you as soon as possible.</p>
            </div>
        </div>
    </div>
  )
}

export default Success

// <button className='bg-[#00A5E3] text-white px-6 py-2 rounded-lg mt-20'>Close</button>