import React from "react";
import { Menu, Bell, Search, User } from "lucide-react";

const Header = ({ onMenuClick }) => {
  return (
    <header className="h-20 bg-[#13141c]/50 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-4 md:px-6 sticky top-0 z-30">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="p-2 -ml-2 text-gray-400 hover:text-white md:hidden"
        >
          <Menu size={24} />
        </button>

        {/* Search (Optional) */}
        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/5 focus-within:border-indigo-500/50 focus-within:bg-white/10 transition-all w-64">
          <Search size={16} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search your creations..."
            className="bg-transparent border-none outline-none text-sm text-white placeholder-gray-500 w-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Credits Pill */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-full">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-semibold text-indigo-300">
            12 Credits left
          </span>
        </div>

        <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-[#13141c]"></span>
        </button>

        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500 border-2 border-[#13141c] cursor-pointer ring-2 ring-transparent hover:ring-indigo-500 transition-all">
          {/* User Avatar Placeholder */}
        </div>
      </div>
    </header>
  );
};

export default Header;
