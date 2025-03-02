import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import Image from "next/image";

export async function TopArticles() {
  const articles = await prisma.articles.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      comments: true,
      author: {
        select: {
          name: true,
          email: true,
          imageUrl: true,
        },
      },
    },
  });

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {articles.slice(0, 3).map((article) => (
        <Card
          key={article.id}
          className={cn(
            "group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg",
            "border border-gray-200/50 dark:border-cyan-400/20",
            "bg-gray-50/50 dark:bg-gradient-to-br dark:from-gray-900/50 dark:to-indigo-950/50 backdrop-blur-lg",
            "shadow-md shadow-indigo-500/10 dark:shadow-cyan-500/10"
          )}
        >
          <div className="p-6">
            <Link href={`/articles/${article.id}`}>
              {/* Image Container */}
              <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl transition-all duration-300 group-hover:scale-105">
                <Image
                  src={article.featuredImage as string}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <Avatar className="h-8 w-8 border border-indigo-400/20 dark:border-cyan-400/20">
                  <AvatarImage src={article.author.imageUrl as string} />
                  <AvatarFallback className="bg-indigo-100 dark:bg-cyan-900 text-indigo-600 dark:text-cyan-400">
                    {article.author.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <span className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors duration-300">
                  {article.author.name}
                </span>
              </div>

              {/* Article Title */}
              <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                {article.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {article.category}
              </p>

              {/* Article Meta Info */}
              <div className="mt-6 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{new Date(article.createdAt).toDateString()}</span>
                <span>{12} min read</span>
              </div>
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
}