"use client";
import React, {useTransition, useState} from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className='list-disc pl-2'>
        <li>Node.js</li>
        <li>React</li>
        <li>PostgreSQL</li>
        <li>JavaScript</li>
        <li>Python</li>
        <li>Photoshop</li>
        <li>InDesign</li>
        <li>After Effects</li>
      </ul>
    )
  },
  {
    title: 'Education',
    id: 'education',
    content: (
          <ul className='list-disc pl-2'>
            <li>Jai Hind - University of Mumbai</li>
            <li>IIT Madras</li>
          </ul>
        )     
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className='list-disc pl-2'>
        <li>Bsc in  Programming and Data Science</li>
        <li>Full Stack Web Development</li>
        <li>Graphic Designing</li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState ("skills");  
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) =>{
    startTransition (() => {
      setTab(id);
    });

  };
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src='/images/about-image.jpg' width={400} height={400}/>
            <div className='mt-8 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='font font-bold text-[#00D6D3] text-4xl mb-4'>About Me</h2>
                <p className='text-base lg:text-lg font-semibold text-[#00A227]'>I'm a student pursuing double degree. Good with coding languages:- Python, CSS, JavaScript. Certified Graphic Designer. I love to learn new things, as much as I am a fast learner, I'm an efficient one too!</p>
                <div className='flex flex-row mt-8'>
                <TabButton 
                 selectTab={() => handleTabChange ('skills')} 
                 active={tab === 'skills'}
                >
                  {" "}
                  Skills {" "}
                </TabButton>
                <TabButton 
                 selectTab={() => handleTabChange ('education')} 
                 active={tab === 'education'}
                >
                  {" "}
                  Education {" "}
                </TabButton>
                <TabButton 
                 selectTab={() => handleTabChange ('certifications')} 
                 active={tab === 'certifications'}
                >
                  {" "}
                  Certifications {" "}
                </TabButton>
              </div>  
              <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>  
    </section>
  )
}

export default AboutSection;
