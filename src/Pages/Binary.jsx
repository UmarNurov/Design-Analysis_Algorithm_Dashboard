import React from "react";
import BinarySearch from "../Components/BinarySearch";
import { useState } from "react";
import Navbar from "../Components/Navbar";

const Binary = () => {
	const [data, setData] = useState();
	return (
		<div className='h-screen overflow-x-hidden'>
			<Navbar />
			<BinarySearch data={data} setData={setData} />
		</div>
	);
};

export default Binary;
