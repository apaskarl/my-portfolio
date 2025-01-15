import React from "react";
import ProjectTech from "./ProjectTech";

const ProjectContainer = ({ image, title, description, tech, position }) => {
  const techList = tech.split(",").map((item) => item.trim());

  return (
    <div className={`${position && "flex-row-reverse"} flex items-center`}>
      <div className={`${position && "text-end"} flex-1 space-y-5`}>
        <p className="font-spaceMono text-[var(--primary)]">Featured Project</p>
        <h1 className="text-2xl font-bold text-[var(--white)]">{title}</h1>

        <div className="bg-[var(--secondary)] p-8">
          <p className="line-clamp-4 leading-relaxed text-[var(--light)]">
            {description}
          </p>
        </div>

        <div className={`${position && "justify-end"} flex flex-wrap gap-2`}>
          {techList.map((techItem, index) => (
            <ProjectTech key={index} label={techItem} />
          ))}
        </div>

        <div className="space-x-5">
          <button className="text-[var(--white)]">View Live</button>
          <button className="text-[var(--white)]">GitHub Repo</button>
        </div>
      </div>
      <img src={image} className="z-20 w-1/2 rounded-md" alt={title} />
    </div>
  );
};

export default ProjectContainer;
