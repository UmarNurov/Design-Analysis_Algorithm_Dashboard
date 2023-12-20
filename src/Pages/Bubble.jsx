import React from "react";
import BubbleSort from "../Components/BubbleSort";
import { useState } from "react";
import Navbar from "../Components/Navbar";

const Bubble = () => {
	const [data, setData] = useState();
	return (
		<div className='h-screen overflow-x-hidden'>
			<Navbar />
			<BubbleSort data={data} setData={setData} />
		</div>
	);
};

export default Bubble;
