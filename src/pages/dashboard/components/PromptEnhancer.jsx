import React from "react";
import { Sparkles, Wand2, Globe } from "lucide-react";

const PromptEnhancer = ({ prompt, onEnhance }) => {
  const handleEnhance = () => {
    // Mock enhancement logic
    const enhanced =
      prompt +
      ", highly detailed, 8k resolution, cinematic lighting, photorealistic, trending on artstation, unreal engine 5 render";
    onEnhance(enhanced);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-xl p-4 border border-indigo-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-indigo-500/20 rounded-lg">
          <Wand2 size={18} className="text-indigo-400" />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white">
            AI Prompt Enhancer
          </h4>
          <p className="text-xs text-gray-400 mt-1">
            Automatically add artistic keywords and improve quality.
          </p>
        </div>
      </div>

      <button
        onClick={handleEnhance}
        className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg transition-colors shadow-lg shadow-indigo-500/20"
      >
        <Sparkles size={14} />
        Enhance Prompt
      </button>
    </div>
  );
};

export default PromptEnhancer;
