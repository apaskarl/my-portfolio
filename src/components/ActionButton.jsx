import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const ActionButton = ({ type, label, icon, onClick }) => {
  return (
    <button
      className={`${type === "primary" ? "bg-[var(--primary)] text-[var(--dark)] hover:bg-[var(--secondary)] hover:text-[var(--primary)]" : "text-[var(--white)]"} flex w-max items-center px-6 py-3 font-semibold duration-200 hover:-translate-y-1`}
    >
      <Icon
        icon={icon}
        className={`${type !== "primary" && "text-[var(--primary)]"} mr-4 text-2xl`}
      />
      {label}
    </button>
  );
};

export default ActionButton;
