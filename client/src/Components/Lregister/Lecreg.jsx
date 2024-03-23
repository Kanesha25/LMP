import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Lregister.css";

const Lregister = () => {
  return (
    <div className="Admin-Dashboard">
      <header className="Home-header">
        <h1>
          <center>ADMIN DASHBOARD</center>
        </h1>
        {/* Use Link component to navigate */}
        <Link to="/signup">
          <button
            className="users-button"
            style={{
              marginRight: "20px",
              width: "300px",
              height: "100px",
              marginBottom: "20px",
            }}
          >
            Lecture Registration
          </button>
        </Link>

        <Link to="/courses">
          <button
            className="users-button"
            style={{
              marginRight: "20px",
              width: "300px",
              height: "100px",
              marginTop: "10px",
            }}
          >
            Course
          </button>
        </Link>

        <button
          className="users-button"
          style={{
            marginRight: "20px",
            width: "300px",
            height: "100px",
            marginTop: "20px",
          }}
        >
          Create Time Table
        </button>

        <button
          className="users-button"
          style={{
            marginRight: "20px",
            width: "300px",
            height: "100px",
            marginTop: "20PX",
          }}
        >
          Requests
        </button>

        <button
          className="users-button"
          style={{
            marginRight: "20px",
            width: "300px",
            height: "100px",
            marginTop: "20px",
          }}
        >
          Acedemic Staff
        </button>
      </header>
    </div>
  );
};

export default Lregister;
