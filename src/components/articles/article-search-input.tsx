"use client";

import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { useSearchParams } from "next/navigation";
import { searchAction } from "@/actions/search";
import { motion } from "framer-motion"; // Adding Framer Motion for animations

const ArticleSearchInput = () => {
  const searchParams = useSearchParams();
  const searchText = searchParams.get("search") || "";

  return (
    <motion.form
      action={searchAction}
      className="mx-auto max-w-2xl"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="relative group">
        <Search
          className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500 dark:text-gray-400 group-focus-within:text-blue-600 dark:group-focus-within:text-purple-400 transition-all duration-300 group-hover:scale-110"
        />
        <Input
          type="text"
          name="search"
          defaultValue={searchText}
          placeholder="Search articles..."
          className="w-full pl-10 pr-4 py-6 text-lg bg-gray-100/80 dark:bg-gray-800/80 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-400 focus:border-blue-500 dark:focus:border-purple-400 rounded-full shadow-sm transition-all duration-300 hover:shadow-[0_0_8px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_8px_rgba(147,51,234,0.3)]"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 dark:from-purple-500/0 dark:via-purple-500/10 dark:to-purple-500/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.form>
  );
};

export default ArticleSearchInput;