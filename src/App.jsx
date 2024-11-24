import { useState } from "react";
import ItemCard from "./components/Itemcard";
import "./css/App.css";

function App() {
	let title = "Lagi Trending Nih!!!";
	let products = [
		{
			title: "Talang AC",
			stock: 80,
			price: "750000",
			image:
				"https://images.tokopedia.net/img/cache/100-square/hDjmkQ/2024/1/19/ae9c70a0-512b-4068-9caf-1ed829a5e959.jpg.webp?ect=4g",
		},
		{
			title: "Monitor 24 Inch",
			stock: 50,
			price: "1500000",
			image:
				"https://images.tokopedia.net/img/cache/100-square/VqbcmM/2023/8/19/4a728788-4e8c-4979-86fb-616e108cabe0.jpg.webp?ect=4g",
		},
		{
			title: "Kursi Kantor",
			stock: 40,
			price: "150000",
			image:
				"https://images.tokopedia.net/img/cache/100-square/VqbcmM/2023/12/4/8f95c2c0-9722-4380-bff5-d345ac79fca6.jpg.webp?ect=4g",
		},
		{
			title: "Helm KYT",
			stock: 70,
			price: "350000",
			image:
				"https://images.tokopedia.net/img/cache/100-square/hDjmkQ/2024/5/29/f940353b-b9e0-49c3-acfa-265a0d2c9a3c.png.webp?ect=4g",
		},
	];

	const [count, setCount] = useState(0);
	const [number1, setNumber1] = useState(0);
	const [number2, setNumber2] = useState(0);
	const [result, setResult] = useState(0);

	return (
		<div className="App" style={{ height: "100vh" }}>
			<div>
				<h1>Kalkulator</h1>
			</div>
			<div class="">
				<div class="" style={{ display: "flex", gap: "10px" }}>
					<label for="" class="col-sm-1 col-form-label">
						Number 1 :{" "}
					</label>
					<div class="col-sm-2">
						<input type="number" class="form-control" id="number1" />
					</div>
				</div>
				<div
					class=""
					style={{ display: "flex", gap: "10px", marginTop: "10px" }}
				>
					<label for="" class="col-sm-1 col-form-label">
						Number 2 :{" "}
					</label>
					<div class="">
						<input type="number" class="form-control" id="number2" />
					</div>
				</div>
				<div
					class=""
					style={{ display: "flex", gap: "10px", marginTop: "10px" }}
				>
					<button>Tambah</button>
					<button>Kurang</button>
					<button>Kali</button>
					<button>Bagi</button>
				</div>
				<br />
				<div id="value" class="h4"></div>
			</div>

			<div className="title">
				<h2>{title}</h2>
			</div>
			<div className="items" style={{ display: "flex", gap: "10px" }}>
				{products.map((product) => {
					return (
						<ItemCard
							title={product.title}
							stock={product.stock}
							price={product.price}
							image={product.image}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
