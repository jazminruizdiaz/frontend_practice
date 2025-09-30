import { useState, useEffect } from "react";
import type { FlashcardType } from "../../../shared/types/FlashcardType";
import ProgressBar from "../../../shared/components/ProgressBar";
import Flashcard from "../../flashcards/components/Flashcard";
import { useNavigate } from "react-router-dom";
import Button from "../../../shared/components/Button";
import Header from "../../../shared/components/Header";
import "../../../styles/study-mode.css";
import NoResultMessage from "../../../shared/components/NoResultMessage";

interface StudyModeProps {
  flashcards: FlashcardType[];
  onUpdateFlashcard: (flashcard: FlashcardType) => void;
}

const StudyMode: React.FC<StudyModeProps> = ({
  flashcards,
  onUpdateFlashcard,
}) => {
  const navigate = useNavigate();
  const [studyCards, setStudyCards] = useState<FlashcardType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBackButton, setShowBackButton] = useState(false);

  useEffect(() => {
    if (flashcards.length > 0 && studyCards.length === 0) {
      setStudyCards([...flashcards]);
    }
  }, [flashcards]);

  const currentCard = studyCards[currentIndex];
  const totalCards = studyCards.length;

  const advanceToNextCard = () => {
    if (currentIndex < totalCards - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowBackButton(true);
    }
  };

  const shuffleDeck = () => {
    const shuffled = [...flashcards].sort(() => Math.random() - 0.5);
    setStudyCards(shuffled);
    setCurrentIndex(0);
  };

  const updateCard = (learned: boolean) => {
    const updatedCard = { ...currentCard, learned };

    // we need to update in the local array as well
    const updatedStudyCards = studyCards.map((card) =>
      card.id === updatedCard.id ? updatedCard : card
    );

    setStudyCards(updatedStudyCards);

    onUpdateFlashcard(updatedCard);

    advanceToNextCard();
  };

  const handleBackToDashboard = () => {
    navigate("/");
  };

  if (studyCards.length === 0) {
    return (
      <div className="study-mode">
        <div className="study-mode__empty">
          <NoResultMessage message="No flashcards available" />
          <Button
            label="Back to Dashboard"
            variant="primary"
            onClick={handleBackToDashboard}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="study-mode">
      <div className="study-mode__header">
        <Header title="Study Mode" />
        {currentIndex === 0 && (
          <Button label="Shuffle" variant="primary" onClick={shuffleDeck} />
        )}
      </div>

      <div className="study-mode__progress">
        <ProgressBar
          flashcards={studyCards}
          currentIndex={currentIndex}
          mode="position"
        />
      </div>

      <div className="study-mode__card">
        <Flashcard
          flashcard={currentCard}
          showActions={false}
          onDelete={() => {}}
        />
      </div>

      <div className="study-mode__actions">
        <div className="study-mode__status">
          <Button
            label="Needs Revision"
            variant="revision"
            onClick={() => updateCard(false)}
          />
          <Button
            label="Learned"
            variant="learned"
            onClick={() => updateCard(true)}
          />
        </div>

        {showBackButton && (
          <div className="study-mode__finish">
            <Button
              label="Back to Dashboard"
              variant="primary"
              onClick={handleBackToDashboard}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default StudyMode;
