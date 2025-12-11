
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { fetchMetalRates } from '../services/metalPriceService';
import { MetalCard } from '../components/MetalCard';
import { METALS, CURRENCIES } from '../constants';
import type { MetalRates } from '../types';

const OUNCES_PER_KILOGRAM = 32.1507;
const GRAMS_PER_OUNCE = 31.1035; // Troy ounce
const CARATS_PER_OUNCE = 155.517;
const PENNYWEIGHTS_PER_OUNCE = 20;
const TOLAS_PER_OUNCE = 2.66667;
const OUNCES_PER_TROY_POUND = 12;

const homePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Live Metal Prices - Doodax",
    "url": "https://doodax.com/",
    "description": "A sleek and modern dashboard to track and convert the live prices of precious metals like Gold, Silver, and Platinum against various world currencies.",
    "mainEntity": {
        "@type": "FinancialService",
        "name": "Doodax Metal Price Converter",
        "serviceType": "Currency Conversion",
        "provider": {
            "@type": "Organization",
            "name": "doodax.com",
            "email": "hsini.web@gmail.com",
            "url": "https://doodax.com"
        },
        "description": "Provides real-time simulated price data and conversion for Gold (XAU), Silver (XAG), Platinum (XPT), Palladium (XPD), Rhodium (XRH), and Diamond (XDM) in major world currencies.",
        "areaServed": "Worldwide"
    },
    "publisher": {
        "@type": "Organization",
        "name": "doodax.com"
    }
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The Ultimate Guide to Doodax.com: Live Metal Price Tracking & Conversion",
  "description": "A comprehensive 3500-word guide on using Doodax.com for tracking, converting, and understanding live precious metal prices. Learn about spot prices, market factors, and investment strategies.",
  "author": {
    "@type": "Person",
    "name": "Hsini Mohamed",
    "url": "https://github.com/hsinidev"
  },
  "publisher": {
      "@type": "Organization",
      "name": "doodax.com"
  },
  "datePublished": "2024-08-03",
  "mainEntityOfPage": "https://doodax.com/"
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How often does Doodax update metal prices?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Doodax.com updates its metal price calculator live rates approximately every 60 seconds to ensure you have the most current market data available for your conversions."
      }
    },
    {
      "@type": "Question",
      "name": "Is Doodax.com free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Doodax.com is a completely free online tool for tracking and converting precious metal prices against global currencies."
      }
    },
    {
      "@type": "Question",
      "name": "Can I convert prices into any currency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our tool supports conversion into over 25 major world currencies including USD, EUR, GBP, JPY, and CAD, using real-time exchange rates."
      }
    }
  ]
};

type Unit = 'Ounce' | 'Kilogram' | 'Gram' | 'Carat' | 'Pennyweight' | 'Tola' | 'Troy Pound';

const UNITS: Unit[] = ['Ounce', 'Gram', 'Kilogram', 'Carat', 'Pennyweight', 'Tola', 'Troy Pound'];

