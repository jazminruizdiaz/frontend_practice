import "./styles/app.css";
import FlashcardsDashboard from "./features/flashcards/pages/FlashcardsDashboard";
import FlashCardsForms from "./features/flashcards/pages/FlashCardsForms";
import { Route, Routes } from "react-router-dom";
import StudyMode from "./features/study/pages/StudyMode";
import { useFlashcards } from "./features/flashcards/hooks/useFlashcards";
import Header from "./shared/components/Header";

function App() {
  const { flashcards, addFlashcard, updateFlashcard, deleteFlashcard } =
    useFlashcards();

  return (
    <div className="app">
      <main className="app-main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header title="Study App" />
                <FlashcardsDashboard
                  flashcards={flashcards}
                  onDelete={deleteFlashcard}
                />
              </>
            }
          />

          <Route
            path="/add"
            element={<FlashCardsForms formType="add" onSave={addFlashcard} />}
          />
          <Route
            path="/edit/:id"
            element={
              <FlashCardsForms
                formType="edit"
                onSave={updateFlashcard}
                flashcards={flashcards}
              />
            }
          />

          <Route
            path="/study"
            element={
              <StudyMode
                flashcards={flashcards}
                onUpdateFlashcard={updateFlashcard}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
