import React from "react";
import KnapsackProblem from "../Components/KnapsackProblem";
import { useState } from "react";
import Navbar from "../Components/Navbar";

const Knapsack = () => {
	const [data, setData] = useState();
	return (
		<div className='h-screen overflow-x-hidden'>
			<Navbar />
			<KnapsackProblem data={data} setData={setData} />
		</div>
	);
};

export default Knapsack;
