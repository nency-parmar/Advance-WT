"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface AdminDashboardState {
    searchQuery: string;
    searchResult: string;
}

export default class AdminDashboard extends React.Component<{}, AdminDashboardState> {
    users: { id: string; name: string }[];
    staff: { id: string; name: string }[];

    constructor(props: {}) {
        super(props);

        this.state = {
            searchQuery: "",
            searchResult: ""
        };

        this.users = [
            { id: "U101", name: "Abc" },
            { id: "U102", name: "Def" },
            { id: "U103", name: "Ghi" }
        ];

        this.staff = [
            { id: "S101", name: "jkl" },
            { id: "S102", name: "mno" },
            { id: "S103", name: "pqr" }
        ];

        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ searchQuery: e.target.value });
    }

    handleSearch(e: React.FormEvent) {
        e.preventDefault();

        const query = this.state.searchQuery.trim().toUpperCase();

        if (query.startsWith("U")) {
            const user = this.users.find(u => u.id === query);
            this.setState({
                searchResult: user
                    ? `User: ${user.name} (${user.id})`
                    : "User not found"
            });
        }
        else if (query.startsWith("S")) {
            const staff = this.staff.find(s => s.id === query);
            this.setState({
                searchResult: staff
                    ? `Staff: ${staff.name} (${staff.id})`
                    : "Staff not found"
            });
        }
        else {
            this.setState({
                searchResult: "Please enter a valid User ID (U101) or Staff ID (S101)"
            });
        }
    }

    render() {
        return (
            <div className="d-flex" style={{ minHeight: "100vh" }}>
                {/* Sidebar */}
                <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
                    <h4 className="text-center mb-4">Admin Panel</h4>
                    <ul className="list-unstyled">
                        <li className="mb-3"><a href="/admin" className="text-white text-decoration-none">Dashboard</a></li>
                        <li className="mb-3"><a href="#" className="text-white text-decoration-none">Users</a></li>
                        <li className="mb-3"><a href="#" className="text-white text-decoration-none">Staff</a></li>
                        <li className="mb-3"><a href="#" className="text-white text-decoration-none">Orders</a></li>
                        <li className="mb-3"><a href="#" className="text-white text-decoration-none">Settings</a></li>
                    </ul>
                </div>

                {/* Main */}
                <div className="flex-grow-1 p-4 bg-light">
                    <h2 className="mb-4">Dashboard Overview</h2>

                    {/* Search */}
                    <form className="mb-4 d-flex gap-2" onSubmit={this.handleSearch}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search User ID or Staff ID"
                            value={this.state.searchQuery}
                            onChange={this.handleChange}
                        />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form>

                    {this.state.searchResult && (
                        <div className="alert alert-info">{this.state.searchResult}</div>
                    )}

                    {/* Cards */}
                    <div className="row g-4 mb-4">
                        <div className="col-md-3">
                            <div className="card text-center shadow">
                                <div className="card-body">
                                    <h5>Total Users</h5>
                                    <h2>{this.users.length}</h2>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card text-center shadow">
                                <div className="card-body">
                                    <h5>Total Staff</h5>
                                    <h2>{this.staff.length}</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Lists */}
                    <h4>Staff List</h4>
                    <ul className="list-group mb-4">
                        {this.staff.map(s => (
                            <li key={s.id} className="list-group-item">{s.id} - {s.name}</li>
                        ))}
                    </ul>

                    <h4>User List</h4>
                    <ul className="list-group">
                        {this.users.map(u => (
                            <li key={u.id} className="list-group-item">{u.id} - {u.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}
