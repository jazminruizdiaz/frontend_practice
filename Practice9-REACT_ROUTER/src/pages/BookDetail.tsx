import { useParams, useNavigate } from "react-router-dom";
import { books } from "../data/books";

export default function BookDetail() {
  const { bookId } = useParams();
  const navigate = useNavigate();

  const book = books.find((b) => b.id === bookId);

  if (!book) {
    navigate("/not-found", { replace: true });
    return null;
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
