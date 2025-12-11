import React from 'react';
import StaticPage from '../../components/StaticPage';

const Post: React.FC = () => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "What is the Price of 1 kg of Silver?",
      "author": { "@type": "Organization", "name": "metal.doodax.com" },
      "datePublished": "2024-08-01",
    };
    return (
        <article>
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            <StaticPage title="What is the Price of 1 kg of Silver?">
                <p>This is a placeholder for a detailed article about the price of 1kg of silver.</p>
            </StaticPage>
        </article>
    );
};

export default Post;
