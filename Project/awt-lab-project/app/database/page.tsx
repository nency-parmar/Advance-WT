import React from "react";
import mysql from "mysql2/promise";
import "bootstrap/dist/css/bootstrap.min.css";

export default async function Home() {
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Nency@0707",
        database: "demo",
    });

    try {
        const [results] = await connection.query("SELECT * FROM awt_user");
        const data = results as any[];

        return (
            <div className="container mt-4">
                <h2 className="text-center mb-3">User Details</h2>

                <table className="table table-bordered table-hover table-light">
                    <thead className="table-dark">
                        <tr>
                            <th className="table-primary">ID</th>
                            <th className="table-success">Name</th>
                            <th className="table-warning">Phone</th>
                            <th className="table-info">Email</th>
                            <th className="table-secondary">City</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((u: any) => (
                            <tr key={u.id} className="table-light">
                                <td className="table-primary">{u.id}</td>
                                <td className="table-success">{u.name}</td>
                                <td className="table-warning">{u.phone}</td>
                                <td className="table-info">{u.email}</td>
                                <td className="table-secondary">{u.city}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    } catch (err) {
        console.error(err);
        return <p className="text-danger text-center">Error loading data</p>;
    }
}
