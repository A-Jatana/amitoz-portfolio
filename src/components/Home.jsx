import React from 'react'
import HeroImage from '../assets/newImage.jpg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div 
        name="home" 
        className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">Hello! My name is Amitoz Jatana</h2>
                <p className="text-gray-500 py-4 max-w-md">
                    Welcome to my portfolio! Here, you'll find a showcase of my skills and projects. I hope my portfolio 
                    gives you a glimpse into my passion for technology and innovation. Thank you for visiting!
                    
                </p>

                <div>
                    {/* we put group so the hover effect is applied to the whole button */}
                    <Link to='contact' smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
                        Let's Connect
                        <span className="group-hover:rotate-90 duration-300">
                            <MdOutlineKeyboardArrowRight size={25} 
                            className="ml-1"/>
                        </span>
                    </Link>
                </div>

            </div>
            <div>
                <img 
                    src={HeroImage} 
                    alt="my profile"
                    className="rounded-2xl mx-auto w-2/3 md:w-full"
                />
            </div>
        </div>
       
    </div>
  )
}

export default Home