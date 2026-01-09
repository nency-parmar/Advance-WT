import React from "react";
import mysql from "mysql2/promise";

export default async function Home() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Nency@0707",
    database: "demo",
  });

  try {
    const [results] = await connection.query("SELECT * FROM users");
    const data = results as any[];
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {data.map((u: any) => (
              <tr key={u.id}>
                <td>{u.first_name}</td>
                <td>{u.last_name}</td>
                <td>{u.email}</td>
                <td>{u.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } catch (err) {
    console.log(err);
  }
}

