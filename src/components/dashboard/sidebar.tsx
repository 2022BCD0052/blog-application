"use client";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import {
  BarChart,
  FileText,
  LayoutDashboard,
  MessageCircle,
  Settings,
} from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Mobile Sidebar */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="md:hidden m-4 border-indigo-400/50 dark:border-cyan-400/50 text-indigo-600 dark:text-cyan-400 hover:bg-indigo-200/50 dark:hover:bg-cyan-400/20 transition-all duration-300"
          >
            <LayoutDashboard className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-[250px] bg-gray-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-indigo-950/95 border-r border-gray-200/50 dark:border-cyan-400/20"
        >
          <DashboardSidebar closeSheet={() => setIsOpen(false)} />
        </SheetContent>
      </Sheet>
      <div className="hidden md:block h-screen w-[250px] border-r border-gray-200/50 dark:border-cyan-400/20 bg-gray-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-indigo-950/95 shadow-md shadow-indigo-500/10 dark:shadow-cyan-500/10">
        <DashboardSidebar />
      </div>
    </div>
  );
};

export default Sidebar;

function DashboardSidebar({ closeSheet }: { closeSheet?: () => void }) {
  const navItems = [
    { href: "/dashboard", icon: LayoutDashboard, label: "Overview" },
    { href: "/dashboard/articles/create", icon: FileText, label: "Articles" },
    { href: "#", icon: MessageCircle, label: "Comments" },
    { href: "#", icon: BarChart, label: "Analytics" },
    { href: "#", icon: Settings, label: "Settings" },
  ];

  return (
    <div className="h-full px-4 py-6">
      <div className="flex items-center gap-2 mb-8 px-2">
        <Link href={"/"}>
          <span className="text-xl font-bold transition-all duration-300 hover:scale-105">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-400 dark:to-pink-500 bg-clip-text text-transparent">
              Byte
            </span>
            <span className="text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-cyan-300">
              Code
            </span>
          </span>
        </Link>
      </div>
      <nav className="space-y-1">
        {navItems.map(({ href, icon: Icon, label }) => (
          <Link key={label} href={href}>
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-cyan-400 hover:bg-indigo-200/50 dark:hover:bg-cyan-400/20 transition-all duration-300 hover:scale-105 rounded-lg"
              onClick={closeSheet}
            >
              <Icon className="mr-2 h-4 w-4" />
              {label}
            </Button>
          </Link>
        ))}
      </nav>
    </div>
  );
}