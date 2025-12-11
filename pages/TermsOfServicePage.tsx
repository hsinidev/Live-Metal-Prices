import React from 'react';
import StaticPage from '../components/StaticPage';

const TermsOfServicePage: React.FC = () => {
    const siteUrl = "doodax.com";
    return (
        <StaticPage title="Terms of Service">
            <h2 className="text-xl font-bold text-yellow-400">1. Agreement to Terms</h2>
            <p>By accessing the website at <a href={`https://${siteUrl}`} className="text-yellow-400 hover:underline">{`https://${siteUrl}`}</a>, you are agreeing to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
            
            <h2 className="text-xl font-bold text-yellow-400 pt-4">2. Use License</h2>
            <p>Permission is granted to temporarily use the tools and information on {siteUrl}'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title. Under this license, you may not:</p>
            <ul className="list-disc list-inside ml-4">
                <li>Modify or copy the materials;</li>
                <li>Use the materials for any commercial purpose, or for any public display;</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website;</li>
                <li>Remove any copyright or other proprietary notations from the materials.</li>
            </ul>
            
            <h2 className="text-xl font-bold text-yellow-400 pt-4">3. Disclaimer and Accuracy of Data</h2>
            <p>The materials and data on {siteUrl}'s website are provided on an 'as is' basis. All price data presented on this website is **simulated and for informational and educational purposes only**. It does not represent live, actionable market data and should not be used for financial trading or investment decisions. {siteUrl} makes no warranties, expressed or implied, regarding the accuracy, reliability, or completeness of the information provided.</p>
            
            <h2 className="text-xl font-bold text-yellow-400 pt-4">4. Limitations of Liability</h2>
            <p>In no event shall {siteUrl} or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on {siteUrl}'s website, even if notified of the possibility of such damage. You use this service at your own risk.</p>
            
            <h2 className="text-xl font-bold text-yellow-400 pt-4">5. Modifications</h2>
            <p>{siteUrl} may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>

            <h2 className="text-xl font-bold text-yellow-400 pt-4">6. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction of the website owner's location and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
        </StaticPage>
    );
};

export default TermsOfServicePage;