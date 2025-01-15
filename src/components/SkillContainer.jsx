import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const SkillContainer = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center duration-200">
      <Icon icon={icon} className="mb-3 size-12" />
      <span className="font-medium text-[var(--light)]">{label}</span>
    </div>
  );
};

export default SkillContainer;
