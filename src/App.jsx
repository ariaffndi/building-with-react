import { useState } from "react";
import Penjumlahan from "./components/penjumlahan";
import ListCard from "./components/ListCard";
import CombineText from "./components/CombineText";
import "./css/App.css";

function App() {
	let title = "Lagi Trending Nih!!!";
	let title1 = "Kalkulator";
	let title2 = "Combine Text";

	return (
		<div className="App" style={{ height: "100vh" }}>
			<div className="Content1">
				<div className="title">
					<h2>{title}</h2>
				</div>
				<ListCard />
			</div>

			<div className="Content2" style={{ marginTop: "30px" }}>
				<div>
					<h2>{title1}</h2>
				</div>
				<div style={{ marginTop: "10px", width: "400px" }}>
					<Penjumlahan />
				</div>
			</div>

			<div className="Content2" style={{ marginTop: "30px" }}>
				<div>
					<h2>{title2}</h2>
				</div>
				<CombineText />
			</div>

			<div className="footer" style={{ height: "200px" }}></div>
		</div>
	);
}

export default App;
