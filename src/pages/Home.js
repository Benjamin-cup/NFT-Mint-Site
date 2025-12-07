import React from 'react';
import Navbar from '../components/Navbar';
import Countdown from 'react-countdown';

const Home = () => {
  // Set minting start date to 1 day from now
  const mintStartDate = Date.now() + 24 * 60 * 60 * 1000;

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Minting has started!</span>;
    } else {
      return (
        <div className="text-center">
          <h2 className="text-2xl mb-4">Minting Starts In:</h2>
          <div className="flex justify-center space-x-4">
            <div className="bg-gray-800 p-4 rounded">
              <div className="text-3xl font-bold">{days}</div>
              <div>Days</div>
            </div>
            <div className="bg-gray-800 p-4 rounded">
              <div className="text-3xl font-bold">{hours}</div>
              <div>Hours</div>
            </div>
            <div className="bg-gray-800 p-4 rounded">
              <div className="text-3xl font-bold">{minutes}</div>
              <div>Minutes</div>
            </div>
            <div className="bg-gray-800 p-4 rounded">
              <div className="text-3xl font-bold">{seconds}</div>
              <div>Seconds</div>
            </div>
          </div>
        </div>
      );
    }
  };

  const nfts = [
    { id: 1, name: 'NFT 1', image: 'https://via.placeholder.com/300x300?text=NFT+1' },
    { id: 2, name: 'NFT 2', image: 'https://via.placeholder.com/300x300?text=NFT+2' },
    { id: 3, name: 'NFT 3', image: 'https://via.placeholder.com/300x300?text=NFT+3' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to NFT Mint Site</h1>
        <p className="text-center mb-8">Discover and mint unique NFTs!</p>
        
        <div className="mb-12">
          <Countdown date={mintStartDate} renderer={renderer} />
        </div>

        <h2 className="text-3xl font-bold text-center mb-8">NFT Previews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {nfts.map((nft) => (
            <div key={nft.id} className="bg-gray-800 p-4 rounded-lg">
              <img src={nft.image} alt={nft.name} className="w-full h-64 object-cover rounded mb-4" />
              <h3 className="text-xl font-bold">{nft.name}</h3>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;