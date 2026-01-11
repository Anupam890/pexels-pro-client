import React from "react";
import { Zap, Layers, Download, LayoutTemplate } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    title: "Built for speed",
    description:
      "Generate high-quality images in seconds with our optimized infra which is blazingly fast.",
  },
  {
    icon: <Layers className="w-6 h-6 text-purple-400" />,
    title: "10+ AI models",
    description:
      "Switch between Stable Diffusion, DALL-E, and custom fine-tuned models tailored for specific styles.",
  },
  {
    icon: <Download className="w-6 h-6 text-green-400" />,
    title: "Previews required",
    description:
      "Preview generation in real-time. Only download the ones you love. Save credits for what matters.",
  },
  {
    icon: <LayoutTemplate className="w-6 h-6 text-blue-400" />,
    title: "Works for all",
    description:
      "From YouTube thumbnails to game assets, our tools fit into every creative workflow perfectly.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-[#0f1016]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            A fully integrated suite of <br />
            <span className="text-indigo-400">image-generation tools</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to create professional assets, mockups, and art
            in one platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#1c1d29] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
