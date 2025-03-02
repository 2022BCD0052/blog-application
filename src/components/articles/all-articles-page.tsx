import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Search } from "lucide-react";
import Image from "next/image";
import { Prisma } from "@prisma/client";

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
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-4">
      {articles.map((article) => (
        <Card
          key={article.id}
          className="group relative overflow-hidden rounded-2xl border border-gray-200/50 dark:border-gray-800/50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out"
        >
          <div className="p-6">
            {/* Image Container with futuristic overlay */}
            <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900">
              <Image
                src={article.featuredImage as string}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Article Content */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
              {article.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{article.category}</p>

            {/* Author & Metadata */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9 ring-2 ring-offset-2 ring-indigo-500/20 dark:ring-indigo-400/20 transition-all duration-300">
                  <AvatarImage src={article.author.imageUrl as string} />
                  <AvatarFallback className="bg-gradient-to-br from-indigo-400 to-blue-500 text-white">
                    {article.author.name?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {article.author.name}
                </span>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {article.createdAt.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export function NoSearchResults() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 text-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 rounded-3xl shadow-lg">
      {/* Icon */}
      <div className="mb-6 rounded-full bg-gray-100/50 dark:bg-gray-800/50 p-4 shadow-inner border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
        <Search className="h-10 w-10 text-gray-500 dark:text-gray-400 animate-pulse" />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-wide">
        No Results Found
      </h3>

      {/* Description */}
      <p className="mt-3 max-w-md text-gray-600 dark:text-gray-400 text-base">
        We couldn’t find any articles matching your search. Try a different keyword or phrase to explore more.
      </p>
    </div>
  );
}