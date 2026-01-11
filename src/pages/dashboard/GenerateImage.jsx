import React, { useState } from "react";
import {
  Sparkles,
  Image as ImageIcon,
  Download,
  Share2,
  Layers,
  AlertCircle,
  Maximize2,
} from "lucide-react";
import PromptEnhancer from "./components/PromptEnhancer";

const GenerateImage = () => {
  const [prompt, setPrompt] = useState("");
  const [negativePrompt, setNegativePrompt] = useState("");
  const [showNegative, setShowNegative] = useState(false);
  const [model, setModel] = useState("stable-diffusion-xl");
  const [style, setStyle] = useState("realistic");
  const [size, setSize] = useState("1024x1024");
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState(null);

  const handleGenerate = () => {
    if (!prompt) return;
    setIsGenerating(true);
    // Simulate generation
    setTimeout(() => {
      setResult(
        "https://images.unsplash.com/photo-1678755673859-9060d4b53274?auto=format&fit=crop&q=80&w=1024"
      );
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
      {/* Input Section */}
      <div className="lg:col-span-4 space-y-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">Generate Image</h1>
          <p className="text-gray-400 text-sm">
            Bring your imagination to life with AI.
          </p>
        </div>

        {/* Prompt Input */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Prompt
          </label>
          <div className="relative">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your image in detail... (e.g. A futuristic city floating in the clouds)"
              className="w-full h-32 bg-[#13141c] border border-white/10 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-indigo-500/50 resize-none"
              maxLength={1000}
            />
            <span className="absolute bottom-3 right-3 text-xs text-gray-500">
              {prompt.length}/1000
            </span>
          </div>
          {prompt && <PromptEnhancer prompt={prompt} onEnhance={setPrompt} />}
        </div>

        {/* Settings Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Model */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Model
            </label>
            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="w-full bg-[#13141c] border border-white/10 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-indigo-500/50"
            >
              <option value="stable-diffusion-xl">Stable Diffusion XL</option>
              <option value="dalle-3">DALL·E 3</option>
              <option value="midjourney-v6">Midjourney v6 (Beta)</option>
            </select>
          </div>

          {/* Style */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Style
            </label>
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full bg-[#13141c] border border-white/10 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-indigo-500/50"
            >
              <option value="realistic">Realistic</option>
              <option value="anime">Anime</option>
              <option value="digital-art">Digital Art</option>
              <option value="3d-render">3D Render</option>
              <option value="sketch">Sketch</option>
            </select>
          </div>

          {/* Size */}
          <div className="col-span-2 space-y-2">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Image Size
            </label>
            <div className="grid grid-cols-3 gap-2">
              {["512x512", "768x768", "1024x1024"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`py-2 px-3 rounded-lg text-xs font-medium border transition-all
                        ${
                          size === s
                            ? "bg-indigo-600/20 border-indigo-500 text-white"
                            : "bg-[#13141c] border-white/10 text-gray-400 hover:border-white/20"
                        }
                      `}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Negative Prompt Toggle */}
        <div>
          <button
            onClick={() => setShowNegative(!showNegative)}
            className="text-xs font-medium text-gray-500 hover:text-white flex items-center gap-1 transition-colors"
          >
            {showNegative ? "- Hide Negative Prompt" : "+ Add Negative Prompt"}
          </button>

          {showNegative && (
            <div className="mt-2 animate-fade-in">
              <input
                type="text"
                value={negativePrompt}
                onChange={(e) => setNegativePrompt(e.target.value)}
                placeholder="Items to remove (e.g. blur, low quality, ugly)..."
                className="w-full bg-[#13141c] border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-red-500/30 placeholder-gray-600"
              />
            </div>
          )}
        </div>

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          disabled={!prompt || isGenerating}
          className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-bold text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.01] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
        >
          {isGenerating ? (
            <>
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles size={20} />
              Generate Image
              <span className="ml-1 text-xs font-normal opacity-70 bg-black/20 px-2 py-0.5 rounded-full">
                -1 Credit
              </span>
            </>
          )}
        </button>
      </div>

      {/* Preview Section */}
      <div className="lg:col-span-8 bg-[#13141c]/50 border border-white/5 rounded-2xl p-6 flex items-center justify-center relative min-h-[500px]">
        {result ? (
          <div className="relative w-full h-full group animate-fade-in">
            <img
              src={result}
              alt="Generated Art"
              className="w-full h-full object-contain max-h-[700px] rounded-lg shadow-2xl"
            />
            {/* Overlay Actions */}
            <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                className="p-3 bg-black/50 hover:bg-black/70 backdrop-blur-md rounded-xl text-white border border-white/10 transition-colors"
                title="Download"
              >
                <Download size={20} />
              </button>
              <button
                className="p-3 bg-black/50 hover:bg-black/70 backdrop-blur-md rounded-xl text-white border border-white/10 transition-colors"
                title="Share"
              >
                <Share2 size={20} />
              </button>
              <button
                className="p-3 bg-black/50 hover:bg-black/70 backdrop-blur-md rounded-xl text-white border border-white/10 transition-colors"
                title="Full Screen"
              >
                <Maximize2 size={20} />
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/5">
              <ImageIcon size={40} className="opacity-50" />
            </div>
            <p className="text-lg font-medium mb-1">
              Detailed Prompt = Better Results
            </p>
            <p className="text-sm max-w-xs mx-auto opacity-60">
              Enter a prompt and check your settings to start generating amazing
              art.
            </p>
          </div>
        )}

        {/* NSFW Warning - UI Demo */}
        {/* <div className="absolute bottom-4 left-4 bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-2 rounded-lg text-xs font-medium flex items-center gap-2">
            <AlertCircle size={14} />
            NSFW Content Filtered
         </div> */}
      </div>
    </div>
  );
};

export default GenerateImage;
