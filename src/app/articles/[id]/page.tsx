import { ArticleDetailPage } from "@/components/articles/article-detail-page";
import { prisma } from "@/lib/prisma";
import { FC } from "react";

type ArticleDetailPageProps = {
  params: { id: string }; // ✅ सही टाइपिंग
};

const Page: FC<ArticleDetailPageProps> = async ({ params }) => {
  const article = await prisma.articles.findUnique({
    where: { id: params.id },
    include: {
      author: {
        select: {
          name: true,
          email: true,
          imageUrl: true,
        },
      },
    },
  });

  if (!article) return <h1>Article not found.</h1>;

  return (
    <div>
      <ArticleDetailPage article={article} />
    </div>
  );
};

export default Page;
