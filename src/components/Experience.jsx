
import React from 'react';
import Slider from 'react-slick';
import TBS from '../assets/TBS-logo.png';
import TBSHoliday from '../assets/TBS-Holiday-Pic.jpeg';
import RBC from '../assets/rbc_logo2.png';
import RBCSummerFest from '../assets/rbc_teampic.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Experience() {

    const ExperienceItem = ({ src, title, company, date, desc1, desc2, desc3, img1, img2 }) => (
        <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="flex flex-col w-full md:w-1/2">
                <div className="mb-4">
                    <p className="text-2xl">{title}</p>
                    <p className="text-xl font-bold">{company}</p>
                    <p className="text-base italic">{date}</p>
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
                <img src={img1} alt="" className="w-2/5 h-auto mb-4 mt-12 duration-200 hover:scale-105" />
                <img src={img2} alt="" className="w-4/5 h-auto duration-200 hover:scale-105" />
            </div>
            
        </div>
    );


    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    const experiences = [
        {
            id: 1, 
            img1: RBC,
            img2: RBCSummerFest,
            title: 'Software Developer',
            company: 'RBC',
            date: 'May 2024 - Present',
            desc1: 'As a Software Developer at RBC, I played a key role in automating security and compliance workflows to enhance operational efficiency. I implemented a seamless vendor binary validation process by running a Dockerized malware scanning tool within GitHub Actions, integrating AWS Lambda for automation, S3 for secure storage, and IAM roles for access control.',
            desc2: 'To support enterprise data retention standards, I developed a Python script leveraging AWS Glue to transmit audit logs from Postman to an S3 bucket, ensuring long-term storage and eliminating data loss risks. I also led QA testing efforts for over 15 DevOps tools, utilizing Selenium and PyTest to manage test suites and maintain system stability across production and non-production environments.',
            desc3: 'Additionally, I designed automation solutions to replace manual DevOps tasks, saving over 20 hours per month while improving reporting accuracy, efficiency, and resilience in our operations.'
        },
        {
            id: 2,
            img1: TBS,
            img2: TBSHoliday,
            title: 'Web Developer',
            company: 'Treasury Board Secretariat',
            date: 'September 2023 - December 2023',
            desc1: 'During my work term, I contributed to enhancing the Financial Management Gateway (FMG) for the OPS finance community, focusing on developing the Performance Management Tool (PMT), which streamlined user enrollment in finance courses and events.',
            desc2: 'Working closely with a full-time developer, I built user-friendly interfaces using React, HTML, CSS, and JavaScript, and managed a database migration from Microsoft SharePoint to SQL, implementing CRUD functions to improve performance for a large user base.',
            desc3: 'Toward the term’s end, I conducted rigorous manual and automated testing with Jest to ensure stability, while utilizing Git version control within Azure DevOps for collaborative branch management, Kanban boards, and pipelines.'
        }
    ]

    return (
     
        <div name="work experience" className="w-full min-h-screen py-20 bg-gradient-to-b from-black to-gray-800 text-white">
            <div className="max-w-screen-lg mx-auto p-4 text-white">
                <div className="pt-16 pb-8">
                    <p className="text-4xl font-bold border-b-4 border-gray-500 inline">Work Experience</p>
                </div>

                <div>
                    <Slider {...settings}>
                        
                        
                        {experiences.map((experience) => (
                            <ExperienceItem key={experience.id} {...experience} />
                        ))}

                    </Slider>

                    
                </div>
    
                
            </div>
        </div>
        );
    };
        

export default Experience;