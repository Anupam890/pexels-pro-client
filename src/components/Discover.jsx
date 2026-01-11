import React from "react";
import { Heart, Maximize2 } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1614726365723-49cfae96a6f5?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1633511090164-b43840ea1607?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1502691876148-a84978e59af8?auto=format&fit=crop&q=80&w=600",
];

const Discover = () => {
  return (
    <section className="py-24 bg-gradient-to-t from-[#0f1016] to-[#13141c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">Discover</h2>
            <p className="text-gray-400">
              Explore generations from our community
            </p>
          </div>
          <button className="hidden md:block text-indigo-400 hover:text-indigo-300 font-medium">
            View all works
          </button>
        </div>

        {/* Masonry-like Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={src}
                alt={`Gallery ${idx}`}
                className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <button className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors text-white">
                  <Heart size={20} />
                </button>
                <button className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors text-white">
                  <Maximize2 size={20} />
                </button>
              </div>

              {/* Author badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 border border-white"></div>
                <span className="text-sm font-medium text-white shadow-black drop-shadow-md">
                  @artist_{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <button className="text-indigo-400 font-medium">
            View all works
          </button>
        </div>
      </div>
    </section>
  );
};

export default Discover;
