
import React from 'react';
import StaticPage from '../../components/StaticPage';

const Post: React.FC = () => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://metal.doodax.com/blog/is-gold-22k-or-24k"
      },
      "headline": "Is Gold 22k or 24k? Understanding the Difference",
      "description": "A detailed comparison between 22k and 24k gold, covering purity, durability, color, and use cases to help you make an informed choice.",
      "author": { "@type": "Organization", "name": "metal.doodax.com" },
      "publisher": { "@type": "Organization", "name": "metal.doodax.com" },
      "datePublished": "2024-08-01",
      "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which is better, 22k or 24k gold?",
            "acceptedAnswer": {
              "text": "Neither is objectively 'better'; it depends on the purpose. For investment in bars or coins, 24k is preferred for its purity. For jewelry, 22k is often better due to its superior durability."
            }
          },
          {
            "@type": "Question",
            "name": "Can you be allergic to 22k gold?",
            "acceptedAnswer": {
              "text": "It's rare to be allergic to gold itself. However, some people may have allergic reactions to the other metals (like nickel or copper) alloyed in 22k gold."
            }
          }
        ]
      }
    };

    return (
        <article>
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            <StaticPage title="Is Gold 22k or 24k?">
                <p className="lead text-xl text-gray-400 mb-6">
                    Choosing between 22k and 24k gold can be confusing. This article clarifies the key differences in purity, durability, and suitability for different purposes like investment and jewelry.
                </p>
                <nav className="bg-gray-900/50 p-4 rounded-lg mb-8 border border-gray-700">
                    <h2 className="text-xl font-bold text-yellow-400 mb-3">Table of Contents</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li><a href="#purity" className="hover:underline">Purity: The Fundamental Difference</a></li>
                        <li><a href="#durability" className="hover:underline">Durability and Use Cases</a></li>
                        <li><a href="#price-comparison" className="hover:underline">Price Comparison</a></li>
                        <li><a href="#faq" className="hover:underline">Frequently Asked Questions</a></li>
                    </ul>
                </nav>
                <section id="purity"><h2 className="text-2xl font-bold text-yellow-400 mt-6 mb-4">Purity: The Fundamental Difference</h2><p>Explaining the carat system and what 22k vs 24k means...</p></section>
                <section id="durability"><h2 className="text-2xl font-bold text-yellow-400 mt-6 mb-4">Durability and Use Cases</h2><p>Comparing the hardness and suitability for jewelry vs investment...</p></section>
                <section id="price-comparison"><h2 className="text-2xl font-bold text-yellow-400 mt-6 mb-4">Price Comparison</h2><p>Why 24k gold is more expensive per gram...</p></section>
                <section id="faq" className="mt-8 border-t border-gray-700 pt-6">
                    <h2 className="text-2xl font-bold text-yellow-400 mb-4">Frequently Asked Questions</h2>
                    <div><h3 className="text-xl font-semibold text-gray-200">Which is better, 22k or 24k gold?</h3><p>Neither is objectively 'better'; it depends on the purpose. For investment in bars or coins, 24k is preferred for its purity. For jewelry, 22k is often better due to its superior durability.</p></div>
                    <div className="mt-4"><h3 className="text-xl font-semibold text-gray-200">Can you be allergic to 22k gold?</h3><p>It's rare to be allergic to gold itself. However, some people may have allergic reactions to the other metals (like nickel or copper) alloyed in 22k gold.</p></div>
                </section>
            </StaticPage>
        </article>
    );
};

export default Post;
