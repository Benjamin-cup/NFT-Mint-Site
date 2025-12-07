import React from 'react';
import { Link } from 'react-router-dom';
import WalletConnect from './WalletConnect';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link to="/">NFT Mint Site</Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/mint" className="text-white hover:text-gray-300">Mint</Link>
          <Link to="/profile" className="text-white hover:text-gray-300">Profile</Link>
        </div>
        <WalletConnect />
      </div>
    </nav>
  );
};

export default Navbar;