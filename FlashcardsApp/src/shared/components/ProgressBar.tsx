import React from "react";
import type { FlashcardType } from "../types/FlashcardType";
import "../../styles/progress-bar.css";

interface ProgressBarProps {
  flashcards: FlashcardType[];
  currentIndex?: number;
  mode?: "learned" | "position";
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  flashcards,
  currentIndex = 0,
  mode = "learned",
}) => {
  const totalCards = flashcards.length;

  let progressPercentage = 0;
  let label = "";

  if (mode === "position") {
    // here we calcute the progress based on the number of cards reviewed "position"
    progressPercentage =
      totalCards > 0 ? Math.round(((currentIndex + 1) / totalCards) * 100) : 0;
    label = `${currentIndex + 1} / ${totalCards} card(s) reviewed`;
  } else if (mode === "learned") {
    // here progress is calculated bssen on the learned cards
    const learnedCards = flashcards.filter((card) => card.learned).length;
    progressPercentage =
      totalCards > 0 ? Math.round((learnedCards / totalCards) * 100) : 0;
    label = `${learnedCards} card(s) learned`;
  }

  return (
    <div className="progress-bar__container">
      <div className="progress-bar__stats">
        <span>{label}</span>
        <div className="progress-bar__graph">
          <div
            className="progress-bar--fill"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
