import React from 'react';
import StaticPage from '../../components/StaticPage';

const Post: React.FC = () => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The Many Uses of Platinum",
      "author": { "@type": "Organization", "name": "metal.doodax.com" },
      "datePublished": "2024-08-01",
    };
    return (
        <article>
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            <StaticPage title="The Many Uses of Platinum">
                <p>This is a placeholder for a detailed article about the uses of platinum.</p>
            </StaticPage>
        </article>
    );
};

export default Post;
