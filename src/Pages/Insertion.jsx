import React from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import InsertionSort from "../Components/InsertionSort";

const Insertion = () => {
	const [data, setData] = useState();
	return (
		<div className='h-screen overflow-x-hidden'>
			<Navbar />
			<InsertionSort data={data} setData={setData} />
		</div>
	);
};

export default Insertion;
