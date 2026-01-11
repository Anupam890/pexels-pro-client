import React, { useState } from "react";
import { Menu, X, Zap, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f1016]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Zap className="w-5 h-5 text-white" fill="currentColor" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              PEXELS <span className="text-indigo-400">PRO</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-8">
              {["Generate", "Go Pro", "Project", "Log In"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Moon size={20} />
            </button>
            <Link
              to="/register"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]"
            >
              Create free account
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f1016] border-b border-white/10 animate-fade-in">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {["Generate", "Go Pro", "Project", "Log In"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-300 hover:text-indigo-400 block px-3 py-3 rounded-md text-base font-medium"
              >
                {item}
              </a>
            ))}
            <Link
              to="/register"
              className="block w-full mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-center text-white px-4 py-3 rounded-lg text-base font-medium"
            >
              Create free account
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
