import { useState, useRef } from 'react'
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import emailjs from '@emailjs/browser';
import Success from './Success';

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [subject, setSubject] = useState('')
    const [number, setNumber] = useState('')

    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [messageError, setMessageError] = useState(false)
    const [subjectError, setSubjectError] = useState(false)
    const [numberError, setNumberError] = useState(false)

    const [success, setSuccess] = useState(false)

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        if (name === '') {
            setNameError(true)
        } if (email === '' || !email.includes('@') || !email.includes('.') || email.includes(' ')) {
            setEmailError(true)
        } if (subject === '') {
            setSubjectError(true)
        } if (message === '') {
            setMessageError(true)
        } else {
            emailjs.sendForm()
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
            setName('')
            setEmail('')
            setMessage('')
            setSubject('')
            setNumber('')

            setNameError(false)
            setNumberError(false)
            setEmailError(false)
            setSubjectError(false)
            setMessageError(false)

            setSuccess(true)

            setTimeout(() => {
                setSuccess(false)
            }, 3000);
        }
    };

  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] mx-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#00A5E3]'>Contact</p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-5'>
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <img className='rounded-xl xl:hover:scale-105 ease-in duration-300' src='https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='/' />
                        </div>
                        <div>
                            <h2 className='py-2'>Karl-Jörgen Tormet</h2>
                            <p>Software Developer</p>
                            <p className='py-4'>I am currently actively seeking new opportunities and would be thrilled to connect with you. Please feel free to reach out to me so that we can have a meaningful conversation.</p>
                        </div>
                        <div className=''>
                            <p className='uppercase pt-8'>Connect With Me</p>
                            <div className='flex items-center justify-between py-4 w-[50%]'>
                                <a href='https://www.linkedin.com/in/karl-jörgen-tormet-34aa2623a' target='_blank'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <FaLinkedinIn />
                                    </div>
                                </a>
                                <a href='https://github.com/karljorgent' target='_blank'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <FaGithub />
                                    </div>
                                </a>
                                <a href='mailto:kj.tormet@gmail.com'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <AiOutlineMail />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {success ? <Success /> : ''}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input onChange={e => {setName(e.target.value), setNameError(false)}} name='user_name' className={nameError ? 'border-2 rounded-lg p-3 flex border-red-400' :'border-2 rounded-lg p-3 flex border-gray-300'} type="text" />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Phone Number</label>
                                    <input onChange={e => {setNumber(e.target.value), setNumberError(false)}} name='user_number' className={numberError ? 'border-2 rounded-lg p-3 flex border-red-400' :'border-2 rounded-lg p-3 flex border-gray-300'} type="text" />
                                </div>
                            </div>    
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input  onChange={e => {setEmail(e.target.value), setEmailError(false)}} name='user_email' className={emailError ? 'border-2 rounded-lg p-3 flex border-red-400' :'border-2 rounded-lg p-3 flex border-gray-300'} type="text" />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Subject</label>
                                <input  onChange={e => {setSubject(e.target.value), setSubjectError(false)}} name='subject' className={subjectError ? 'border-2 rounded-lg p-3 flex border-red-400' :'border-2 rounded-lg p-3 flex border-gray-300'} type="text" />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea onChange={e => {setMessage(e.target.value), setMessageError(false)}} name='message' className={messageError ? 'border-2 rounded-lg p-3 border-red-400' : 'border-2 rounded-lg p-3 border-gray-300'} rows='10'></textarea>
                            </div>
                            <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                        </form>
                    </div>
                </div> 
            </div>
            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp className='text-[#00A5E3]' size={30}/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact