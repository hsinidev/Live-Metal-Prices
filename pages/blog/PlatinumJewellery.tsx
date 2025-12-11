import React from 'react';
import StaticPage from '../../components/StaticPage';

const Post: React.FC = () => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Platinum Jewellery: A Guide to the Premium Metal",
      "author": { "@type": "Organization", "name": "metal.doodax.com" },
      "datePublished": "2024-07-06",
    };
    return (
        <article>
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            <StaticPage title="Platinum Jewellery: A Guide to the Premium Metal">
                <p>This is a placeholder for a detailed article about platinum jewellery.</p>
            </StaticPage>
        </article>
    );
};

export default Post;
