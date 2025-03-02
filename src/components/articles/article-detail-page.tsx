import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MessageCircle } from "lucide-react";
import { Prisma } from "@prisma/client";
import CommentForm from "../comments/comment-form";
import CommentList from "../comments/comment-list";
import { prisma } from "@/lib/prisma";
import LikeButton from "./actions/like-button";
import { auth } from "@clerk/nextjs/server";

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
    where: { articleId: article.id },
    include: {
      author: {
        select: { name: true, email: true, imageUrl: true },
      },
    },
  });

  const likes = await prisma.like.findMany({ where: { articleId: article.id } });
  const { userId } = await auth();
  const user = await prisma.user.findUnique({ where: { clerkUserId: userId as string } });
  const isLiked = likes.some((like) => like.userId === user?.id);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Reuse your existing Navbar */}

      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-3xl">
          {/* Article Header */}
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="rounded-full bg-indigo-500/10 dark:bg-indigo-400/10 px-4 py-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 dark:border-indigo-400/20 transition-all hover:bg-indigo-500/20">
                {article.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
              <Avatar className="h-12 w-12 ring-2 ring-offset-2 ring-indigo-500/20 dark:ring-indigo-400/20 transition-all duration-300">
                <AvatarImage src={article.author.imageUrl as string} />
                <AvatarFallback className="bg-gradient-to-br from-indigo-400 to-blue-500 text-white">
                  {article.author.name?.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  {article.author.name}
                </p>
                <p className="text-sm">
                  {article.createdAt.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })} · {Math.ceil(article.content.length / 200)} min read
                </p>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <section
            className="prose prose-lg dark:prose-invert max-w-none mb-12 text-gray-800 dark:text-gray-200 bg-white/70 dark:bg-gray-900/70 p-6 rounded-2xl shadow-md border border-gray-200/50 dark:border-gray-800/50 backdrop-blur-md"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Article Actions */}
          <div className="mb-12 flex justify-start">
            <LikeButton articleId={article.id} likes={likes} isLiked={isLiked} />
          </div>

          {/* Comments Section */}
          <Card className="p-6 rounded-2xl bg-white/70 dark:bg-gray-900/70 border border-gray-200/50 dark:border-gray-800/50 backdrop-blur-md shadow-lg transition-all hover:shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <MessageCircle className="h-6 w-6 text-indigo-600 dark:text-indigo-400 animate-pulse" />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                {comments.length} Comments
              </h2>
            </div>

            {/* Comment Form */}
            <CommentForm articleId={article.id} />

            {/* Comments List */}
            <CommentList comments={comments} />
          </Card>
        </article>
      </main>
    </div>
  );
}