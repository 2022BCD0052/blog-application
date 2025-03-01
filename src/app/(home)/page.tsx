import { BlogFooter } from "@/components/home/blog-footer";
import HeroSection from "@/components/home/hero-section";
import { TopArticles } from "@/components/home/top-articles";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { Suspense } from "react";

const page = async () => {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <HeroSection />

      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Featured Articles
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover our most popular and trending content
            </p>
          </div>

          {/* Top Articles */}
          <Suspense
            fallback={
              <div className="text-center text-gray-600 dark:text-gray-400">
                <h1>Loading...</h1>
              </div>
            }
          >
            <div>
              <TopArticles />
            </div>
          </Suspense>

          <div className="mt-12 text-center">
            <Link href={"/articles"}>
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 text-lg text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 hover:bg-blue-200/50 dark:hover:bg-purple-200/50 hover:text-blue-700 dark:hover:text-purple-300 transition-all duration-300 shadow-[0_0_8px_rgba(59,130,246,0.3)] dark:shadow-[0_0_8px_rgba(147,51,234,0.3)] hover:shadow-[0_0_12px_rgba(59,130,246,0.5)] dark:hover:shadow-[0_0_12px_rgba(147,51,234,0.5)]"
              >
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <BlogFooter />
    </main>
  );
};

export default page;