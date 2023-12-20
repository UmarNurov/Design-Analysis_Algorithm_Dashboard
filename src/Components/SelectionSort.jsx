// import React, { useState, useEffect } from 'react';

// const SelectionSort = () => {
//   const [inputData, setInputData] = useState('');
//   const [data, setData] = useState([]);
//   const [sorting, setSorting] = useState(false);
//   const [currentMinIndex, setCurrentMinIndex] = useState(null);
//   const [currentCompareIndex, setCurrentCompareIndex] = useState(null);
//   const [sortDescription, setSortDescription] = useState([]);

//   const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

//   const selectionSort = async (arr) => {
//     let descriptions = [];
//     for (let i = 0; i < arr.length - 1; i++) {
//       let minIndex = i;
//       setCurrentMinIndex(minIndex);
//       setCurrentCompareIndex(null);
//       descriptions.push(`Starting with index ${i} as the current minimum.`);
//       await sleep(600); // Visualization pause

//       for (let j = i + 1; j < arr.length; j++) {
//         setCurrentCompareIndex(j);
//         descriptions.push(`Comparing index ${minIndex} with index ${j}.`);
//         await sleep(400); // Visualization pause

//         if (arr[j] < arr[minIndex]) {
//           minIndex = j;
//           setCurrentMinIndex(minIndex);
//           descriptions.push(`Found new minimum at index ${j}.`);
//           await sleep(400); // Visualization pause
//         }
//       }

//       if (i !== minIndex) {
//         [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//         descriptions.push(`Swapped elements at indices ${i} and ${minIndex}.`);
//         await sleep(600); // Visualization pause
//       }

//       setData([...arr]);
//       setSortDescription(descriptions);
//     }
//     setSorting(false);
//   };

//   const handleSort = () => {
//     if (!sorting) {
//       setSorting(true);
//       const arrayToSort = inputData.split(',').map(Number);
//       setData(arrayToSort);
//       setSortDescription([]);
//       selectionSort(arrayToSort);
//     }
//   };

//   const resetVisualization = () => {
//     setInputData('');
//     setData([]);
//     setSorting(false);
//     setCurrentMinIndex(null);
//     setCurrentCompareIndex(null);
//     setSortDescription([]);
//   };

//   return (
//     <div className='flex p-5 bg-gray-800 text-white min-h-screen'>
//       <div className='w-1/3 ml-4 p-4 border border-gray-600 rounded'>
//         {/* Input and Control Section */}
//         <h2 className='text-xl font-bold mb-3'>Selection Sort</h2>
//         <input
//           type="text"
//           value={inputData}
//           onChange={(e) => setInputData(e.target.value)}
//           className='w-full p-2 mb-2 text-black rounded'
//           placeholder='Enter numbers separated by commas'
//         />
//         <button
//           onClick={handleSort}
//           disabled={sorting}
//           className='w-full p-2 mb-2 bg-blue-500 hover:bg-blue-700 rounded text-white'
//         >
//           Visualize
//         </button>
//         <button
//           onClick={resetVisualization}
//           className='w-full p-2 bg-red-500 hover:bg-red-700 rounded text-white'
//         >
//           Reset
//         </button>
//       </div>

//       <div className='w-2/3 ml-4'>
//         <div className='flex justify-center items-center'>
//           {data.map((value, index) => (
//             <div
//               key={index}
//               className={`m-1 p-2 rounded text-center 
//                 ${currentMinIndex === index ? 'bg-blue-500' :
//                 currentCompareIndex === index ? 'bg-green-500' :
//                 'bg-red-500'}`}
//               style={{ width: '50px', height: '50px' }}
//             >
//               {value}
//             </div>
//           ))}
//         </div>
//         <div className='mt-4 p-2 border border-gray-500 rounded'>
//           {sortDescription.map((desc, index) => (
//             <div key={index} className='text-gray-400'>{desc}</div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SelectionSort;

import React, { useState, useEffect } from 'react';

