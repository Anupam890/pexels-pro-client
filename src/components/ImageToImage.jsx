import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

const ImageToImage = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-900/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content */}
          <div className="flex-1 order-2 lg:order-1">
            <span className="text-indigo-400 font-semibold tracking-wider text-sm uppercase mb-4 block">
              Image to Image
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Generate original images <br />
              at scale.
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Upload an existing photo and let our AI transform it into
              something completely new. Control the strength of the variation to
              keep the original composition or go wild with a completely new
              interpretation.
            </p>

            <div className="space-y-4 mb-8 text-gray-300">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center">
                  <span className="text-indigo-400 text-xs">✓</span>
                </div>
                <span>Maintain structural consistency</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center">
                  <span className="text-indigo-400 text-xs">✓</span>
                </div>
                <span>Style transfer for artistic effects</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center">
                  <span className="text-indigo-400 text-xs">✓</span>
                </div>
                <span>Upscale low-resolution inputs</span>
              </div>
            </div>

            <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-colors flex items-center gap-2">
              Start creating for free
              <ArrowRight size={18} />
            </button>
          </div>

          {/* UI Mockup */}
          <div className="flex-1 order-1 lg:order-2 w-full">
            <div className="relative rounded-xl bg-[#13141c] border border-white/10 shadow-2xl p-2 md:p-4">
              {/* Fake UI Header */}
              <div className="flex items-center gap-4 mb-4 px-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="flex-1 h-8 bg-white/5 rounded-md"></div>
              </div>

              <div className="grid grid-cols-[200px_1fr] gap-4 h-[400px]">
                {/* Sidebar */}
                <div className="hidden md:block bg-white/5 rounded-lg p-3 space-y-3">
                  <div className="h-20 bg-indigo-500/20 rounded-md border border-indigo-500/30"></div>
                  <div className="h-8 bg-white/5 rounded-md w-3/4"></div>
                  <div className="h-8 bg-white/5 rounded-md w-1/2"></div>
                  <div className="pt-4 border-t border-white/5 space-y-2">
                    <div className="h-2 bg-white/10 rounded w-full"></div>
                    <div className="h-2 bg-white/10 rounded w-4/5"></div>
                  </div>
                </div>

                {/* Main Area */}
                <div className="bg-[#0f1016] rounded-lg p-4 grid grid-cols-2 gap-3 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400"
                    className="rounded-lg w-full h-full object-cover opacity-80"
                    alt="Output 1"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400"
                    className="rounded-lg w-full h-full object-cover opacity-80"
                    alt="Output 2"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
                    className="rounded-lg w-full h-full object-cover opacity-80"
                    alt="Output 3"
                  />
                  <div className="rounded-lg border-2 border-dashed border-white/10 flex items-center justify-center">
                    <Sparkles className="text-indigo-500 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageToImage;
