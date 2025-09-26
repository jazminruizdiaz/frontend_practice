import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome to my books</h1>
      <Link to="/books">Go to Book List</Link>
    </div>
  );
}
