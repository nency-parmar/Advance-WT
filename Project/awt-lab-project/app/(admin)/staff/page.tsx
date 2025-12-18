"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function StaffDashboard() {
    const [orderId, setOrderId] = useState("");
    const [searchResult, setSearchResult] = useState("");

    const orders = [
        { id: "101", name: "Shoes" },
        { id: "102", name: "Watch" },
        { id: "103", name: "Glasses" },
        { id: "104", name: "iPad" },
        { id: "105", name: "iPhone" },
        { id: "106", name: "i-Watch" },
        { id: "107", name: "Airpods" },
        { id: "108", name: "MacBook" },
        { id: "109", name: "Jacket" },
        { id: "110", name: "Perfume" }
    ];

    const handleSearch = (e: any) => {
        e.preventDefault();
        const query = orderId.trim().toUpperCase();
        const order = orders.find(o => o.id === query);
        if (order) {
            setSearchResult(`Found: ${order.name}`);
        } else if (query !== "") {
            setSearchResult("Order not found");
        } else {
            setSearchResult("Please enter an Order ID");
        }
    };

    return (
        <div className="d-flex" style={{ minHeight: "100vh" }}>
            <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
                <h4 className="text-center mb-4">Staff Panel</h4>
                <ul className="list-unstyled">
                    <li className="mb-3"><a href="/staff" className="text-white text-decoration-none">Dashboard</a></li>
                    <li className="mb-3"><a href="#" className="text-white text-decoration-none">Tasks</a></li>
                    <li className="mb-3"><a href="#" className="text-white text-decoration-none">Orders</a></li>
                    <li className="mb-3"><a href="#" className="text-white text-decoration-none">Notifications</a></li>
                    <li className="mb-3"><a href="#" className="text-white text-decoration-none">Profile</a></li>
                </ul>
            </div>

            <div className="flex-grow-1 p-4 bg-light">
                <form className="mb-4 d-flex gap-2" onSubmit={handleSearch}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by Order ID"
                        value={orderId}
                        onChange={(e) => setOrderId(e.target.value)}
                    />
                    <button className="btn btn-primary" type="submit">Search</button>
                </form>

                {searchResult && (
                    <div className="alert alert-info">{searchResult}</div>
                )}

                <div className="row g-4">
                    <div className="col-md-3">
                        <div className="card text-center shadow">
                            <div className="card-body">
                                <h5>Pending Orders</h5>
                                <h2>8</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card text-center shadow">
                            <div className="card-body">
                                <h5>Completed Orders</h5>
                                <h2>22</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card text-center shadow">
                            <div className="card-body">
                                <h5>Orders Handled</h5>
                                <h2>30</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h4>Orders List</h4>
                    <ul className="list-group mb-4">
                        {orders.map(o => (
                            <li key={o.id} className="list-group-item">{o.id} - {o.name}</li>
                        ))}
                    </ul>
                </div>

                <div className="mt-4 d-flex gap-2">
                    <button className="btn btn-primary">Update Task</button>
                    <button className="btn btn-success">Mark Order Complete</button>
                </div>
            </div>
        </div>
    );
}
