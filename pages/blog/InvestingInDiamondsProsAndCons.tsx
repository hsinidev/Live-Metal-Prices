import React from 'react';
import StaticPage from '../../components/StaticPage';

const Post: React.FC = () => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Investing in Diamonds: Pros and Cons",
      "author": { "@type": "Organization", "name": "metal.doodax.com" },
      "datePublished": "2024-08-02",
    };
    return (
        <article>
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            <StaticPage title="Investing in Diamonds: Pros and Cons">
                <p>This is a placeholder for a detailed article about investing in diamonds.</p>
            </StaticPage>
        </article>
    );
};

export default Post;
