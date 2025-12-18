import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function Login() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card p-4 shadow" style={{ width: "400px" }}>
                <h3 className="text-center mb-4">Login</h3>

                <form>
                    <div className="mb-3">
                        <label className="form-label">Email / Username</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter email or username"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                        />
                    </div>

                    <div className="text-end mb-3">
                        <a href="#" className="text-decoration-none">
                            Forgot Password?
                        </a>
                    </div>

                    <button className="btn btn-primary w-100">Login</button>
                </form>

                <div className="text-center mt-3">
                    <p>
                        Not signed in?{" "}
                        <Link href="/signup" className="text-primary text-decoration-none">
                            Create Account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
