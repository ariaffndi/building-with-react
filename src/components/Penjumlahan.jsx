import { useState } from "react";

export default function Penjumlahan() {
	const [hasil, setHasil] = useState(0);
	const [angka1, setAngka1] = useState(0);
	const [angka2, setAngka2] = useState(0);
	const add = () => {
		const r = parseInt(angka1) + parseInt(angka2);
		setHasil(r);

		if (r > 10) {
			alert("> 10");
		} else {
			alert("< 10");
		}
	};
	return (
		<div
			style={{
				border: "1px solid black",
				alignItems: "center",
				borderRadius: "10px",
				marginTop: "10px",
				padding: "10px",
			}}
		>
         <h2>Penjumlahan</h2>
			<input
				placeholder="masukan angka ke 1"
				value={angka1}
				onChange={(e) => setAngka1(e.currentTarget.value)}
			/>
			<input
				placeholder="masukan angka ke 2"
				value={angka2}
				onChange={(e) => setAngka2(e.currentTarget.value)}
			/>
			<button onClick={add}>Jumlah</button>
			<p>Hasil = {hasil}</p>
			<p>Hasil = {parseInt(angka1) + parseInt(angka2)}</p>
		</div>
	);
}
