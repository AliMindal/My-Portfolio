import React from "react";
import Menu from "./Menu/Menu";
import Button from "../../UI/Button/Button";
import logo from '../../../img/Ali.dev-logo001.webp';

const Navbar = () => {
  return (
    <div className="sm:section-container flex justify-between p-5 sm:p-10 items-center">
      <img src={logo} alt="Logo" className="h-[100px] w-auto" />
      <div className="flex justify-between w-[28rem] items-center">
        <Menu />
        <Button
          link="#contact"
          name="Contact"
          classes="bg-purple-600 hover:bg-purple-800"
        />
      </div>
    </div>
  );
};

export default Navbar;
