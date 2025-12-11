import React, { useState, useEffect, Suspense } from 'react';
import ConverterPage from './pages/ConverterPage';
import Header from './components/Header';
import BlogIndexPage from './pages/BlogIndexPage';
import { POSTS_MAP } from './blog/posts';
import GalaxyBackground from './components/GalaxyBackground';
import LegalModal from './components/LegalModal';

const App: React.FC = () => {
    const [route, setRoute] = useState(window.location.pathname);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalPage, setModalPage] = useState<'about' | 'contact' | 'guide' | 'privacy' | 'terms' | 'dmca' | null>(null);

    useEffect(() => {
        const handlePopState = () => {
            setRoute(window.location.pathname);
        };
        window.addEventListener('popstate', handlePopState);

        const handleGlobalClick = (e: MouseEvent) => {
            const anchor = (e.target as HTMLElement).closest('a');

            if (
                !anchor ||
                e.button !== 0 || // Not a left click
                e.ctrlKey ||
                e.metaKey ||
                anchor.target === '_blank' ||
                anchor.hasAttribute('download')
            ) {
                return;
            }

            const href = anchor.getAttribute('href');

            // Handle internal links
            if (href && href.startsWith('/') && !href.startsWith('//')) {
                // If it is a blog link, use routing
                if (href.startsWith('/blog')) {
                    e.preventDefault();
                    window.history.pushState({}, '', href);
                    setRoute(href);
                    window.scrollTo(0, 0);
                    return;
                }
                
                // If it is home
                if (href === '/') {
                    e.preventDefault();
                    window.history.pushState({}, '', href);
                    setRoute(href);
                    window.scrollTo(0, 0);
                    return;
                }

                // If it is a legal/info link, open modal instead of routing if possible
                // We map paths to modal pages
                const modalMap: {[key: string]: typeof modalPage} = {
                    '/about': 'about',
                    '/contact': 'contact',
                    '/guide': 'guide',
                    '/privacy': 'privacy',
                    '/terms': 'terms',
                    '/dmca': 'dmca'
                };

                if (modalMap[href]) {
                    e.preventDefault();
                    setModalPage(modalMap[href]);
                    setModalOpen(true);
                }
            }
        };

        document.addEventListener('click', handleGlobalClick);

        return () => {
            window.removeEventListener('popstate', handlePopState);
            document.removeEventListener('click', handleGlobalClick);
        };
    }, []);

    const renderPage = () => {
        const path = route.split('#')[0];

        if (path.startsWith('/blog/')) {
            const slug = path.substring('/blog/'.length);
            const PostComponent = POSTS_MAP[slug as keyof typeof POSTS_MAP];
            if (PostComponent) {
                return (
                    <Suspense fallback={<div className="text-center p-12 text-yellow-400 animate-pulse">Loading interstellar data...</div>}>
                        <PostComponent />
                    </Suspense>
                );
            }
        }
        
        switch (path) {
            case '/blog':
                return <BlogIndexPage />;
            case '/':
            default:
                return <ConverterPage />;
        }
    };

    // Effect to handle direct URL access to modal pages
    useEffect(() => {
        const path = window.location.pathname;
        const modalMap: {[key: string]: typeof modalPage} = {
            '/about': 'about',
            '/contact': 'contact',
            '/guide': 'guide',
            '/privacy': 'privacy',
            '/terms': 'terms',
            '/dmca': 'dmca'
        };
        if (modalMap[path]) {
            setModalPage(modalMap[path]);
            setModalOpen(true);
        }
    }, []);

    const openModal = (page: typeof modalPage) => {
        setModalPage(page);
        setModalOpen(true);
    };

    return (
        <div className="min-h-screen text-gray-200 font-sans relative overflow-x-hidden selection:bg-yellow-500/30 selection:text-yellow-200">
            <GalaxyBackground />
            
            <div className="relative z-10 p-4 sm:p-6 md:p-8">
                <div className="max-w-7xl mx-auto flex flex-col min-h-[90vh]">
                    <Header />
                    <div className="pt-8 md:pt-12 flex-grow transition-all duration-500 ease-in-out">
                      {renderPage()}
                    </div>
                    
                    {/* Centralized Footer */}
                    <footer className="text-center mt-20 pb-8 text-gray-400 text-sm relative z-20">
                        <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl max-w-4xl mx-auto">
                            
                            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8">
                                <button onClick={() => openModal('about')} className="text-sm font-semibold text-gray-400 hover:text-white transition-colors uppercase tracking-wide">About</button>
                                <a href="/blog" className="text-sm font-semibold text-gray-400 hover:text-white transition-colors uppercase tracking-wide">Blog</a>
                                <button onClick={() => openModal('contact')} className="text-sm font-semibold text-gray-400 hover:text-white transition-colors uppercase tracking-wide">Contact</button>
                                <button onClick={() => openModal('guide')} className="text-sm font-semibold text-gray-400 hover:text-white transition-colors uppercase tracking-wide">Guide</button>
                                <button onClick={() => openModal('privacy')} className="text-sm font-semibold text-gray-400 hover:text-white transition-colors uppercase tracking-wide">Privacy</button>
                                <button onClick={() => openModal('terms')} className="text-sm font-semibold text-gray-400 hover:text-white transition-colors uppercase tracking-wide">Terms</button>
                                <button onClick={() => openModal('dmca')} className="text-sm font-semibold text-gray-400 hover:text-white transition-colors uppercase tracking-wide">DMCA</button>
                            </div>

                            <div className="space-y-4">
                                <p className="opacity-60 text-xs">Market data is simulated for educational purposes.</p>
                                <div className="border-t border-gray-700/50 my-6 w-1/4 mx-auto"></div>
                                <div className="flex flex-col items-center justify-center space-y-2">
                                    <p className="text-gray-300">
                                      &copy; {new Date().getFullYear()} Doodax.com. All rights reserved.
                                    </p>
                                    <p className="text-base flex items-center gap-2">
                                      Powered by <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold text-yellow-400 hover:text-yellow-300 transition-colors flex items-center gap-1">
                                          HSINI MOHAMED
                                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                      </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>

            <LegalModal 
                isOpen={modalOpen} 
                onClose={() => setModalOpen(false)} 
                page={modalPage} 
            />
        </div>
    );
};

export default App;