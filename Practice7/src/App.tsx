import "./App.css";
import ControlledUncontrolledForm from "./components/ControlledUncontrolledForm";
import UserCard from "./components/UserCard";
import UserList from "./components/UserList";
import KeyboardControlledCounter from "./components/KeyboardControlledCounter";

const App: React.FC = () => {
  const handleCardClick = (name: string): void => {
    alert(`Hello, ${name}!`);
  };
  return (
    <main className="app">
      <section className="app__section app__section--form">
        <h1 className="app__title">
          Exercise 1: Controlled vs Uncontrolled Components
        </h1>
        <ControlledUncontrolledForm />
      </section>

      <section className="app__section app__section--user-card">
        <h1 className="app__title">Exercise 2: UserCard</h1>
        <div className="user-cards">
          <UserCard name="Juan Pérez" age={30} onClick={handleCardClick} />
          <UserCard name="Ana García" age={25} onClick={handleCardClick} />
        </div>
      </section>

      <section className="app__section app__section--user-list">
        <h1 className="app__title">Exercise 3: User List Refactoring</h1>
        <UserList />
      </section>

      <section className="app__section app__section--counter">
        <h1 className="app__title">Exercise 4: Events</h1>
        <KeyboardControlledCounter />
      </section>
    </main>
  );
};

export default App;
