import React from "react";
import HuffmanCoding from "../Components/HuffmanCoding";
import { useState } from "react";
import Navbar from "../Components/Navbar";

const Huffman = () => {
	const [data, setData] = useState();
	return (
		<div className='h-screen overflow-x-hidden'>
			<Navbar />
			<HuffmanCoding data={data} setData={setData} />
		</div>
	);
};

export default Huffman;
