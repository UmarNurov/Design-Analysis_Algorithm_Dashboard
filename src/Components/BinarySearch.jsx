import React, { useState } from 'react';

const BinarySearch = () => {
  const [arrayInput, setArrayInput] = useState('');
  const [valueInput, setValueInput] = useState('');
  const [array, setArray] = useState([]);
  const [target, setTarget] = useState(null);
  const [low, setLow] = useState(null);
  const [mid, setMid] = useState(null);
  const [high, setHigh] = useState(null);
  const [foundIndex, setFoundIndex] = useState(null);
  const [searching, setSearching] = useState(false);

  const binarySearch = (arr, x) => {
    // Ensure the array is sorted for binary search
    arr.sort((a, b) => a - b);
    setArray(arr);

    let start = 0, end = arr.length - 1;

    // Iterate while start not meets end
    while (start <= end) {
      // Find the mid index
      let midIndex = Math.floor((start + end) / 2);
      setLow(start);
      setHigh(end);
      setMid(midIndex);

      // If element is present at mid, return True
      if (arr[midIndex] === x) return midIndex;

      // Else look in left or right half accordingly
      else if (arr[midIndex] < x) start = midIndex + 1;
      else end = midIndex - 1;
    }

    return -1;
  };

  const handleSearch = () => {
    const inputArr = arrayInput.split(',').map(Number);
    const valueToSearch = parseInt(valueInput, 10);
    setSearching(true);
    setTarget(valueToSearch);
    const index = binarySearch(inputArr, valueToSearch);
    setFoundIndex(index);
  };

  const handleReset = () => {
    setArrayInput('');
    setValueInput('');
    setArray([]);
    setTarget(null);
    setLow(null);
    setMid(null);
    setHigh(null);
    setFoundIndex(null);
    setSearching(false);
  };

  return (
    <div className='flex p-5 items-center justify-between mt-10'>
      <div className='w-1/3 h-[400px] flex flex-col items-center text-white border-2 shadow-2xl border-[#313043] rounded-3xl mb-[550px] ml-[100px]'>
        <h2 className='text-center text-3xl font-bold text-[#6c6ce2] mt-[50px] mb-[50px]'>Binary Search</h2>
        <input
          type="text"
          value={arrayInput}
          onChange={(e) => setArrayInput(e.target.value)}
          className='textarea textarea-bordered mb-3 w-2/3 px-4 py-2 text-black rounded-xl'
          placeholder='Enter array (comma separated)'
        />
        <input
          type="text"
          value={valueInput}
          onChange={(e) => setValueInput(e.target.value)}
          className='textarea textarea-bordered mb-3 w-2/3 px-4 py-2 text-black rounded-xl'
          placeholder='Enter value to search'
        />
        <div className='flex gap-x-10 mt-[60px]'>
          <button
            onClick={handleSearch}
            disabled={searching}
            className='px-6 py-2 bg-[#6c6ce2] rounded-md text-xl'
          >
            Search
          </button>
          <button
            onClick={handleReset}
            className='px-10 py-2 bg-white hover:bg-[#6c6ce2] rounded-md text-black text-xl border-2 border-[#6c6ce2]'
          >
            Reset
          </button>
        </div>
      </div>

      <div className='w-1/2 flex flex-col items-center justify-center mr-[100px]'>
        {!searching ? (
          <div className='text-white gap-y-10'>
            {/* Information about how binary search works */}
            <h3 className='text-3xl font-bold mb-[30px] text-center'>How Binary Search Works:</h3>
            {/* Include an explanation of the binary search algorithm here */}
            <p className='mt-[20px] mb-[50px] text-lg'>Binary search is a search algorithm that finds the position of a target value within a sorted array.</p>
          </div>
        ) : (
          <>
            <div className='flex justify-center items-center'>
              <div className='m-1 p-2 rounded text-center bg-green-500'>Low: {low}</div>
              <div className='m-1 p-2 rounded text-center bg-yellow-500'>Mid: {mid}</div>
              <div className='m-1 p-2 rounded text-center bg-red-500'>High: {high}</div>
            </div>
            <div className='flex justify-center items-center'>
              <div className='m-1 p-2 rounded text-center bg-blue-500'>Searching for: {target}</div>
            </div>
            <div className='flex justify-center items-center'>
              {array.map((value, index) => (
                <div key={index} className={`m-1 p-2 rounded text-center ${index === foundIndex ? 'bg-blue-500' : 'bg-red-500'}`} style={{ width: '50px', height: '50px' }}>
                  {value}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BinarySearch;
