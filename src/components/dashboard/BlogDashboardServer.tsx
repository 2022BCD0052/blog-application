// app/dashboard/BlogDashboardServer.tsx
import { prisma } from "@/lib/prisma";
import BlogDashboard from "./blog-dashboard";

export default async function BlogDashboardServer() {
  const [articles, totalComments] = await Promise.all([
    prisma.articles.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        comments: true,
        author: {
          select: {
            name: true,
            email: true,
            imageUrl: true,
          },
        },
      },
    }),
    prisma.comment.count(),
  ]);

  return <BlogDashboard articles={articles} totalComments={totalComments} />;
}
