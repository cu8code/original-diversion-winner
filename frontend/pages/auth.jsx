// src/components/Login.js
import React, { useState } from 'react';
import { useAuth } from "./AuthContext"

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, signup } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await login(email, password);
            // Navigate to dashboard or home page on successful login
        } catch (error) {
            console.error("Failed to log in", error);
        }
    };

    const handleSubmitSignup = async (events) => {
        events.preventDefault()
        try {
            await signup(email, password)
        } catch (error) {
            console.log("Failed to signup", error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Log In</button>
        </form>
    );
};


export const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { signup } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(''); // Reset error before new signup attempt
        try {
            await signup(email, password);
            // Navigate to the dashboard or home page after successful signup
            // history.push('/dashboard'); // Uncomment this if you're using react-router
        } catch (error) {
            setError('Failed to create an account');
            console.error(error.message);
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

