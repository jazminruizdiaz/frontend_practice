import React, { useState } from "react";
import "../../../styles/flashcard.css";
import type { FlashcardType } from "../../../shared/types/FlashcardType";
import CardActions from "./CardActions";
import { useNavigate } from "react-router-dom";
import CardContent from "./CardContent";

interface FlashcardProps {
  flashcard: FlashcardType;
  onDelete: (id: string) => void;
  showActions?: boolean;
}

const Flashcard: React.FC<FlashcardProps> = ({
  flashcard,
  onDelete,
  showActions,
}) => {
  const [flip, setFlip] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setFlip(!flip);
  };

  const handleEdit = () => {
    navigate(`/edit/${flashcard.id}`);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this card?")) {
      onDelete(flashcard.id);
    }
  };

  return (
    <div className={`card ${flip ? "card--flip" : ""}`}>
      <div
        className={`card__side card__side--front card--${flashcard.topic.toLowerCase()}`}
        onClick={handleClick}
      >
        {showActions && (
          <div className="card__header">
            <CardActions onEdit={handleEdit} onDelete={handleDelete} />
          </div>
        )}

        <CardContent content={flashcard.question} />

        <div className="card__footer">
          <div className="card__topic">{flashcard.topic}</div>
          {showActions && (
            <div
              className={`card__learned ${flashcard.learned ? "learned" : ""}`}
            >
              {flashcard.learned ? "Learned" : "Not Learned"}
            </div>
          )}
        </div>
      </div>

      <div
        className={`card__side card__side--back card--${flashcard.topic.toLowerCase()}`}
        onClick={handleClick}
      >
        {showActions && (
          <div className="card__header">
            <CardActions onEdit={handleEdit} onDelete={handleDelete} />
          </div>
        )}

        <CardContent content={flashcard.answer} />

        <div
          className={`card__footer card__footer--${flashcard.topic.toLowerCase()}`}
        >
          <div className="card__topic">{flashcard.topic}</div>
          {showActions && (
            <div
              className={`card__learned ${flashcard.learned ? "learned" : ""}`}
            >
              {flashcard.learned ? "Learned" : "Not Learned"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
