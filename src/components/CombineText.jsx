import { useState } from "react";

export default function CombineText() {
   const [name, setName] = useState("");
   const [job, setJob] = useState("");
   const [address, setAddress] = useState("");
   const [result, setResult] = useState("");

   const combineText = () => {
      setResult("My name is " + name + ", im a " + job + ", and I live in " + address);
   };
   
   return (
      <div
			style={{
				border: "1px solid black",
				alignItems: "center",
				borderRadius: "10px",
				marginTop: "10px",
				padding: "10px",
            justifyItems: "start"
			}}
		>
         <div style={{ marginBottom: "10px" }}>
            <label>Enter your Name: </label>
            <input
               type="text"
               value={name}
               onChange={(e) => setName(e.target.value)}
            />
         </div>
         <div style={{ marginBottom: "10px" }}>
            <label>Enter your Job: </label>
            <input
               type="text"
               value={job}
               onChange={(e) => setJob(e.target.value)}
            />
         </div>
         <div style={{ marginBottom: "10px" }}>
            <label>Enter your Address: </label>
            <input
               type="text"
               value={address}
               onChange={(e) => setAddress(e.target.value)}
            />
         </div>
            <label>Biography (Auto): </label>
         <div>
            <p>My name is {name}, im a {job}, and I live in {address}</p>
         </div>
            <label>Biography (Manual): </label>
            <button onClick={combineText}>Submit</button>
         <div>
            <p>{result}</p>
         </div>
         

		</div>
	);
};