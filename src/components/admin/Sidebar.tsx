"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderKanban,
  Plus,
  Settings,
  ChevronRight,
} from "lucide-react";

type MenuItem = {
  label: string;
  href: string;
  icon: React.ElementType;
};

const menuItems: MenuItem[] = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Projects",
    href: "/admin/projects",
    icon: FolderKanban,
  },
  {
    label: "Add Project",
    href: "/admin/projects/add",
    icon: Plus,
  },
  {
    label: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 flex h-screen w-64 shrink-0 flex-col bg-gray-950 text-white">
      
      {/* Logo */}
      <div className="shrink-0 border-b border-gray-800 px-5 py-5">
        <div className="flex items-center gap-3">
          
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600">
            <LayoutDashboard size={20} />
          </div>

          <div>
            <h1 className="text-lg font-semibold">
              Admin Panel
            </h1>

            <p className="text-xs text-gray-500">
              Management
            </p>
          </div>

        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-5">
        
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
          Menu
        </p>

        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;

            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm transition ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-400 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </div>

                  {isActive && (
                    <ChevronRight size={16} />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

      </nav>

      {/* Bottom */}
      <div className="shrink-0 border-t border-gray-800 px-5 py-4">
        <p className="text-xs text-gray-500">
          Admin Dashboard
        </p>

        <p className="mt-1 text-xs text-gray-600">
          © 2026
        </p>
      </div>

    </aside>
  );
};

export default Sidebar;