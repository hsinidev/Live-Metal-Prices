import React from 'react';
import StaticPage from '../../components/StaticPage';

const Post: React.FC = () => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Investing in Silver Stocks: A Beginner's Guide",
      "author": { "@type": "Organization", "name": "metal.doodax.com" },
      "datePublished": "2024-08-01",
    };
    return (
        <article>
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            <StaticPage title="Investing in Silver Stocks: A Beginner's Guide">
                <p>This is a placeholder for a detailed article about silver stocks.</p>
            </StaticPage>
        </article>
    );
};

export default Post;
