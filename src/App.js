import './App.css';
import confetti from "https://esm.run/canvas-confetti@1";
import { useState } from 'react';
import luisImage from './luis.jpg';
import { Link } from 'react-router-dom';

function App() {
  const [dogData, setDogData] = useState(null);

  const fetchDog = async () => {
    const res = await fetch('https://api.thedogapi.com/v1/images/search');
    const data = await res.json();
    setDogData(data[0]);
  };

  function onClick() {
      confetti({
        particleCount: 800,
        spread: 1000
      });
    }

  return (
    <div className="App">
      <br/>
      <h1>Hi, I am Luis Pina</h1>
      <img className = "luis" src={luisImage} alt="Luis" />
      <h3>Here is some cool things you can do with frontend development!</h3>
      <div className="previews">
        <div className="confetti">
          <h3>create on screen effects!</h3>
          <button className="confButton" onClick={onClick}>
              <span>🎉</span>
              <span>confetti!</span>
          </button>
        </div>

        <div className="discover-container">
          <h3>Call Apis</h3>
            {dogData && (
              <div className="listing-container">
                <img
                  src={dogData.url}
                  alt="Dog"
                  style={{ width: '250px', height: '250px', objectFit: 'cover' }}
                />
              </div>
            )}
            <button className="discover-btn" onClick={fetchDog}>🔀 Discover!</button>
          </div>

          <div className="diffPages">
            <h3>navigate to different pages!</h3>
            <ul>
              <li className="links">
                <Link className="nav-link" to="/projects">
                  📽 projects
                </Link>
              </li>
              <li className="links">
                <Link className="nav-link" to="/about">
                  ℹ About
                </Link>
              </li>
            </ul>
          </div>


      </div>
    </div>
  );
}

export default App;
