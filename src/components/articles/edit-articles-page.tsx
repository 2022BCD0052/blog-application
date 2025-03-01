"use client";
import { FormEvent, useTransition, useActionState, useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Articles } from "@prisma/client";
import { updateArticles } from "@/actions/update-article";
import Image from "next/image";
import { motion } from "framer-motion"; // Adding Framer Motion for animations

type EditPropsPage = {
  article: Articles;
};

const EditArticlePage: React.FC<EditPropsPage> = ({ article }) => {
  const [content, setContent] = useState(article.content);
  const [isPending, startTransition] = useTransition();
  const [formState, formAction] = useActionState(updateArticles.bind(null, article.id), {
    errors: {},
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("content", content);

    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-4xl mx-auto p-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900"
    >
      <Card className="bg-gray-100/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-300 hover:shadow-[0_0_12px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_12px_rgba(147,51,234,0.3)]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
            Edit Article
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title" className="text-gray-700 dark:text-gray-300">
                Article Title
              </Label>
              <Input
                id="title"
                name="title"
                defaultValue={article.title}
                placeholder="Enter article title"
                required
                className="bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-400 transition-all duration-300 rounded-lg"
              />
              {formState.errors.title && (
                <span className="font-medium text-sm text-red-500 dark:text-red-400">
                  {formState.errors.title}
                </span>
              )}
            </div>

            {/* Category */}
            <div className="space-y-2">
              <Label htmlFor="category" className="text-gray-700 dark:text-gray-300">
                Category
              </Label>
              <select
                id="category"
                name="category"
                defaultValue={article.category}
                required
                className="flex h-10 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-400 transition-all duration-300"
              >
                <option value="">Select Category</option>
                <option value="technology">Technology</option>
                <option value="programming">Programming</option>
                <option value="web-development">Web Development</option>
              </select>
              {formState.errors.category && (
                <span className="font-medium text-sm text-red-500 dark:text-red-400">
                  {formState.errors.category}
                </span>
              )}
            </div>

            {/* Featured Image */}
            <div className="space-y-2">
              <Label htmlFor="featuredImage" className="text-gray-700 dark:text-gray-300">
                Featured Image
              </Label>
              {article.featuredImage && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mb-4"
                >
                  <Image
                    src={article.featuredImage}
                    alt="Current featured"
                    width={192}
                    height={128}
                    className="object-cover rounded-md border border-gray-300 dark:border-gray-700 shadow-[0_0_8px_rgba(59,130,246,0.2)] dark:shadow-[0_0_8px_rgba(147,51,234,0.2)] transition-all duration-300 hover:scale-105"
                  />
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Current featured image
                  </p>
                </motion.div>
              )}
              <Input
                id="featuredImage"
                name="featuredImage"
                type="file"
                accept="image/*"
                className="bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 file:border-0 file:bg-blue-500/10 dark:file:bg-purple-500/10 file:text-blue-600 dark:file:text-purple-400 file:rounded-md file:px-3 file:py-1 transition-all duration-300"
              />
              {formState.errors.featuredImage && (
                <span className="font-medium text-sm text-red-500 dark:text-red-400">
                  {formState.errors.featuredImage}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="space-y-2">
              <Label className="text-gray-700 dark:text-gray-300">Content</Label>
              <div className="rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700">
                <ReactQuill
                  theme="snow"
                  value={content}
                  onChange={setContent}
                  className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 [&_.ql-toolbar]:bg-gray-200 dark:[&_.ql-toolbar]:bg-gray-800 [&_.ql-container]:min-h-[200px]"
                />
              </div>
              {formState.errors.content && (
                <span className="font-medium text-sm text-red-500 dark:text-red-400">
                  {formState.errors.content[0]}
                </span>
              )}
            </div>

            {/* Form Errors */}
            {formState.errors.formErrors && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-red-100/80 dark:bg-red-900/20 p-3 border border-red-500 dark:border-red-700 rounded-lg"
              >
                <span className="font-medium text-sm text-red-600 dark:text-red-400">
                  {formState.errors.formErrors}
                </span>
              </motion.div>
            )}

            {/* Buttons */}
            <div className="flex justify-end gap-4">
              <Button
                type="button"
                variant="outline"
                className="text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-all duration-300 rounded-lg"
              >
                Discard Changes
              </Button>
              <Button
                disabled={isPending}
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 rounded-lg shadow-[0_0_10px_rgba(59,130,246,0.5)] dark:shadow-[0_0_10px_rgba(147,51,234,0.5)] transition-all duration-300"
              >
                {isPending ? "Updating..." : "Update Article"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EditArticlePage;