import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import pythonImage from '../assets/python_logo_trans.png'
import javaImage from '../assets/java_logo.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import cLogo from '../assets/C_logo_trans.png'
import androidStdio from '../assets/android studio.png'
import firebase from '../assets/firebase_logo.png'
// import linux from '../assets/linux_logo.png'
import mips from '../assets/mips_assembly.png'
import jest from '../assets/jest.png'
import junit from '../assets/junit.png'
import mongodb from '../assets/mongodb.png'
import azure from '../assets/azure.png'
import opencv from '../assets/opencv.png'
import docker from '../assets/docker.png'

const Skills = () => {

    const techs = [
        {
            id: 1, 
            src: pythonImage, 
            title: 'Python', 
            style: 'shadow-yellow-400'
        },
        {
            id: 2, 
            src: cLogo, 
            title: 'C', 
            style: 'shadow-blue-500'
            
        },
        {
            id: 3,
            src: javaImage, 
            title: 'Java', 
            style: 'shadow-red-500' 
           
        },
        {
            id: 4,
            src: html, 
            title: 'HTML', 
            style: 'shadow-red-500' 
            
        },
        {
            id: 5,
            src: css, 
            title: 'CSS', 
            style: 'shadow-blue-500' 
            
        },
        {
            id: 6,
            src: javascript, 
            title: 'JavaScript', 
            style: 'shadow-yellow-500' 
            
        },
        {
            id: 7, 
            src: mips, 
            title: 'Assembly',
            style: 'shadow-blue-800'
        },
        {
            id: 8, 
            src: reactImage, 
            title: 'React', 
            style: 'shadow-blue-400'
        },
        {
            id: 9, 
            src: tailwind, 
            title: 'Tailwind', 
            style: 'shadow-blue-900'
        },
        {
            id: 10, 
            src: jest,
            title: 'Jest',
            style: 'shadow-red-500'
        },
        {
            id: 11, 
            src: junit,
            title: 'JUnit',
            style: 'shadow-green-500'
        },
        {
            id: 12, 
            src: mongodb,
            title: 'MongoDB',
            style: 'shadow-green-500'
        },
        {
            id: 13,
            src: firebase, 
            title: 'Firebase', 
            style: 'shadow-yellow-500' 
        },
        {
            id: 14, 
            src: androidStdio, 
            title: 'Android Studio', 
            style: 'shadow-green-500'
        },
        {
            id: 15, 
            src: docker,
            title: 'Docker',
            style: 'shadow-blue-500'
        },
        {
            id: 16, 
            src: opencv, 
            title: 'OpenCV', 
            style: 'shadow-yellow-400'
        },
        {
            id: 17, 
            src: github, 
            title: 'GitHub', 
            style: 'shadow-gray-700'
        },
        {
            id: 18, 
            src: azure, 
            title: 'Azure DevOps', 
            style: 'shadow-blue-500'
        },
        
    ]

  return (
    <div name='skills' className="bg-gradient-to-b from-black to-gray-800 w-full min-h-screen py-20">
        <div className="max-w-screen-lg mx-auto p-4  text-white">
            <div className="pt-12 pb-8">
                <p className="text-4xl font-bold border-b-4 border-gray-500 inline">Skills</p>
                <p className="py-6">These are the technologies I've worked with</p>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-8 text-center">
            {techs.map(({ id, src, title, style }) => (
                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt={title} className="w-20 mx-auto"/>
                <p className="mt-4">{title}</p>
                </div>
            ))}
            </div>
        </div>
    </div>

  )
}

export default Skills