import React from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import SelectionSort from "../Components/SelectionSort";

const Selection = () => {
	const [data, setData] = useState();
	return (
		<div className='h-screen overflow-x-hidden'>
			<Navbar />
			<SelectionSort data={data} setData={setData} />
		</div>
	);
};

export default Selection;
