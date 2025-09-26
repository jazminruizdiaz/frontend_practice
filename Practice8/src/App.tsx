import "./App.css";
import ColorManager from "./components/ColorManager/ColorManager";
import WindowSizeTracker from "./components/WindowSizeTracker/WindowSizeTracker";
import FormWithValidation from "./components/FormValidation/FormWithValidation";

function App() {
  return (
    <main className="app">
      <section className="color-manager">
        <ColorManager />
      </section>

      <section className="size-tracker">
        <WindowSizeTracker />
      </section>

      <section className="form">
        <FormWithValidation />
      </section>
    </main>
  );
}

export default App;
