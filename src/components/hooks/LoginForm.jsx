import { useState } from "react";
import "./Registration.css"

export const LoginForm = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const handleFormSubmit = (e) => {
        e.preventDefault();

    }

    const loginData = {
            username,
            password,
        };

return (
    <div className="signup-container">
            <form className="signup-form" onSubmit={handleFormSubmit}>
                <h2> Create Your Account</h2>
                <input type="text" name="username" placeholder="User Name" required value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" name="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Register Now</button>
                <p>Don't have an account? <a href="#">Register</a></p>
            </form>
        </div>
  );
}