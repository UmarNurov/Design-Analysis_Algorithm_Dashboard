import React from "react";
import CoinChange from "../Components/CoinChange"
import { useState } from "react";
import Navbar from "../Components/Navbar";

const Coin = () => {
	const [data, setData] = useState();
	return (
		<div className='h-screen overflow-x-hidden'>
			<Navbar />
			<CoinChange data={data} setData={setData} />
		</div>
	);
};

export default Coin;
