import Navbar from "./components/Navbar";
import Header from "./components/Header";
import TableListSwapi from "./components/TableListSwapi";
function App() {
	return (
		<div className="mx-10">
			<Navbar />
			<Header title = "Tabel SWAPI" />
			<TableListSwapi />

		</div>
	);
}

export default App;