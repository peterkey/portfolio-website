"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

interface Project {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
}

const projectData: Project[] = [
  {
    id: 1,
    title: "Invoice Automation",
    description:
      "Designed and implemented an automated invoicing workflow in Google Sheets using Apps Script, generating structured PDFs from spreadsheet data. Reduced manual errors and admin time by automating repetitive tasks — demonstrating process improvement and scripting expertise.",
    imgUrl: "/images/profile-pic.png",
    tag: ["All", "Automation", "Google Apps Script"],
    gitUrl: "#",
    previewUrl: "#",
  },
  {
    id: 2,
    title: "Wedding Website",
    description:
      "Built and maintained a client-facing web application with RSVP management, a countdown timer, and an image gallery using HTML, CSS, JavaScript, and React. Translated client requirements into functional features and provided ongoing technical support.",
    imgUrl: "/images/profile-pic.png",
    tag: ["All", "Web Development", "React"],
    gitUrl: "#",
    previewUrl: "#",
  },
  {
    id: 3,
    title: "Online Portfolio",
    description:
      "Created and deployed a personal online portfolio to showcase technical projects and code samples. Implemented troubleshooting measures for front-end display issues, managed version control via Git, and documented all configurations for maintainability.",
    imgUrl: "/images/profile-pic.png",
    tag: ["All", "Portfolio", "Git"],
    gitUrl: "#",
    previewUrl: "#",
  },
];

const ProjectSection = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  
  const handleTagChange = (tag: string) => {
    setSelectedTag(tag);
  };

  const filteredProjects = projectData.filter((project) => 
    project.tag.includes(selectedTag)
  );

  const allTags = Array.from(new Set(projectData.flatMap(project => project.tag)));

  return (
    <section id='projects' className='py-20 sm:py-28 bg-trueAutumn-cardDark relative overflow-hidden' aria-labelledby="projects-heading">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6'>
        <div className="text-center mb-4">
          <span className="eyebrow mb-3">What I&apos;ve built</span>
          <h2 id="projects-heading" className='text-3xl sm:text-4xl font-bold text-trueAutumn-textDark mb-4 font-heading'>
            My Technical Projects
          </h2>
        </div>
        <div className='text-trueAutumn-textDark flex flex-row justify-center items-center gap-2 py-8 flex-wrap'>
          {allTags.map((tag) => (
            <ProjectTag 
              key={tag}
              name={tag} 
              onClick={handleTagChange} 
              isSelected={selectedTag === tag} 
            />
          ))}
        </div>
        <div className='grid md:grid-cols-3 gap-8'>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.imgUrl}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection; 