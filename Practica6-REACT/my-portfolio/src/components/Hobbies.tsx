type Hobbie = {
  id: number;
  name: string;
  icon: string;
};

const hobbies: Hobbie[] = [
  { id: 1, name: "Photography", icon: "📷" },
  { id: 2, name: "Traveling", icon: "✈️" },
  { id: 3, name: "Cooking", icon: "🍳" },
  { id: 4, name: "Reading", icon: "📚" },
];

const Hobbies = () => {
  return (
    <section className="hobbies">
      <div className="hobbies__container">
        <h2 className="hobbies__title">Hobbies & Interests</h2>
        <div className="hobbies__grid">
          {hobbies.map((hobby) => (
            <div className="hobbies__item" key={hobby.id}>
              <span className="hobbies__icon">{hobby.icon}</span>
              <span className="hobbies__name">{hobby.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Hobbies;
