import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

const BubbleSort = () => {
	const [inputData, setInputData] = useState("");
	const [data, setData] = useState([]);
	const [sorting, setSorting] = useState(false);
	const [sorted, setSorted] = useState(false);
	const svgRef = useRef();
	const stepsRef = useRef([]);

	const bubbleSort = (arr) => {
		let len = arr.length;
		let steps = [];
		for (let i = 0; i < len; i++) {
			for (let j = 0; j < len - i - 1; j++) {
				if (arr[j] > arr[j + 1]) {
					[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				}
				steps.push([...arr]);
			}
		}
		return steps;
	};

	const handleSort = () => {
		const arrayToSort = inputData.split(",").map(Number);
		stepsRef.current = bubbleSort(arrayToSort);
		setSorting(true);
		setSorted(false);
		animateSort();
	};

	const animateSort = () => {
		let i = 0;
		const interval = setInterval(() => {
			if (i < stepsRef.current.length) {
				setData(stepsRef.current[i]);
				i++;
			} else {
				clearInterval(interval);
				setSorting(false);
				setSorted(true);
			}
		}, 1000);
	};

	const resetVisualization = () => {
		setSorting(false);
		setSorted(false);
		setData([]);
	};

	useEffect(() => {
		if (data.length) {
			const svg = d3.select(svgRef.current);
			const width = svgRef.current.clientWidth;
			const height = svgRef.current.clientHeight;
			const barWidth = width / data.length;

			svg.selectAll("*").remove();

			svg
				.selectAll("rect")
				.data(data)
				.enter()
				.append("rect")
				.attr("x", (d, i) => i * barWidth)
				.attr("y", (d) => height - d * 20)
				.attr("width", barWidth)
				.attr("height", (d) => d * 20)
				.attr("fill", "blue");
		}
	}, [data]);

	return (
		<div className='flex p-5 items-center justify-between mt-[100px]'>
			<div className='w-1/3 h-[400px] flex flex-col items-center text-white border-2 shadow-2xl border-[#313043] rounded-3xl ml-[100px]'>
				<h2 className='text-center text-3xl font-bold text-[#6c6ce2] mt-[50px] mb-[50px]'>
					Bubble Sort
				</h2>
				<h5 className="justify-content: flex-start">Enter values</h5>
				<input
					className='textarea textarea-bordered mb-3 w-2/3 px-4 py-2 text-black rounded-xl'
					placeholder='4,3,5,9,11,15,12'
					value={inputData}
					onChange={(e) => setInputData(e.target.value)}
				/>
				<div className='flex gap-x-10 mt-[60px]'>
					<button
						className='px-6 py-2 bg-[#6c6ce2] rounded-md text-xl'
						onClick={handleSort}
						disabled={sorting}
					>
						Visualize!
					</button>
					<button
						className='px-10 py-2 bg-white hover:bg-[#6c6ce2] rounded-md text-black text-xl border-2 border-[#6c6ce2]'
						onClick={resetVisualization}
					>
						Reset!
					</button>
				</div>
			</div>
			<div className='w-1/2 flex flex-col items-center justify-center mr-[100px]'>
				{!sorting && !sorted && (
					<div className='text-white gap-y-10'>
						<h2 className='text-3xl font-bold mb-[30px] text-center'>
							Bubble Sort Information:
						</h2>

						<p className='mt-[20px] mb-[50px] text-lg'>
							Bubble sort, sometimes referred to as sinking sort, is a simple
							sorting algorithm that repeatedly steps through the list to be
							sorted, compares each pair of adjacent items and swaps them if
							they are in the wrong order (ascending or descending arrangement).
							The pass through the list is repeated until no swaps are needed,
							which indicates that the list is sorted.
						</p>

						<img
							src='https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif'
							alt=''
							className='mb-[50px]'
						/>
						<h3 className='text-2xl font-bold mb-2'>Complexity</h3>
						<ul className='gap-y-4'>
							<li>Worst and Average Case Time Complexity: O(n^2).</li>
							<li>Best Case Time Complexity: O(n).</li>
							<li>Space Complexity: O(1).</li>
						</ul>
					</div>
				)}
				{(sorting || sorted) && (
					<>
						<svg ref={svgRef} className='w-full' width='500' height='300' />
						<div>
							{data.map((number, index) => (
								<div
									key={index}
									className='inline-block m-1 p-2 bg-blue-500 text-white'
								>
									{number}
								</div>
							))}
						</div>
						{sorted && <p className='text-white mt-4'>Array is sorted!</p>}
					</>
				)}
			</div>
		</div>
	);
};

export default BubbleSort;


