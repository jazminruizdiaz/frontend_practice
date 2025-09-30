import type { FlashcardType } from "../../../shared/types/FlashcardType";

const STORAGE_KEY = "flashcards";

export const loadFlashcards = (): FlashcardType[] => {
  try {
    const storedFlashcards = localStorage.getItem(STORAGE_KEY);
    const parsed = storedFlashcards ? JSON.parse(storedFlashcards) : [];
    return parsed;
  } catch (error) {
    console.log("Error loading flashcards ", error);
    return [];
  }
};

export const saveFlashcards = (flashcards: FlashcardType[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(flashcards));
  } catch (error) {
    console.log("Error saving flashcards", error);
  }
};
