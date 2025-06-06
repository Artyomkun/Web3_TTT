import { useState } from 'react';
import { ethers } from 'ethers';
import contractABI from './contractABI.json';

const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

function App() {
  const [board, setBoard] = useState(Array(9).fill(0));

  const connectWallet = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    // Example: Call contract method
    // await contract.makeMove(position);
  };

  return (
    <div>
      <h1>Tic-Tac-Toe</h1>
      <button onClick={connectWallet}>Connect Wallet</button>
      {/* Render board */}
    </div>
  );
}

export default App;