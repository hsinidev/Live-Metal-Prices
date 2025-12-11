
import React, { useState, useEffect, useRef } from 'react';

const mainLinks = [
    { href: '/', text: 'Home' },
    { href: '/blog', text: 'Blog' },
];

const resourceLinks = [
    { href: '/about', text: 'About' },
    { href: '/guide', text: 'Guide' },
    { href: '/privacy', text: 'Privacy Policy' },
    { href: '/terms', text: 'Terms of Service' },
    { href: '/dmca', text: 'DMCA' },
];

const Header: React.FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isResourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
    const headerRef = useRef<HTMLElement>(null);

    const closeAllMenus = () => {
        setMobileMenuOpen(false);
        setResourcesDropdownOpen(false);
    };
    
    // Close menus when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
                closeAllMenus();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const DesktopNav = () => (
        <div className="hidden md:flex items-center gap-x-6">
            {mainLinks.map(link => (
                <a key={link.href} href={link.href} className="text-lg font-semibold text-gray-300 hover:text-yellow-300 transition-colors">
                    {link.text}
                </a>
            ))}
            <div className="relative">
                <button
                    onClick={() => setResourcesDropdownOpen(!isResourcesDropdownOpen)}
                    className="text-lg font-semibold text-gray-300 hover:text-yellow-300 transition-colors flex items-center"
                    aria-haspopup="true"
                    aria-expanded={isResourcesDropdownOpen}
                >
                    Resources
                    <svg className={`w-4 h-4 ml-1 transition-transform ${isResourcesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                {isResourcesDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl py-2 z-20">
                        {resourceLinks.map(link => (
                             <a key={link.href} href={link.href} onClick={closeAllMenus} className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-yellow-300">
                                {link.text}
                            </a>
                        ))}
                    </div>
                )}
            </div>
            <a href="/contact" className="text-lg font-semibold text-gray-300 hover:text-yellow-300 transition-colors">
                Contact
            </a>
        </div>
    );

    const MobileNav = () => (
        <>
            {isMobileMenuOpen && (
                 <div className="md:hidden mt-4 pt-4 border-t border-gray-700 flex flex-col items-start gap-y-2">
                    {mainLinks.map(link => (
                        <a key={link.href} href={link.href} onClick={closeAllMenus} className="text-lg font-semibold text-gray-300 hover:text-yellow-300 transition-colors w-full py-2">{link.text}</a>
                    ))}
                    <a href="/contact" onClick={closeAllMenus} className="text-lg font-semibold text-gray-300 hover:text-yellow-300 transition-colors w-full py-2">Contact</a>
                    <div className="border-t border-gray-600 w-full my-2"></div>
                    <p className="text-gray-500 font-bold text-sm uppercase tracking-wider px-0 py-2">Resources</p>
                    {resourceLinks.map(link => (
                         <a key={link.href} href={link.href} onClick={closeAllMenus} className="text-lg font-semibold text-gray-300 hover:text-yellow-300 transition-colors w-full py-2">
                            {link.text}
                        </a>
                    ))}
                </div>
            )}
        </>
    );

    return (
        <header ref={headerRef} className="max-w-7xl mx-auto bg-gray-800/50 border border-gray-700 rounded-xl p-4 shadow-lg backdrop-blur-sm sticky top-4 z-50">
            <div className="flex justify-between items-center">
                <a href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                    Live Metal Prices
                </a>
                
                <DesktopNav />

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300 hover:text-yellow-300 focus:outline-none" aria-label="Toggle menu" aria-expanded={isMobileMenuOpen}>
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>

            <MobileNav />
        </header>
    );
};

export default Header;
