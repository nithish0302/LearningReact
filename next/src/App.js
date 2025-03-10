import React from "react";
import { useState } from "react";
import "./App.css";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  let [isOpen, setisOpen] = useState(true);
  function previous() {
    if (step >= 2) {
      setStep(() => step - 1);
    }
  }
  function next() {
    if (step <= 2) {
      setStep(() => step + 1);
    }
  }
  return (
    <div>
      <h4>HI</h4>
      <button className="close" onClick={() => setisOpen((is) => !is)}>
        &times;
      </button>
      <div>
        {isOpen && (
          <div className="steps">
            <div className="numbers">
              <div className={step === 1 ? "active" : ""}>1</div>
              <div className={step === 2 ? "active" : ""}>2</div>
              <div className={step === 3 ? "active" : ""}>3</div>
            </div>

            <p className="message">
              Step:{step} : {messages[step - 1]}
            </p>

            <div className="buttons">
              <button
                style={{ backgroundColor: "green", color: "#ffff" }}
                onClick={previous}
              >
                Previous
              </button>
              <button
                style={{ backgroundColor: "green", color: "#ffff" }}
                onClick={next}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>{" "}
    </div>
  );
}
