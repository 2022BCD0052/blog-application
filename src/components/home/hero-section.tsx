"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion"; // Adding Framer Motion for animations

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.15)_0,_transparent_70%)] dark:bg-[radial-gradient(circle_at_top_right,_rgba(147,51,234,0.15)_0,_transparent_70%)] pointer-events-none" />

      <div className="container relative mx-auto flex h-full flex-col items-center justify-center px-4 py-24 md:flex-row md:py-32">
        {/* Content */}
        <motion.div
          className="flex-1 space-y-8 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Explore the World Through
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent transition-all duration-300 hover:from-blue-700 hover:to-purple-700">
              {" "}
              Words
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl leading-relaxed">
            Discover insightful articles, thought-provoking stories, and expert perspectives on technology, lifestyle, and innovation.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row md:justify-start">
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-lg bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 text-white shadow-lg transition-all duration-300 group relative overflow-hidden"
            >
              <span className="relative z-10">Start Reading</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/50 to-blue-500/30 dark:from-blue-400/30 dark:via-purple-400/50 dark:to-blue-400/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 text-lg border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-blue-200/50 dark:hover:bg-purple-200/50 transition-all duration-300"
            >
              Explore Topics
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-8 text-gray-900 dark:text-white md:max-w-md">
            {[
              { value: "1K+", label: "Published Articles" },
              { value: "50+", label: "Expert Writers" },
              { value: "10M+", label: "Monthly Readers" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="space-y-2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="mt-12 flex-1 md:mt-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div
            className={cn(
              "relative mx-auto h-80 w-80 rounded-2xl overflow-hidden",
              "bg-gradient-to-br from-gray-200/20 to-transparent dark:from-gray-800/20 dark:to-transparent",
              "border border-blue-500/20 dark:border-purple-500/20 backdrop-blur-md",
              "shadow-2xl shadow-blue-500/10 dark:shadow-purple-500/10",
              "transition-all duration-300 hover:scale-105 hover:shadow-blue-500/20 dark:hover:shadow-purple-500/20"
            )}
          >
            <Image
              src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=2992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Illustration for the blog"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;