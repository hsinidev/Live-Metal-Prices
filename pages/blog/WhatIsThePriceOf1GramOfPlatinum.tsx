import React from 'react';
import StaticPage from '../../components/StaticPage';

const Post: React.FC = () => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "What Is the Price of 1 Gram of Platinum?",
      "author": { "@type": "Organization", "name": "metal.doodax.com" },
      "datePublished": "2024-08-01",
    };
    return (
        <article>
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            <StaticPage title="What Is the Price of 1 Gram of Platinum?">
                <p>This is a placeholder for a detailed article about the price of 1 gram of platinum.</p>
            </StaticPage>
        </article>
    );
};

export default Post;
