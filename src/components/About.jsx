import React from 'react'

const About = () => {
  return (
    <div name='about' className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"> 
            <div className="pt-16 pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>

            <p className="text-xl mt-5">
                I am a third year Computer Science student at the University of Toronto, specializing in Software Engineering. I am always looking for opportunities to learn and grow, as I am a believer in the idea that
                knowledge is power and continuous self-improvement is key to personal and professional success. Whether it's exploring new technologies, acquiring new skills, or seeking out new challenges, I approach 
                every opportunity with enthusiasm and a willingness to learn. 
            </p>

            <br />

            <p className="text-xl">
                I love problem-solving, researching emerging technologies, and contributing to a team-oriented environment. My experience in programming languages such as C, Python, Java, JavaScript, HTML, and CSS, 
                as well as my familiarity with various data structures, object-oriented programming, design patterns, software testing, agile techniques, and mobile application development, has given me a broad foundation
                to build upon. Beyond the world of Computer Science, I enjoy spending time outdoors and often go on long hikes in the nature to unwind. I also enjoy playing sports, especially tennis and basketball. 
            </p>
        </div>
        
    </div>
  )
}

export default About
