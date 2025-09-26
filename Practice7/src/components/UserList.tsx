import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
}
const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();

        setUsers(data);
      } catch (error) {
        console.error("Error fetching users", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="user-list">
        <p className="user-list__loading">Loading...</p>
      </div>
    );
  }

  return (
    <ul className="user-list__items">
      {users.map((user) => (
        <li key={user.id} className="user-list__item">
          {user.name}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
