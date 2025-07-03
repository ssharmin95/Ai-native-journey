import React, { useState } from "react";
import FeatheredFriendExplorer from "./FeatheredFriendExplorer";
import PuzzleComponent from "./PuzzleComponent";
import "./App.css";

function App() {
  const [currentView, setCurrentView] = useState('explorer');

  return (
    <div className="app">
      <nav className="app-nav">
        <button 
          className={`nav-btn ${currentView === 'explorer' ? 'active' : ''}`}
          onClick={() => setCurrentView('explorer')}
        >
          🦅 Bird Explorer
        </button>
        <button 
          className={`nav-btn ${currentView === 'puzzle' ? 'active' : ''}`}
          onClick={() => setCurrentView('puzzle')}
        >
          🧩 Love Puzzle
        </button>
      </nav>
      
      {currentView === 'explorer' ? <FeatheredFriendExplorer /> : <PuzzleComponent />}
    </div>
  );
}

export default App;
