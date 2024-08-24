// app/page.js
import dynamic from 'next/dynamic';

const CoinFlipGame = dynamic(() => import('../components/CoinFlipGame'), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white font-sans">
      <header className="bg-black bg-opacity-30 backdrop-blur-md p-6">
        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
          Solana Coin Flip
        </h1>
      </header>
      <main className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-center gap-16">
        <div className="lg:w-1/2 max-w-lg space-y-8">
          <h2 className="text-4xl font-bold text-yellow-300">Welcome to the Future of Flipping</h2>
          <p className="text-lg">
            Experience the thrill of the flip on the Solana blockchain! Connect your wallet, place your bets, and watch the coin spin. Will fortune favor you today?
          </p>
          <ul className="space-y-4">
            {['Connect with your Solana wallet', 'Place bets with demo SOL', 'Enjoy stunning coin flip animations', 'Win big with double-or-nothing stakes'].map((item, index) => (
              <li key={index} className="flex items-center space-x-3">
                <svg className="h-6 w-6 text-yellow-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
            <p className="text-sm italic">
              Note: This game uses demo SOL and does not involve real cryptocurrency transactions.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <CoinFlipGame />
        </div>
      </main>
      <footer className="bg-black bg-opacity-30 backdrop-blur-md p-6 mt-16">
        <p className="text-center text-sm">&copy; 2024 Solana Coin Flip. All rights reserved.</p>
      </footer>
    </div>
  );
}