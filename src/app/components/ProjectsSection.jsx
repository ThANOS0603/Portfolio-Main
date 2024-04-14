"use client";
import React, {useState} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData = [
    {
        id: 1,
        title: "Catalyst Magazine ",
        description: "Neuro Sciences / Genetics",
        image: "/images/projects/1.png",
        tag: ["All", "Designs"],
        gitUrl: "/",
        previewUrl: "/",      
    },
    {
        id: 2,
        title: "Catalyst Magazine ",
        description: "Neuro Sciences",
        image: "/images/projects/2.png",
        tag: ["All", "Designs"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "Catalyst Magazine ",
        description: "Neuro Sciences",
        image: "/images/projects/3.png",
        tag: ["All", "Designs"],
        gitUrl: "/",
        previewUrl: "/",        
    },

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
  project.tag.includes(tag)
  );

  return (
    <>
      <h2 className='text-5xl text-center mb-5 font-extrabold text-[#5EE9E7]'>
        My Projects
        </h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6 '>
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
           <ProjectTag
            onClick={handleTagChange}
            name="Designs"
            isSelected={tag === "Designs"}
          />
        </div>
      <div className="rounded-full grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map ((project) => 
           <ProjectCard 
             key={project.id} 
             title={project.title} 
             description={project.description} 
             imgUrl={project.image}
             gitUrl={project.gitUrl}
             previewUrl={project.previewUrl} />
             )
        }
      </div>
    </>
  );
};

export default ProjectsSection;

