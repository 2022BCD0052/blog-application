"use client"; // Client Component for animations
import { FileText, MessageCircle, PlusCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import RecentArticles from "./recent-articles";
import Link from "next/link";
import { motion } from "framer-motion";

// Define prop types
interface BlogDashboardProps {
  articles: {
    id: string;
    title: string;
    createdAt: Date;
    comments: { id: string }[];
    author: { name: string; email: string; imageUrl: string };
  }[];
  totalComments: number;
}

export default function BlogDashboard({ articles, totalComments }: BlogDashboardProps) {
  return (
    <main className="flex-1 p-4 md:p-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      {/* Header */}
      <motion.div
        className="flex justify-between items-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Blog Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your content and analytics</p>
        </div>
        <Link href={"/dashboard/articles/create"}>
          <Button className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 rounded-lg shadow transition-all duration-300">
            <PlusCircle className="h-4 w-4" />
            New Article
          </Button>
        </Link>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-3 mb-8">
        {[
          { title: "Total Articles", icon: FileText, value: articles.length, subtext: "+5 from last month" },
          { title: "Total Comments", icon: MessageCircle, value: totalComments, subtext: "12 awaiting moderation" },
          { title: "Avg. Reading Time", icon: Clock, value: "4.2m", subtext: "+0.8m from last month" },
        ].map((stat, index) => (
          <motion.div key={stat.title} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
            <Card className="bg-gray-100/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700 transition-all duration-300 hover:bg-gray-200/50 dark:hover:bg-gray-700/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-300">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-blue-500 dark:text-purple-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.subtext}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Recent Articles */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
        <RecentArticles articles={articles} />
      </motion.div>
    </main>
  );
}
