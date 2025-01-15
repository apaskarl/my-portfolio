import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const SectionTitle = ({ title, icon, subtext, className }) => {
  return (
    <>
      <h2 className="mb-4 flex items-center gap-x-4 font-spaceMono text-xl font-medium uppercase tracking-wider text-[var(--primary)]">
        {title} <Icon icon={icon} />
      </h2>
      <h1
        className={`${className} text-3xl font-bold tracking-wider text-[var(--white)] md:text-4xl`}
      >
        {subtext}
      </h1>
    </>
  );
};

export default SectionTitle;
