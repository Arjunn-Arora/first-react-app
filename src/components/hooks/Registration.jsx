import { useState } from "react";
import "./Registration.css"

const Registration = () => {

    const[user, setUser] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
    });

    const handleFormSubmit = (event) => {
      event.preventDefault();
      const formData = {
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
      };
    }

    const handleInputChange = (e) => {
      const {name, value} = e.target;
      setUser((prev) => ({...prev, [name] : value}));
    }

  return (
    <div className="signup-container">
            <form className="signup-form" onSubmit={handleFormSubmit}>
                <h2> Create Your Account</h2>
                <input type="text" name="firstName" placeholder="First Name" required value={user.firstName} onChange={handleInputChange}/>
                <input type="text" name="lastName" placeholder="Last Name" required value={user.lastName} onChange={handleInputChange}/>
                <input type="email" name="email" placeholder="Email" required value={user.email} onChange={handleInputChange}/>
                <input type="password" name="password" placeholder="Password" required value={user.password} onChange={handleInputChange}/>
                <input type="phone" name="phoneNumber" placeholder="Phone Number" required value={user.phoneNumber} onChange={handleInputChange}/>
                <button type="submit">Register Now</button>
                <p>Already have an account? <a href="#">Login</a></p>
            </form>
        </div>
  );
}

export default Registration;