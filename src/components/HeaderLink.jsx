import React from "react";

const HeaderLink = ({ section, label }) => {
  const handleScroll = () => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <button
      onClick={handleScroll}
      className="border-[var(--primary)] font-spaceMono font-medium uppercase tracking-widest text-[var(--white)] duration-150 hover:-translate-y-1 hover:border-b hover:text-[var(--primary)]"
    >
      {label}
    </button>
  );
};

export default HeaderLink;
