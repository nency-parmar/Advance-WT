import { AddUserAction } from '@/app/actions/AddUserAction'
import React from 'react'

function AddUser() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">

                    <div className="card shadow-lg border-0">

                        <div
                            className="card-header text-center text-white"
                            style={{ backgroundColor: "#0d1b2a" }}
                        >
                            <h5 className="mb-0">Add User & Task</h5>
                        </div>

                        <div className="card-body">

                            <form action={AddUserAction}>

                                <h6 className="fw-bold mb-3" style={{ color: "#1b263b" }}>
                                    User Details
                                </h6>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">User Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="UserName"
                                        placeholder="Enter user name"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label fw-semibold">Password</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="Password"
                                        placeholder="Enter password"
                                        required
                                    />
                                </div>

                                <hr />

                                <h6 className="fw-bold mb-3" style={{ color: "#1b263b" }}>
                                    Task Details
                                </h6>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Task Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="TaskTitle"
                                        placeholder="Task 1"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Task Description</label>
                                    <textarea
                                        className="form-control"
                                        name="TaskDescription"
                                        rows={3}
                                        placeholder="Task description"
                                    ></textarea>
                                </div>

                                <div className="mb-4">
                                    <label className="form-label fw-semibold">Task Status</label>
                                    <select className="form-select" name="IsCompleted">
                                        <option value="false">Not Completed</option>
                                        <option value="true">Completed</option>
                                    </select>
                                </div>

                                <div className="d-grid">
                                    <button
                                        type="submit"
                                        className="btn fw-semibold"
                                        style={{ backgroundColor: "#fcbf49", color: "#0d1b2a" }}
                                    >
                                        Save User & Task
                                    </button>
                                </div>

                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddUser;
