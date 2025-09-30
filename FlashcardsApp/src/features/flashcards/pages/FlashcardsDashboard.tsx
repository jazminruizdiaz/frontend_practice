import Flashcard from "../components/Flashcard";
import type { FlashcardType } from "../../../shared/types/FlashcardType";
import { Link } from "react-router-dom";
import NavigationBar from "../../search/components/NavigationBar";
import NoResultMessage from "../../../shared/components/NoResultMessage";
import { useFlashcardsFilter } from "../../search/hooks/useFlashcardFilter";
import "../../../styles/dashboard.css";

interface FlashcardsDashboardProps {
  flashcards: FlashcardType[];
  onDelete: (id: string) => void;
}

const FlashcardsDashboard: React.FC<FlashcardsDashboardProps> = ({
  flashcards,
  onDelete,
}) => {
  const { filteredFlashcards, handleSearch } = useFlashcardsFilter(flashcards);

  const showNoCardsMessage = flashcards.length === 0;
  const showNoMatchMessage =
    flashcards.length > 0 && filteredFlashcards.length === 0;

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <NavigationBar flashcards={flashcards} onSearch={handleSearch} />
      </div>
      <div className="dashboard__content">
        <div className="dashboard__grid">
          <Link
            to="/add"
            className="dashboard__add-button"
            title="Add New Flashcard"
          >
            <span className="dashboard__add-icon">➕</span>
          </Link>

          {filteredFlashcards.map((flashcard: FlashcardType) => (
            <Flashcard
              key={flashcard.id}
              flashcard={flashcard}
              onDelete={onDelete}
              showActions={true}
            />
          ))}
        </div>

        {showNoCardsMessage && (
          <NoResultMessage message="No flashcards available. Start by adding a new one." />
        )}

        {showNoMatchMessage && (
          <NoResultMessage message="No flashcards found matching your search criteria." />
        )}
      </div>
    </div>
  );
};

export default FlashcardsDashboard;
