import React from "react";

interface CardActionsProps {
  onEdit: () => void;
  onDelete: () => void;
}

const CardActions: React.FC<CardActionsProps> = ({ onEdit, onDelete }) => {
  return (
    <div className="card__actions">
      <button
        className="card__action card__action--edit"
        title="Edit flashcard"
        onClick={onEdit}
      >
        ✏️
      </button>
      <button
        className="card__action card__action--delete"
        title="Delete flashcard"
        onClick={onDelete}
      >
        🗑️
      </button>
    </div>
  );
};

export default CardActions;
