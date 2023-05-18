import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { useRouter } from 'next/router';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3');
    const [linkColor, setLinkColor] = useState('#1f2937');
    const router = useRouter();

    useEffect(() => {
        if (
            router.asPath === '/movies'
        ) {
            setNavBg('transparent')
            setLinkColor('#ecf0f3')
        } else {
            setNavBg('#ecf0f3')
            setLinkColor('#1f2937')
        }
    }, [router]);

    const handleNav = () => {
        setNav(!nav)
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 100) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow);
    }, []);


    return (
        <div style={{backgroundColor: `${navBg}`}} className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] duration-300' : 'fixed w-full h-20 z-[100] duration-300'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link href='/'>
                    <Image src='/../public/assets/navLogo.png' 
                    alt='/' 
                    width={125} 
                    height={50} 
                    className='navLogo'
                    />
                </Link>
                <div>
                    <ul style={{color: `${linkColor}`}} className='hidden md:flex flex-row space-x-10'>
                        <Link href='/'>
                            <li className='text-sm uppercase hover:border-b'>Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li className='text-sm uppercase hover:border-b'>About</li>
                        </Link>
                        <Link href='/#skills'>
                            <li className='text-sm uppercase hover:border-b'>Skills</li>
                        </Link>
                        <Link href='/#projects'>
                            <li className='text-sm uppercase hover:border-b'>Projects</li>
                        </Link>
                        <Link href='/#contact'>
                            <li className='text-sm uppercase hover:border-b'>Contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='cursor-pointer md:hidden'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : '' }>
                <div className={
                    nav 
                    ? 'fixed left-0 top-0 w-[70%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
                    : 'fixed top-0 w-[70%] sm:w-[60%] md:w-[45%] left-[-200%] p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Image src='/../public/assets/navLogo.png' alt='/' width={87} height={35} className='navMenuLogo' />
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>Unleashing digital innovation, one line of code at a time.</p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase' onClick={handleNav}>
                            <Link href='/'>
                            <li className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/#about'>
                            <li className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href='/#skills'>
                            <li className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link href='/#projects'>
                            <li className='py-4 text-sm'>Projects</li>
                            </Link>
                            <Link href='/#contact'>
                            <li className='py-4 text-sm'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#00A5E3]'>Let's Connect</p>
                            <div className='flex items-center justify-between my-4 w-[80%] sm:w-[60%]'>
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
            </div>
        </div>
    )};


export default Navbar;