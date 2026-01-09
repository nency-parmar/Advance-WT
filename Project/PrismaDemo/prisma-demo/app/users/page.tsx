import { prisma } from '@/lib/prisma'
import { users } from '@/app/generated/prisma/client';
import Link from 'next/link';
import React from 'react';
import DeleteButton from '../ui/DeleteButton';

async function UserList() {
    const data = await prisma.users.findMany();

    return (
        <div className="container mt-5">
            <div className="card shadow-lg border-0">
                <div
                    className="card-header text-center text-white"
                    style={{ backgroundColor: "#0d1b2a" }}
                >
                    <h4 className="mb-0">User Management</h4>
                </div>

                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle text-center">
                            <thead style={{ backgroundColor: "#1b263b", color: "#fcbf49" }}>
                                <tr>
                                    <th>User Name</th>
                                    <th>Details</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    data.map((u: users) => (
                                        <tr key={u.UserID}>
                                            <td className="fw-semibold">{u.UserName}</td>
                                            <td>
                                                <Link
                                                    href={"/users/" + u.UserID}
                                                    className="btn btn-sm"
                                                    style={{ backgroundColor: "#fcbf49", color: "#0d1b2a" }}
                                                >
                                                    Detail
                                                </Link>
                                            </td>
                                            <td>
                                                <Link
                                                    href={"/users/edit/" + u.UserID}
                                                    className="btn btn-sm btn-primary"
                                                >
                                                    Edit
                                                </Link>
                                            </td>
                                            <td>
                                                <DeleteButton id={u.UserID} />
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>

                    {
                        data.length === 0 && (
                            <p className="text-center text-muted">No users found</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default UserList
