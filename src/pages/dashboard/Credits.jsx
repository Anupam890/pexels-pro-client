import React from "react";
import { CreditCard, TrendingUp, Zap, Check } from "lucide-react";

const Credits = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Credits & Usage</h1>
        <p className="text-gray-400 text-sm">
          Manage your subscription and view usage statistics.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#13141c] border border-white/5 p-6 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Zap size={48} />
          </div>
          <h3 className="text-gray-400 text-sm font-medium mb-1">
            Available Credits
          </h3>
          <p className="text-3xl font-bold text-white">450</p>
          <div className="mt-4 w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-[60%] h-full rounded-full" />
          </div>
          <p className="text-xs text-gray-500 mt-2">Resets in 12 days</p>
        </div>

        <div className="bg-[#13141c] border border-white/5 p-6 rounded-2xl">
          <h3 className="text-gray-400 text-sm font-medium mb-1">
            Images Generated
          </h3>
          <p className="text-3xl font-bold text-white">1,248</p>
          <div className="flex items-center gap-1 text-green-400 text-xs mt-2">
            <TrendingUp size={14} />
            <span>+12% this month</span>
          </div>
        </div>

        <div className="bg-[#13141c] border border-white/5 p-6 rounded-2xl flex flex-col justify-center items-center text-center">
          <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center text-yellow-500 mb-3">
            <CreditCard size={24} />
          </div>
          <h3 className="font-bold text-white">Pro Plan</h3>
          <p className="text-xs text-gray-400">Active until Dec 2026</p>
        </div>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
        <div className="p-6 rounded-2xl border border-white/10 bg-[#13141c]">
          <h3 className="text-lg font-bold">Free Plan</h3>
          <p className="text-2xl font-bold mt-2">
            $0 <span className="text-sm font-normal text-gray-400">/ mo</span>
          </p>
          <ul className="mt-6 space-y-3 text-sm text-gray-400">
            <li className="flex gap-2">
              <Check size={16} className="text-green-500" /> 100 Credits / month
            </li>
            <li className="flex gap-2">
              <Check size={16} className="text-green-500" /> Standard Speed
            </li>
            <li className="flex gap-2">
              <Check size={16} className="text-green-500" /> Public Images
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl border border-indigo-500/30 bg-indigo-900/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-lg">
            Current Plan
          </div>
          <h3 className="text-lg font-bold">Pro Plan</h3>
          <p className="text-2xl font-bold mt-2">
            $19 <span className="text-sm font-normal text-gray-400">/ mo</span>
          </p>
          <ul className="mt-6 space-y-3 text-sm text-gray-300">
            <li className="flex gap-2">
              <Check size={16} className="text-indigo-400" /> 500 Credits /
              month
            </li>
            <li className="flex gap-2">
              <Check size={16} className="text-indigo-400" /> Fast Generation
            </li>
            <li className="flex gap-2">
              <Check size={16} className="text-indigo-400" /> Private Mode
            </li>
            <li className="flex gap-2">
              <Check size={16} className="text-indigo-400" /> Commercial Usage
            </li>
          </ul>
          <button className="w-full mt-6 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm font-semibold text-white transition-colors">
            Manage Subscription
          </button>
        </div>
      </div>
    </div>
  );
};

export default Credits;
