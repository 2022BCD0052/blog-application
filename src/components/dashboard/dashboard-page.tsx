import { FileText, MessageCircle, PlusCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import RecentArticles from "./recent-articles";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export async function BlogDashboard() {
  const [articles, totalComments] = await Promise.all([
    prisma.articles.findMany({
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
    }),
    prisma.comment.count(),
  ]);

  return (
    <main className="flex-1 p-4 md:p-8 bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white animate-fade-in">
            Blog Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400 animate-fade-in-up">
            Manage your content and analytics
          </p>
        </div>
        <Link href={"/dashboard/articles/create"}>
          <Button 
            className="gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-cyan-400 dark:to-pink-500 dark:hover:from-cyan-500 dark:hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg hover:shadow-indigo-500/20 dark:hover:shadow-cyan-500/20"
          >
            <PlusCircle className="h-4 w-4" />
            New Article
          </Button>
        </Link>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-3 mb-8">
        {[
          {
            title: "Total Articles",
            value: articles.length,
            subtext: "+5 from last month",
            Icon: FileText,
          },
          {
            title: "Total Comments",
            value: totalComments,
            subtext: "12 awaiting moderation",
            Icon: MessageCircle,
          },
          {
            title: "Avg. Reading Time",
            value: "4.2m",
            subtext: "+0.8m from last month",
            Icon: Clock,
          },
        ].map(({ title, value, subtext, Icon }, index) => (
          <Card
            key={index}
            className="bg-gray-50/50 dark:bg-gradient-to-br dark:from-gray-900/50 dark:to-indigo-950/50 border border-gray-200/50 dark:border-cyan-400/20 backdrop-blur-lg shadow-md shadow-indigo-500/10 dark:shadow-cyan-500/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20 dark:hover:shadow-cyan-500/20"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">
                {title}
              </CardTitle>
              <Icon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-indigo-600 dark:text-cyan-400">
                {value}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {subtext}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Articles */}
      <RecentArticles articles={articles} />
    </main>
  );
}