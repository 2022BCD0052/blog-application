import EditArticlePage from '@/components/articles/edit-articles-page';
import { prisma } from '@/lib/prisma';
import React from 'react';

type Props = {
    params: { id: string };  // ❌ Promise हटाया ✅ सही type
};

const page = async ({ params }: Props) => { 
    const article = await prisma.articles.findUnique({
        where: { id: params.id }
    });

    if (!article) {
        return <h1>Article not found.</h1>;
    }

    return (
        <div> 
            <EditArticlePage article={article} />
        </div>
    );
};

export default page;
