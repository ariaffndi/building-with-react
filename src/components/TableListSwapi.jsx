import { useEffect, useState } from "react";

function TableListSwapi() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [detail, setDetail] = useState({});
	const [pagination, setPagination] = useState({
		next: null,
		previous: null,
	});

	const getData = async () => {
		setLoading(true);
		try {
			const response = await fetch("https://swapi.dev/api/people/");
			const result = await response.json();
			setData(result.results);
			setPagination({ next: result.next, previous: result.previous });
		} catch (error) {
			console.error("Error fetching data:", error);
		} finally {
			setLoading(false);
		}
	};


	const getDataNextPrev = async (url) => {
		if (!url) return;
		setLoading(true);
		try {
			const response = await fetch(url);
			const result = await response.json();
			setData(result.results);
			setPagination({ next: result.next, previous: result.previous });
		} catch (error) {
			console.error("Error fetching data:", error);
		} finally {
			setLoading(false);
		}
	};


	const getDetailData = async (url) => {
		if (!url) return;
		setLoading(true);
		try {
			const response = await fetch(url);
			const result = await response.json();
			setDetail(result);
		} catch (error) {
			console.error("Error fetching detail data:", error);
		} finally {
			setLoading(false);
		}
	};


	useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			<div className="overflow-x-auto">
				<table className="table">
					<thead>
						<tr className="text-center">
							<th>No</th>
							<th>Name</th>
							<th>Gender</th>
							<th>Weight</th>
							<th>Height</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{loading ? (
							<tr>
								<td colSpan="6" className="text-center">
									<span className="loading loading-spinner loading-lg"></span>
								</td>
							</tr>
						) : (
							data.map((row, index) => (
								<tr key={index} className="text-center">
									<th>{index + 1}</th>
									<td>{row.name}</td>
									<td>{row.gender}</td>
									<td>{row.mass}</td>
									<td>{row.height}</td>
									<td>
										<button
											className="btn btn-sm btn-primary"
											onClick={() => {
												getDetailData(row.url);
												document.getElementById("my_modal_1").showModal();
											}}
										>
											Detail
										</button>
									</td>
								</tr>
							))
						)}
					</tbody>
				</table>
				<div className="join w-full flex justify-between mt-4">
					<button
						className="join-item btn"
						onClick={() => getDataNextPrev(pagination.previous)}
						disabled={!pagination.previous}
					>
						« Prev
					</button>
					<button
						className="join-item btn"
						onClick={() => getDataNextPrev(pagination.next)}
						disabled={!pagination.next}
					>
						Next »
					</button>
				</div>

				{detail !== undefined && (
					<dialog id="my_modal_1" className="modal">
						<div className="modal-box">
							<h3 className="font-bold text-lg">Detail</h3>
							<div className="flex w-full">
								<div className="grid flex-grow place-items-start">
									<p className="py-4">
										Name
										<br />
										Gender
										<br />
										Weight
										<br />
										Height
									</p>
								</div>
								<div className="grid flex-grow place-items-start">
									<p className="py-4">
										: {detail.name}
										<br />
										: {detail.gender}
										<br />
										: {detail.mass}
										<br />
										: {detail.height}
									</p>
								</div>
							</div>
							<div className="modal-action">
								<form method="dialog">
									<button className="btn">Close</button>
								</form>
							</div>
						</div>
					</dialog>
				)}

			</div>
		</div>
	);
}

export default TableListSwapi;
