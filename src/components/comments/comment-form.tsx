"use client";
import React, { useActionState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { createComments } from "@/actions/create-comment";
import { cn } from "@/lib/utils"; // Helper function for conditional classnames

type CommentFormProps = {
  articleId: string;
};

const CommentForm: React.FC<CommentFormProps> = ({ articleId }) => {
  const [formState, action, isPending] = useActionState(createComments.bind(null, articleId), {
    errors: {},
  });

  return (
    <form
      action={action}
      className="mb-8 rounded-xl p-6 backdrop-blur-lg bg-white/80 dark:bg-black/50 shadow-lg border border-gray-200 dark:border-gray-800 transition-all duration-300"
    >
      <div className="flex gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src="/current-user-avatar.jpg" />
          <AvatarFallback>Y</AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <Input
            placeholder="Add a comment..."
            name="body"
            className="py-4 px-4 text-lg bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
          />

          {formState.errors.body && (
            <p className="text-red-500 text-sm font-medium mt-2">{formState.errors.body}</p>
          )}

          <div className="mt-4 flex justify-end">
            <Button
              disabled={isPending}
              type="submit"
              className={cn(
                "px-6 py-3 rounded-lg text-white font-semibold transition-all",
                "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-500",
                "dark:bg-gradient-to-r dark:from-gray-700 dark:to-gray-900 dark:hover:from-gray-600 dark:hover:to-gray-800"
              )}
            >
              {isPending ? "Posting..." : "Post Comment"}
            </Button>
          </div>

          {formState.errors.formErrors && (
            <div className="mt-3 p-2 border border-red-500 bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300 rounded-md">
              {formState.errors.formErrors[0]}
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
