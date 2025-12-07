import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';

const Mint = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [minting, setMinting] = useState(false);
  const [minted, setMinted] = useState(false);
  const [error, setError] = useState(null);

  const handleMintClick = () => {
    setIsModalOpen(true);
  };

  const confirmMint = async () => {
    setIsModalOpen(false);
    setMinting(true);
    setError(null);
    
    // Simulate minting process
    try {
      await new Promise(resolve => setTimeout(resolve, 3000)); // 3 seconds
      setMinted(true);
    } catch (err) {
      setError('Minting failed. Please try again.');
    } finally {
      setMinting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">Mint Your NFT</h1>
        <p className="text-center mb-8">Connect your wallet and mint a unique NFT!</p>
        
        <div className="text-center">
          {!minted ? (
            <button
              onClick={handleMintClick}
              disabled={minting}
              className="bg-green-500 text-white px-8 py-4 rounded-lg text-xl font-bold disabled:opacity-50"
            >
              {minting ? 'Minting...' : 'Mint NFT'}
            </button>
          ) : (
            <div className="bg-green-600 p-4 rounded-lg">
              <h2 className="text-2xl font-bold">Success!</h2>
              <p>Your NFT has been minted. Check your profile to view it.</p>
            </div>
          )}
          
          {minting && (
            <div className="mt-4">
              <div className="bg-blue-600 h-4 rounded-full">
                <div className="bg-blue-400 h-4 rounded-full animate-pulse" style={{ width: '100%' }}></div>
              </div>
              <p className="mt-2">Processing transaction...</p>
            </div>
          )}
          
          {error && (
            <div className="mt-4 bg-red-600 p-4 rounded-lg">
              <p>{error}</p>
            </div>
          )}
        </div>
        
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2 className="text-xl font-bold mb-4">Confirm Minting</h2>
          <p className="mb-4">Are you sure you want to mint this NFT? This will cost 0.01 ETH.</p>
          <div className="flex justify-end space-x-2">
            <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-gray-300 text-black rounded">Cancel</button>
            <button onClick={confirmMint} className="px-4 py-2 bg-green-500 text-white rounded">Confirm</button>
          </div>
        </Modal>
      </main>
    </div>
  );
};

export default Mint;