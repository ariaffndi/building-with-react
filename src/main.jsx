import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react";
import ReactDOM from "react-dom/client";
import './css/index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import TableListSwapi from './components/TableListSwapi.jsx';
import SimpleLinktree from './components/SimpleLinktree.jsx';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
        <Route path="/api-docs" element={<TableListSwapi />} />
        <Route path="/linktree" element={<SimpleLinktree />} />
      </Route>
		</Routes>
	</BrowserRouter>
);