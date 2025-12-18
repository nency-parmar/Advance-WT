"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  phone: string;
  email: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchId, setSearchId] = useState("");

  useEffect(() => {
    fetch("https://6942a7e769b12460f3123ec7.mockapi.io/users")
      .then(res => res.json())
      .then((data: User[]) => setUsers(data));
  }, []);

  const filteredUsers = users.filter(user =>
    user.id.includes(searchId)
  );

  return (
    <div className="container mt-4" style={{ minHeight: "100vh" }}>
      <h2 className="text-center mb-3">User List</h2>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by User ID..."
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
      </div>

      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map(user => (
              <tr key={user.id}>
                <td className="table-primary">{user.id}</td>
                <td className="table-success">{user.name}</td>
                <td className="table-warning">{user.phone}</td>
                <td className="table-info">{user.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center text-danger">
                No user found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}