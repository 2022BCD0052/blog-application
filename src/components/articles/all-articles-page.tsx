"use client"; // Changed to client-side for animations
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Search } from "lucide-react";
import Image from "next/image";
import { Prisma } from "@prisma/client";
import { motion } from "framer-motion"; // Adding Framer Motion for animations

type SearchPageProps = {
  articles: Prisma.ArticlesGetPayload<{
    include: {
      author: {
        select: {
          name: true;
          email: true;
          imageUrl: true;
        };
      };
    };
  }>[];
};

export function AllArticlesPage({ articles }: SearchPageProps) {
  if (articles.length === 0) return <NoSearchResults />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
    >
      {articles.map((article, index) => (
        <motion.div
          key={article.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card
            className="group relative overflow-hidden bg-gray-100/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-[0_0_12px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_12px_rgba(147,51,234,0.3)] hover:scale-105 rounded-xl"
          >
            <div className="p-6">
              {/* Image Container */}
              <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700 shadow-[0_0_8px_rgba(59,130,246,0.2)] dark:shadow-[0_0_8px_rgba(147,51,234,0.2)] transition-all duration-300 group-hover:scale-102">
                <Image
                  src={article.featuredImage as string}
                  alt={article.title}
                  fill
                  className="object-cover transition-all duration-300 group-hover:scale-105"
                />
              </div>
              {/* Article Content */}
              <h3 className="text-xl font-semibold  dark:text-white bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-blue-700 group-hover:to-purple-700 dark:group-hover:from-blue-500 dark:group-hover:to-purple-500">
                {article.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {article.category}
              </p>

              {/* Author & Metadata */}
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8 border-2 border-blue-500 dark:border-purple-400 shadow-[0_0_6px_rgba(59,130,246,0.5)] dark:shadow-[0_0_6px_rgba(147,51,234,0.5)] transition-all duration-300 group-hover:scale-105">
                    <AvatarImage src={article.author.imageUrl as string} />
                    <AvatarFallback>{article.author.name?.charAt(0) || "A"}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {article.author.name}
                  </span>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {new Date(article.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}

export function NoSearchResults() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center justify-center p-8 text-center bg-gray-100/80 dark:bg-gray-800/80 rounded-xl border border-gray-200 dark:border-gray-700 shadow-[0_0_10px_rgba(59,130,246,0.2)] dark:shadow-[0_0_10px_rgba(147,51,234,0.2)]"
    >
      {/* Icon */}
      <div className="mb-4 rounded-full bg-gray-200/50 dark:bg-gray-700/50 p-4 transition-all duration-300 hover:bg-blue-200/50 dark:hover:bg-purple-900/50">
        <Search className="h-8 w-8 text-blue-500 dark:text-purple-400 transition-all duration-300 hover:text-blue-600 dark:hover:text-purple-300" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold dark:text-white bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
        No Results Found
      </h3>

      {/* Description */}
      <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-md">
        We couldn’t find any articles matching your search. Try a different keyword or phrase.
      </p>
    </motion.div>
  );
}