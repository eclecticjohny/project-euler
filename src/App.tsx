import React from "react";
import "./App.css";
import { Solutions } from "./Solutions";

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Solutions />
            </header>
        </div>
    );
};

export default App;
