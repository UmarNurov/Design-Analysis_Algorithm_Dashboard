
// import React, { useState } from 'react';

// const CoinChange = () => {
//   const [coinsInput, setCoinsInput] = useState('');
//   const [amount, setAmount] = useState('');
//   const [dpTable, setDpTable] = useState([]);
//   const [optimalSolution, setOptimalSolution] = useState(null);
//   const [visualizing, setVisualizing] = useState(false);

//   const calculateCoinChange = (coins, totalAmount) => {
//     const dp = Array(coins.length + 1).fill().map(() => Array(totalAmount + 1).fill(Infinity));
//     // Initialize first row as 0 for the target amount 0
//     for (let i = 0; i <= coins.length; i++) {
//       dp[i][0] = 0;
//     }
//     // Compute the rest of the table
//     for (let i = 1; i <= coins.length; i++) {
//       for (let j = 1; j <= totalAmount; j++) {
//         if (coins[i - 1] <= j) {
//           dp[i][j] = Math.min(dp[i - 1][j], 1 + dp[i][j - coins[i - 1]]);
//         } else {
//           dp[i][j] = dp[i - 1][j];
//         }
//       }
//     }
//     setDpTable(dp);
//     setOptimalSolution(dp[coins.length][totalAmount]);
//   };

//   const handleVisualizeClick = () => {
//     const coins = coinsInput.split(',').map(Number).sort((a, b) => a - b);
//     const totalAmount = parseInt(amount, 10);
//     setVisualizing(true);
//     calculateCoinChange(coins, totalAmount);
//   };

//   const handleResetClick = () => {
//     setCoinsInput('');
//     setAmount('');
//     setDpTable([]);
//     setOptimalSolution(null);
//     setVisualizing(false);
//   };

//   return (
//     <div className="flex p-5 items-center justify-between mt-10 ">
//       <div className="w-1/3 h-[400px] flex flex-col items-center text-white border-2 shadow-2xl border-[#313043] rounded-3xl mb-[300px] ml-[100px]">
// 	  	<h2 className='text-center text-3xl font-bold text-[#6c6ce2] mt-[50px] mb-[50px]'>Coin Change Algorithm</h2>
// 		<input
//           type="text"
//           value={coinsInput}
//           onChange={(e) => setCoinsInput(e.target.value)}
//           className="textarea textarea-bordered mb-3 w-2/3 px-4 py-2 text-black rounded-xl"
//           placeholder="Enter coins (comma-separated)"
//         />
//         <input
//           type="number"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           className="textarea textarea-bordered mt-4 w-2/3 px-4 py-2 text-black rounded-xl"
//           placeholder="Enter target amount"
//         />
// 		<div className='flex gap-x-10 mt-[60px]'>
//         	<button onClick={handleVisualizeClick} className="px-6 py-2 bg-[#6c6ce2] rounded-md text-xl">Visualize</button>
//         	<button onClick={handleResetClick} className="px-10 py-2 bg-white hover:bg-[#6c6ce2] rounded-md text-black text-xl border-2 border-[#6c6ce2]">Reset</button>
// 		</div>
// 	  </div>
//       <div className="w-1/2 flex flex-col items-center justify-center mr-[100px]">
//         {!visualizing ? (
// 			<div className='text-white gap-y-10'>
// 				<h3 className='text-3xl font-bold mb-[30px] text-center'>How Coin Change Algorithm Works:</h3>
// 				<p className='mt-[20px] mb-[50px] text-lg'>
// 					Introduction to Coin Change Problem. 
// 					You are given an array of coins with varying 
// 					denominations and an integer sum representing 
// 					the total amount of money; you must return the 
// 					fewest coins required to make up that sum; 
// 					if that sum cannot be constructed, return -1.
// 				</p>
// 				<img
// 				src='https://www.simplilearn.com/ice9/free_resources_article_thumb/Coin%20Change%20Problem%20-%20soni/dynamic-programming-solution-using-coin-change-problem.png'
// 				alt=''
// 				className='mb-[50px]'
// 			/>
// 			</div>
//         ) : (
//           <>
//             <div className="overflow-auto text-white">
//               <table className="min-w-full text-sm mb-[200px]">
//                 <thead>
//                   <tr>
//                     {[''].concat(Array.from({ length: parseInt(amount, 10) + 1 }, (_, i) => i)).map((header, idx) => (
//                       <th key={idx} className="px-2 py-2 border text-white border-gray-600">{header}</th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {dpTable.map((row, idx) => (
//                     <tr key={idx} className="bg-gray-700">
//                       {row.map((cell, index) => (
//                         <td key={index} className="border text-white border-gray-600 px-2 py-1">{cell === Infinity ? '∞' : cell}</td>
//                       ))}
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//             {optimalSolution !== null && (
//               <div className="text-center mb-[200px] text-black p-2 bg-white border-2 border-[#6c6ce2] rounded">
//                 <h3 className="font-bold text-black">Optimal Solution: {optimalSolution === Infinity ? 'No solution' : optimalSolution}</h3>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CoinChange;
import React, { useState } from 'react';

