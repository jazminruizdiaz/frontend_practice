import React, { useState } from "react";
import ColorSwatch from "./ColorSwatch";

const ColorManager: React.FC = () => {
  const [colorInput, setColorInput] = useState("");
  const [colors, setColors] = useState<string[]>([]);

  const handleColorInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColorInput(event.target.value);
  };

  const handleAddColor = () => {
    const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    const isValidHex = hexRegex.test(colorInput);

    if (isValidHex) {
      setColors([...colors, colorInput]);
      setColorInput("");
    } else {
      alert("Invalid hexadecimal code");
    }
  };

  const handleColorClick = (color: string) => {
    document.body.style.backgroundColor = color;
  };

  return (
    <div className="color-manager__container">
      <input
        type="text"
        className="color-manager__input"
        value={colorInput}
        onChange={handleColorInput}
      />
      <button className="button" onClick={handleAddColor}>
        Add color
      </button>

      <div className="color-manager__swatches">
        {colors.map((color, index) => (
          <ColorSwatch key={index} color={color} onClick={handleColorClick} />
        ))}
      </div>
    </div>
  );
};

export default ColorManager;
