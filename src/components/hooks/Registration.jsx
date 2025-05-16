import "./Registration.css"

const Registration = () => {
  return (
    <div className="signup-container">
            <form className="signup-form">
                <h2>🚀 Create Your Account</h2>
                <input type="text" placeholder="First Name" required/>
                <input type="email" placeholder="Last Name" required/>
                <input type="email" placeholder="Email" required/>
                <input type="password" placeholder="Password" required/>
                <input type="phone" placeholder="Phone Number" required/>
                <button type="submit">Register Now</button>
                <p>Already have an account? <a href="#">Login</a></p>
            </form>
        </div>
  );
}

export default Registration;