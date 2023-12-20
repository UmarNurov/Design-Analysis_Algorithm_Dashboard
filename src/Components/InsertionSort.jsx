// import React, { useState, useEffect, useRef } from 'react';
// import * as d3 from 'd3';

// const InsertionSort = () => {
//     const [inputData, setInputData] = useState('');
//     const [data, setData] = useState([]);
//     const [sorting, setSorting] = useState(false);
//     const [log, setLog] = useState([]);
//     const svgRef = useRef();
//     const boxRef = useRef();

//     const insertionSort = (arr) => {
//         let steps = [];
//         let logs = [`Original array = [${arr.join(', ')}]`];
//         for (let i = 1; i < arr.length; i++) {
//             let key = arr[i];
//             let j = i - 1;
//             while (j >= 0 && arr[j] > key) {
//                 arr[j + 1] = arr[j];
//                 j--;
//                 steps.push([...arr]);
//                 logs.push(`Move ${arr[j + 1]}`);
//             }
//             arr[j + 1] = key;
//             steps.push([...arr]);
//             logs.push(`Insert ${key}`);
//         }
//         logs.push(`Sorted array = [${arr.join(', ')}]`);
//         return { steps, logs };
//     };

//     const handleSort = () => {
//         const arrayToSort = inputData.split(",").map(Number);
//         const { steps, logs } = insertionSort(arrayToSort);
//         setData(arrayToSort);
//         setLog(logs);
//         setSorting(true);
//         animateSort(steps, logs, 0);
//     };

//     const animateSort = (steps, logs, index) => {
//         if (index < steps.length) {
//             draw(steps[index]);
//             updateBoxes(steps[index]);
//             setCurrentLog(logs[index]);
//             setTimeout(() => animateSort(steps, logs, index + 1), 1000);
//         } else {
//             setSorting(false);
//         }
//     };

//     const draw = (data) => {
//         const svg = d3.select(svgRef.current);
//         const width = svgRef.current.clientWidth;
//         const height = svgRef.current.clientHeight;
//         const barWidth = width / data.length;

//         svg.selectAll("*").remove();

//         svg.selectAll("rect")
//             .data(data)
//             .enter()
//             .append("rect")
//             .attr("x", (d, i) => i * barWidth)
//             .attr("y", (d) => height - d * 20)
//             .attr("width", barWidth)
//             .attr("height", (d) => d * 20)
//             .attr("fill", "blue");

//         svg.selectAll("text")
//             .data(data)
//             .enter()
//             .append("text")
//             .text((d) => d)
//             .attr("x", (d, i) => i * barWidth + barWidth / 2)
//             .attr("y", (d) => height - d * 20 - 5)
//             .attr("text-anchor", "middle")
//             .attr("fill", "white");
//     };

//     const updateBoxes = (data) => {
//         const boxDiv = d3.select(boxRef.current);
//         boxDiv.selectAll("div").remove();

//         boxDiv.selectAll("div")
//             .data(data)
//             .enter()
//             .append("div")
//             .text((d) => d)
//             .attr("class", "inline-block m-1 p-2 bg-blue-500 text-white");
//     };

//     const [currentLog, setCurrentLog] = useState('');

//     return (
//         <div className='flex p-5 items-center justify-between mt-[100px]'>
//             <div className='w-1/3 h-[400px] flex flex-col items-center text-white border-2 shadow-2xl border-[#313043] rounded-3xl ml-[100px]'>
//                 <h2 className='text-center text-3xl font-bold text-[#6c6ce2] mt-[50px] mb-[50px]'>Insertion Sort</h2>
//                 <input
//                     type="text"
//                     className='textarea textarea-bordered mb-3 w-2/3 px-4 py-2 text-black rounded-xl'
//                     placeholder='4,3,5,9,11,15,12'
//                     value={inputData}
//                     onChange={(e) => setInputData(e.target.value)}
//                 />
// 				<div className='flex gap-x-10 mt-[60px]'>
// 					<button
// 						className='px-6 py-2 bg-[#6c6ce2] rounded-md text-xl'
// 						onClick={handleSort}
// 						disabled={sorting}
// 					>
// 						Visualize
// 					</button>
// 					<button
// 						className='px-10 py-2 bg-white hover:bg-[#6c6ce2] rounded-md text-black text-xl border-2 border-[#6c6ce2]'
// 						onClick={() => setSorting(false)}
// 					>
// 						Reset
// 					</button>
// 				</div>
//             </div>
//             <div className='fw-1/2 flex flex-col items-end justify-end ml-[100px] mr-[100px]'>
//                 {!sorting ? (
                    // <div className='text-white gap-y-10'>
                    //     <h2 className='text-3xl font-bold mb-[30px] text-center'>How Insertion Sort Algorithm Works:</h2>
                    //     <p className='mt-[20px] mb-[50px] text-lg'>
					// 		Insertion sort is a simple sorting algorithm that builds
					// 		the final sorted array (or list) one item at a time.
					// 		It is much less efficient on large lists than more
					// 		advanced algorithms such as quicksort, heapsort, or merge
					// 		sort.
					// 	</p>
                    //     <img
					// 		src='https://upload.wikimedia.org/wikipedia/commons/4/42/Insertion_sort.gif'
					// 		alt=''
					// 		className='mb-[50px]'
					// 	/>
					// 	<img
					// 		src='https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif'
					// 		alt=''
					// 		className='mb-[50px]'
					// 	/>
					// 	<h3 className='text-2xl font-bold mb-4'>Complexity</h3>
					// 	<ul className='gap-y-4'>
					// 		<li>Worst and Average Case Time Complexity: O(n^2).</li>
					// 		<li>Best Case Time Complexity: O(n).</li>
					// 		<li>Space Complexity: O(1).</li>
					// 	</ul>
                    // </div>
