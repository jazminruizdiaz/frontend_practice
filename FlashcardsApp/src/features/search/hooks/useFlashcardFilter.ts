import { useState, useEffect } from "react";
import type { FlashcardType } from "../../../shared/types/FlashcardType";
import type { SearchType } from "../../../shared/types/SearchType";
import { filterFlashcards } from "../services/filterService";

export const useFlashcardsFilter = (flashcards: FlashcardType[]) => {
  const [filteredFlashcards, setFilteredFlashcards] =
    useState<FlashcardType[]>(flashcards);

  // we need to update the filtered flashcards when original flashcards change
  useEffect(() => {
    setFilteredFlashcards(flashcards);
  }, [flashcards]);

  const handleSearch = (filters: SearchType) => {
    const filtered = filterFlashcards(flashcards, filters);
    setFilteredFlashcards(filtered);
  };

  return {
    filteredFlashcards,
    handleSearch,
  };
};