const ConverterPage: React.FC = () => {
  const [rates, setRates] = useState<MetalRates | null>(null);
  const [baseCurrency, setBaseCurrency] = useState<string>('USD');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [isArticleExpanded, setArticleExpanded] = useState(false);

  // State for the price calculator
  const [calculatorMetal, setCalculatorMetal] = useState<string>('XAU');
  const [calculatorAmount, setCalculatorAmount] = useState<string>('1');
  const [calculatorUnit, setCalculatorUnit] = useState<Unit>('Ounce');
  const [totalPrice, setTotalPrice] = useState<number | null>(null);
  const [unitPrice, setUnitPrice] = useState<number | null>(null);
  
  // State for dropdowns
  const [isMetalDropdownOpen, setMetalDropdownOpen] = useState(false);
  const [isUnitDropdownOpen, setUnitDropdownOpen] = useState(false);
  const [isBaseCurrencyDropdownOpen, setBaseCurrencyDropdownOpen] = useState(false);
  
  // Refs for dropdowns to detect outside clicks
  const metalSelectorRef = useRef<HTMLDivElement>(null);
  const unitSelectorRef = useRef<HTMLDivElement>(null);
  const baseCurrencySelectorRef = useRef<HTMLDivElement>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    if (rates) {
      setRates(null); 
    }
    try {
      const data = await fetchMetalRates(baseCurrency);
      setRates(data);
      setLastUpdated(new Date());
    } catch (err) {
      setError((err as Error).message || 'An unknown error occurred while fetching metal prices.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [baseCurrency]);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 60000); 
    return () => clearInterval(interval);
  }, [fetchData]);

  useEffect(() => {
    if (!rates || !calculatorMetal) {
      setTotalPrice(null);
      setUnitPrice(null);
      return;
    }

    const ouncePrice = rates[calculatorMetal as keyof MetalRates];
    if (ouncePrice === undefined || ouncePrice === null) {
      setTotalPrice(null);
      setUnitPrice(null);
      return;
    }

    const amount = parseFloat(calculatorAmount);
    if (isNaN(amount) || amount < 0) {
      setTotalPrice(null);
      setUnitPrice(null);
      return;
    }

    let currentUnitPrice: number;
    switch (calculatorUnit) {
        case 'Kilogram':
            currentUnitPrice = ouncePrice * OUNCES_PER_KILOGRAM;
            break;
        case 'Gram':
            currentUnitPrice = ouncePrice / GRAMS_PER_OUNCE;
            break;
        case 'Carat':
            currentUnitPrice = ouncePrice / CARATS_PER_OUNCE;
            break;
        case 'Pennyweight':
            currentUnitPrice = ouncePrice / PENNYWEIGHTS_PER_OUNCE;
            break;
        case 'Tola':
            currentUnitPrice = ouncePrice / TOLAS_PER_OUNCE;
            break;
        case 'Troy Pound':
            currentUnitPrice = ouncePrice * OUNCES_PER_TROY_POUND;
            break;
        case 'Ounce':
        default:
            currentUnitPrice = ouncePrice;
            break;
    }

    setUnitPrice(currentUnitPrice);
    setTotalPrice(currentUnitPrice * amount);

  }, [rates, calculatorMetal, calculatorAmount, calculatorUnit]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        if (metalSelectorRef.current && !metalSelectorRef.current.contains(event.target as Node)) {
            setMetalDropdownOpen(false);
        }
        if (unitSelectorRef.current && !unitSelectorRef.current.contains(event.target as Node)) {
            setUnitDropdownOpen(false);
        }
        if (baseCurrencySelectorRef.current && !baseCurrencySelectorRef.current.contains(event.target as Node)) {
            setBaseCurrencyDropdownOpen(false);
        }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const formatCurrency = useCallback((value: number | null) => {
    if (value === null || isNaN(value)) return '---';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: baseCurrency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  }, [baseCurrency]);

  const getMetalBySymbol = (symbol: string) => METALS.find(m => m.symbol === symbol);

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(homePageJsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      
      <header className="text-center mb-10 md:mb-14 relative z-10">
        <div className="inline-block animate-float">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-yellow-200 to-yellow-600 drop-shadow-2xl tracking-tighter">
            Live Metal Prices
          </h1>
        </div>
        <p className="mt-6 text-xl md:text-2xl text-blue-100/90 max-w-3xl mx-auto font-light leading-relaxed">
          The Universe's Premier <span className="font-semibold text-yellow-300">Live Metal Price</span> Tracker & Converter.
        </p>
      </header>

      <main className="relative z-10">
        {/* Converter Section */}
        <section className="max-w-6xl mx-auto bg-gray-900/40 border border-white/10 rounded-3xl p-6 md:p-10 shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)] backdrop-blur-xl ring-1 ring-white/10 relative overflow-hidden group hover:bg-gray-900/50 transition-all duration-500">
             {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end mb-8 relative z-10">
                {/* Amount Input */}
                <div className="lg:col-span-1">
                    <label htmlFor="amount-input" className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Amount</label>
                    <div className="relative group">
                        <input
                            id="amount-input"
                            type="number"
                            value={calculatorAmount}
                            onChange={(e) => setCalculatorAmount(e.target.value)}
                            min="0"
                            placeholder="1"
                            className="w-full h-[70px] bg-black/40 border border-gray-600/50 rounded-2xl py-2 px-5 text-white text-3xl font-bold focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all outline-none group-hover:bg-black/60 shadow-inner"
                        />
                    </div>
                </div>
                
                {/* Metal Selector */}
                <div className="lg:col-span-1 relative" ref={metalSelectorRef}>
                     <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Metal</label>
                     <div 
                        onClick={() => setMetalDropdownOpen(!isMetalDropdownOpen)} 
                        className="rounded-2xl border border-gray-600/50 bg-black/40 hover:bg-black/60 cursor-pointer relative h-[70px] flex items-center px-4 transition-all focus:ring-2 focus:ring-yellow-500 group shadow-inner" 
                        tabIndex={0}
                    >
                        {(() => {
                            const metal = getMetalBySymbol(calculatorMetal);
                            if (metal) {
                              return <metal.icon className="w-8 h-8 mr-3 text-yellow-400 drop-shadow-md" />;
                            }
                            return null;
                        })()}
                        <div className="flex flex-col">
                            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Selected</span>
                            <span className="text-lg font-bold text-white">{getMetalBySymbol(calculatorMetal)?.name}</span>
                        </div>
                        <div className="absolute right-4 text-gray-500 group-hover:text-yellow-400 transition-colors">
                             <svg className={`w-5 h-5 transition-transform ${isMetalDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                        
                        <div className={`absolute top-full left-0 mt-2 w-full bg-[#0f172a] border border-gray-700 rounded-2xl shadow-2xl z-50 ${isMetalDropdownOpen ? 'block' : 'hidden'} max-h-72 overflow-y-auto custom-scrollbar`}>
                            {METALS.map(metal => (
                                <div key={metal.symbol} onClick={() => { setCalculatorMetal(metal.symbol); setMetalDropdownOpen(false); }} className="p-4 hover:bg-gray-800 cursor-pointer flex items-center text-white border-b border-gray-800 last:border-0 transition-colors">
                                    <metal.icon className="w-6 h-6 mr-3 text-yellow-400" />
                                    <span className="font-medium">{metal.name}</span>
                                    <span className="ml-auto text-xs font-bold text-gray-500 bg-gray-950 px-2 py-1 rounded">{metal.symbol}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Unit Selector */}
                <div className="lg:col-span-1 relative" ref={unitSelectorRef}>
                    <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Unit</label>
                    <div 
                        onClick={() => setUnitDropdownOpen(!isUnitDropdownOpen)} 
                        className="rounded-2xl border border-gray-600/50 bg-black/40 hover:bg-black/60 cursor-pointer relative h-[70px] flex items-center px-4 transition-all focus:ring-2 focus:ring-yellow-500 group shadow-inner" 
                        tabIndex={0}
                    >
                        <div className="flex flex-col w-full">
                            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Measure</span>
                            <span className="text-lg font-bold text-white">{calculatorUnit}</span>
                        </div>
                         <div className="absolute right-4 text-gray-500 group-hover:text-yellow-400 transition-colors">
                             <svg className={`w-5 h-5 transition-transform ${isUnitDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>

                        <div className={`absolute top-full left-0 mt-2 w-full bg-[#0f172a] border border-gray-700 rounded-2xl shadow-2xl z-50 ${isUnitDropdownOpen ? 'block' : 'hidden'} max-h-72 overflow-y-auto custom-scrollbar`}>
                            {UNITS.map(unit => (
                                <div key={unit} className="p-4 hover:bg-gray-800 cursor-pointer text-white border-b border-gray-800 last:border-0 font-medium transition-colors" onClick={() => { setCalculatorUnit(unit); setUnitDropdownOpen(false); }}>
                                    {unit}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Base Currency Selector */}
                <div className="lg:col-span-1 relative" ref={baseCurrencySelectorRef}>
                    <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Currency</label>
                    <div 
                        onClick={() => setBaseCurrencyDropdownOpen(!isBaseCurrencyDropdownOpen)} 
                        className="rounded-2xl border border-gray-600/50 bg-black/40 hover:bg-black/60 cursor-pointer relative h-[70px] flex items-center px-4 transition-all focus:ring-2 focus:ring-yellow-500 group shadow-inner" 
                        tabIndex={0}
                    >
                         <div className="flex flex-col w-full">
                            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Convert To</span>
                            <span className="text-lg font-bold text-white">{baseCurrency}</span>
                        </div>
                        <div className="absolute right-4 text-gray-500 group-hover:text-yellow-400 transition-colors">
                             <svg className={`w-5 h-5 transition-transform ${isBaseCurrencyDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                        
                        <div className={`absolute top-full left-0 mt-2 w-full bg-[#0f172a] border border-gray-700 rounded-2xl shadow-2xl z-50 ${isBaseCurrencyDropdownOpen ? 'block' : 'hidden'} max-h-72 overflow-y-auto custom-scrollbar`}>
                            {CURRENCIES.map(currency => (
                                <div key={currency} onClick={() => { setBaseCurrency(currency); setBaseCurrencyDropdownOpen(false); }} className="p-4 hover:bg-gray-800 cursor-pointer text-white border-b border-gray-800 last:border-0 font-medium transition-colors">
                                    {currency}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Result Display */}
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700/50 shadow-inner relative overflow-hidden">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                 <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-4 relative z-10">
                    <div className="text-center md:text-left">
                        <span className="text-gray-400 text-xs uppercase tracking-widest font-bold">Live Price per {calculatorUnit}</span>
                        <p className="text-3xl font-mono text-gray-200 mt-1">
                            {formatCurrency(unitPrice)}
                        </p>
                    </div>
                    <div className="hidden md:block h-16 w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>
                    <div className="text-center md:text-right">
                        <span className="text-yellow-500 text-xs uppercase tracking-widest font-black mb-1 block">Total Estimated Value</span>
                        <p className="text-5xl sm:text-6xl font-mono font-bold text-white drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                            {formatCurrency(totalPrice)}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Live Rates Grid */}
        <section className="mt-16">
          {lastUpdated && !loading && !error && (
            <div className="flex items-center justify-center mb-6 space-x-2">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                 <p className="text-sm text-gray-400 font-mono tracking-wide">
                  Live Market Updated: {lastUpdated.toLocaleTimeString()}
                </p>
            </div>
           
          )}
          {error && (
            <div className="text-center p-6 bg-red-900/30 border border-red-500/50 text-red-200 rounded-xl max-w-2xl mx-auto mb-10 backdrop-blur-sm">
              <p className="font-bold mb-2 flex items-center justify-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  System Alert
              </p>
              <p>{error}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {METALS.map((metal) => (
              <MetalCard
                key={metal.symbol}
                name={metal.name}
                symbol={metal.symbol}
                price={rates ? rates[metal.symbol as keyof MetalRates] : null}
                currency={baseCurrency}
                Icon={metal.icon}
                isLoading={loading || rates === null}
              />
            ))}
          </div>
        </section>

        {/* Massive SEO Article Section */}
        <section className="mt-24 max-w-5xl mx-auto pb-12">
            <div className={`bg-gray-900/40 border border-gray-700/50 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-md relative overflow-hidden transition-all duration-1000 ease-in-out ${isArticleExpanded ? 'max-h-[12000px]' : 'max-h-24'}`}>
                
                {/* Article Header & Hook - Visible when collapsed */}
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                    The Ultimate Guide to Doodax.com: Real-Time Metal Price Tracking & Conversion
                </h2>
                
                {/* Full Content */}
                <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                    <p className="lead text-xl text-gray-400 mb-8 border-l-4 border-yellow-500 pl-4 italic">
                        Welcome to <strong>Doodax.com</strong>, your definitive digital companion for navigating the volatile world of precious metals. In an era where economic uncertainty is the norm, knowing the exact real-time value of assets like gold, silver, and platinum is not just a luxury—it's a necessity. This 3,500+ word comprehensive guide will explore every facet of our platform, the economics of metal pricing, and how you can leverage Doodax.com to make smarter financial decisions.
                    </p>

                    <h3 className="text-yellow-400 mt-12 mb-4">Table of Contents</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                        <li>1. <a href="#introduction" className="hover:text-yellow-400 transition-colors">Introduction to Doodax.com</a></li>
                        <li>2. <a href="#why-track" className="hover:text-yellow-400 transition-colors">Why Track Live Metal Prices?</a></li>
                        <li>3. <a href="#how-it-works" className="hover:text-yellow-400 transition-colors">How Doodax Works: The Technology</a></li>
                        <li>4. <a href="#deep-dive-gold" className="hover:text-yellow-400 transition-colors">Deep Dive: Gold (XAU) Investment</a></li>
                        <li>5. <a href="#deep-dive-silver" className="hover:text-yellow-400 transition-colors">Deep Dive: Silver (XAG) Economics</a></li>
                        <li>6. <a href="#deep-dive-platinum" className="hover:text-yellow-400 transition-colors">Deep Dive: Platinum & Palladium</a></li>
                        <li>7. <a href="#user-guide" className="hover:text-yellow-400 transition-colors">User Guide: Maximizing the Dashboard</a></li>
                        <li>8. <a href="#faq" className="hover:text-yellow-400 transition-colors">Frequently Asked Questions (FAQ)</a></li>
                        <li>9. <a href="#conclusion" className="hover:text-yellow-400 transition-colors">Conclusion</a></li>
                    </ul>

                    <hr className="my-12 border-gray-700" />

                    <h3 id="introduction" className="text-2xl font-bold text-white mt-8 mb-4">1. Introduction to Doodax.com</h3>
                    <p>
                        Doodax.com is a cutting-edge, web-based financial utility designed with one singular goal: to democratize access to institutional-grade precious metal data. Traditionally, real-time spot prices for commodities were locked behind expensive Bloomberg terminals or specialized trading software. Doodax changes that paradigm by offering a free, blazing-fast, and user-centric dashboard accessible to anyone with an internet connection.
                    </p>
                    <p>
                        Whether you are a seasoned commodities trader, a jewelry enthusiast looking to verify the value of a piece, or a casual investor hedging against inflation, Doodax provides the tools you need. Our platform supports:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>6 Major Precious Metals:</strong> Gold, Silver, Platinum, Palladium, Rhodium, and Diamond.</li>
                        <li><strong>25+ Global Currencies:</strong> From USD and EUR to JPY and INR.</li>
                        <li><strong>7 Units of Measurement:</strong> Troy Ounces, Grams, Kilograms, Carats, Pennyweights, Tolas, and Troy Pounds.</li>
                    </ul>

                    <h3 id="why-track" className="text-2xl font-bold text-white mt-12 mb-4">2. Why Track Live Metal Prices?</h3>
                    <p>
                        Precious metals are unlike any other asset class. They are "monetary metals"—stores of value that have transcended civilizations and centuries. Unlike fiat currency (paper money), which can be printed endlessly by central banks leading to inflation, precious metals have a finite supply. This scarcity makes them a critical hedge against economic instability.
                    </p>
                    <p>
                        However, the price of these metals is constantly in flux, trading 24 hours a day across global exchanges in London, New York, Shanghai, and Zurich. Prices can swing wildly based on:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Geopolitical Tension:</strong> Wars and political instability often drive investors to "safe-haven" assets like gold.</li>
                        <li><strong>Interest Rates:</strong> The policies of the Federal Reserve directly impact the opportunity cost of holding non-yielding assets like metals.</li>
                        <li><strong>Currency Strength:</strong> As metals are priced in USD, a weaker dollar often makes metals cheaper for foreign buyers, driving up demand.</li>
                        <li><strong>Industrial Demand:</strong> Silver and Platinum are heavily used in electronics and automotive industries, meaning their prices track with global manufacturing health.</li>
                    </ul>
                    <p>
                        Using Doodax.com allows you to stay ahead of these macro trends. By monitoring the live feed, you can identify the perfect moment to buy or sell, maximizing your investment returns.
                    </p>

                    <h3 id="how-it-works" className="text-2xl font-bold text-white mt-12 mb-4">3. How Doodax Works: The Technology</h3>
                    <p>
                        Under the hood, Doodax utilizes a sophisticated data aggregation engine. While the prices displayed on the frontend are simulated for demonstration in this specific deployment, the architecture is built to ingest WebSocket feeds from major data providers.
                    </p>
                    <p>
                        The application is built using <strong>React 18</strong> and <strong>TypeScript</strong>, ensuring a type-safe and highly performant user experience. The interface uses <strong>Tailwind CSS</strong> for styling, enabling a responsive design that works flawlessly on mobile phones, tablets, and 4K desktop monitors. We employ "optimistic UI" updates to make the calculator feel instant, calculating complex cross-currency conversions in milliseconds right in your browser.
                    </p>

                    <h3 id="deep-dive-gold" className="text-2xl font-bold text-white mt-12 mb-4">4. Deep Dive: Gold (XAU) Investment</h3>
                    <p>
                        Gold is the king of precious metals. It is the primary reserve asset for central banks worldwide. On Doodax, you will see the symbol <strong>XAU</strong>. This is the ISO currency code for gold, treating it as a currency rather than just a commodity.
                    </p>
                    <h4 className="text-xl font-semibold text-yellow-200 mt-4">Understanding 24K vs 22K vs 18K</h4>
                    <p>
                        When using the Doodax calculator, it is vital to understand purity. The "Spot Price" shown is always for 24K (99.9%) pure gold.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>24K (99.9%):</strong> Investment grade bars and coins. Soft and malleable.</li>
                        <li><strong>22K (91.6%):</strong> Common in high-quality jewelry, especially in Asia and the Middle East. Durable but rich in color.</li>
                        <li><strong>18K (75.0%):</strong> Standard for luxury jewelry (Cartier, Tiffany, etc.). Mixed with copper/silver for strength.</li>
                    </ul>
                    <p>
                        <em>Tip: To calculate the value of your 18K ring, multiply the Doodax 24K price by 0.75.</em>
                    </p>

                    <h3 id="deep-dive-silver" className="text-2xl font-bold text-white mt-12 mb-4">5. Deep Dive: Silver (XAG) Economics</h3>
                    <p>
                        Silver (XAG) is often called "gold's volatile cousin." It has a dual personality: half monetary metal, half industrial metal. Because it is used extensively in solar panels, batteries, and medical devices, its price is more sensitive to the stock market and industrial output than gold.
                    </p>
                    <p>
                        <strong>The Gold/Silver Ratio:</strong> This is a key metric calculated by dividing the price of gold by the price of silver. A high ratio (e.g., >80) suggests silver is undervalued relative to gold. Doodax allows you to easily track both prices side-by-side to monitor this ratio yourself.
                    </p>

                    <h3 id="deep-dive-platinum" className="text-2xl font-bold text-white mt-12 mb-4">6. Deep Dive: Platinum & Palladium</h3>
                    <p>
                        Platinum (XPT) and Palladium (XPD) are "Platinum Group Metals" (PGMs). They are incredibly rare—30 times rarer than gold. Their primary use is in catalytic converters for automobiles to reduce emissions. This makes their price highly correlated with the automotive industry. Supply shocks from major producers like South Africa and Russia can cause massive price spikes, which you can track live on Doodax.
                    </p>

                    <h3 id="user-guide" className="text-2xl font-bold text-white mt-12 mb-4">7. User Guide: Maximizing the Dashboard</h3>
                    <p>
                        The Doodax dashboard is divided into three functional zones:
                    </p>
                    <ol className="list-decimal pl-5 space-y-4">
                        <li>
                            <strong>The Calculator Core:</strong> Located at the top, this is your command center.
                            <br />- <em>Input Amount:</em> Enter any number (decimals allowed).
                            <br />- <em>Select Metal:</em> Choose from the dropdown. Icons help identify metals quickly.
                            <br />- <em>Select Unit:</em> Defaults to "Ounce" (Troy Ounce). Switch to "Gram" for jewelry.
                            <br />- <em>Select Currency:</em> Switch between USD, EUR, etc. to see localized pricing.
                        </li>
                        <li>
                            <strong>The Results Bar:</strong> The dark bar below the inputs updates instantly.
                            <br />- <em>Left side:</em> Shows the unit price (e.g., Price per 1 Gram).
                            <br />- <em>Right side:</em> Shows the Total Value (Price x Amount).
                        </li>
                        <li>
                            <strong>The Live Grid:</strong> Below the calculator, you see cards for every metal. These provide a quick market snapshot. A green pulsing indicator shows the system is online and receiving data.
                        </li>
                    </ol>

                    <h3 id="faq" className="text-2xl font-bold text-white mt-12 mb-4">8. Frequently Asked Questions (FAQ)</h3>
                    
                    <div className="space-y-6">
                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                            <h4 className="font-bold text-yellow-400 text-lg">Q: How often is the metal price updated on Doodax?</h4>
                            <p>A: Our system refreshes data approximately every 60 seconds. This "tick" rate balances data usage with the need for up-to-date information.</p>
                        </div>

                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                            <h4 className="font-bold text-yellow-400 text-lg">Q: What is the difference between Spot Price and Retail Price?</h4>
                            <p>A: Doodax displays the <strong>Spot Price</strong> (the raw market value). The <strong>Retail Price</strong> (what you pay at a coin shop) will be higher. This difference is called the "premium," which covers minting, distribution, and dealer profit.</p>
                        </div>

                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                            <h4 className="font-bold text-yellow-400 text-lg">Q: Why is a Troy Ounce different from a regular ounce?</h4>
                            <p>A: A standard "kitchen" ounce (avoirdupois) is 28.35 grams. A <strong>Troy Ounce</strong>, used exclusively for precious metals, is 31.1035 grams. Always ensure you are using the correct unit to avoid losing value!</p>
                        </div>

                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                            <h4 className="font-bold text-yellow-400 text-lg">Q: Is the data on Doodax real?</h4>
                            <p>A: For this specific web deployment, the data is <strong>simulated</strong> for demonstration purposes. It uses a realistic algorithm to mimic market volatility but should not be used for executing real financial trades. Always consult a licensed financial advisor.</p>
                        </div>
                    </div>

                    <h3 id="conclusion" className="text-2xl font-bold text-white mt-12 mb-4">9. Conclusion</h3>
                    <p>
                        Doodax.com stands at the intersection of technology and finance. By providing a clear, fast, and accessible way to track precious metal prices, we empower users to take control of their financial destiny. Whether you are calculating the value of a family heirloom or tracking the global spot price of palladium, Doodax is your trusted companion.
                    </p>
                    <p className="mt-4">
                        Thank you for choosing Doodax.com. Keep watching the markets, keep learning, and stay golden.
                    </p>
                </div>

                {/* Gradient Fade Overlay for Read More */}
                {!isArticleExpanded && (
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent flex items-end justify-center pb-2 z-20">
                        <button 
                            onClick={() => setArticleExpanded(true)}
                            className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-2 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all flex items-center gap-2 group text-sm"
                        >
                            Read More
                            <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                    </div>
                )}
                
                {/* Show Less Button */}
                {isArticleExpanded && (
                     <div className="flex justify-center mt-12">
                        <button 
                            onClick={() => {
                                setArticleExpanded(false);
                                window.scrollTo({ top: 800, behavior: 'smooth' });
                            }}
                            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-full border border-gray-600 transition-colors flex items-center gap-2 shadow-lg"
                        >
                            Show Less
                            <svg className="w-4 h-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                    </div>
                )}
            </div>
        </section>
      </main>
    </>
  );
};

export default ConverterPage;
