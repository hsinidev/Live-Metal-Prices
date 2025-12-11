import React from 'react';
import StaticPage from '../../components/StaticPage';

const Post: React.FC = () => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Platinum vs. Gold: Which is the Better Investment?",
      "author": { "@type": "Organization", "name": "metal.doodax.com" },
      "datePublished": "2024-08-01",
    };
    return (
        <article>
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            <StaticPage title="Platinum vs. Gold: Which is the Better Investment?">
                <p>This is a placeholder for a detailed article comparing platinum and gold.</p>
            </StaticPage>
        </article>
    );
};

export default Post;
