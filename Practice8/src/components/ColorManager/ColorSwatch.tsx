import React from "react";

/* 
red: #FF0000
white: #FFFFFF
blue: #0000ff
*/

type ColorSwatchProps = {
  color: string;
  onClick: (color: string) => void;
};

const ColorSwatch: React.FC<ColorSwatchProps> = ({ color, onClick }) => {
  const handleClick = () => {
    onClick(color);
  };
  return (
    <div
      className="color-swatch"
      onClick={handleClick}
      title={color}
      style={{ backgroundColor: color }}
    />
  );
};

export default ColorSwatch;
