import React, { useState } from "react";
import { Link } from "react-router-dom";

const Modal = ({ setModalOpen, isModalOpen }) => {
	const closeModal = () => setModalOpen(false);
	return (
		<div>
			{isModalOpen && (
				<div className='z-40 fixed inset-0 bg-gray-600 bg-opacity-5 overflow-y-auto h-full	 w-1/2 flex justify-center items-center'>
					<div className='relative p-5 bg-[#0d1117] rounded-2xl shadow-xl w-1/2 h-[fit-content] text-white border-[1px] text-center'>
						<button
							onClick={closeModal}
							className='absolute top-2 right-2 text-gray-500 font-bold mr-[5px]'
						>
							X
						</button>
						<div>
							<h2 className='text-3xl font-bold mb-4 text-[#6c6ce2]'>Algorithms 😎</h2>
							<ul className='pl-5 list-none'>
								<li className="align-items: flex-start p-2 text-md font-semibold hover:bg-sky-600 hover:text-white hover:rounded-xl">
									<Link to={"/bubble-sort"}>Bubble Sort</Link>
								</li>
								<li className="p-2 text-md font-semibold hover:bg-sky-600 hover:text-white hover:rounded-xl">
									<Link to='/insertion-sort'>Insertion Sort</Link>
								</li>
								<li className="p-2 text-md font-semibold hover:bg-sky-600 hover:text-white hover:rounded-xl">
									<Link to='/selection-sort'>Selection Sort</Link>
								</li>
								<li className="p-2 text-md font-semibold hover:bg-sky-600 hover:text-white hover:rounded-xl">
									<Link to='/merge-sort'>Merge Sort</Link>
								</li>
								<li className="p-2 text-md font-semibold hover:bg-sky-600 hover:text-white hover:rounded-xl">
									<Link to='/binary-search'>Binary Search</Link>
								</li>
								<li className="p-2 text-md font-semibold hover:bg-sky-600 hover:text-white hover:rounded-xl">
									<Link to='/knapsack-problem'>Knapsack Problem</Link>
								</li>
								<li className="p-2 text-md font-semibold hover:bg-sky-600 hover:text-white hover:rounded-xl">
									<Link to='/coin-change'>Coin Change ALgorithm</Link>
								</li>
								<li className="p-2 text-md font-semibold hover:bg-sky-600 hover:text-white hover:rounded-xl">
									<Link to='/huffman-coding'>Huffman Coding ALgorithm</Link>
								</li>
								<li className="p-2 text-md font-semibold hover:bg-sky-600 hover:text-white hover:rounded-xl">
									<h2><a href="https://fszewczyk.github.io/tsp-solver/">Travel Salesman Problem</a></h2>
								</li>
							</ul>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Modal;
