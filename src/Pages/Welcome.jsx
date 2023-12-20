import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import MainTitleLeft from "../Components/MainTitleLeft";
import MainTitleRight from "../Components/MainTitleRight";
import Modal from "../Components/Modal";

const Welcome = () => {
	const [isModalOpen, setModalOpen] = useState(false);

	return (
		<div className='h-screen overflow-x-hidden text-white pb-20'>
			<Navbar />
			<div className='w-screen justify-center gap-x-[100px] mt-[100px] items-center flex content-between'>
				<MainTitleLeft setModalOpen={setModalOpen} isModalOpen={isModalOpen} />
				<MainTitleRight />
				<Modal setModalOpen={setModalOpen} isModalOpen={isModalOpen} />
			</div>
		</div>
	);
};

export default Welcome;
