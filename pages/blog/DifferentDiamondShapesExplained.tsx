import React from 'react';
import StaticPage from '../../components/StaticPage';

const Post: React.FC = () => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Different Diamond Shapes Explained: From Round to Princess",
      "author": { "@type": "Organization", "name": "metal.doodax.com" },
      "datePublished": "2024-08-02",
    };
    return (
        <article>
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            <StaticPage title="Different Diamond Shapes Explained: From Round to Princess">
                <p>This is a placeholder for a detailed article about different diamond shapes.</p>
            </StaticPage>
        </article>
    );
};

export default Post;
