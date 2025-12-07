import React from 'react';
import Navbar from '../components/Navbar';
import Countdown from 'react-countdown';

function importAll(r) {
  return r.keys().reduce((images, path) => {
    const key = path.replace('./', '');
    images[key] = r(path);
    return images;
  }, {});
}

const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));

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
    { id: 1, name: 'NFT 1', image: images['nft1.png'] },
    { id: 2, name: 'NFT 2', image: images['nft2.png'] },
    { id: 3, name: 'NFT 3', image: images['nft3.png'] },
    { id: 4, name: 'NFT 4', image: images['nft4.png'] },
    { id: 5, name: 'NFT 5', image: images['nft5.png'] },
    { id: 6, name: 'NFT 6', image: images['nft6.png'] },
    { id: 7, name: 'NFT 7', image: images['nft7.png'] },
    { id: 8, name: 'NFT 8', image: images['nft8.png'] },
    { id: 9, name: 'NFT 9', image: images['nft9.png'] },
    { id: 10, name: 'NFT 10', image: images['nft10.png'] },
    { id: 11, name: 'NFT 11', image: images['nft11.png'] },
    { id: 12, name: 'NFT 12', image: images['nft12.png'] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Navbar />
      <section className="hero bg-cover bg-center bg-no-repeat py-24 animate-fade-in" style={{backgroundImage: `url(${images['back2bear.png']})`}}>
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-extrabold mb-6 text-white drop-shadow-2xl">Welcome to NFT Mint Site</h1>
          <p className="text-2xl mb-8 text-gray-100 max-w-2xl mx-auto">Discover and mint unique NFTs in our exclusive collection!</p>
        </div>

      </section>
      <main className="container mx-auto px-6 py-12 animate-fade-in">
        
        <div className="mb-16 flex justify-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-2xl shadow-2xl animate-fade-in">
            <Countdown date={mintStartDate} renderer={renderer} />
          </div>
        </div>

        <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">NFT Previews</h2>
        <div className="overflow-hidden relative py-8">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...nfts, ...nfts].map((nft, index) => (
              <div key={`${nft.id}-${index}`} className="flex-shrink-0 w-72 mx-6 bg-gray-800 p-6 rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-shadow duration-300 hover:scale-105 transform">
                <img src={nft.image} alt={nft.name} className="w-full h-64 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-bold text-center">{nft.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;