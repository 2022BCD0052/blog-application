"use client"; // Changed to client-side for animations
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MessageCircle } from "lucide-react";
import { Prisma } from "@prisma/client";
import CommentForm from "../comments/comment-form";
import CommentList from "../comments/comment-list";
import { prisma } from "@/lib/prisma";
import LikeButton from "./actions/like-button";
import { auth } from "@clerk/nextjs/server";
import { motion } from "framer-motion"; // Adding Framer Motion for animations

type ArticleDetailPageProps = {
  article: Prisma.ArticlesGetPayload<{
    include: {
      author: {
        select: {
          name: true;
          email: true;
          imageUrl: true;
        };
      };
    };
  }>;
};

export async function ArticleDetailPage({ article }: ArticleDetailPageProps) {
  const comments = await prisma.comment.findMany({
    where: {
      articleId: article.id,
    },
    include: {
      author: {
        select: {
          name: true,
          email: true,
          imageUrl: true,
        },
      },
    },
  });

  const likes = await prisma.like.findMany({ where: { articleId: article.id } });
  const { userId } = await auth();
  const user = await prisma.user.findUnique({ where: { clerkUserId: userId as string } });
  const isLiked = likes.some((like) => like.userId === user?.id);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      {/* Reuse your existing Navbar */}

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="container mx-auto px-4 py-12 sm:px-6 lg:px-8"
      >
        <article className="mx-auto max-w-3xl">
          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="rounded-full bg-blue-200/50 dark:bg-purple-900/50 px-3 py-1 text-sm text-blue-700 dark:text-purple-300 border border-blue-400/50 dark:border-purple-600/50 transition-all duration-300 hover:bg-blue-300/50 dark:hover:bg-purple-800/50">
                {article.category}
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              {article.title}
            </h1>

            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
              <Avatar className="h-12 w-12 border-2 border-blue-500 dark:border-purple-400 shadow-[0_0_8px_rgba(59,130,246,0.5)] dark:shadow-[0_0_8px_rgba(147,51,234,0.5)] transition-all duration-300 hover:scale-105">
                <AvatarImage src={article.author.imageUrl as string} />
                <AvatarFallback>{article.author.name?.charAt(0) || "A"}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  {article.author.name}
                </p>
                <p className="text-sm">
                  {new Date(article.createdAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })} · 12 min read
                </p>
              </div>
            </div>
          </motion.header>

          {/* Article Content */}
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none mb-12 text-gray-800 dark:text-gray-200 [&_h1]:text-gray-900 dark:[&_h1]:text-white [&_h2]:text-gray-900 dark:[&_h2]:text-white [&_p]:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Article Actions */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <LikeButton articleId={article.id} likes={likes} isLiked={isLiked} />
          </motion.div>

          {/* Comments Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="p-6 bg-gray-100/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-[0_0_12px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_12px_rgba(147,51,234,0.3)]">
              <div className="flex items-center gap-2 mb-8">
                <MessageCircle className="h-6 w-6 text-blue-500 dark:text-purple-400" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {comments.length} Comments
                </h2>
              </div>

              {/* Comment Form */}
              <CommentForm articleId={article.id} />

              {/* Comments List */}
              <CommentList comments={comments} />
            </Card>
          </motion.div>
        </article>
      </motion.main>
    </div>
  );
}

export default ArticleDetailPage;