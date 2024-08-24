// components/CoinFlipGame.js
"use client"
import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Connection } from '@solana/web3.js';
import Coin from './Coin';

const CoinFlipGame = () => {
  const { publicKey } = useWallet();
  const [demoBalance, setDemoBalance] = useState(100);
  const [betAmount, setBetAmount] = useState(1);
  const [selectedSide, setSelectedSide] = useState('heads');
  const [isFlipping, setIsFlipping] = useState(false);
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState('');

  const connection = new Connection('https://api.devnet.solana.com');

  const flipCoin = async () => {
    if (!publicKey) return;
    if (betAmount > demoBalance) {
      setMessage("You don't have enough balance for this bet.");
      return;
    }

    setIsFlipping(true);
    setMessage('');
    setResult(null);

    setTimeout(() => {
      const flipResult = Math.random() < 0.5 ? 'heads' : 'tails';
      setResult(flipResult);

      if (flipResult === selectedSide) {
        setDemoBalance(prevBalance => prevBalance + betAmount);
        setMessage(`Congratulations! You won ${betAmount} SOL!`);
      } else {
        setDemoBalance(prevBalance => prevBalance - betAmount);
        setMessage(`Sorry, you lost ${betAmount} SOL. Better luck next time!`);
      }

      setIsFlipping(false);
    }, 3000);
  };

  return (
    <div className="bg-white bg-opacity-10 p-8 rounded-2xl shadow-2xl backdrop-blur-md text-white max-w-md w-full space-y-6">
      <WalletMultiButton className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105" />
      {publicKey ? (
        <>
          <div className="bg-indigo-900 bg-opacity-50 p-4 rounded-lg">
            <p className="text-sm font-medium mb-1">Connected Wallet:</p>
            <p className="text-xs break-all">{publicKey.toString()}</p>
          </div>
          <p className="text-3xl font-bold text-center text-yellow-300">
            Demo Balance: {demoBalance.toFixed(2)} SOL
          </p>
          <div>
            <label className="block mb-2 font-medium">Bet Amount (SOL):</label>
            <input
              type="number"
              value={betAmount}
              onChange={(e) => setBetAmount(Number(e.target.value))}
              className="w-full p-3 text-indigo-900 rounded-lg bg-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              step="0.1"
              min="0.1"
              max={demoBalance}
            />
          </div>
          <div>
            <p className="block mb-2 font-medium">Choose a side:</p>
            <div className="flex space-x-4">
              {['heads', 'tails'].map((side) => (
                <button
                  key={side}
                  onClick={() => setSelectedSide(side)}
                  className={`flex-1 py-3 rounded-lg transition-all duration-200 font-bold ${
                    selectedSide === side
                      ? 'bg-yellow-400 text-indigo-900 transform scale-105'
                      : 'bg-indigo-800 hover:bg-indigo-700'
                  }`}
                >
                  {side.charAt(0).toUpperCase() + side.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={flipCoin}
            disabled={isFlipping}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            {isFlipping ? 'Flipping...' : 'Flip Coin'}
          </button>
          <div className="flex justify-center">
            <Coin isFlipping={isFlipping} result={result} />
          </div>
          {message && (
            <div className="text-center bg-indigo-800 bg-opacity-50 p-6 rounded-lg animate-fade-in">
              <p className="text-2xl font-bold mb-2">{result && `Result: ${result.toUpperCase()}`}</p>
              <p className="text-xl">{message}</p>
            </div>
          )}
        </>
      ) : (
        <p className="text-center text-xl font-bold">Please connect your wallet to play</p>
      )}
    </div>
  );
};

export default CoinFlipGame;