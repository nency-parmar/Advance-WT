"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/navigation";

export default function Signin() {
    const router = useRouter();

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        router.push("/login");
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card p-4 shadow" style={{ width: "500px" }}>
                <h3 className="text-center mb-3">Sign In</h3>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input type="text" className="form-control" placeholder="Enter your name" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="Enter your email" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input type="text" className="form-control" placeholder="Enter phone number" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input type="text" className="form-control" placeholder="Enter address" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Age</label>
                        <input type="number" className="form-control" placeholder="Age" />
                    </div>

                    <button className="btn btn-primary w-100">Sign In</button>
                </form>

                <div className="text-center mt-3">
                    <p>
                        Already have an account?{" "}
                        <a href="/login" className="text-primary text-decoration-none">
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
