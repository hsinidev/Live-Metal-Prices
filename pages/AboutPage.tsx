import React from 'react';
import StaticPage from '../components/StaticPage';

const AboutPage: React.FC = () => {
    return (
        <StaticPage title="About Doodax.com">
            <p className="text-xl text-gray-400">
                Welcome to Doodax.com, your premier destination for real-time precious metal price conversions. We are a team of fintech enthusiasts and developers passionate about making financial data accessible and easy to understand for everyone.
            </p>
            
            <h2 className="text-2xl font-bold text-yellow-400 pt-6">Our Mission</h2>
            <p>
                Our mission is to provide investors, hobbyists, and industry professionals with a fast, reliable, and user-friendly tool for tracking the value of gold, silver, and platinum. We believe that everyone should have access to high-quality financial tools to make informed decisions, and we've built this platform to empower our users with the data they need.
            </p>

            <h2 className="text-2xl font-bold text-yellow-400 pt-6">What We Offer</h2>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Instant Conversions:</strong> Calculate the value of any amount of precious metal in major world currencies.</li>
                <li><strong>Live Market Overview:</strong> See at-a-glance price cards for Gold (XAU), Silver (XAG), and Platinum (XPT).</li>
                <li><strong>User-Friendly Interface:</strong> A clean, modern, and fully responsive galaxy-themed design that works on any device.</li>
                <li><strong>Educational Content:</strong> An in-depth blog covering market trends, investment strategies, and the science behind precious metals.</li>
            </ul>

            <h2 className="text-2xl font-bold text-yellow-400 pt-6">Our Data</h2>
            <p>
                Transparency is critical. Please note that the price data on our site is **simulated for informational and educational purposes only**. It is designed to reflect real-world market fluctuations but should not be used for making actual financial trades. We source base price points from realistic market data and introduce slight variations to simulate a live environment.
            </p>

            <h2 className="text-2xl font-bold text-yellow-400 pt-6">Our Team</h2>
            <p>
                Doodax.com was built by a dedicated group of professionals with a shared passion for technology and finance. We are committed to continuously improving our platform and adding new features to better serve our community. Thank you for choosing us as your trusted resource for precious metal pricing and conversion.
            </p>
        </StaticPage>
    );
};

export default AboutPage;