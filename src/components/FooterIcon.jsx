import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const FooterIcon = ({ icon }) => {
  return (
    <div>
      <Icon icon={icon} className="h-6 w-6 text-[var(--gray)]" />
    </div>
  );
};

export default FooterIcon;
