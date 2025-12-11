import React from 'react';
import StaticPage from '../components/StaticPage';

const ContactPage: React.FC = () => {
    return (
        <StaticPage title="Get In Touch">
            <p>
                We value your feedback and are here to help with any questions or inquiries you may have. Whether you have a suggestion for Doodax.com, a question about our tools, or a media inquiry, please don't hesitate to reach out.
            </p>
            
            <div className="mt-8 text-center">
                <h2 className="text-xl font-semibold text-white">Primary Contact Method</h2>
                <p className="text-gray-400 mb-4">For the quickest response, please send us an email.</p>
                <div className="bg-gray-800/80 p-6 rounded-2xl border border-gray-700 inline-block hover:border-yellow-400 transition-colors shadow-lg">
                    <a href="mailto:hsini.web@gmail.com" className="text-yellow-400 font-bold text-2xl hover:text-yellow-300 transition-colors break-all">
                        hsini.web@gmail.com
                    </a>
                </div>
            </div>

            <div className="mt-8 border-t border-gray-700 pt-6">
                <h3 className="text-xl font-semibold text-white">We typically respond to inquiries regarding:</h3>
                <ul className="list-disc list-inside space-y-2 mt-4 text-gray-300">
                    <li>General questions about the website and its features.</li>
                    <li>Feedback and suggestions for improvement.</li>
                    <li>Technical support or bug reports.</li>
                    <li>Partnership or media inquiries.</li>
                </ul>
            </div>

            <div className="mt-8 text-center text-gray-500">
                <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM (UTC)</p>
                <p>We strive to respond to all emails within 24-48 business hours.</p>
            </div>
        </StaticPage>
    );
};

export default ContactPage;