import React from 'react';
import Navbar from '../components/Navbar';

const Profile = () => {
  // In a real app, this would come from blockchain or API
  const mintedNFTs = [
    { id: 1, name: 'My NFT #1', image: 'https://via.placeholder.com/300x300?text=My+NFT+1', traits: 'Rare, Blue' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">Your NFT Collection</h1>
        <p className="text-center mb-8">View all your minted NFTs here.</p>
        
        {mintedNFTs.length === 0 ? (
          <p className="text-center">No NFTs minted yet. Go to the Mint page to get started!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mintedNFTs.map((nft) => (
              <div key={nft.id} className="bg-gray-800 p-4 rounded-lg">
                <img src={nft.image} alt={nft.name} className="w-full h-64 object-cover rounded mb-4" />
                <h3 className="text-xl font-bold">{nft.name}</h3>
                <p className="text-gray-300">Traits: {nft.traits}</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Share on Twitter</button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Profile;