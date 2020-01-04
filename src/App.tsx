import React from 'react';
import './App.css';
import { One, Two, Three, Four, Five, Six, Seven } from './solutions';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <One />
        <Two />
        <Three />
        <Four />
        <Five />
        <Six />
        <Seven />
      </header>
    </div>
  );
};

export default App;
