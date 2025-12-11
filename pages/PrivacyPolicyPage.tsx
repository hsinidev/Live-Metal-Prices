import React from 'react';
import StaticPage from '../components/StaticPage';

const PrivacyPolicyPage: React.FC = () => {
    const siteUrl = "doodax.com";
    const contactEmail = "hsini.web@gmail.com";
    return (
        <StaticPage title="Privacy Policy">
            <p><strong>Last Updated: 3 August 2024</strong></p>
            <p>Your privacy is important to us. It is {siteUrl}'s policy to respect your privacy regarding any information we may collect from you across our website. This Privacy Policy explains what information we collect, how we use it, and your choices regarding your information.</p>
            
            <h2 className="text-xl font-bold text-yellow-400 pt-4">1. Information We Collect</h2>
            <p>We do not collect any personally identifiable information (PII) from our users. Our service is designed to be used anonymously without the need for registration or personal data submission. We may collect non-personal information such as browser type, language preference, and the date and time of each visitor request to better understand how visitors use our website.</p>

            <h2 className="text-xl font-bold text-yellow-400 pt-4">2. How We Use Information</h2>
            <p>The non-personal information we collect is used for analytical purposes to improve the functionality and user experience of our website. We do not use this information to track individual users.</p>

            <h2 className="text-xl font-bold text-yellow-400 pt-4">3. Cookies</h2>
            <p>We do not use cookies for tracking purposes. Our website is functional without them.</p>

            <h2 className="text-xl font-bold text-yellow-400 pt-4">4. Data Security</h2>
            <p>We are committed to protecting the security of any data we handle. We use commercially acceptable means to protect the non-personal information we collect, but remember that no method of transmission over the internet, or method of electronic storage, is 100% secure.</p>

            <h2 className="text-xl font-bold text-yellow-400 pt-4">5. Links to Other Sites</h2>
            <p>Our website may contain links to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>

            <h2 className="text-xl font-bold text-yellow-400 pt-4">6. Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>

            <h2 className="text-xl font-bold text-yellow-400 pt-4">7. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at <a href={`mailto:${contactEmail}`} className="text-yellow-400 hover:underline">{contactEmail}</a>.</p>
        </StaticPage>
    );
};

export default PrivacyPolicyPage;