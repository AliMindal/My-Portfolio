import React from "react";
import { IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
const Social = () => {
  return (
    <div className="flex gap-2 mt-14">
      <a
        href="https://www.instagram.com/mindal_secret_code/"
        target="_blank"
        rel="noreferrer"
      >
        <IoLogoInstagram size={30} className="hover:opacity-70" />
      </a>
      <a
        href="https://www.linkedin.com/in/ali-osman-987624224"
        target="_blank"
        rel="noreferrer"
      >
        <IoLogoLinkedin size={30} className="hover:opacity-70" />
      </a>
      <a href="https://github.com/AliMindal" target="_blank" rel="noreferrer">
        <IoLogoGithub size={30} className="hover:opacity-70" />
      </a>
    </div>
  );
};

export default Social;
