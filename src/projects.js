// Projects.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';


function Projects() {
    const navigate = useNavigate();

  return (
    <div className="Projects">
        <button onClick={() => navigate(-1)}>🔙 Back</button>
        <div className="subContent">
            <h2>Projects Page</h2>
            <p>This is the about page content. Here you can provide information about yourself or your app.</p>
        </div>
    </div>
  );
}

export default Projects;
