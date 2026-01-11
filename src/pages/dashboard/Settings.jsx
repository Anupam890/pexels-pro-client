import React from "react";
import { User, Bell, Shield, Smartphone, Monitor } from "lucide-react";

const Settings = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Settings</h1>
      <p className="text-gray-400 text-sm mb-8">
        Manage your account preferences and application settings.
      </p>

      <div className="space-y-6">
        {/* Profile Section */}
        <div className="bg-[#13141c] border border-white/5 rounded-2xl p-6">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <User size={20} className="text-indigo-400" /> Profile
          </h2>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500 border-2 border-white/10"></div>
            <div>
              <button className="text-sm text-indigo-400 font-medium hover:text-indigo-300">
                Change Avatar
              </button>
              <p className="text-xs text-gray-500">JPG, GIF or PNG. Max 1MB.</p>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-1">
              <label className="text-xs font-semibold text-gray-400">
                Display Name
              </label>
              <input
                type="text"
                defaultValue="Anupam Mandal"
                className="bg-[#0f1016] border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:border-indigo-500/50 outline-none"
              />
            </div>
            <div className="grid gap-1">
              <label className="text-xs font-semibold text-gray-400">
                Email
              </label>
              <input
                type="email"
                defaultValue="user@example.com"
                className="bg-[#0f1016] border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:border-indigo-500/50 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="bg-[#13141c] border border-white/5 rounded-2xl p-6">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Monitor size={20} className="text-purple-400" /> Preferences
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium">Dark Mode</h4>
                <p className="text-xs text-gray-500">
                  Currently managed by system
                </p>
              </div>
              <div className="w-10 h-6 bg-indigo-600 rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-white/5 pt-4">
              <div>
                <h4 className="text-sm font-medium">High Quality Previews</h4>
                <p className="text-xs text-gray-500">Uses more bandwidth</p>
              </div>
              <div className="w-10 h-6 bg-gray-700 rounded-full relative cursor-pointer">
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-[#13141c] border border-white/5 rounded-2xl p-6">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Bell size={20} className="text-yellow-400" /> Notifications
          </h2>
          <div className="space-y-3 text-sm">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded bg-[#0f1016] border-white/20 text-indigo-500 focus:ring-0"
              />
              <span>Email me when generation completes</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded bg-[#0f1016] border-white/20 text-indigo-500 focus:ring-0"
              />
              <span>New feature announcements</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded bg-[#0f1016] border-white/20 text-indigo-500 focus:ring-0"
              />
              <span>Marketing newsletters</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
