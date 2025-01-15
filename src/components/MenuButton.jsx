import React, { useState } from "react";

const MenuButton = ({ onClick }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    if (onClick) {
      onClick();
    }
  };

  return (
    <button onClick={handleClick} className="z-50 size-10 md:hidden">
      <div className="group flex flex-col justify-center gap-y-1">
        <span
          className={`h-[3px] w-7 rounded-full bg-[var(--light)] duration-200 ${
            clicked && "top-15 absolute rotate-45"
          }`}
        ></span>
        <span
          className={`mid h-[3px] w-7 rounded-full bg-[var(--light)] duration-200 ${
            clicked && "opacity-0"
          }`}
        ></span>
        <span
          className={`bot h-[3px] w-7 rounded-full bg-[var(--light)] duration-200 ${
            clicked && "top-15 absolute -rotate-45"
          }`}
        ></span>
      </div>
    </button>
  );
};

export default MenuButton;
