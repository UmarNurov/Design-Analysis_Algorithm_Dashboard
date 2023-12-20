import React from "react";
import MergeSort from "../Components/MergeSort";
import { useState } from "react";
import Navbar from "../Components/Navbar";

const Merge = () => {
	const [data, setData] = useState();
	return (
		<div className='h-screen overflow-x-hidden'>
			<Navbar />
			<MergeSort data={data} setData={setData} />
		</div>
	);
};

export default Merge;
