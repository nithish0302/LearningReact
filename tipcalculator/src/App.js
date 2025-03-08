import React, { useState } from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      <TipCalculator />
    </div>
  );
};

export default App;

function TipCalculator() {
  const [amt, setAmt] = useState("");
  const [youlike, setYoulike] = useState(0);
  const [frdlike, setfrdlike] = useState(0);

  const per = Math.round(amt * ((youlike + frdlike) / 2 / 100)).toFixed(2);

  return (
    <div className="container">
      <Bill amt={amt} setAmt={setAmt} />
      <Services
        youlike={youlike}
        setYoulike={setYoulike}
        frdlike={frdlike}
        setfrdlike={setfrdlike}
      />
      <Output amt={amt} per={per} />

      <button
        onClick={() => {
          setAmt("");
          setYoulike(0);
          setfrdlike(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

function Bill({ amt, setAmt }) {
  return (
    <>
      <div>
        <p>How much the Bill</p>
        <input
          type="text"
          value={amt}
          onChange={(e) => setAmt(Number(e.target.value))}
        />
      </div>
    </>
  );
}

function Services({ youlike, setYoulike, frdlike, setfrdlike }) {
  return (
    <>
      <div>
        <p>How did you like the services?</p>
        <select
          value={youlike}
          onChange={(e) => setYoulike(Number(e.target.value))}
        >
          <option value="0">Simply Waste (0%)</option>
          <option value="5">It was okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">It was amazing (20%)</option>
        </select>
      </div>

      <div>
        <p>How did your Friend like the services?</p>
        <select
          value={frdlike}
          onChange={(e) => setfrdlike(Number(e.target.value))}
        >
          <option value="0">Simply Waste (0%)</option>
          <option value="5">It was okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">It was amazing (20%)</option>
        </select>
      </div>
    </>
  );
}

function Output({ amt, per }) {
  return (
    <div>
      <h4>{`Total Amount : ${amt + per} (${amt} + ${per})`}</h4>
    </div>
  );
}
