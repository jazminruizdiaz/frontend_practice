import { useParams, Navigate } from "react-router-dom";
import { books } from "../data/books";

export default function BookDetail() {
  const { bookId } = useParams();

  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return <Navigate to="/not-found" />;
  }

  return (
    <div>
      <h1>Book detail</h1>
      <p>Title: {book?.title}</p>
      <p>Author: {book?.author} </p>
      <p>Description: {book?.description} </p>
    </div>
  );
}
