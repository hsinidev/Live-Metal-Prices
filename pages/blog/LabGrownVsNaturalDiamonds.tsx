import React from 'react';
import StaticPage from '../../components/StaticPage';

const Post: React.FC = () => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Lab-Grown vs. Natural Diamonds: What's the Difference?",
      "author": { "@type": "Organization", "name": "metal.doodax.com" },
      "datePublished": "2024-08-02",
    };
    return (
        <article>
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            <StaticPage title="Lab-Grown vs. Natural Diamonds: What's the Difference?">
                <p>This is a placeholder for a detailed article about lab-grown vs natural diamonds.</p>
            </StaticPage>
        </article>
    );
};

export default Post;
