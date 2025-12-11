import React from 'react';
import StaticPage from '../../components/StaticPage';

const Post: React.FC = () => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Diamond Price Per Carat: A Complete Guide",
      "author": { "@type": "Organization", "name": "metal.doodax.com" },
      "datePublished": "2024-08-02",
    };
    return (
        <article>
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            <StaticPage title="Diamond Price Per Carat: A Complete Guide">
                <p>This is a placeholder for a detailed article about diamond price per carat.</p>
            </StaticPage>
        </article>
    );
};

export default Post;
