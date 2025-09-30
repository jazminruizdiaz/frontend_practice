import React from "react";
import "../../styles/no-result.css";

interface NoResultMessageProps {
  message: string;
}

const NoResultMessage: React.FC<NoResultMessageProps> = ({ message }) => {
  return (
    <div className="no-result">
      <p className="no-result__text">{message}</p>
    </div>
  );
};

export default NoResultMessage;
