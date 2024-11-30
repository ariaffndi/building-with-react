import Navbar from "./components/Navbar";
import Header from "./components/Header";
import TableListSwapi from "./components/TableListSwapi";
import { Outlet } from "react-router";
import SimpleLinktree from "./components/SimpleLinktree";

function App() {
	return (
		<div className="mx-10">
			{/* <Navbar /> */}
			{/* <Header title = "Ini Title Header" /> */}
			<SimpleLinktree />
			<Outlet />
		</div>
	);
}

export default App;
