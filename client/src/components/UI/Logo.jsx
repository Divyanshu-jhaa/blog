import React from "react";

const Logo = (props) => {
  return (
    <div
      className={`w-fit font-Michroma text-[1.5rem] font-[600] ${props.className}`}
    >
      BlogSite
    </div>
  );
};

export default Logo;
