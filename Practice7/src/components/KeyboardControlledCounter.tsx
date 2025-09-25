import { useEffect, useState } from "react";
const KeyboardControlledCounter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
          increment();
          break;
        case "ArrowDown":
          decrement();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="counter">
      <h2 className="counter__title">Counter</h2>
      <input
        type="number"
        className="counter__display"
        value={count}
        readOnly
      />
      <div className="counter__controls">
        <button onClick={increment}>+</button>
        <button onClick={decrement} disabled={count === 0}>
          -
        </button>
      </div>
    </div>
  );
};

export default KeyboardControlledCounter;
