import React from 'react';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import GuidePage from '../pages/GuidePage';
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage';
import TermsOfServicePage from '../pages/TermsOfServicePage';
import DmcaPage from '../pages/DmcaPage';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  page: 'about' | 'contact' | 'guide' | 'privacy' | 'terms' | 'dmca' | null;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, page }) => {
  if (!isOpen || !page) return null;

  const renderContent = () => {
    switch (page) {
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      case 'guide': return <GuidePage />;
      case 'privacy': return <PrivacyPolicyPage />;
      case 'terms': return <TermsOfServicePage />;
      case 'dmca': return <DmcaPage />;
      default: return null;
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      ></div>
      <div className="relative bg-gray-900 border border-gray-700 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-fadeIn custom-scrollbar ring-1 ring-white/10">
        <div className="sticky top-0 right-0 z-20 flex justify-between items-center p-4 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
           <span className="text-gray-400 text-sm font-mono px-2">doodax.com</span>
          <button 
            onClick={onClose}
            className="p-2 bg-gray-800 text-gray-400 hover:text-white rounded-full transition-colors border border-gray-700 hover:border-yellow-400 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:rotate-90 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Caution / Disclaimer Banner */}
        <div className="bg-yellow-500/10 border-b border-yellow-500/20 p-4 flex items-start gap-3">
             <svg className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
             <div>
                 <h3 className="text-yellow-400 font-bold text-sm uppercase tracking-wider">Legal Disclaimer & Caution</h3>
                 <p className="text-gray-300 text-xs sm:text-sm mt-1">
                     Please act responsibly. Doodax.com provides simulated financial data for educational and demonstration purposes. No content here constitutes financial advice. By continuing, you acknowledge that you have read and understood our policies.
                 </p>
             </div>
        </div>

        <div className="px-6 py-8 md:px-10 md:py-12">
           {renderContent()}
        </div>
      </div>
       <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default LegalModal;