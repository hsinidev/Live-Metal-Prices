import React from 'react';
import StaticPage from '../components/StaticPage';

const DmcaPage: React.FC = () => {
    const siteUrl = "doodax.com";
    const contactEmail = "hsini.web@gmail.com";

    return (
        <StaticPage title="DMCA Takedown Policy">
            <p>{siteUrl} respects the intellectual property rights of others. In accordance with the Digital Millennium Copyright Act (DMCA), we will respond expeditiously to notices of alleged copyright infringement that are reported to our Designated Copyright Agent.</p>
            
            <h2 className="text-xl font-bold text-yellow-400 pt-4">How to File an Infringement Notice</h2>
            <p>If you are a copyright owner or an agent thereof and believe that any content on our site infringes upon your copyrights, you may submit a notification pursuant to the DMCA by providing our Copyright Agent with the following information in writing:</p>
            
            <ol className="list-decimal list-inside space-y-3 mt-4">
                <li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
                <li>Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works are covered by a single notification, a representative list of such works.</li>
                <li>Identification of the material that is claimed to be infringing and that is to be removed, and information reasonably sufficient to permit us to locate the material (e.g., the URL of the page).</li>
                <li>Information reasonably sufficient to permit us to contact you, such as an address, telephone number, and an email address.</li>
                <li>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
                <li>A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
            </ol>

            <h2 className="text-xl font-bold text-yellow-400 pt-4">Designated Copyright Agent</h2>
            <p>Please deliver this information to our Designated Agent via email:</p>
            <p className="text-center bg-gray-800/80 p-4 rounded-lg mt-2 border border-gray-700">
                <a href={`mailto:${contactEmail}`} className="text-yellow-400 font-bold text-xl hover:text-yellow-300 transition-colors">
                    {contactEmail}
                </a>
            </p>
            <p className="mt-4">Upon receipt of a valid notice, we will take whatever action we deem appropriate, in our sole discretion, including removal of the challenged material from the website.</p>
        </StaticPage>
    );
};

export default DmcaPage;