//                 ) : (
//                     <div>
//                         <svg ref={svgRef} className='w-full h-64 bg-white'></svg>
//                         <div ref={boxRef} className='flex justify-center mt-4'></div>
//                         <p className='mt-4'>Current Step: {currentLog}</p>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default InsertionSort;


import React, { useState, useEffect, useRef } from 'react';

const InsertionSort = () => {
  const [inputData, setInputData] = useState('');
  const [sorting, setSorting] = useState(false);
  const [sortingSteps, setSortingSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const intervalRef = useRef(null);

  const insertionSort = (arr) => {
    let steps = [[...arr]];
    let highlights = [Array(arr.length).fill(false)];
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        steps.push([...arr]);
        highlights.push([...highlights[highlights.length - 1]]);
        j--;
      }
      arr[j + 1] = key;
      steps.push([...arr]);
      let newHighlight = Array(arr.length).fill(false);
      for (let k = 0; k <= i; k++) {
        newHighlight[k] = true;
      }
      highlights.push(newHighlight);
    }
    return { steps, highlights };
  };

  const handleSort = () => {
    const arrayToSort = inputData.split(',').map(Number);
    const { steps, highlights } = insertionSort(arrayToSort);
    setSortingSteps(steps.map((step, index) => ({ array: step, highlight: highlights[index] })));
    setSorting(true);
    setCurrentStep(0);
  };

  useEffect(() => {
    if (sorting && currentStep < sortingSteps.length) {
      intervalRef.current = setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 1000); // Adjust for desired animation speed
    } else if (sorting) {
      setSorting(false);
    }

    return () => clearTimeout(intervalRef.current);
  }, [sorting, currentStep, sortingSteps]);

  const resetVisualization = () => {
    clearTimeout(intervalRef.current);
    setInputData('');
    setSorting(false);
    setSortingSteps([]);
    setCurrentStep(0);
  };

  return (
    <div className='flex p-5 items-center justify-between mt-[100px]'>
      <div className='w-1/3 h-[400px] flex flex-col items-center text-white border-2 shadow-2xl border-[#313043] rounded-3xl mb-[320px] ml-[100px]'>
		<h2 className='text-center text-3xl font-bold text-[#6c6ce2] mt-[50px] mb-[50px]'>
			Insertion Sort
		</h2>
			<input
			type="text"
			value={inputData}
			onChange={(e) => setInputData(e.target.value)}
			className='textarea textarea-bordered mb-3 w-2/3 px-4 py-2 text-black rounded-xl'
			placeholder='4,3,5,9,11,15,12'
			/>
			<div className='flex gap-x-10 mt-[60px]'>
				<button
				onClick={handleSort}
				className='px-6 py-2 bg-[#6c6ce2] rounded-md text-xl'
				disabled={sorting}
				>
				Visualize
				</button>
				<button
				onClick={resetVisualization}
				className='px-10 py-2 bg-white hover:bg-[#6c6ce2] rounded-md text-black text-xl border-2 border-[#6c6ce2]'
				>
				Reset
				</button>
			</div>
      </div>

      <div className='w-1/2 flex flex-col items-center justify-center mr-[100px]'>
        {/* Visualization Section */}
        {sortingSteps.length > 0 ? (
          sortingSteps.slice(0, currentStep + 1).map((step, index) => (
            <div key={index} className='flex flex-wrap mt-2'>
              {step.array.map((value, idx) => (
                <div key={idx} className={`m-1 p-2 rounded ${step.highlight[idx] ? 'bg-green-500' : 'bg-blue-500'}`}>
                  {value}
                </div>
              ))}
            </div>
          ))
        ) : (
			<div className='text-white gap-y-10'>
			<h2 className='text-3xl font-bold mb-[30px] text-center'>How Insertion Sort Algorithm Works:</h2>
			<p className='mt-[20px] mb-[50px] text-lg'>
				Insertion sort is a simple sorting algorithm that builds
				the final sorted array (or list) one item at a time.
				It is much less efficient on large lists than more
				advanced algorithms such as quicksort, heapsort, or merge
				sort.
			</p>
			<img
				src='https://upload.wikimedia.org/wikipedia/commons/4/42/Insertion_sort.gif'
				alt=''
				className='mb-[50px]'
			/>
			<img
				src='https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif'
				alt=''
				className='mb-[50px]'
			/>
			<h3 className='text-2xl font-bold mb-4'>Complexity</h3>
			<ul className='gap-y-4'>
				<li>Worst and Average Case Time Complexity: O(n^2).</li>
				<li>Best Case Time Complexity: O(n).</li>
				<li>Space Complexity: O(1).</li>
			</ul>
		</div>
        )}
      </div>
    </div>
  );
};

export default InsertionSort;
