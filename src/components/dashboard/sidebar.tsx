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
            className="md:hidden m-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 border-blue-500/30"
          >
            <LayoutDashboard className="h-5 w-5 text-blue-400" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[280px] bg-transparent border-none">
          <DashboardSidebar closeSheet={() => setIsOpen(false)} />
        </SheetContent>
      </Sheet>
      <div className="hidden md:block h-screen w-[280px] bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-xl border-r border-blue-500/20">
        <DashboardSidebar />
      </div>
    </div>
  );
};

export default Sidebar;

function DashboardSidebar({ closeSheet }: { closeSheet?: () => void }) {
  return (
    <div className="h-full px-4 py-6 text-gray-100">
      <div className="flex items-center gap-2 mb-12 px-2">
        <Link href={"/"} className="flex items-center gap-2">
          <div className="relative">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <span className="text-xl font-bold text-white">BC</span>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-25"></div>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            ByteCode
          </span>
        </Link>
      </div>
      <nav className="space-y-2">
        {[
          { href: "/dashboard", icon: LayoutDashboard, label: "Overview" },
          { href: "/dashboard/articles/create", icon: FileText, label: "Articles" },
          { href: "#", icon: MessageCircle, label: "Comments" },
          { href: "#", icon: BarChart, label: "Analytics" },
          { href: "#", icon: Settings, label: "Settings" },
        ].map((item, index) => (
          <Link key={index} href={item.href}>
            <Button
              variant="ghost"
              className="w-full justify-start group relative overflow-hidden rounded-lg transition-all duration-300 hover:bg-blue-500/10"
              onClick={closeSheet}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-300"></div>
              <item.icon className="mr-3 h-5 w-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
              <span className="relative text-gray-200 group-hover:text-white transition-colors">
                {item.label}
              </span>
            </Button>
          </Link>
        ))}
      </nav>
      {/* Optional futuristic footer */}
      <div className="absolute bottom-6 px-4 w-[280px]">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <p className="text-xs text-gray-400 mt-4 text-center">
          © 2025 ByteCode • v2.3.1
        </p>
      </div>
    </div>
  );
}