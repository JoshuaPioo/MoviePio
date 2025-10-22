import React from "react";
import { Play, Film } from "lucide-react";

function MovieDashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="w-64 flex flex-col justify-between border-r p-6 text-center">
        <nav className="space-y-10">
          <h1 className="text-3xl font-bold tracking-wide ">MovieApp</h1>
          <ul className="space-y-6 ">
            <li className="text-xl hover:bg-gray-700 hover:text-white cursor-pointer">Home</li>
            <li className="text-xl hover:bg-gray-700 hover:text-white cursor-pointer">Browse</li>
            <li className="text-xl hover:bg-gray-700 hover:text-white cursor-pointer">Trending</li>
            <li className="text-xl hover:bg-gray-700 hover:text-white cursor-pointer">Saved</li>
            <li className="text-xl hover:bg-gray-700 hover:text-white cursor-pointer">Playlist</li>
            <li className="text-xl hover:bg-gray-700 hover:text-white cursor-pointer">Profile</li>
          </ul>
        </nav>
          <div className="space-y-4">
            <ul className= "space-y-4">
            <li className="text-xl  hover:bg-gray-700 hover:text-white cursor-pointer">Setting</li>
            <li className="text-xl hover:bg-gray-700 hover:text-white cursor-pointer">Logout</li>
            </ul>
          </div>
      </aside>
    </div>
  );
}

export default MovieDashboard;
