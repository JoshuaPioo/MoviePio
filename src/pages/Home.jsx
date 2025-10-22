import React from 'react';
import Sidebar from '../components/Sidebar.jsx';
import { Play, Film } from 'lucide-react';
import aot from '../assets/aot.jpg';


function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      {/* Main Content */}
      <div
        className="flex-grow p-10 overflow-y-auto   text-white  inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 " 
        style={{
          backgroundImage: `url(${aot})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >

        <div className="max-w-4xl">
          <h2 className="text-6xl font-extrabold leading-tight mb-6">
           If you don't fight, <br/> you can't win!
          </h2>
          <p className=" text-lg mb-8">
            Years after a group of heroes defeated a horde of monsters that
            terrorized Millfield, the town is thrown into chaos once again when
            the creatures return. The townsfolk must band together to fight for
            their survival against the unspeakable horrors that threaten to
            consume them all.
          </p>

          {/* Rating */}
          <div className="flex items-center mb-6">
            <span className=" mr-2 text-xl">★★★★☆</span>
            <p className="text-gray-400 text-sm">4/5 stars rating</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mb-10">
            <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
              <Play className="w-5 h-5" /> PLAY NOW
            </button>
            <button className="px-6 py-3 border border-gray-500 text-gray-300 rounded-lg hover:bg-gray-700 transition">
              TRAILER
            </button>
          </div>

          {/* Seasons */}
          <div className="flex gap-8 text-gray-400 mb-6 text-lg">
            <p className="text-white font-semibold cursor-pointer">Season 1</p>
            <p className="cursor-pointer hover:text-white">Season 2</p>
            <p className="cursor-pointer hover:text-white">Season 3</p>
          </div>

          {/* Episodes */}
          <div className="flex gap-5 overflow-x-auto pb-4">
            {[1, 2, 3, 4, 5].map((episode) => (
              <div
                key={episode}
                className="min-w-[200px] bg-neutral-900 rounded-lg overflow-hidden"
              >
                <div className="h-32 bg-gray-800 flex items-center justify-center">
                  <Film className="w-10 h-10 text-gray-600" />
                </div>
                <p className="p-3 text-sm text-gray-300">
                  Episode {episode}: Title here
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
