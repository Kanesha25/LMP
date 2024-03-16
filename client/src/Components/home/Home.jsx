import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Home = () => {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1>WELCOME TO SRI LANKA</h1>
        {/* Use Link component to navigate */}
        <Link to="/users">
          <button
            className="users-button"
            style={{ marginLeft: "20px", width: "100px" }}
          >
            USERS
          </button>
        </Link>
      </header>
    </div>
  );
};

export default Home;
