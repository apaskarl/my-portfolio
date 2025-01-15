import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const ServiceBox = ({ icon, title, descrtiption }) => {
  return (
    <div className="relative mt-10 space-y-4 border-2 border-[var(--border)] p-8 pt-10 text-center">
      <Icon
        icon={icon}
        className="absolute left-1/2 top-[-3rem] size-24 -translate-x-1/2 text-[var(--primary)]"
      />
      <h1 className="text-lg font-bold uppercase text-[var(--white)]">
        {title}
      </h1>

      <p className="text-[var(--light)]">{descrtiption}</p>
    </div>
  );
};

export default ServiceBox;
