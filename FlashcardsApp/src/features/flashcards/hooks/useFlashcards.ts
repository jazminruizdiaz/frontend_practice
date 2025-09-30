import { useState, useEffect } from "react";
import type { FlashcardType } from "../../../shared/types/FlashcardType";
import * as storageServices from "../services/storageService";

export const useFlashcards = () => {
  const [flashcards, setFlashcards] = useState<FlashcardType[]>([]);

  useEffect(() => {
    const loadedFlashcards = storageServices.loadFlashcards();
    setFlashcards(loadedFlashcards);
  }, []);

  // save the flashcards to localstorage whenever they change
  useEffect(() => {
    if (flashcards.length > 0) {
      storageServices.saveFlashcards(flashcards);
    }
  }, [flashcards]);

  const addFlashcard = (cardData: Omit<FlashcardType, "id">) => {
    const newCard: FlashcardType = {
      id: Date.now().toString(),
      ...cardData,
      learned: false,
    };

    setFlashcards((prevState) => [...prevState, newCard]);
  };

  const updateFlashcard = (updatedCard: FlashcardType) => {
    setFlashcards((prevState) =>
      prevState.map((card) => (card.id === updatedCard.id ? updatedCard : card))
    );
  };

  const deleteFlashcard = (id: string) => {
    setFlashcards((prevState) => prevState.filter((card) => card.id !== id));
  };

  return {
    flashcards,
    addFlashcard,
    updateFlashcard,
    deleteFlashcard,
  };
};
