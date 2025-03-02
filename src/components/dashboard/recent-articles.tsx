"use client";
import React, { useTransition } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import Link from "next/link";
import type { Prisma } from "@prisma/client";
import { deleteArticle } from "@/actions/delete-article";

type RecentArticlesProps = {
  articles: Prisma.ArticlesGetPayload<{
    include: {
      comments: true;
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

const RecentArticles: React.FC<RecentArticlesProps> = ({ articles }) => {
  return (
    <Card className="mb-8 bg-gray-50/50 dark:bg-gradient-to-br dark:from-gray-900/50 dark:to-indigo-950/50 border border-gray-200/50 dark:border-cyan-400/20 backdrop-blur-lg shadow-md shadow-indigo-500/10 dark:shadow-cyan-500/10 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 dark:hover:shadow-cyan-500/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-gray-900 dark:text-white text-xl font-semibold">
            Recent Articles
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            className="text-indigo-600 dark:text-cyan-400 hover:text-indigo-700 dark:hover:text-cyan-500 hover:bg-indigo-200/50 dark:hover:bg-cyan-400/20 transition-all duration-300"
          >
            View All →
          </Button>
        </div>
      </CardHeader>
      {!articles.length ? (
        <CardContent className="text-gray-600 dark:text-gray-400 text-center py-6">
          No articles found.
        </CardContent>
      ) : (
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-b border-gray-200/50 dark:border-cyan-400/20 hover:bg-gray-200/50 dark:hover:bg-white/10">
                <TableHead className="text-gray-700 dark:text-gray-300">Title</TableHead>
                <TableHead className="text-gray-700 dark:text-gray-300">Status</TableHead>
                <TableHead className="text-gray-700 dark:text-gray-300">Comments</TableHead>
                <TableHead className="text-gray-700 dark:text-gray-300">Date</TableHead>
                <TableHead className="text-gray-700 dark:text-gray-300">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {articles.slice(0, 5).map((article) => (
                <TableRow
                  key={article.id}
                  className="border-b border-gray-200/50 dark:border-cyan-400/20 hover:bg-gray-200/50 dark:hover:bg-white/10 transition-all duration-300"
                >
                  <TableCell className="font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors duration-300">
                    {article.title}
                  </TableCell>
                  <TableCell>
                    <span className="px-2 py-1 rounded-full text-xs bg-indigo-100 dark:bg-cyan-900/50 text-indigo-800 dark:text-cyan-400">
                      Published
                    </span>
                  </TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-300">
                    {article.comments.length}
                  </TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-300">
                    {new Date(article.createdAt).toDateString()}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Link href={`/dashboard/articles/${article.id}/edit`}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-indigo-600 dark:text-cyan-400 hover:text-indigo-700 dark:hover:text-cyan-500 hover:bg-indigo-200/50 dark:hover:bg-cyan-400/20 transition-all duration-300"
                        >
                          Edit
                        </Button>
                      </Link>
                      <DeleteButton articleId={article.id} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      )}
    </Card>
  );
};

type DeleteButtonProps = {
  articleId: string;
};

const DeleteButton: React.FC<DeleteButtonProps> = ({ articleId }) => {
  const [isPending, startTransition] = useTransition();

  return (
    <form
      action={() =>
        startTransition(async () => {
          await deleteArticle(articleId);
        })
      }
    >
      <Button
        disabled={isPending}
        variant="ghost"
        size="sm"
        className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-200/50 dark:hover:bg-red-400/20 transition-all duration-300"
      >
        {isPending ? "Deleting..." : "Delete"}
      </Button>
    </form>
  );
};

export default RecentArticles;