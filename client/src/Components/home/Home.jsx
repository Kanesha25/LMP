import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div
      className="Home"
      style={{ backgroundImage: 'url("background_image_url_here")' }}
    >
      <div className="container">
        <div className="left">
          <h1 className="title">LMP</h1>
          <p className="description">
            Welcome to the Lecture Management System (LMS), a comprehensive
            platform designed to streamline the administration and delivery of
            educational lectures within academic institutions. Our system aims
            to revolutionize the way lectures are organized, accessed, and
            managed, providing both educators and students with a seamless
            experience. With LMS, educators can effortlessly create, schedule,
            and manage lectures for various courses and subjects. They can
            upload lecture materials such as presentations, documents, and
            multimedia files, ensuring that students have access to all relevant
            resources. Additionally, educators can set deadlines for
            assignments, quizzes, and other assessments, keeping students
            informed and accountable.
          </p>
        </div>
        <div className="right">
          <img
            src="https://media.npr.org/assets/img/2020/03/13/gettyimages-667018224_wide-e69134a24ff79fd3a338ff83661815c6299e58bd-s1100-c50.jpg"
            alt=""
            className="image"
          />
        </div>
      </div>

      <div className="centered">
        <Link to="/login" className="link">
          <button className="users-button">LOGIN</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
