// About.js
import React from 'react';
import { useNavigate } from 'react-router-dom';


function About() {
    const navigate = useNavigate();

  return (
    <div className="About">
        <button onClick={() => navigate(-1)}>🔙 Back</button>
        <h2>About Page</h2>
        <p>This is the about page content. Here you can provide information about yourself or your app.</p>
    </div>
  );
}

export default About;
