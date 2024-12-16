// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [input, setInput] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     if (input.trim() !== "") {
//       navigate("/dashboard");
//     } else {
//       alert("Please enter valid input.");
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h2>Login Page</h2>
//       <input
//         type="text"
//         placeholder="Enter your ID"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         style={{ padding: "10px", marginBottom: "10px" }}
//       />
//       <br />
//       <button onClick={handleLogin} style={{ padding: "10px 20px", cursor: "pointer" }}>
//         Login
//       </button>
//     </div>
//   );
// };

// export default Login;







import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css"; // Import the CSS file for styling

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate for redirecting

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if both fields are filled before redirecting
    if (email && password) {
      navigate("/dashboard"); // Redirect to Dashboard if email and password are filled
    } else {
      alert("Please fill out both fields.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-heading">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email" className="input-label">Email</label>
            <input
              type="email"
              id="email"
              className="input-field"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="input-label">Password</label>
            <input
              type="password"
              id="password"
              className="input-field"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
