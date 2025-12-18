import React from "react";

function AboutCompany() {
    return (
        <div style={{ padding: "20px", display: "flex", justifyContent: "center" }}>
            <div
                style={{
                    maxWidth: "500px",
                    width: "100%",
                    padding: "20px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    background: "#fff",
                }}
            >
                <h1 style={{ marginBottom: "15px", color: "gray" }}>About Company</h1>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    sit amet purus vel urna facilisis feugiat.
                </p>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    sit amet purus vel urna facilisis feugiat.
                </p>

                <h2 style={{ marginTop: "20px", color: "gray" }}>Company Details</h2>
                <div style={{ lineHeight: "1.8" }}>
                    <p style={{ color: "blue" }}><strong>Name:</strong> Demo Company Pvt. Ltd.</p>
                    <p style={{ color: "black" }}><strong>Email:</strong> contact@democompany.com</p>
                    <p style={{ color: "blue" }}><strong>Phone:</strong> +91 99887 77665</p>
                    <p style={{ color: "black" }}><strong>Address:</strong> 45 Business Road, Tech City</p>
                    <p style={{ color: "blue" }}><strong>Website:</strong> www.democompany.com</p>
                </div>
            </div>
        </div>
    );
}

export default AboutCompany;
