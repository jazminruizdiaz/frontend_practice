import React from "react";
import type { FlashcardType } from "../../../shared/types/FlashcardType";
import type { SearchType } from "../../../shared/types/SearchType";
import ProgressBar from "../../../shared/components/ProgressBar";
import "../../../styles/navigation-bar.css";
import Button from "../../../shared/components/Button";
import Search from "./Search";

interface NavigationBarProps {
  flashcards: FlashcardType[];
  onSearch: (filters: SearchType) => void;
}
const NavigationBar: React.FC<NavigationBarProps> = ({
  flashcards,
  onSearch,
}) => {
  return (
    <div className="nav-bar">
      <div className="nav-bar__section nav-bar__section--search">
        <Search onSearch={onSearch} />
      </div>

      <div className="nav-bar__section nav-bar__section--study">
        <div className="nav-bar__progress">
          <ProgressBar flashcards={flashcards} mode="learned" />
        </div>

        <div className="nav-bar__button">
          <Button
            to="/study"
            variant="primary"
            label="Study Mode"
            state={{ flashcards }}
          />
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
