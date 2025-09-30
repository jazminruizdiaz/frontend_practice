import type { FlashcardType } from "../../../shared/types/FlashcardType";
import type { SearchType } from "../../../shared/types/SearchType";

export const filterFlashcards = (
  flashcards: FlashcardType[],
  filters: SearchType
): FlashcardType[] => {
  let filtered = flashcards;

  //filter by topic
  if (filters.topic && filters.topic !== "all") {
    filtered = filterByTopic(filtered, filters.topic);
  }

  //filter by keyword (question AND answer)
  if (filters.keyword && filters.keyword.trim() !== "") {
    filtered = filterByKeyword(filtered, filters.keyword);
  }

  return filtered;
};

const filterByTopic = (
  flashcards: FlashcardType[],
  topic: string
): FlashcardType[] => {
  return flashcards.filter(
    (card) => card.topic.toLowerCase() === topic.toLowerCase()
  );
};

const filterByKeyword = (
  flashcards: FlashcardType[],
  keyword: string
): FlashcardType[] => {
  const toLowerKeyword = keyword.toLowerCase().trim();
  return flashcards.filter(
    (card) =>
      card.question.toLowerCase().includes(toLowerKeyword) ||
      card.answer.toLowerCase().includes(toLowerKeyword)
  );
};
