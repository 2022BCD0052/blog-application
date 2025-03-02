import { BlogFooter } from "@/components/home/blog-footer";
import HeroSection from "@/components/home/hero-section";
import { TopArticles } from "@/components/home/top-articles";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { Suspense } from "react";

const page = async () => {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <HeroSection />
      <section className="relative py-16 md:py-24  dark:border-white/10  dark:bg-gradient-to-t dark:from-gray-900/95 dark:to-indigo-950/95">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl animate-fade-in">
              Featured Articles
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 animate-fade-in-up">
              Discover our most popular and trending content
            </p>
          </div>

          {/* Top Articles */}
          <Suspense
            fallback={
              <h1 className="text-center text-gray-600 dark:text-gray-400">
                Loading....
              </h1>
            }
          >
            <TopArticles />
          </Suspense>

          <div className="mt-12 text-center">
            <Link href={"/articles"}>
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 text-lg border-indigo-400/50 text-indigo-600 hover:bg-indigo-600 hover:text-white dark:border-cyan-400/50 dark:text-cyan-400 dark:hover:bg-cyan-500 dark:hover:text-white transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg hover:shadow-indigo-500/20 dark:hover:shadow-cyan-500/20"
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