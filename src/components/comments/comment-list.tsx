import type { Prisma } from "@prisma/client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type CommentListProps = {
  comments: Prisma.CommentGetPayload<{
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

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="flex gap-4 p-4 rounded-lg backdrop-blur-md bg-white/70 dark:bg-black/50 shadow-md border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:scale-[1.02]"
        >
          <Avatar className="h-12 w-12">
            <AvatarImage src={comment.author.imageUrl as string} />
            <AvatarFallback>{comment.author.name.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <div className="mb-2">
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                {comment.author.name}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 ml-3">
                {new Date(comment.createdAt).toLocaleDateString()}
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-base">{comment.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
