import React from 'react';
import StaticPage from '../components/StaticPage';

const GuidePage: React.FC = () => {
    return (
        <StaticPage title="How to Use Our Converter">
            <p className="text-xl text-gray-400">
                Our converter is designed to be powerful yet simple to use. This guide will walk you through the process step-by-step to ensure you get the most out of our tool.
            </p>
            
            <h2 className="text-2xl font-bold text-yellow-400 pt-6 mb-4">Step-by-Step Conversion Guide</h2>
            <ol className="list-decimal list-inside space-y-6">
                <li>
                    <strong className="font-semibold text-white block mb-1">1. Enter the Amount</strong>
                    <span>Start by typing the quantity of metal you wish to convert in the 'Amount' field. You can use whole numbers or decimals.</span>
                </li>
                <li>
                    <strong className="font-semibold text-white block mb-1">2. Select the Precious Metal</strong>
                    <span>Click on the 'Metal' dropdown menu. You will see a list of available metals: Gold (XAU), Silver (XAG), and Platinum (XPT). Select the one you are interested in.</span>
                </li>
                <li>
                    <strong className="font-semibold text-white block mb-1">3. Choose the Unit of Measurement</strong>
                    <span>Next, click the 'Unit' dropdown. Choose whether your specified amount is in Ounces (troy ounces), Kilograms, or Grams.</span>
                </li>
                <li>
                    <strong className="font-semibold text-white block mb-1">4. Pick Your Currency</strong>
                    <span>In the final dropdown, 'In Currency', select the world currency you want to see the final value in (e.g., USD, EUR, GBP).</span>
                </li>
                <li>
                    <strong className="font-semibold text-white block mb-1">5. View the Results Instantly</strong>
                    <span>As soon as you select your currency, the results will update automatically. You will see the price per unit and the total calculated price for your specified amount displayed clearly in the results box.</span>
                </li>
            </ol>

            <h2 className="text-2xl font-bold text-yellow-400 pt-8 mb-4">Tips for Users</h2>
            <ul className="list-disc list-inside space-y-3">
                <li><strong>Live Market View:</strong> Below the converter, you can find cards displaying the current price per troy ounce for each metal. This is a great way to get a quick snapshot of the market.</li>
                <li><strong>Automatic Refresh:</strong> The market prices automatically refresh every 60 seconds to provide you with the latest data. The "Last Updated" timestamp tells you when the last refresh occurred.</li>
                <li><strong>Bookmark for Easy Access:</strong> Bookmark our site to have a powerful conversion tool always at your fingertips.</li>
            </ul>
        </StaticPage>
    );
};

export default GuidePage;