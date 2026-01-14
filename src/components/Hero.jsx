import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
              <Sparkles size={14} className="text-yellow-400" />
              <span className="text-xs font-medium text-gray-300 uppercase tracking-wide">
                New AI Model Available
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Create amazing photos with the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                power of AI
              </span>
            </h1>

            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Image Pro is a suite of magical AI tools. Generate original images
              at scale, modify photos, expand pictures beyond their original
              borders, or create custom AI models.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link
                to="/register"
                className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                Start creating for free
                <ArrowRight size={18} />
              </Link>
              <p className="text-xs text-gray-500 mt-2 sm:mt-0">
                100/mo images for free • No credit card required
              </p>
            </div>
          </div>

          <div className="flex-1 relative w-full max-w-[600px] lg:max-w-none">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10 border border-white/5 transform hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1761129386720-82a53e04d9b7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="AI Fish"
                    className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/10 border border-white/5 transform hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1607419726991-5fc7e74cda67?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Cyberpunk"
                    className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-pink-500/10 border border-white/5 transform hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1618172193763-c511deb635ca?auto=format&fit=crop&q=80&w=600"
                    alt="Surreal"
                    className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-white/5 transform hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=600"
                    alt="Abstract"
                    className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#1a1b23] border border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow hidden sm:flex">
              <div className="w-10 h-10 rounded-full bg-indigo-600/20 flex items-center justify-center text-indigo-400">
                <Sparkles size={20} />
              </div>
              <div>
                <p className="text-white text-sm font-bold">2M+ Images</p>
                <p className="text-gray-400 text-xs">Generated today</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
