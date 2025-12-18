"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function UserDashboard() {
    return (
        <div className="d-flex" style={{ minHeight: "100vh" }}>
            <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
                <h4 className="text-center mb-4">User Panel</h4>
                <ul className="list-unstyled">
                    <li className="mb-3"><a href="/user" className="text-white text-decoration-none">Dashboard</a></li>
                    <li className="mb-3"><a href="#" className="text-white text-decoration-none">Profile</a></li>
                    <li className="mb-3"><a href="#" className="text-white text-decoration-none">Orders</a></li>
                    <li className="mb-3"><a href="#" className="text-white text-decoration-none">Notifications</a></li>
                    <li className="mb-3"><a href="#" className="text-white text-decoration-none">Settings</a></li>
                </ul>
            </div>

            <div className="flex-grow-1 p-4 bg-light">

                <div className="row g-4">
                    <div className="col-md-3">
                        <div className="card text-center shadow">
                            <div className="card-body">
                                <h5>Orders Placed</h5>
                                <h2>15</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card text-center shadow">
                            <div className="card-body">
                                <h5>Pending Orders</h5>
                                <h2>3</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card text-center shadow">
                            <div className="card-body">
                                <h5>Notifications</h5>
                                <h2>5</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card text-center shadow">
                            <div className="card-body">
                                <h5>Wallet Balance</h5>
                                <h2>₹2,500</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h4>Recent Activity</h4>
                    <ul className="list-group">
                        <li className="list-group-item">Order #101 Delivered</li>
                        <li className="list-group-item">New message from admin</li>
                        <li className="list-group-item">Order #102 Pending</li>
                    </ul>
                </div>

                <div className="mt-4 d-flex gap-2">
                    <button className="btn btn-primary">Place New Order</button>
                    <button className="btn btn-secondary">Request Support</button>
                </div>
            </div>
        </div>
    );
}
