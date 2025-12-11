import React from 'react';
import StaticPage from '../../components/StaticPage';

const Post: React.FC = () => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The Most Famous Diamonds in the World",
      "author": { "@type": "Organization", "name": "metal.doodax.com" },
      "datePublished": "2024-08-02",
    };
    return (
        <article>
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            <StaticPage title="The Most Famous Diamonds in the World">
                <p>This is a placeholder for a detailed article about the most famous diamonds in the world.</p>
            </StaticPage>
        </article>
    );
};

export default Post;
