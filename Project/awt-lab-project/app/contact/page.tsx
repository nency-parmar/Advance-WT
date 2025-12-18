import React from "react";

function Contact() {
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
                <h1 style={{ marginBottom: "15px", color: "gray" }}>Contact Us</h1>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                    feugiat lectus et mi imperdiet, nec ullamcorper magna aliquet.
                </p>

                <h2 style={{ marginTop: "20px", color: "gray" }}>Reach Out</h2>
                <div style={{ lineHeight: "1.8" }}>
                    <p style={{ color: "blue" }}><strong>Email:</strong> support@example.com</p>
                    <p style={{ color: "black" }}><strong>Phone:</strong> +91 90909 80808</p>
                    <p style={{ color: "blue" }}><strong>Website:</strong> www.example-contact.com</p>
                    <p style={{ color: "black" }}><strong>Address:</strong> 12 Contact Lane, Help City</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
