// About.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function About() {
    const navigate = useNavigate();

  return (
    <div className="About">
        <button onClick={() => navigate(-1)}>🔙 Back</button>
        <div className="subContent">
            <h2>About Page</h2>
            <p>This is the about page aka sub page 2.</p>
        </div>
    </div>
  );
}

export default About;
