"use client";
import { FormEvent, useTransition, useActionState, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import "react-quill-new/dist/quill.snow.css";
import { createArticles } from "@/actions/create-article";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

export function CreateArticlePage() {
  const [content, setContent] = useState("");
  const [isPending, startTransition] = useTransition();

  const [formState, action] = useActionState(createArticles, {
    errors: {},
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.append("content", content);

    startTransition(() => {
      action(formData);
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Card className="bg-gray-50/50 dark:bg-gradient-to-br dark:from-gray-900/50 dark:to-indigo-950/50 border border-gray-200/50 dark:border-cyan-400/20 backdrop-blur-lg shadow-md shadow-indigo-500/10 dark:shadow-cyan-500/10">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white animate-fade-in">
            Create New Article
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-gray-700 dark:text-gray-300">
                Article Title
              </Label>
              <Input
                id="title"
                name="title"
                placeholder="Enter article title"
                className="bg-gray-100 dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus-visible:ring-indigo-400 dark:focus-visible:ring-cyan-400 hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300"
              />
              {formState.errors.title && (
                <span className="font-medium text-sm text-red-500">
                  {formState.errors.title}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="category" className="text-gray-700 dark:text-gray-300">
                Category
              </Label>
              <select
                id="category"
                name="category"
                className="flex h-10 w-full rounded-md border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 px-3 py-2 text-sm text-gray-900 dark:text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 dark:placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 dark:focus-visible:ring-cyan-400 focus-visible:ring-offset-2 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-white/10"
              >
                <option value="">Select Category</option>
                <option value="technology">Technology</option>
                <option value="programming">Programming</option>
                <option value="web-development">Web Development</option>
              </select>
              {formState.errors.category && (
                <span className="font-medium text-sm text-red-500">
                  {formState.errors.category}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="featuredImage" className="text-gray-700 dark:text-gray-300">
                Featured Image
              </Label>
              <Input
                id="featuredImage"
                name="featuredImage"
                type="file"
                accept="image/*"
                className="bg-gray-100 dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus-visible:ring-indigo-400 dark:focus-visible:ring-cyan-400 hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300"
              />
              {formState.errors.featuredImage && (
                <span className="font-medium text-sm text-red-500">
                  {formState.errors.featuredImage}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-gray-700 dark:text-gray-300">Content</Label>
              <div className="rounded-md border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5">
                <ReactQuill
                  theme="snow"
                  value={content}
                  onChange={setContent}
                  className="text-gray-900 dark:text-white [&_.ql-toolbar]:bg-gray-200 dark:[&_.ql-toolbar]:bg-gray-800 [&_.ql-container]:border-0 [&_.ql-editor]:min-h-[200px] [&_.ql-editor]:text-gray-900 dark:[&_.ql-editor]:text-white"
                />
              </div>
              {formState.errors.content && (
                <span className="font-medium text-sm text-red-500">
                  {formState.errors.content[0]}
                </span>
              )}
            </div>
            {formState.errors.formErrors && (
              <div className="bg-red-100 dark:bg-red-900/20 p-2 border border-red-600 dark:border-red-400 rounded-md">
                <span className="font-medium text-sm text-red-600 dark:text-red-300">
                  {formState.errors.formErrors}
                </span>
              </div>
            )}
            <div className="flex justify-end gap-4">
              <Button
                type="button"
                variant="outline"
                className="border-indigo-400/50 text-indigo-600 hover:bg-indigo-200/50 dark:border-cyan-400/50 dark:text-cyan-400 dark:hover:bg-cyan-400/20 transition-all duration-300 hover:scale-105"
              >
                Cancel
              </Button>
              <Button
                disabled={isPending}
                type="submit"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-cyan-400 dark:to-pink-500 dark:hover:from-cyan-500 dark:hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg hover:shadow-indigo-500/20 dark:hover:shadow-cyan-500/20"
              >
                {isPending ? "Loading..." : "Publish Article"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}