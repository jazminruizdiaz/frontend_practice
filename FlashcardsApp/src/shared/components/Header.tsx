import React from "react";
import "../../styles/header.css";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
    </header>
  );
};

export default Header;
