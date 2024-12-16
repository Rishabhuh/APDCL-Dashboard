
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "../styles/landingPage.css";  // Assuming the CSS is properly set up

const LandingPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to the login page when the button is clicked
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <div className="landing-text">
          <h1>Welcome to Our Power Distribution System</h1>
          <p>
            Efficient and reliable power distribution at your fingertips.
            Monitor energy consumption, feeder status, and much more.
          </p>
          <button className="landing-button" onClick={handleLoginClick}>
            Go to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
