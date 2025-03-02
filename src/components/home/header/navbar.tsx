"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X } from "lucide-react";
import { ModeToggle } from "../../dark-mode";
import Link from "next/link";
import { SignedOut, SignInButton, SignUpButton, SignedIn, UserButton } from "@clerk/nextjs";
import { motion, AnimatePresence } from "framer-motion"; // Adding Framer Motion

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Left Section - Logo & Desktop Navigation */}
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl font-extrabold tracking-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent transition-all duration-300 hover:from-blue-700 hover:to-purple-700">
                    Yogesh
                  </span>
                  <span className="text-gray-900 dark:text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] dark:drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]">
                    Code
                  </span>
                </span>
              </Link>

              <div className="hidden md:flex items-center gap-6">
                {["Articles", "Tutorials", "About", "Dashboard"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-all duration-300 hover:text-blue-600 dark:hover:text-purple-400 hover:scale-105 hover:shadow-[0_0_8px_rgba(59,130,246,0.5)] dark:hover:shadow-[0_0_8px_rgba(147,51,234,0.5)]"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Section - Search & Actions */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex relative group">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400 group-focus-within:text-blue-600 dark:group-focus-within:text-purple-400 transition-colors" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-10 w-48 bg-gray-100/80 dark:bg-gray-800/80 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-blue-200/50 dark:focus:ring-purple-200/50 transition-all duration-300 rounded-full"
                />
              </div>
              <ModeToggle />
              <SignedIn>
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "border-2 border-blue-500 dark:border-purple-400 rounded-full w-9 h-9 shadow-[0_0_10px_rgba(59,130,246,0.5)] dark:shadow-[0_0_10px_rgba(147,51,234,0.5)] transition-all duration-300 hover:scale-105",
                    },
                  }}
                />
              </SignedIn>
              <SignedOut>
                <div className="hidden md:flex items-center gap-3">
                  <SignInButton>
                    <Button
                      variant="outline"
                      className="relative text-blue-600 dark:text-purple-400 border-blue-500/50 dark:border-purple-400/50 bg-transparent hover:bg-blue-200/20 dark:hover:bg-purple-200/20 transition-all duration-300 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.3)] dark:shadow-[0_0_8px_rgba(147,51,234,0.3)] hover:shadow-[0_0_12px_rgba(59,130,246,0.5)] dark:hover:shadow-[0_0_12px_rgba(147,51,234,0.5)]"
                    >
                      Login
                    </Button>
                  </SignInButton>
                  <SignUpButton>
                    <Button
                      className="relative bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)] dark:shadow-[0_0_8px_rgba(147,51,234,0.5)] hover:shadow-[0_0_15px_rgba(59,130,246,0.7)] dark:hover:shadow-[0_0_15px_rgba(147,51,234,0.7)] transition-all duration-300"
                    >
                      Sign Up
                    </Button>
                  </SignUpButton>
                </div>
              </SignedOut>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-y-0 h-screen  right-0 z-50 w-3/4 max-w-xs bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 border-l border-gray-200 dark:border-gray-800 backdrop-blur-2xl md:hidden"
            >
              <div className="flex  h-full flex-col  py-6 px-4 space-y-6">
                {/* Header Section */}
                <div className="flex  items-center justify-between">
                  <span className="text-xl font-bold text-gray-900 dark:text-white">Menu</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-400"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search articles..."
                    className="pl-10 w-full bg-gray-100/80 dark:bg-gray-800/80 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-400 dark:focus:ring-purple-400 transition-all duration-300 rounded-lg"
                  />
                </div>

                {/* Navigation Links */}
                <div className="flex-1 space-y-2">
                  {["Articles", "Tutorials", "About", "Dashboard"].map((item) => (
                    <Link
                      key={item}
                      href={`/${item.toLowerCase()}`}
                      className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-purple-400 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-300 border-l-4 border-transparent hover:border-blue-500/50 dark:hover:border-purple-400/50"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                </div>

                {/* User Section */}
                <div className="space-y-4 border-t border-gray-200/50 dark:border-gray-800/50 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Appearance</span>
                    <ModeToggle />
                  </div>

                  <SignedIn>
                    <div className="flex items-center gap-3">
                      <UserButton
                        afterSignOutUrl="/"
                        appearance={{
                          elements: {
                            avatarBox: "border-2 border-blue-500 dark:border-purple-400 rounded-full w-10 h-10 shadow-[0_0_10px_rgba(59,130,246,0.5)] dark:shadow-[0_0_10px_rgba(147,51,234,0.5)]",
                          },
                        }}
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">My Account</span>
                    </div>
                  </SignedIn>

                  <SignedOut>
                    <div className="space-y-3">
                      <SignInButton>
                        <Button
                          variant="outline"
                          className="w-full text-blue-600 dark:text-purple-400 border-blue-500/50 dark:border-purple-400/50 bg-transparent hover:bg-blue-200/20 dark:hover:bg-purple-200/20 transition-all duration-300 rounded-lg shadow-[0_0_8px_rgba(59,130,246,0.3)] dark:shadow-[0_0_8px_rgba(147,51,234,0.3)]"
                        >
                          Login
                        </Button>
                      </SignInButton>
                      <SignUpButton>
                        <Button
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 transition-all duration-300 rounded-lg shadow-[0_0_8px_rgba(59,130,246,0.5)] dark:shadow-[0_0_8px_rgba(147,51,234,0.5)]"
                        >
                          Sign Up
                        </Button>
                      </SignUpButton>
                    </div>
                  </SignedOut>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

export default Navbar;