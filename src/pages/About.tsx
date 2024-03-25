
import React from "react";
import { useState } from "react";

export function About() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Handle form submission, e.g. send the message to the server
        console.log("Form submitted:", { name, email, message });
        // Reset form fields
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div>
            <h1>About Gadgets and Everything</h1>
            <p>Welcome to Gadgets and Everything! We are a leading provider of high-quality gadgets and accessories. Our mission is to bring you the latest and greatest technology products at affordable prices.</p>
            <p>At Gadgets and Everything, we believe that technology should be accessible to everyone. Whether you're a tech enthusiast or just looking for a new gadget, we've got you covered.</p>
            <p>Visit our store to explore our wide range of products and find the perfect gadget for your needs. Our knowledgeable staff is always ready to assist you and answer any questions you may have.</p>
            <p>Thank you for choosing Gadgets and Everything. We look forward to serving you!</p>

            <h2>Our Team</h2>
            <p>Meet the team behind Gadgets and Everything:</p>

            <div style={{ maxWidth: "500px", margin: "0 auto" }}>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ marginBottom: "1rem" }}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} style={{ width: "100%", padding: "0.5rem" }} />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "100%", padding: "0.5rem" }} />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} style={{ width: "100%", padding: "0.5rem" }} />
                </div>
                <button type="submit" style={{ padding: "0.5rem 1rem", backgroundColor: "blue", color: "white", border: "none", borderRadius: "0.25rem" }}>Submit</button>
            </form>
            </div>

        </div>
    );

    }


    

