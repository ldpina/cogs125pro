import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import About from './about';
import Projects from './projects';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
