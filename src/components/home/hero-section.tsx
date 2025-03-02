"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden bg-gray-100 dark:bg-gradient-to-br dark:from-indigo-950 dark:via-purple-950 dark:to-indigo-950">
      {/* Gradient overlay */}
      <div className="absolute inset-0 before:absolute before:left-1/4 before:top-0 before:h-[500px] before:w-[500px] before:rounded-full before:bg-gradient-to-r before:from-indigo-600/20 before:to-purple-600/20 dark:before:from-cyan-400/20 dark:before:to-pink-500/20 before:blur-3xl" />

      <div className="container relative mx-auto flex h-full flex-col items-center justify-center px-4 py-24 md:flex-row md:py-32">
        {/* Content */}
        <div className="flex-1 space-y-8 text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Explore the World Through
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-400 dark:to-pink-500 bg-clip-text text-transparent">
              {" "}
              Words
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
            Discover insightful articles, thought-provoking stories, and expert
            perspectives on technology, lifestyle, and innovation.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row md:justify-start">
            <Button 
              size="lg" 
              className="rounded-full px-8 py-6 text-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-cyan-400 dark:to-pink-500 dark:hover:from-cyan-500 dark:hover:to-pink-600 transition-all duration-300 hover:scale-105"
            >
              Start Reading
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 text-lg border-indigo-400/50 text-indigo-600 hover:bg-indigo-400/20 dark:border-cyan-400/50 dark:text-cyan-400 dark:hover:bg-cyan-400/20 transition-all duration-300 hover:scale-105"
            >
              Explore Topics
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-8 text-gray-900 dark:text-white md:max-w-md">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-indigo-600 dark:text-cyan-400">1K+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Published Articles</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-indigo-600 dark:text-cyan-400">50+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Expert Writers</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-indigo-600 dark:text-cyan-400">10M+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Monthly Readers</div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex-1 md:mt-0">
          <div
            className={cn(
              "relative mx-auto h-64 w-64 rounded-2xl overflow-hidden",
              "bg-gradient-to-br from-gray-200/50 to-transparent dark:from-white/5 dark:to-transparent",
              "border border-indigo-400/20 dark:border-cyan-400/20 backdrop-blur-lg",
              "shadow-2xl shadow-indigo-500/10 dark:shadow-cyan-500/10",
              "transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/20 dark:hover:shadow-cyan-500/20"
            )}
          >
            <Image
              src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=2992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Illustration for the blog"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;