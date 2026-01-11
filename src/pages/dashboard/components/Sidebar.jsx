import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Zap,
  Image as ImageIcon,
  History,
  RefreshCw,
  CreditCard,
  Settings,
  X,
  LogOut,
} from "lucide-react";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  const navigation = [
    { name: "Generate Image", href: "/generate", icon: ImageIcon },
    { name: "Image History", href: "/generate/history", icon: History },
    { name: "Regenerate", href: "/generate/regenerate", icon: RefreshCw },
    { name: "Credits & Usage", href: "/generate/credits", icon: CreditCard },
    { name: "Settings", href: "/generate/settings", icon: Settings },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
          fixed md:relative z-50 w-64 h-full bg-[#13141c] border-r border-white/5 flex flex-col transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Logo */}
        <div className="h-20 flex items-center px-6 border-b border-white/5 justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" fill="currentColor" />
            </div>
            <span className="text-lg font-bold">
              PEXELS <span className="text-indigo-400">PRO</span>
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden text-gray-400"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200
                  ${
                    isActive
                      ? "bg-indigo-600/10 text-indigo-400 shadow-[0_0_20px_rgba(79,70,229,0.1)]"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                <item.icon
                  size={20}
                  className={isActive ? "text-indigo-400" : "text-gray-400"}
                />
                {item.name}
              </NavLink>
            );
          })}
        </nav>

        {/* User Profile / Logout */}
        <div className="p-4 border-t border-white/5">
          <button className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors">
            <LogOut size={20} />
            Sign Out
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
