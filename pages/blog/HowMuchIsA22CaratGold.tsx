
import React from 'react';
import StaticPage from '../../components/StaticPage';

const Post: React.FC = () => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://metal.doodax.com/blog/how-much-is-a-22-carat-gold"
      },
      "headline": "How much is a 22 carat gold? A Complete Guide to Pricing",
      "description": "Understand the factors that determine the price of 22 carat gold, how it's calculated, and what you should know before buying or selling.",
      "author": { "@type": "Organization", "name": "metal.doodax.com" },
      "publisher": { "@type": "Organization", "name": "metal.doodax.com" },
      "datePublished": "2024-08-01",
      "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is 22 carat gold?",
            "acceptedAnswer": {
              "text": "22 carat gold is a gold alloy that contains 91.67% pure gold and 8.33% other metals like silver, copper, or zinc. This mixture makes it more durable than 24 carat (pure) gold, which is very soft."
            }
          },
          {
            "@type": "Question",
            "name": "How is the price of 22 carat gold calculated?",
            "acceptedAnswer": {
              "text": "The price is calculated based on the current market price of pure (24k) gold. The formula is typically: (Price of 24k gold per gram) x 0.9167. Additional charges like making fees and taxes are then added by jewelers."
            }
          }
        ]
      }
    };

    return (
        <article>
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            <StaticPage title="How much is a 22 carat gold?">
                <p className="lead text-xl text-gray-400 mb-6">
                    Understanding the price of 22 carat gold is essential for anyone looking to buy jewelry or invest in the precious metal. This guide breaks down the pricing mechanism and explores the factors that influence its value.
                </p>
                <nav className="bg-gray-900/50 p-4 rounded-lg mb-8 border border-gray-700">
                    <h2 className="text-xl font-bold text-yellow-400 mb-3">Table of Contents</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li><a href="#what-is-22k" className="hover:underline">Understanding 22 Carat Gold</a></li>
                        <li><a href="#calculating-price" className="hover:underline">How the Price is Calculated</a></li>
                        <li><a href="#factors-influencing" className="hover:underline">Factors Influencing the Price</a></li>
                        <li><a href="#faq" className="hover:underline">Frequently Asked Questions</a></li>
                    </ul>
                </nav>
                <section id="what-is-22k"><h2 className="text-2xl font-bold text-yellow-400 mt-6 mb-4">Understanding 22 Carat Gold</h2><p>Content on the purity and composition of 22k gold...</p></section>
                <section id="calculating-price"><h2 className="text-2xl font-bold text-yellow-400 mt-6 mb-4">How the Price is Calculated</h2><p>Detailed explanation of the calculation formula...</p></section>
                <section id="factors-influencing"><h2 className="text-2xl font-bold text-yellow-400 mt-6 mb-4">Factors Influencing the Price</h2><p>Discussion on market rates, making charges, and taxes...</p></section>
                <section id="faq" className="mt-8 border-t border-gray-700 pt-6">
                    <h2 className="text-2xl font-bold text-yellow-400 mb-4">Frequently Asked Questions</h2>
                    <div><h3 className="text-xl font-semibold text-gray-200">What is 22 carat gold?</h3><p>22 carat gold is a gold alloy that contains 91.67% pure gold and 8.33% other metals like silver, copper, or zinc. This mixture makes it more durable than 24 carat (pure) gold, which is very soft.</p></div>
                    <div className="mt-4"><h3 className="text-xl font-semibold text-gray-200">How is the price of 22 carat gold calculated?</h3><p>The price is calculated based on the current market price of pure (24k) gold. The formula is typically: (Price of 24k gold per gram) x 0.9167. Additional charges like making fees and taxes are then added by jewelers.</p></div>
                </section>
            </StaticPage>
        </article>
    );
};

export default Post;
