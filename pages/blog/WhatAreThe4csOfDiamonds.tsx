import React from 'react';
import StaticPage from '../../components/StaticPage';

const Post: React.FC = () => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "What Are The 4Cs of Diamonds? Cut, Color, Clarity, and Carat",
      "author": { "@type": "Organization", "name": "metal.doodax.com" },
      "datePublished": "2024-08-02",
    };
    return (
        <article>
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            <StaticPage title="What Are The 4Cs of Diamonds? Cut, Color, Clarity, and Carat">
                <p>This is a placeholder for a detailed article about the 4Cs of diamonds.</p>
            </StaticPage>
        </article>
    );
};

export default Post;
