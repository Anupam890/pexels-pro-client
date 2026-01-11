import React, { useState } from "react";
import {
  Search,
  Filter,
  Download,
  Trash2,
  Copy,
  MoreHorizontal,
} from "lucide-react";

const mockHistory = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  url: `https://images.unsplash.com/photo-${
    1650000000000 + i
  }?auto=format&fit=crop&q=80&w=400`,
  prompt: `A beautiful surreal landscape with floating islands and neon lights ${i}`,
  style: ["Cyberpunk", "Realistic", "Anime", "Oil Painting"][i % 4],
  date: "2 mins ago",
}));

const ImageHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // In a real app, delete logic would be here

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Image History</h1>
          <p className="text-gray-400 text-sm">
            Manage and view your past generations.
          </p>
        </div>

        <div className="flex gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-none">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search prompt..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-64 bg-[#13141c] border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-white focus:border-indigo-500/50 outline-none"
            />
          </div>
          <button className="p-2 bg-[#13141c] border border-white/10 rounded-lg text-gray-400 hover:text-white hover:border-white/20">
            <Filter size={18} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {mockHistory.map((img) => (
          <div
            key={img.id}
            className="group relative bg-[#13141c] border border-white/5 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
          >
            <div className="aspect-square relative overflow-hidden bg-gray-800">
              <img
                src={`https://source.unsplash.com/random/400x400?sig=${img.id}`}
                alt={img.prompt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                // Fallback for demo since unsplash source might be weird sometimes:
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/400x400/2a2b36/ffffff?text=AI+Image")
                }
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <button
                  className="p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white"
                  title="Download"
                >
                  <Download size={18} />
                </button>
                <button
                  className="p-2 bg-red-500/20 hover:bg-red-500/40 backdrop-blur-md rounded-full text-red-200"
                  title="Delete"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>

            <div className="p-3">
              <div className="flex justify-between items-start gap-2 mb-1">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full">
                  {img.style}
                </span>
                <span className="text-[10px] text-gray-500 whitespace-nowrap">
                  {img.date}
                </span>
              </div>
              <p
                className="text-xs text-gray-300 line-clamp-2 leading-relaxed"
                title={img.prompt}
              >
                {img.prompt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageHistory;
