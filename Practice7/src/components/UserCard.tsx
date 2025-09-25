import React from "react";

type UserCardProps = {
  name: string;
  age: number;
  onClick: (name: string) => void;
};

const UserCard: React.FC<UserCardProps> = ({ name, age, onClick }) => {
  const handleClick = () => {
    onClick(name);
  };

  return (
    <article className="user-card" onClick={handleClick}>
      <h2 className="user-card__name">{name}</h2>
      <p className="user-card__age">Age: {age}</p>
    </article>
  );
};

export default UserCard;
