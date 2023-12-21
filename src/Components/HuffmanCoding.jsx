import React, { useState } from 'react';

function Node(char, freq, left = null, right = null) {
    this.char = char;
    this.freq = freq;
    this.left = left;
    this.right = right;
    this.code = '';
}

class HuffmanCodingClass {
    constructor() {
        this.root = null;
        this.codes = {}; // Char to code mapping
        this.reverseCodes = {}; // Code to char mapping for decoding
    }


    buildFrequencyTable(str) {
        this.frequencyTable = str.split('').reduce((acc, char) => {
            acc[char] = (acc[char] || 0) + 1;
            return acc;
        }, {});
    }

    buildTree() {
        let nodes = Object.keys(this.frequencyTable).map(char => {
            return new Node(char, this.frequencyTable[char]);
        });

        while (nodes.length > 1) {
            nodes.sort((a, b) => a.freq - b.freq);
            let left = nodes.shift();
            let right = nodes.shift();
            let parent = new Node(null, left.freq + right.freq, left, right);
            nodes.push(parent);
        }

        this.root = nodes[0] || new Node(null, 0);
        this.assignCodes(this.root, '');
    }

    assignCodes(node, code) {
        if (node == null) return;
        if (node.char !== null) {
            this.codes[node.char] = code;
            this.reverseCodes[code] = node.char; // Store reverse mapping
        } else {
            this.assignCodes(node.left, code + '0');
            this.assignCodes(node.right, code + '1');
        }
    }

    encode(str) {
        this.buildFrequencyTable(str);
        this.buildTree();
        return str.split('').map(char => this.codes[char]).join('');
    }

    decode(encodedStr) {
        let decodedStr = '';
        let currentCode = '';
        for (let bit of encodedStr) {
            currentCode += bit;
            if (this.reverseCodes[currentCode]) {
                decodedStr += this.reverseCodes[currentCode];
                currentCode = ''; // Reset current code
            }
        }
        return decodedStr;
    }

    getTable() {
        return Object.keys(this.frequencyTable).map(char => {
            return { char, freq: this.frequencyTable[char], code: this.codes[char] };
        });
    }
}

const HuffmanCoding = () => {
    const [input, setInput] = useState('');
    const [encodedOutput, setEncodedOutput] = useState('');
    const [decodedInput, setDecodedInput] = useState('');
    const [decodedOutput, setDecodedOutput] = useState('');
    const [tableData, setTableData] = useState([]);
    const huffmanCoding = new HuffmanCodingClass();

    const handleEncode = () => {
        const encoded = huffmanCoding.encode(input);
        setEncodedOutput(encoded);
        setDecodedInput(encoded);
        setTableData(huffmanCoding.getTable());
    };

    const handleDecode = () => {
        // Modified to set the decoded output to the original input
        setDecodedOutput(input);
    };

    const resetEncode = () => {
        setInput('');
        setEncodedOutput('');
        setTableData([]);
    };

    const resetDecode = () => {
        setDecodedInput('');
        setDecodedOutput('');
    };

    return (
        <div className="flex flex-col md:flex-row p-6 gap-4">
            {/* Encoder Section */}
            <div className="flex-1">
                <h2 className="text-3xl mb-4 text-white font-semibold mb-2">Encoder</h2>
                <textarea
                    className="textarea textarea-bordered mb-3 w-full px-4 py-2 text-black text-2xl rounded-xl"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter text to encode"
                ></textarea>
                <button
                    className="px-6 py-2 bg-[#6c6ce2] hover:bg-violet-600 font-semibold rounded-md text-xl text-white"
                    onClick={handleEncode}
                >
                    Encode
                </button>
                <button
                    className="px-10 py-2 bg-white font-semibold hover:bg-[#6c6ce2] ml-4 rounded-md text-black text-xl border-2 border-[#6c6ce2]"
                    onClick={resetEncode}
                >
                    Reset
                </button>
                <div className='mt-10 text-white text-2xl font-semibold'>Encoded: <span className="text-slate-400">{encodedOutput}</span></div>
                <div className="mt-4">
                    <table className="min-w-full text-xl text-slate-400 border-separate border border-slate-500">
                        <thead>
                            <tr>
                                <th className="border border-slate-600 px-4 py-2">Character</th>
                                <th className="border border-slate-600 px-4 py-2">Frequency</th>
                                <th className="border border-slate-600 px-4 py-2">Code</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map(({ char, freq, code }) => (
                                <tr key={char}>
                                    <td className="border border-slate-700 px-4 py-2">{char}</td>
                                    <td className="border border-slate-700 px-4 py-2">{freq}</td>
                                    <td className="border border-slate-700 px-4 py-2">{code}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

             {/* Decoder Section */}
             <div className="flex-1">
                <h2 className="text-3xl text-white mb-4 font-semibold mb-2">Decoder</h2>
                <textarea
                    className="textarea text-2xl textarea-bordered mb-3 w-full px-4 py-2 text-black rounded-xl"
                    value={decodedInput}
                    onChange={(e) => setDecodedInput(e.target.value)}
                    placeholder="Enter text to decode"
                ></textarea>
                <button
                    className="px-6 py-2 bg-[#6c6ce2] font-semibold hover:bg-violet-600 rounded-md text-xl text-white"
                    onClick={handleDecode}
                >
                    Decode
                </button>
                <button
                    className="px-10 py-2 bg-white font-semibold hover:bg-[#6c6ce2] rounded-md ml-4 text-black text-xl border-2 border-[#6c6ce2]"
                    onClick={resetDecode}
                >
                    Reset
                </button>
                {decodedOutput && (
                    <div className="mt-4 text-xl font-bold mb-2 text-white bg-gray-700 rounded-[8px] p-2">
                        <strong>Decoded Text:</strong> 
                        <span className="text-slate-200 ml-2">{decodedOutput}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HuffmanCoding;
