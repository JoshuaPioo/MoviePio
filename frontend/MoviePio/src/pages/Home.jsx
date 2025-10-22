import React from 'react';
import Sidebar from '../components/Sidebar.jsx';
import { Play, Film } from 'lucide-react';
import aot from '../assets/aot.jpg';

function Home() {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar />

      {/* Main Content */}
      <div
        className="relative flex-grow text-white flex flex-col justify-between p-10"
        style={{
          backgroundImage: `url(${aot})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* 🟢 Black gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>

        {/* Main content */}
        <div className="relative z-10 max-w-5xl">
          <h2 className="text-6xl font-extrabold leading-tight mb-6">
            If you don't fight, <br /> you can't win!
          </h2>
          <p className="text-lg mb-4">
            Years after a group of heroes defeated a horde of monsters that
            terrorized Millfield, the town is thrown into chaos once again when
            the creatures return. The townsfolk must band together to fight for
            their survival against the unspeakable horrors that threaten to
            consume them all.
          </p>

          {/* Rating */}
          <div className="flex items-center mb-6">
            <span className="mr-2 text-xl">★★★★☆</span>
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
        </div>

        {/* Episodes (no scroll, full width) */}
        <div className="relative z-10 flex flex-wrap gap-5">
          {[1, 2, 3, 4, 5].map((episode) => (
            <div
              key={episode}
              className="w-[200px] bg-neutral-900 rounded-lg overflow-hidden"
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
  );
}

export default Home;
