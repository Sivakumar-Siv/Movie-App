import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-lg z-10">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide text-white">
        🎬 MovieApp
      </div>

      {/* Links */}
      <div className="space-x-6 text-lg">
        <Link
          to="/"
          className="hover:text-red-400 transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/watchlist"
          className="hover:text-red-400 transition duration-300"
        >
          Watchlist
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
