import React, { useState, useEffect } from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                LinkedIn <FaLinkedin size={30}/>
                </> 
            ), 
            href: 'https://www.linkedin.com/in/amitozjatana/', 
            style: 'rounded-tr-md'
            
        }, 
        {
            id: 2,
            child: (
                <>
                GitHub <FaGithub size={30}/>
                </> 
            ), 
            href: 'https://github.com/A-Jatana', 
            
        },
        {
            id: 3,
            child: (
                <>
                Mail <HiOutlineMail size={30}/>
                </> 
            ), 
            href: 'mailto:amitoz.jatana@mail.utoronto.ca', 
            
        }, 
        {
            id: 4,
            child: (
                <>
                Resume <BsFillPersonLinesFill size={30}/>
                </> 
            ), 
            href: '/Amitoz_Jatana_Resume.pdf',
            style: 'rounded-bl-md',
            download: true, 
            
        }, 
    ]

    const [showScrollToTop, setShowScrollToTop] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setShowScrollToTop(true);
        } else {
            setShowScrollToTop(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
            {links.map(({ id, child, href, style, download }) => (
                // eslint-disable-next-line
                <li className={"flex justify-between items-center w-40 h-14 px-4  ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + " " + style}>
                 <a 
                    href={href} 
                    className="flex justify-between items-center w-full text-white" 
                    download={download}
                    target="_blank" 
                    rel="noreferrer"
                    // this ^^ opens a new tab and this ^ prevents the new tab from accessing the window.opener property (avoids warning in terminal)
                 >
                    {child}
                 </a>
                 
                </li>

            ))}

           
        </ul>
        {showScrollToTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-10 right-10 bg-gray-500 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
                >
                    ↑
                </button>
            )}
    </div>
  )
}

export default SocialLinks