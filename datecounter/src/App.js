import React, { useState } from "react";

// export default function App() {
// let [step, setStep] = useState(0);
// let [count, setCount] = useState(0);
// // let [date, setDate] = useState(new Date());
// let date = new Date();
// // date.setDate(date.getDate() + count * step === 0 ? 1 : step);
// date.setDate(date.getDate() + count);

// return (
//   <div
//     style={{
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "100vh",
//       flexDirection: "column",
//       backgroundColor: "#f5f5f5",
//     }}
//   >
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         gap: "20px",
//         padding: "20px",
//         borderRadius: "10px",
//         backgroundColor: "#ffffff",
//         boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
//       }}
//     >
//       <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//         <button
//           onClick={() => setCount((s) => Math.max(0, s - 1))}
//           style={{
//             padding: "10px 20px",
//             fontSize: "18px",
//             cursor: "pointer",
//             borderRadius: "5px",
//             border: "none",
//             backgroundColor: "#ff4d4d",
//             color: "white",
//           }}
//         >
//           -
//         </button>
//         <span style={{ fontSize: "18px", fontWeight: "bold" }}>
//           Count: {count}
//         </span>
//         <button
//           onClick={() => setCount((s) => (s + step > 0 ? s + step : 1))}
//           style={{
//             padding: "10px 20px",
//             fontSize: "18px",
//             cursor: "pointer",
//             borderRadius: "5px",
//             border: "none",
//             backgroundColor: "#4CAF50",
//             color: "white",
//           }}
//         >
//           +
//         </button>
//       </div>

//       <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//         <button
//           onClick={() => setStep((s) => Math.max(0, s - 1))}
//           style={{
//             padding: "10px 20px",
//             fontSize: "18px",
//             cursor: "pointer",
//             borderRadius: "5px",
//             border: "none",
//             backgroundColor: "#ff4d4d",
//             color: "white",
//           }}
//         >
//           -
//         </button>
//         <span style={{ fontSize: "18px", fontWeight: "bold" }}>
//           Step: {step}
//         </span>
//         <button
//           onClick={() => setStep((s) => s + 1)}
//           style={{
//             padding: "10px 20px",
//             fontSize: "18px",
//             cursor: "pointer",
//             borderRadius: "5px",
//             border: "none",
//             backgroundColor: "#4CAF50",
//             color: "white",
//           }}
//         >
//           +
//         </button>
//       </div>

//       <span style={{ fontSize: "20px", fontWeight: "bold", color: "#333" }}>
//         {date.toDateString()}
//       </span>
//     </div>
//   </div>
// );

// );
// }
// import { useState } from "react";

export default function App() {
  const [description, setDescription] = useState("");

  function add(e) {
    e.preventDefault();
    console.log("Added:", description);
    setDescription("");
  }

  return (
    <div>
      <h4>HI</h4>

      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter description"
      />
      <button onClick={add}>Add</button>
    </div>
  );
}
