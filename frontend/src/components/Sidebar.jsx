import React from "react";
import { Play, Film } from "lucide-react";

function MovieDashboard() {
  

  const handleLogout = () => {
  localStorage.removeItem("token");
  window.dispatchEvent(new Event("storage")); // ✅ triggers re-render in App
};


  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="w-64 flex flex-col justify-between border-r p-6 text-center bg-gray-900 text-white">
        <nav className="space-y-10">
          <h1 className="text-3xl font-bold tracking-wide">MovieApp</h1>
          <ul className="space-y-6">
            <li className="text-xl hover:bg-gray-700 hover:text-white cursor-pointer p-2 rounded">Home</li>
            <li className="text-xl hover:bg-gray-700 hover:text-white cursor-pointer p-2 rounded">Browse</li>
            <li className="text-xl hover:bg-gray-700 hover:text-white cursor-pointer p-2 rounded">Trending</li>
            <li className="text-xl hover:bg-gray-700 hover:text-white cursor-pointer p-2 rounded">Saved</li>
            <li className="text-xl hover:bg-gray-700 hover:text-white cursor-pointer p-2 rounded">Playlist</li>
            <li className="text-xl hover:bg-gray-700 hover:text-white cursor-pointer p-2 rounded">Profile</li>
          </ul>
        </nav>

        <div className="space-y-4">
          <ul className="space-y-4">
            <li className="text-xl hover:bg-gray-700 hover:text-white cursor-pointer p-2 rounded">Settings</li>
            <li
              onClick={handleLogout}
              className="text-xl text-red-400 hover:bg-red-600 hover:text-white cursor-pointer p-2 rounded transition"
            >
              Logout
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default MovieDashboard;
