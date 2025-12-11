import React from 'react';
import StaticPage from '../../components/StaticPage';

const Post: React.FC = () => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "How to Buy Silver: A Guide to Bullion and Coins",
      "author": { "@type": "Organization", "name": "metal.doodax.com" },
      "datePublished": "2024-08-01",
    };
    return (
        <article>
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            <StaticPage title="How to Buy Silver: A Guide to Bullion and Coins">
                <p>This is a placeholder for a detailed article about buying silver.</p>
            </StaticPage>
        </article>
    );
};

export default Post;
