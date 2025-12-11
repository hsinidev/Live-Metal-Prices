import type { MetalRates } from '../types';

// Base prices in USD for a more realistic mock
const MOCK_BASE_PRICES: MetalRates = {
  XAU: 2350.55,   // Gold
  XAG: 29.50,     // Silver
  XPT: 980.75,    // Platinum
  XPD: 955.20,    // Palladium
  XRH: 4500.00,   // Rhodium
  XDM: 150000.00, // Diamond (mock price per ounce equivalent)
};

// Simple conversion rates for mock purposes
const MOCK_CONVERSION_RATES: { [key: string]: number } = {
  USD: 1,
  EUR: 0.92,
  JPY: 157.25,
  GBP: 0.79,
  AUD: 1.50,
  CAD: 1.37,
  CHF: 0.90,
  CNY: 7.25,
  HKD: 7.81,
  NZD: 1.63,
  SEK: 10.45,
  KRW: 1380.50,
  SGD: 1.35,
  NOK: 10.55,
  MXN: 18.10,
  INR: 83.50,
  RUB: 88.20,
  ZAR: 18.75,
  TRY: 32.50,
  BRL: 5.35,
  AED: 3.67,
  SAR: 3.75,
  QAR: 3.64,
  KWD: 0.31,
  OMR: 0.38,
};

/**
 * Mocks the fetching of metal prices.
 * Returns slightly randomized prices based on a base price to simulate market fluctuations.
 * Simulates a network delay of 300-800ms.
 */
export const fetchMetalRates = async (baseCurrency: string): Promise<MetalRates> => {
  console.log(`Fetching mock metal rates for base currency: ${baseCurrency}`);

  return new Promise((resolve) => {
    setTimeout(() => {
      const conversionRate = MOCK_CONVERSION_RATES[baseCurrency] || 1;
      
      const rates: MetalRates = {
        XAU: (MOCK_BASE_PRICES.XAU + (Math.random() - 0.5) * 10) * conversionRate, // Fluctuate by +/- $5
        XAG: (MOCK_BASE_PRICES.XAG + (Math.random() - 0.5) * 0.5) * conversionRate, // Fluctuate by +/- $0.25
        XPT: (MOCK_BASE_PRICES.XPT + (Math.random() - 0.5) * 5) * conversionRate, // Fluctuate by +/- $2.5
        XPD: (MOCK_BASE_PRICES.XPD + (Math.random() - 0.5) * 4) * conversionRate,
        XRH: (MOCK_BASE_PRICES.XRH + (Math.random() - 0.5) * 50) * conversionRate,
        XDM: (MOCK_BASE_PRICES.XDM + (Math.random() - 0.5) * 1000) * conversionRate,
      };

      resolve(rates);
    }, 300 + Math.random() * 500);
  });
};
