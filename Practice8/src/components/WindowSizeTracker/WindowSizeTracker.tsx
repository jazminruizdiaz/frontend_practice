import { useState, useEffect } from "react";

const WindowSizeTracker: React.FC = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="size">
      <p className="size__width">Width: {windowSize.width}</p>
      <p className="size__height">Height: {windowSize.height}</p>
    </div>
  );
};

export default WindowSizeTracker;
