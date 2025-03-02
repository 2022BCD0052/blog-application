import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function AllArticlesPageSkeleton() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <Card
          key={index}
          className="group relative overflow-hidden bg-white/5 dark:bg-gray-900/20 
            backdrop-blur-lg border border-gray-700/50 shadow-lg transition-all 
            hover:shadow-2xl hover:border-gray-600/40"
        >
          <div className="p-6">
            {/* Article Thumbnail Skeleton */}
            <Skeleton 
              className="mb-4 h-48 w-full rounded-xl 
              bg-gradient-to-br from-purple-200/50 to-blue-200/50 
              dark:from-purple-900/30 dark:to-blue-900/30"
            />

            {/* Title Skeleton */}
            <Skeleton className="h-6 w-3/4 rounded-lg bg-gray-300/30 dark:bg-gray-700/40" />

            {/* Subtitle Skeleton */}
            <Skeleton className="mt-2 h-4 w-1/2 rounded-lg bg-gray-300/30 dark:bg-gray-700/40" />

            {/* Footer Skeleton (Author + Date) */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Profile Image Skeleton */}
                <Skeleton className="h-8 w-8 rounded-full bg-gray-300/30 dark:bg-gray-700/40" />

                {/* Author Name Skeleton */}
                <Skeleton className="h-4 w-20 rounded-lg bg-gray-300/30 dark:bg-gray-700/40" />
              </div>

              {/* Date Skeleton */}
              <Skeleton className="h-4 w-24 rounded-lg bg-gray-300/30 dark:bg-gray-700/40" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
