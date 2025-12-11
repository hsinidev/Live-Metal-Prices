import React from 'react';
import StaticPage from '../../components/StaticPage';

const Post: React.FC = () => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "How Are Diamonds Formed Naturally?",
      "author": { "@type": "Organization", "name": "metal.doodax.com" },
      "datePublished": "2024-08-02",
    };
    return (
        <article>
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            <StaticPage title="How Are Diamonds Formed Naturally?">
                <p>This is a placeholder for a detailed article about how diamonds are formed.</p>
            </StaticPage>
        </article>
    );
};

export default Post;