const CoinChange = () => {
  const [coinsInput, setCoinsInput] = useState('');
  const [amount, setAmount] = useState('');
  const [dpTable, setDpTable] = useState([]);
  const [optimalCoins, setOptimalCoins] = useState([]);
  const [visualizing, setVisualizing] = useState(false);

  const calculateCoinChange = (coins, totalAmount) => {
    const dp = Array(coins.length + 1).fill().map(() => Array(totalAmount + 1).fill(Infinity));
    const coinUsed = Array(coins.length + 1).fill().map(() => Array(totalAmount + 1).fill(0));

    for (let i = 0; i <= coins.length; i++) {
      dp[i][0] = 0;
    }

    for (let i = 1; i <= coins.length; i++) {
      for (let j = 1; j <= totalAmount; j++) {
        if (coins[i - 1] <= j) {
          const useCoin = dp[i][j - coins[i - 1]] + 1;
          if (useCoin < dp[i - 1][j]) {
            dp[i][j] = useCoin;
            coinUsed[i][j] = coins[i - 1];
          } else {
            dp[i][j] = dp[i - 1][j];
          }
        } else {
          dp[i][j] = dp[i - 1][j];
        }
      }
    }

    let j = totalAmount;
    const usedCoins = [];
    for (let i = coins.length; i > 0; i--) {
      while (j > 0 && dp[i][j] !== dp[i - 1][j]) {
        usedCoins.push(coinUsed[i][j]);
        j -= coinUsed[i][j];
      }
    }

    setDpTable(dp);
    setOptimalCoins(usedCoins.reverse());
    setVisualizing(true);
  };

  const handleVisualizeClick = () => {
    const coins = coinsInput.split(',').map(Number).sort((a, b) => a - b);
    const totalAmount = parseInt(amount, 10);
    calculateCoinChange(coins, totalAmount);
  };

  const handleResetClick = () => {
    setCoinsInput('');
    setAmount('');
    setDpTable([]);
    setOptimalCoins([]);
    setVisualizing(false);
  };

  return (
    <div className='flex p-5 items-center justify-between mt-10 text-white'>
      <div className='w-1/3 h-[500px] flex flex-col items-center text-white border-2 shadow-2xl border-[#313043] rounded-3xl mb-[550px] ml-[100px]'>
	  	<h2 className='text-center text-3xl font-bold text-[#6c6ce2] mt-[50px] mb-[50px]'>Coin Changing Algorithm</h2>
        <div className='mb-4'>
          <label htmlFor='coinsInput' className='block text-lg'>Coins (comma-separated):</label>
          <input
            id='coinsInput'
            type='text'
            value={coinsInput}
            onChange={(e) => setCoinsInput(e.target.value)}
            className='textarea textarea-bordered mb-3 w-[400px] px-4 py-2 text-black rounded-xl'
            placeholder='1,5,10,25'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='amount' className='block text-lg'>Amount:</label>
          <input
            id='amount'
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className='textarea textarea-bordered mb-3 w-[400px] px-4 py-2 text-black rounded-xl'
            placeholder='Enter target amount'
          />
        </div>
		<div className='flex gap-x-10 mt-[60px]'>
			<button
			onClick={handleVisualizeClick}
			className='px-6 py-2 bg-[#6c6ce2] rounded-md text-xl'
			disabled={!coinsInput || !amount}
			>
			Visualize
			</button>
			<button
			onClick={handleResetClick}
			className='px-10 py-2 bg-white hover:bg-[#6c6ce2] rounded-md text-black text-xl border-2 border-[#6c6ce2]'
			>
			Reset
			</button>
		</div>
      </div>
      <div className='w-full md:w-1/2 p-4'>
        {visualizing && (
          <>
            <div className='overflow-auto -mt-[300px] mb-[200px]'>
              <table className='min-w-full divide-y divide-gray-700'>
                <thead>
                  <tr>
                    <th className='px-4 py-2'>Amount</th>
                    {dpTable[0]?.map((_, idx) => (
                      <th key={idx} className='px-4 py-2'>{idx}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {dpTable.map((row, idx) => (
                    <tr key={idx} className='bg-gray-700'>
                      <td className='px-4 py-2'>{coinsInput.split(',')[idx - 1] || '0'}</td>
                      {row.map((cell, index) => (
                        <td key={index} className='px-4 py-2'>{cell === Infinity ? '∞' : cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className='-mt-[150px] mb-[200px] p-2 text-center bg-gray-700 rounded'>
              <h3 className='text-xl font-bold mb-2'>Optimal Coins Used:</h3>
              <p className='bg-gray-600 rounded p-2'>{optimalCoins.join(', ')}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CoinChange;
