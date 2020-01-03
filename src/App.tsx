import React from "react";
import "./App.css";
import { One, Two, Three } from "./solutions";

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <One />
                <Two />
                <Three />
            </header>
        </div>
    );
};

export default App;
