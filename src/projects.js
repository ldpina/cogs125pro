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
            <p>This is the projects page aka subpage 1.</p>
        </div>
    </div>
  );
}

export default Projects;
