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
import linux from '../assets/linux_logo.png'

const Experience = () => {

    const techs = [
        {
            id: 1, 
            src: html, 
            title: 'HTML', 
            style: 'shadow-red-500'
        },
        {
            id: 2, 
            src: css, 
            title: 'CSS', 
            style: 'shadow-blue-500'
        },
        {
            id: 3, 
            src: javascript, 
            title: 'JavaScript', 
            style: 'shadow-yellow-500'
        },
        {
            id: 4, 
            src: reactImage, 
            title: 'React', 
            style: 'shadow-blue-400'
        },
        {
            id: 5, 
            src: tailwind, 
            title: 'Tailwind', 
            style: 'shadow-blue-900'
        },
        {
            id: 6, 
            src: pythonImage, 
            title: 'Python', 
            style: 'shadow-yellow-400'
        },
        {
            id: 7, 
            src: javaImage, 
            title: 'Java', 
            style: 'shadow-red-500'
        },
        {
            id: 8, 
            src: cLogo, 
            title: 'C', 
            style: 'shadow-blue-500'
        },
        {
            id: 9, 
            src: github, 
            title: 'GitHub', 
            style: 'shadow-gray-700'
        },
        {
            id: 9, 
            src: androidStdio, 
            title: 'Android Studio', 
            style: 'shadow-green-500'
        },
        {
            id: 10, 
            src: firebase, 
            title: 'Firebase', 
            style: 'shadow-yellow-500'
        },
        {
            id: 11, 
            src: linux, 
            title: 'Linux', 
            style: 'shadow-gray-900'
        },
    ]

  return (
    <div name='skills' className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen py-20">
        <div className="max-w-screen-lg mx-auto p-4  text-white">
            <div className="pt-12 pb-8">
            <p className="text-4xl font-bold border-b-4 border-gray-500 inline">Skills</p>
            <p className="py-6">These are the technologies I've worked with</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
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

export default Experience