import React, { useState } from 'react';

const MergeSort = () => {
  const [inputData, setInputData] = useState('');
  const [data, setData] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [mergeSteps, setMergeSteps] = useState([]);

  const mergeSort = (arr) => {
    if (arr.length < 2) return arr;
    
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
  };

  const merge = (left, right) => {
    let array = [], i = 0, j = 0;

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        array.push(left[i++]);
      } else {
        array.push(right[j++]);
      }
    }

    return array.concat(left.slice(i)).concat(right.slice(j));
  };

  const handleVisualize = () => {
    const arrayToSort = inputData.split(',').map(Number);
    setSorting(true);
    const sorted = mergeSort(arrayToSort);
    setData(sorted);
    setMergeSteps(['Merge sort started.', ...sorted.map((num, idx) => `Step ${idx + 1}: Placed ${num}`), 'Merge sort completed.']);
  };

  const resetVisualization = () => {
    setInputData('');
    setData([]);
    setSorting(false);
    setMergeSteps([]);
  };

  return (
    <div className='flex p-5 items-center justify-between mt-10'>
      <div className='w-1/3 h-[400px] flex flex-col items-center text-white border-2 shadow-2xl border-[#313043] rounded-3xl mb-[750px] ml-[100px]'>
        <h2 className='text-center text-3xl font-bold text-[#6c6ce2] mt-[50px] mb-[50px]'>Merge Sort</h2>
        <input
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          className='textarea textarea-bordered mb-3 w-2/3 px-4 py-2 text-black rounded-xl'
          placeholder='Enter numbers separated by commas'
        />
        <div className='flex gap-x-10 mt-[60px]'>
          <button
            onClick={handleVisualize}
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

      <div className='w-1/2 flex flex-col items-center justify-center mr-[100px]'>
        {!sorting && data.length === 0 ? (
          <div className='text-white gap-y-10'>
            {/* Information about how merge sort works */}
            <h3 className='text-3xl font-bold mb-[30px] text-center'>How Merge Sort Works:</h3>
            {/* Include an explanation of the merge sort algorithm here */}
            <p className='mt-[20px] mb-[50px] text-lg'>
                In computer science, merge sort (also commonly spelled
                mergesort) is an efficient, general-purpose,
                comparison-based sorting algorithm. Most implementations
                produce a stable sort, which means that the implementation
                preserves the input order of equal elements in the sorted
                output. Mergesort is a divide and conquer algorithm that
                was invented by John von Neumann in 1945.

                An example of merge sort. First divide the list into
                the smallest unit (1 element), then compare each
                element with the adjacent list to sort and merge the
                two adjacent lists. Finally all the elements are sorted
                and merged.
            </p>
            <img
				src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif'
				alt=''
				className='mb-[50px]'
			/>
			<img
				src='https://upload.wikimedia.org/wikipedia/commons/e/e6/Merge_sort_algorithm_diagram.svg'
				alt=''
				className='mb-[50px]'
			/>
			<h3 className='text-2xl font-bold mb-4'>Complexity</h3>
			<ul className='gap-y-4'>
				<li>Average Case Time Complexity: n log(n).</li>
				<li>Worst Case Time Complexity: n log(n).</li>
				<li>Best Case Time Complexity: n log(n).</li>
				<li>Space Complexity: n.</li>
			</ul>
          </div>
        ) : (
          <div className='flex flex-wrap justify-center items-center'>
            {data.map((value, index) => (
              <div key={index} className='m-1 p-2 rounded text-center bg-green-500' style={{ width: '50px', height: '50px' }}>
                {value}
              </div>
            ))}
          </div>
        )}

        {mergeSteps.length > 0 && (
          <div className='mt-4 p-2 border border-gray-500 rounded'>
            {mergeSteps.map((step, index) => (
              <div key={index} className='text-gray-400'>{step}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MergeSort;
