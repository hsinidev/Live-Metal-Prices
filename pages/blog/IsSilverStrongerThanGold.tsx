import React from 'react';
import StaticPage from '../../components/StaticPage';

const Post: React.FC = () => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Is Silver Stronger Than Gold? A Durability Comparison",
      "author": { "@type": "Organization", "name": "metal.doodax.com" },
      "datePublished": "2024-08-01",
    };
    return (
        <article>
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            <StaticPage title="Is Silver Stronger Than Gold? A Durability Comparison">
                <p>This is a placeholder for a detailed article comparing the strength of silver and gold.</p>
            </StaticPage>
        </article>
    );
};

export default Post;
