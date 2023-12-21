import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Welcome from "./Pages/Welcome";
import Bubble from "./Pages/Bubble";
import DaaCourse from "./Pages/DaaCourse";
import AboutUs from "./Pages/AboutUs";
import Insertion from "./Pages/Insertion";
import Selection from "./Pages/Selection";
import Merge from "./Pages/Merge";
import Binary from "./Pages/Binary";
import Knapsack from "./Pages/Knapsack";
import Coin from "./Pages/Coin";
import Huffman from "./Pages/Huffman";
import "./App.css";

function App() {
	return (
		<Router>
			<div className='w-screen h-full bg-[#0d1117]'>
				<Routes>
					<Route path='/' element={<Welcome />} />
					<Route path='/bubble-sort' element={<Bubble />} />
					<Route path='/about-us' element={<AboutUs />} />
					<Route path='/daa-course' element={<DaaCourse />} />
					<Route path='/insertion-sort' element={<Insertion />} />
					<Route path='/selection-sort' element={<Selection />} />
					<Route path='/merge-sort' element={<Merge />} />
					<Route path='/binary-search' element={<Binary />} />
					<Route path='/knapsack-problem' element={<Knapsack />} />
					<Route path='/coin-change' element={<Coin />} />
					<Route path='/huffman-coding' element={<Huffman />} />
					{/* <Route path='/tsp-problem' element={<TSP />} /> */}
					

					{/* <BubbleSort /> */}
					{/* <CoinChangeVisualizer /> */}
					{/* <InsertionSortVisualizer /> */}
					{/* <SelectionSortVisualizer /> */}
				</Routes>
			</div>
		</Router>
	);
}

export default App;
