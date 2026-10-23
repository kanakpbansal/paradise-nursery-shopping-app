
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="landing-page">
      <h1>Paradise Nursery</h1>

      <p>
        Welcome to Paradise Nursery, your one-stop destination
        for beautiful houseplants. Bring nature into your home
        with our collection of fresh, healthy plants.
      </p>

      <button
        className="get-started-button"
        onClick={() => {
          window.location.href = "#plants";
        }}
      >
        Get Started
      </button>
    </div>
  );
}

export default App;
