import { lazy, Suspense, useState } from "react";
import Form from "./Exercise2/components/Form";
import Loading from "./Exercise3/components/Loading";
import CharacterCounter from "./Exercise1/components/CharacterCounter";

const Modal = lazy(() => import("./Exercise3/components/Modal"));

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <CharacterCounter />
      <Form />

      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      {isOpen && (
        <Suspense fallback={<Loading />}>
          <Modal onClose={() => setIsOpen(false)} />
        </Suspense>
      )}
    </>
  );
}

export default App;
