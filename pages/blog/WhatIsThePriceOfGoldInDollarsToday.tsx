
import React from 'react';
import StaticPage from '../../components/StaticPage';

const Post: React.FC = () => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://metal.doodax.com/blog/what-is-the-price-of-gold-in-dollars-today"
      },
      "headline": "What is the price of gold in dollars today?",
      "description": "Learn how the daily 'spot price' of gold is determined, where to find live prices, and the factors that cause the price to fluctuate throughout the day.",
      "author": { "@type": "Organization", "name": "metal.doodax.com" },
      "datePublished": "2024-08-01",
      "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the gold spot price?",
            "acceptedAnswer": { "text": "The spot price is the current market price for one troy ounce of gold that is available for immediate delivery. It is determined by trading on global commodities exchanges like COMEX." }
          },
          {
            "@type": "Question",
            "name": "Does the price of gold change during the day?",
            "acceptedAnswer": { "text": "Yes, the price of gold is constantly changing, 24 hours a day, during the trading week, based on supply, demand, and speculative activity in the global markets." }
          }
        ]
      }
    };

    return (
        <article>
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            <StaticPage title="What is the price of gold in dollars today?">
                <p className="lead text-xl text-gray-400 mb-6">The price of gold is a dynamic figure that changes constantly. This article explains the concept of the gold spot price and the key market forces that determine its value in US dollars today.</p>
                <nav className="bg-gray-900/50 p-4 rounded-lg mb-8 border border-gray-700">
                    <h2 className="text-xl font-bold text-yellow-400 mb-3">Table of Contents</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li><a href="#spot-price" className="hover:underline">Understanding the Spot Price</a></li>
                        <li><a href="#market-factors" className="hover:underline">Daily Market Factors</a></li>
                        <li><a href="#finding-prices" className="hover:underline">Where to Find Live Prices</a></li>
                        <li><a href="#faq" className="hover:underline">Frequently Asked Questions</a></li>
                    </ul>
                </nav>
                <section id="spot-price"><h2 className="text-2xl font-bold text-yellow-400 mt-6 mb-4">Understanding the Spot Price</h2><p>Content explaining what the spot price of gold means...</p></section>
                <section id="market-factors"><h2 className="text-2xl font-bold text-yellow-400 mt-6 mb-4">Daily Market Factors</h2><p>Content on the economic data and news that affects the daily price...</p></section>
                <section id="finding-prices"><h2 className="text-2xl font-bold text-yellow-400 mt-6 mb-4">Where to Find Live Prices</h2><p>Guide to reliable sources for live gold prices...</p></section>
                <section id="faq" className="mt-8 border-t border-gray-700 pt-6">
                    <h2 className="text-2xl font-bold text-yellow-400 mb-4">Frequently Asked Questions</h2>
                    <div><h3 className="text-xl font-semibold text-gray-200">What is the gold spot price?</h3><p>The spot price is the current market price for one troy ounce of gold that is available for immediate delivery. It is determined by trading on global commodities exchanges like COMEX.</p></div>
                    <div className="mt-4"><h3 className="text-xl font-semibold text-gray-200">Does the price of gold change during the day?</h3><p>Yes, the price of gold is constantly changing, 24 hours a day, during the trading week, based on supply, demand, and speculative activity in the global markets.</p></div>
                </section>
            </StaticPage>
        </article>
    );
};

export default Post;
