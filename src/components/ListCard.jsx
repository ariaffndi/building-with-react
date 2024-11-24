import { useState } from "react";
import ItemCard from "./Itemcard";

export default function ListCard() {
	const [products, setList] = useState([]);
	let products0 = [
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

	const addProduct = (e) => {
		e.preventDefault();
		const newProduct = {
			title: e.target.title.value,
			stock: e.target.stock.value,
			price: e.target.price.value,
			image: e.target.image.value,
		};
		setList([...products, newProduct]);
	};

	return (
		<div className="items">
			<div>
				<form
					action=""
					onSubmit={addProduct}
					style={{ display: "flex", gap: "20px" }}
				>
					<input type="text" name="title" placeholder="Nama Produk" />
					<input type="number" name="stock" placeholder="Stok" />
					<input type="number" name="price" placeholder="Harga" />
					<input type="text" name="image" placeholder="Image-Url" />
					<button type="submit">Tambah Produk</button>
				</form>
			</div>
			<div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
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
