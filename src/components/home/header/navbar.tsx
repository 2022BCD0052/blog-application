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
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-purple-500/20 bg-gradient-to-b from-black/95 to-gray-900/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Left Section - Logo & Desktop Navigation */}
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl font-extrabold tracking-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                    Byte
                  </span>
                  <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                    Code
                  </span>
                </span>
              </Link>

              <div className="hidden md:flex items-center gap-6">
                {["Articles", "Tutorials", "About", "Dashboard"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="text-sm font-medium text-gray-300 transition-all duration-300 hover:text-cyan-400 hover:scale-105 hover:glow-effect"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Section - Search & Actions */}
            <div className="flex items-center gap-4">
              <SearchInput />
              <ModeToggle />
              <SignedIn>
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "border-2 border-cyan-400 glow-effect rounded-full",
                    },
                  }}
                />
              </SignedIn>
              <SignedOut>
                <div className="hidden md:flex items-center gap-3">
                  <SignInButton>
                    <Button
                      variant="outline"
                      className="relative text-cyan-400 border-cyan-400/50 bg-transparent hover:bg-cyan-400/20 hover:glow-effect-btn transition-all duration-300"
                    >
                      Login
                      <span className="absolute inset-0 bg-cyan-400/10 blur-lg opacity-0 hover:opacity-100 transition-opacity" />
                    </Button>
                  </SignInButton>
                  <SignUpButton>
                    <Button className="relative bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:from-purple-700 hover:to-cyan-600 hover:glow-effect-btn transition-all duration-300">
                      Sign Up
                      <span className="absolute inset-0 bg-purple-600/20 blur-lg opacity-0 hover:opacity-100 transition-opacity" />
                    </Button>
                  </SignUpButton>
                </div>
              </SignedOut>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
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
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed h-screen inset-y-0 right-0 z-50 w-3/4 max-w-xs bg-gradient-to-b from-gray-900/95 to-black/95 border-l border-purple-500/30 backdrop-blur-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full py-6 px-4 space-y-6">
            {/* Header Section */}
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-white">Menu</span>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-cyan-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-10 w-full bg-gray-800/70 border-gray-700/50 text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-400 transition-all duration-300 rounded-lg"
              />
            </div>

            {/* Navigation Links */}
            <div className="flex-1 space-y-2">
              {["Articles", "Tutorials", "About", "Dashboard"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="block px-4 py-3 text-base font-medium text-gray-200 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-all duration-300 border-l-4 border-transparent hover:border-cyan-400/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* User Section */}
            <div className="space-y-4 border-t border-gray-800/50 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-300">
                  Appearance
                </span>
                <ModeToggle />
              </div>

              <SignedIn>
                <div className="flex items-center gap-3">
                  <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        avatarBox: "border-2 border-cyan-400 glow-effect rounded-full w-10 h-10",
                      },
                    }}
                  />
                  <span className="text-sm text-gray-300">My Account</span>
                </div>
              </SignedIn>

              <SignedOut>
                <div className="space-y-3">
                  <SignInButton>
                    <Button
                      variant="outline"
                      className="w-full text-cyan-400 border-cyan-400/50 bg-transparent hover:bg-cyan-400/20 hover:glow-effect-btn transition-all duration-300 rounded-lg"
                    >
                      Login
                    </Button>
                  </SignInButton>
                  <SignUpButton>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:from-purple-700 hover:to-cyan-600 hover:glow-effect-btn transition-all duration-300 rounded-lg">
                      Sign Up
                    </Button>
                  </SignUpButton>
                </div>
              </SignedOut>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </nav>

      <style jsx>{`
        .glow-effect {
          text-shadow: 0 0 8px rgba(34, 211, 238, 0.7);
        }
        .glow-effect-btn {
          box-shadow: 0 0 15px rgba(34, 211, 238, 0.5), 0 0 25px rgba(147, 51, 234, 0.3);
        }
      `}</style>
    </>
  );
}