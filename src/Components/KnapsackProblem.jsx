import React, { useState } from 'react';

const KnapsackProblem = () => {
  const [valuesInput, setValuesInput] = useState('');
  const [weightsInput, setWeightsInput] = useState('');
  const [weightLimit, setWeightLimit] = useState('');
  const [table, setTable] = useState([]);
  const [bestValue, setBestValue] = useState(null);
  const [visualizing, setVisualizing] = useState(false);

  const parseInput = (input) => input.split(',').map(Number);

  const knapsack = (values, weights, W) => {
    const n = values.length;
    let DP = Array(n + 1).fill().map(() => Array(W + 1).fill(0));

    for (let i = 1; i <= n; i++) {
      for (let w = 1; w <= W; w++) {
        if (weights[i - 1] <= w) {
          DP[i][w] = Math.max(
            values[i - 1] + DP[i - 1][w - weights[i - 1]],
            DP[i - 1][w]
          );
        } else {
          DP[i][w] = DP[i - 1][w];
        }
      }
    }

    setTable(DP);
    setBestValue(DP[n][W]);
  };

  const handleVisualizeClick = () => {
    const values = parseInput(valuesInput);
    const weights = parseInput(weightsInput);
    const W = parseInt(weightLimit, 10);
    knapsack(values, weights, W);
    setVisualizing(true);
  };

  const handleResetClick = () => {
    setValuesInput('');
    setWeightsInput('');
    setWeightLimit('');
    setTable([]);
    setBestValue(null);
    setVisualizing(false);
  };

  return (
    <div className="flex p-5 items-center justify-between mt-10">
      <div className="w-1/3 h-[500px] flex flex-col items-center text-white border-2 shadow-2xl border-[#313043] rounded-3xl mb-[550px] ml-[100px]">
        <h2 className='text-center text-3xl font-bold text-[#6c6ce2] mt-[50px] mb-[50px]'>Knapsack Problem</h2>
        <input
          type="text"
          value={valuesInput}
          onChange={(e) => setValuesInput(e.target.value)}
          className="textarea textarea-bordered mb-3 w-2/3 px-4 py-2 text-black rounded-xl"
          placeholder="Enter values (comma separated)"
        />
        <input
          type="text"
          value={weightsInput}
          onChange={(e) => setWeightsInput(e.target.value)}
          className="textarea textarea-bordered mb-3 w-2/3 px-4 py-2 text-black rounded-xl"
          placeholder="Enter weights (comma separated)"
        />
        <input
          type="number"
          value={weightLimit}
          onChange={(e) => setWeightLimit(e.target.value)}
          className="textarea textarea-bordered mb-3 w-2/3 px-4 py-2 text-black rounded-xl"
          placeholder="Enter weight limit"
        />
        <div className='flex gap-x-10 mt-[60px]'>
            <button onClick={handleVisualizeClick} className="px-6 py-2 bg-[#6c6ce2] rounded-md text-xl">Visualize</button>
            <button onClick={handleResetClick} className="px-10 py-2 bg-white hover:bg-[#6c6ce2] rounded-md text-black text-xl border-2 border-[#6c6ce2]">Reset</button>
        </div>
      </div>

      <div className="flex flex-col w-1/2 p-4 mb-[200px]">
        {!visualizing ? (
          <div className='text-white gap-y-10'>
            <h2 className="text-3xl font-bold mb-[30px] text-center">How Knapsack Algorithm Works:</h2>
            <p className="mt-[20px] mb-[50px] text-lg text-center">
                The knapsack problem or rucksack problem is a problem in
                combinatorial optimization: Given a set of items, each with
                a weight and a value, determine the number of each item to
                include in a collection so that the total weight is less
                than or equal to a given limit and the total value is as
                large as possible.

                It derives its name from the problem faced by someone who is
                constrained by a fixed-size knapsack and must fill it with the
                most valuable items.

                Example of a one-dimensional (constraint) knapsack problem:
                which boxes should be chosen to maximize the amount of money
                while still keeping the overall weight under or equal to 15 kg?
            </p>
            <img
				src='https://upload.wikimedia.org/wikipedia/commons/f/fd/Knapsack.svg'
				alt=''
				className='mb-[50px]'
			/>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <h3 className="text-lg text-white font-bold">Values: {valuesInput}</h3>
              <h3 className="text-lg text-white font-bold">Weights: {weightsInput}</h3>
            </div>
            <div className="overflow-auto mb-10">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody>
                  {table.map((row, i) => (
                    <tr key={i} className="bg-gray-700">
                      {row.map((cell, j) => (
                        <td key={j} className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 ">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {bestValue !== null && (
              <div className="bg-white px-2 py-2 border-[#6c6ce2] border-2 rounded p-2">
                <h3 className="text-lg text-black font-bold">Best Value: {bestValue}</h3>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default KnapsackProblem;
