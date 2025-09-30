import React from "react";

interface CardContentProps {
  content: string;
}

const CardContent: React.FC<CardContentProps> = ({ content }) => (
  <div className="card__content">{content}</div>
);

export default CardContent;
