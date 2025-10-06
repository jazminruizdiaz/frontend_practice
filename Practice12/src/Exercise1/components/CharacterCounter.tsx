import { useMemo, useState } from "react";

const calculateWordLength = (words: string[]) =>
  words.reduce((acc, word) => acc + word.length, 0);

export default function CharacterCounter() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const totalCharacters = text.length;
    const words = text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);
    const totalWords = words.length;
    const readingTime = Math.ceil(totalWords / 200);
    const avgWordLength =
      totalWords > 0 ? calculateWordLength(words) / totalWords : 0;

    return {
      totalCharacters,
      totalWords,
      readingTime,
      avgWordLength,
    };
  }, [text]);

  return (
    <div className="counter">
      <h2 className="counter__title">Character Counter</h2>
      <textarea
        className="counter__textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe algo aquí..."
      />
      <div className="counter__stats">
        <div className="counter__stat">
          <p className="counter__stat-label">Characters</p>
          <p className="counter__stat-value">{stats.totalCharacters}</p>
        </div>
        <div className="counter__stat">
          <p className="counter__stat-label">Words</p>
          <p className="counter__stat-value">{stats.totalWords}</p>
        </div>
        <div className="counter__stat">
          <p className="counter__stat-label">Reading Time (min)</p>
          <p className="counter__stat-value">{stats.readingTime}</p>
        </div>
        <div className="counter__stat">
          <p className="counter__stat-label">Avg Word Length</p>
          <p className="counter__stat-value">
            {stats.avgWordLength.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
