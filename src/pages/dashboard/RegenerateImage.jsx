import React, { useState } from "react";
import { RefreshCw, ArrowRight, Layout, Download } from "lucide-react";

const RegenerateImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [variations, setVariations] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  // Mock selection
  const mockRecent = [1, 2, 3, 4];

  const handleRegenerate = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setVariations([1, 2, 3, 4]); // 4 variations
      setIsProcessing(false);
    }, 2500);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Regenerate & Variations</h1>
        <p className="text-gray-400 text-sm">
          Select an image to create similar variations or edit the prompt.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 flex-1">
        {/* Left Panel: Selection & Controls */}
        <div className="w-full lg:w-1/3 space-y-6">
          {/* Recent Selection Hub */}
          <div className="bg-[#13141c] border border-white/5 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-gray-300 mb-3">
              Select Source Image
            </h3>
            <div className="grid grid-cols-4 gap-2">
              {mockRecent.map((i) => (
                <div
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`aspect-square rounded-lg overflow-hidden cursor-pointer border-2 transition-all
                         ${
                           selectedImage === i
                             ? "border-indigo-500 shadow-[0_0_15px_rgba(79,70,229,0.3)]"
                             : "border-transparent hover:border-white/20"
                         }
                       `}
                >
                  <img
                    src={`https://source.unsplash.com/random/100x100?sig=${i}`}
                    className="w-full h-full object-cover"
                    alt="thumb"
                  />
                </div>
              ))}
              <button className="aspect-square rounded-lg border border-dashed border-white/20 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/40 transition-colors text-xs text-center p-1">
                Browse History
              </button>
            </div>
          </div>

          {/* Dynamic Prompt Edit */}
          {selectedImage && (
            <div className="space-y-4 animate-fade-in">
              <div>
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block">
                  Edit Prompt
                </label>
                <textarea
                  className="w-full h-24 bg-[#13141c] border border-white/10 rounded-lg p-3 text-sm text-white focus:border-indigo-500/50 resize-none"
                  defaultValue="A cybernetic warrior in neon rain, high contrast, 8k"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">
                  Strength (Similarity)
                </label>
                <input type="range" className="w-full accent-indigo-500" />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Creative</span>
                  <span>Balanced</span>
                  <span>Precise</span>
                </div>
              </div>

              <button
                onClick={handleRegenerate}
                disabled={isProcessing}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-white font-medium flex items-center justify-center gap-2 transition-all"
              >
                {isProcessing ? (
                  <RefreshCw className="animate-spin" />
                ) : (
                  <Layers />
                )}
                {isProcessing
                  ? "Generating Variations..."
                  : "Generate 4 Variations"}
              </button>
            </div>
          )}
        </div>

        {/* Right Panel: Output */}
        <div className="flex-1 bg-[#13141c]/30 border border-white/5 rounded-2xl p-6 min-h-[400px] flex items-center justify-center">
          {variations.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 w-full h-full animate-fade-in">
              {variations.map((v) => (
                <div
                  key={v}
                  className="relative group rounded-xl overflow-hidden border border-white/5"
                >
                  <img
                    src={`https://source.unsplash.com/random/500x500?sig=${
                      v + 10
                    }`}
                    className="w-full h-full object-cover"
                    alt="Variation"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white">
                      <Download size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500">
              {selectedImage ? (
                <p>Ready to generate variations.</p>
              ) : (
                <p>Select an image to start.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegenerateImage;
