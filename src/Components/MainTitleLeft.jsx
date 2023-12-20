import React from "react";
import { Link } from "react-router-dom";

const MainTitleLeft = ({ setModalOpen }) => {
	const openModal = () => setModalOpen(true);
	return (
		<div className='text-[64px] w-[40%]'>
			<p className='text-[72px]'>
				<span className=' font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent'>
					Design
				</span>{" "}
				Analysis {" "}
				<span>
					Algorithms
				</span>{" "}
				<span className=' font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent'>
					Visualizer
				</span>{" "}
				<span className=' font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent'>
					Dashboard
				</span>{" "}
			</p>
			<p className='text-xl text-[#a3b3bc] mb-[70px]'>
				Gain real-world experience and land that dev job you've always imagined!
			</p>
			<div className='flex gap-x-10'>
				<button
					className='text-2xl font-semibold body-semibold z-20 bg-[#2190ff] border-none w-full gap-2 rounded-[12px]  bg-primary px-4 py-[24px]'
					onClick={openModal}
				>
					Menu of Algorithms 👉
				</button>

				<button className='text-2xl font-semibold body-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 focus:border-none active:border-none  z-20 w-full gap-2 rounded-[12px] border-none bg-primary px-4 py-[24px]'>
					<Link to='/daa-course'>DAA Course</Link>
				</button>
			</div>
		</div>
	);
};

export default MainTitleLeft;
