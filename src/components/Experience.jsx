import React from 'react'
import TBS from '../assets/TBS-logo.png'
import TBSHoliday from '../assets/TBS-Holiday-Pic.jpeg'

function Experience() {

    const ExperienceItem = ({ src, title, company, date, desc1, desc2, desc3, img1, img2 }) => (
        <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="flex flex-col w-full md:w-1/2">
                <div className="mb-4">
                    <p className="text-2xl">{title}</p>
                    <p className="text-xl font-bold">{company}</p>
                    {/* <p className="text-xl">{date}</p> */}
                    {/* <p className="text-xl">Responsibilities:</p> */}
                    <br/>
                    <p className="text-lg">{desc1}</p>
                    <br/>
                    <p className="text-lg">{desc2}</p>
                    <br/>
                    <p className="text-lg">{desc3}</p>
                </div>
            </div>

            <div className="flex w-full md:w-1/2 flex-col items-center">
                <img src={img1} alt="" className="w-1/2 h-auto mb-4 mt-12" />
                <img src={img2} alt="" className="w-4/5 h-auto" />
            </div>
            
        </div>
    );

    const experiences = [
        {
            id: 1,
            img1: TBS,
            img2: TBSHoliday,
            title: 'Web Developer',
            company: 'Treasury Board Secretariat',
            date: 'September 2023 - December 2023',
            desc1: 'During my work term, our team focused on enhancing the Financial Management Gateway (FMG), a virtual hub for the OPS finance community, with over 22,000 annual visitors. Our primary project involved creating the Performance Management Tool (PMT) within FMG, simplifying user enrollment in finance-related courses and events.',
            desc2: ' Collaborating closely with the full-time developer, I designed user-friendly web pages for each PMT component, leveraging my React, HTML, CSS, and JavaScript knowledge. Additionally, we migrated the database from Microsoft SharePoint to an SQL-based database, where I implemented robust CRUD functions for each component using the SQL database API, resulting in a notable 35% efficiency gain. ',
            desc3: 'Near the end of my work term, I conducted rigorous manual testing and implemented Jest unit testing to ensure resilience and reliability. Throughout the development lifecycle, I effectively utilized Git version control within Azure DevOps, actively managing 50+ pull requests/branches to foster seamless collaboration. ',
            AIdescription: 'Developed a web application using React, JavaScript, HTML, and CSS to help users find and access government services and information. Worked in an agile environment and collaborated with a team of developers, designers, and product managers to deliver a high-quality product. ',
        },
    ]

  return (
    <div name="experience" className="w-full min-h-screen py-20 bg-gradient-to-b from-black to-gray-800 text-white">
        <div className="max-w-screen-lg mx-auto p-4 text-white">
            <div className="pt-16 pb-8">
                <p className="text-4xl font-bold border-b-4 border-gray-500 inline">Experience</p>
            </div>

            {experiences.map((experience) => (
                <ExperienceItem key={experience.id} {...experience} />
            ))}
        </div>
    </div>
  );
};

export default Experience;