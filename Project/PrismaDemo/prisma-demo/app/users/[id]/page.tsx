import { prisma } from '@/lib/prisma'
import Link from 'next/link';
import React from 'react'

async function DetailUser({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params;

    const data = await prisma.users.findFirst({
        where: { UserID: Number(id) },
        include: {
            task: true
        }
    });

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">

                    <div className="card shadow-lg border-0">

                        <div
                            className="card-header text-white text-center"
                            style={{ backgroundColor: "#0d1b2a" }}
                        >
                            <h5 className="mb-0">User Details</h5>
                        </div>

                        <div className="card-body">

                            <h4 className="text-center fw-bold mb-4" style={{ color: "#1b263b" }}>
                                {data?.UserName}
                            </h4>

                            <h6 className="fw-semibold mb-2">Assigned Tasks</h6>

                            {
                                data?.task.length === 0 && (
                                    <p className="text-muted">No tasks assigned</p>
                                )
                            }

                            <ul className="list-group mb-4">
                                {
                                    data?.task.map((t: any) => (
                                        <li
                                            key={t.TaskID}
                                            className="list-group-item d-flex justify-content-between"
                                        >
                                            {t.TaskTitle}
                                            <span className="badge bg-warning text-dark">
                                                Task
                                            </span>
                                        </li>
                                    ))
                                }
                            </ul>

                            <div className="text-center">
                                <Link
                                    href={"/users"}
                                    className="btn fw-semibold"
                                    style={{ backgroundColor: "#fcbf49", color: "#0d1b2a" }}
                                >
                                    Back to Users
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DetailUser;
