import React from 'react';
import StaticPage from '../../components/StaticPage';

const Post: React.FC = () => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The Properties and Uses of Silver Metal",
      "author": { "@type": "Organization", "name": "metal.doodax.com" },
      "datePublished": "2024-08-01",
    };
    return (
        <article>
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            <StaticPage title="The Properties and Uses of Silver Metal">
                <p>This is a placeholder for a detailed article about silver metal.</p>
            </StaticPage>
        </article>
    );
};

export default Post;
