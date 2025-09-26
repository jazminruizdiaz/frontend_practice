import { Link } from "react-router-dom";
import { books } from "../data/books";

export default function BookList() {
  return (
    <div>
      <h2>Book List</h2>

      {books.map((book) => (
        <div key={book.id}>
          <Link to={`/books/${book.id}`}>
            <strong>{book.title}</strong> by {book.author}
          </Link>
        </div>
      ))}
    </div>
  );
}
