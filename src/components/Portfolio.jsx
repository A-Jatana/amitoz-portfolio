import React from 'react'
import courseAssist from '../assets/portfolio/course_assist_app.png'
import installNode from '../assets/portfolio/installNode.jpg'
import systemTool from '../assets/portfolio/system_monitoring_tool_linux.png'
import hungryOgre from '../assets/portfolio/hungry_ogre_assembly.png'
import personalPortfolio from '../assets/portfolio/personal_portfolio_ss.png'
import reactWeather from '../assets/portfolio/reactWeather.jpg'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1, 
            src: courseAssist,
            demo: 'https://youtu.be/EwwslcNDgYg',
            code: 'https://github.com/A-Jatana/Course-Assist-Application'
        
        },
        {
            id: 2, 
            src: hungryOgre,
            demo: 'https://utoronto.zoom.us/rec/share/P7vpCaMfyBZFzZWp_xdaqbJ9paqYC9AwHx9dVkoKe4Uzb2kwCVQuKygFRerdxFfi.f2sxs2Us5KvGdzj5',
            code: 'https://github.com/A-Jatana/Hungry-Ogre-Game'
        
        },
        {
            id: 3, 
            src: systemTool,
            demo: 'https://youtu.be/lw0haCv3KHQ',
            code: 'https://github.com/A-Jatana/SystemMonitoringTool'
        
        },
        {
            id: 4, 
            src: personalPortfolio,
            demo: 'https://www.youtube.com/watch?v=susewRC7_Dw',
            code: 'https://github.com/A-Jatana/To-Do-List-Website'
        
        },

    ]

    return (
        <div name='projects' className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen py-20">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>
    
                <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-8 px-4 md:px-0">
                    {portfolios.map(({ id, src, demo, code }) => (  
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg overflow-hidden">
                            <img src={src} alt="" className="h-64 object-fit-cover duration-200 hover:scale-105"/>
                            <div className="flex items-center justify-center space-x-4 p-4">
                                <button 
                                    className="w-1/2 px-6 py-3 rounded-md bg-gray-700 text-white font-bold tracking-wider uppercase transition-all duration-200 hover:scale-105 hover:bg-gray-600"
                                    onClick={() => window.open(demo)}
                                    type="button"
                                    target="_blank" 
                                    rel="noreferrer"
                                >
                                    Demo
                                </button>
                                <button 
                                    className="w-1/2 px-6 py-3 rounded-md bg-gray-700 text-white font-bold tracking-wider uppercase transition-all duration-200 hover:scale-105 hover:bg-gray-600"
                                    onClick={() => window.open(code)}
                                    type="button"
                                    target="_blank" 
                                    rel="noreferrer"
                                >
                                    Code
                                </button>   
                            </div>
                        </div>
                    ))}
                </div>
        
            </div>
        </div>
    )
}

export default Portfolio
    

//   return (
//     <div name='portfolio' className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
//         <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//             <div className="pb-8">
//                 <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
//                 <p className="py-6">Check out some of my work right here</p>
//             </div>

//             <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
//                 {portfolios.map(({ id, src, demo, code }) => (  
//                     <div key={id} className="shadow-md shadow-gray-600 rounded-lg overflow-hidden">
//                     <img src={src} alt="" className="h-64 object-fit-cover duration-200 hover:scale-105"/>
//                     <div className="flex items-center justify-center">
//                         <button 
//                         className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
//                         onClick={() => window.open(demo)}
//                         type="button"
//                         target="_blank" 
//                         rel="noreferrer"
//                         >
//                         Demo
//                         </button>
//                         <button 
//                         className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
//                         onClick={() => window.open(code)}
//                         type="button"
//                         target="_blank" 
//                         rel="noreferrer"
//                         >
//                         Code
//                         </button>   
//                     </div>
//                     </div>
//                 ))}
//                 </div>

//             {/* <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
            
//                 {portfolios.map(({ id, src, demo, code }) => (  
//                     <div key={id}className="shadow-md shadow-gray-600 rounded-lg">
//                         <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
//                         <div className="flex items-center justify-center">
//                             <button 
//                                 className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
//                                 onClick={() => window.open(demo)}
//                                 type="button"
//                                 target="_blank" 
//                                 rel="noreferrer">
//                                 Demo
//                                 </button>
//                             <button 
//                                 className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
//                                 onClick={() => window.open(code)}
//                                 type="button"
//                                 target="_blank" 
//                                 rel="noreferrer">
//                                 Code

//                                 </button>   
//                         </div>
//                     </div>
//                     ))


//                 }

//             </div> */}
    
//         </div>
//     </div>
//   )
