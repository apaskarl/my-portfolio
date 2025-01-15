import React from "react";

const ProjectTech = ({ label }) => {
  return (
    <p className="w-max rounded-full bg-[var(--primary-dark)] px-4 py-2 text-xs text-[var(--primary)]">
      {label}
    </p>
  );
};

export default ProjectTech;
