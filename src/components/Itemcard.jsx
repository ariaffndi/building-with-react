import React from "react";

function ItemCard({ title, stock, price, image }) {
	return (
		<div className="item" style={{ marginTop: "10px", width: "400px" }}>
			<div
				className="card"
				style={{
					display: "flex",
					border: "1px solid black",
					alignItems: "center",
					borderRadius: "10px",
				}}
			>
				<div className="card-image">
					<img src={image} alt="" />
				</div>
				<div className="card-description" style={{ padding: "5px" }}>
					<h4>{title}</h4>
					<p>{stock} product</p>
					<p>Rp. {price}</p>
				</div>
			</div>
		</div>
	);
}

export default ItemCard;