const SelectionSort = () => {
  const [inputData, setInputData] = useState('');
  const [data, setData] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [currentMinIndex, setCurrentMinIndex] = useState(null);
  const [currentCompareIndex, setCurrentCompareIndex] = useState(null);
  const [sortDescription, setSortDescription] = useState([]);

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const selectionSort = async (arr) => {
    let descriptions = ['Selection sort started.'];
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      setCurrentMinIndex(minIndex);
      setCurrentCompareIndex(null);
      await sleep(600); // Visualization pause

      for (let j = i + 1; j < arr.length; j++) {
        setCurrentCompareIndex(j);
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
          setCurrentMinIndex(minIndex);
        }
        await sleep(400); // Visualization pause
      }

      if (i !== minIndex) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        descriptions.push(`Swapped element at index ${i} with new minimum at index ${minIndex}.`);
        await sleep(600); // Visualization pause
      }

      setData([...arr]);
      setSortDescription(descriptions);
    }
    descriptions.push('Selection sort completed.');
    setSortDescription(descriptions);
    setCurrentMinIndex(null);
    setCurrentCompareIndex(null);
    setSorting(false);
  };

  const handleSort = () => {
    if (!sorting && inputData) {
      setSorting(true);
      const arrayToSort = inputData.split(',').map(Number);
      setData(arrayToSort);
      setSortDescription([]);
      selectionSort(arrayToSort);
    }
  };

  const resetVisualization = () => {
    setInputData('');
    setData([]);
    setSorting(false);
    setCurrentMinIndex(null);
    setCurrentCompareIndex(null);
    setSortDescription([]);
  };

  return (
    <div className='flex p-5 items-center justify-between mt-10 '>
      <div className='w-1/3 h-[400px] flex flex-col items-center text-white border-2 shadow-2xl border-[#313043] rounded-3xl mb-[550px] ml-[100px]'>
        <h2 className='text-center text-3xl font-bold text-[#6c6ce2] mt-[50px] mb-[50px]'>Selection Sort</h2>
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
            disabled={sorting || !inputData}
            className='px-6 py-2 bg-[#6c6ce2] rounded-md text-xl'
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

      <div className='w-1/2 flex flex-col items-center justify-center mr-[100px] '>
        {sorting || data.length > 0 ? (
          <div className='flex justify-center items-center'>
            {data.map((value, index) => (
              <div key={index} className={`m-1 p-2 rounded text-center 
                ${index === currentMinIndex ? 'bg-blue-500' : 
                 index === currentCompareIndex ? 'bg-green-500' : 'bg-red-500'}`}
              style={{ width: '50px', height: '50px' }}>
                {value}
              </div>
            ))}
          </div>
        ) : (
          <div className='text-white gap-y-10'>
            <h3 className='text-3xl font-bold mb-[30px] text-center'>How Selection Sort Works:</h3>
            <p className='mt-[20px] mb-[50px] text-lg'>
              Selection sort is a sorting algorithm, specifically an
              in-place comparison sort. It has O(n2) time complexity,
              making it inefficient on large lists, and generally
              performs worse than the similar insertion sort.
              Selection sort is noted for its simplicity, and it has
              performance advantages over more complicated algorithms
              in certain situations, particularly where auxiliary
              memory is limited.
			      </p>
			<img
				src='https://upload.wikimedia.org/wikipedia/commons/b/b0/Selection_sort_animation.gif'
				alt=''
				className='mb-[50px]'
			/>
			<img
				src='https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif'
				alt=''
				className='mb-[50px]'
			/>
			<h3 className='text-2xl font-bold mb-4'>Complexity</h3>
			<ul className='gap-y-4'>
				<li>Worst and Average Case Time Complexity: O(n^2).</li>
				<li>Best Case Time Complexity: O(n^2).</li>
				<li>Space Complexity: O(1).</li>
			</ul>
            {/* More details about the algorithm */}
          </div>
        )}

        {sortDescription.length > 0 && (
          <div className='mt-4 p-2 border border-gray-500 rounded'>
            {sortDescription.map((desc, index) => (
              <div key={index} className='text-gray-400'>{desc}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectionSort;
