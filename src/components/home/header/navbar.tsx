"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X } from "lucide-react";
import { ModeToggle } from "../../dark-mode";
import Link from "next/link";
import { SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { SignedIn, UserButton } from "@clerk/nextjs";
import SearchInput from "./search-input";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-white/10 bg-white/95 dark:bg-gradient-to-r dark:from-gray-900/95 dark:via-indigo-950/95 dark:to-gray-900/95 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left Section - Logo & Desktop Navigation */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <span className="text-2xl font-bold transition-all duration-300 group-hover:scale-105">
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-cyan-400 dark:to-pink-500 bg-clip-text text-transparent">
                  Byte
                </span>
                <span className="text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-300">
                  Code
                </span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {["articles", "tutorials", "about", "dashboard"].map((item) => (
                <Link
                  key={item}
                  href={`/${item}`}
                  className="text-sm font-medium text-gray-600 dark:text-gray-400 transition-all duration-300 hover:text-indigo-600 dark:hover:text-white hover:scale-105 hover:shadow-[0_0_10px_rgba(79,70,229,0.2)] dark:hover:shadow-[0_0_10px_rgba(0,221,235,0.3)] px-2 py-1 rounded-md"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section - Search & Actions */}
          <div className="flex items-center gap-4">
            {/* Search Bar (Desktop) */}
            <SearchInput/>

            {/* Theme Toggle */}
            <ModeToggle />

            {/* User Actions */}
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "hover:ring-2 hover:ring-indigo-400 dark:hover:ring-cyan-400 transition-all duration-300",
                  },
                }}
              />
            </SignedIn>
            <SignedOut>
              <div className="hidden md:flex items-center gap-3">
                <SignInButton>
                  <Button 
                    variant="outline" 
                    className="border-indigo-400/50 text-indigo-400 hover:bg-indigo-400/20 dark:border-cyan-400/50 dark:text-cyan-400 dark:hover:bg-cyan-400/20 hover:scale-105 transition-all duration-300"
                  >
                    Login
                  </Button>
                </SignInButton>
                <SignUpButton>
                  <Button 
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-cyan-400 dark:to-pink-500 dark:hover:from-cyan-500 dark:hover:to-pink-600 hover:scale-105 transition-all duration-300"
                  >
                    Sign up
                  </Button>
                </SignUpButton>
              </div>
            </SignedOut>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 space-y-6 border-t border-gray-200 dark:border-white/10 bg-white/95 dark:bg-gradient-to-b dark:from-gray-900/95 dark:to-indigo-950/95 animate-slide-down">
            {/* Search Bar (Mobile) */}
            <div className="px-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="pl-10 w-full bg-gray-100 dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus-visible:ring-1 focus-visible:ring-indigo-400 dark:focus-visible:ring-cyan-400 hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300"
                />
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-3 px-4">
              {["articles", "tutorials", "about", "dashboard"].map((item) => (
                <Link
                  key={item}
                  href={`/${item}`}
                  className="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
            </div>

            {/* Mobile Auth Buttons */}
            <SignedOut>
              <div className="px-4 flex flex-col gap-3">
                <SignInButton>
                  <Button 
                    variant="outline" 
                    className="w-full border-indigo-400/50 text-indigo-400 hover:bg-indigo-400/20 dark:border-cyan-400/50 dark:text-cyan-400 dark:hover:bg-cyan-400/20 transition-all duration-300"
                  >
                    Login
                  </Button>
                </SignInButton>
                <SignUpButton>
                  <Button 
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-cyan-400 dark:to-pink-500 dark:hover:from-cyan-500 dark:hover:to-pink-600 transition-all duration-300"
                  >
                    Sign up
                  </Button>
                </SignUpButton>
              </div>
            </SignedOut>
          </div>
        )}
      </div>
    </nav>
  );
}