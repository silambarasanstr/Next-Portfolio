"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

const Header = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-6">
      
      {/* Left */}
      <div>
        <h1 className="text-lg font-semibold text-gray-900">
          Dashboard
        </h1>

        <p className="text-xs text-gray-500">
          Welcome back, Admin
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        
        {/* Admin */}
        <div className="hidden items-center gap-2 sm:flex">
          <span className="text-sm font-medium text-gray-600">
            Admin
          </span>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white">
            A
          </div>
        </div>

        {/* Logout */}
        <button
          type="button"
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
        >
          <LogOut size={16} />
          <span>Logout</span>
        </button>

      </div>
    </header>
  );
};

export default Header;