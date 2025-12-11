import React from 'react';
import StaticPage from '../../components/StaticPage';

const Post: React.FC = () => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "How to Tell if a Diamond is Real: 5 Easy Tests",
      "author": { "@type": "Organization", "name": "metal.doodax.com" },
      "datePublished": "2024-08-02",
    };
    return (
        <article>
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            <StaticPage title="How to Tell if a Diamond is Real: 5 Easy Tests">
                <p>This is a placeholder for a detailed article about how to tell if a diamond is real.</p>
            </StaticPage>
        </article>
    );
};

export default Post;
