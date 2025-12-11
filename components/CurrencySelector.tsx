
import React from 'react';

interface CurrencySelectorProps {
  currencies: string[];
  selectedCurrency: string;
  onCurrencyChange: (currency: string) => void;
}

export const CurrencySelector: React.FC<CurrencySelectorProps> = ({ currencies, selectedCurrency, onCurrencyChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 bg-gray-800/60 p-2 rounded-full border border-gray-700">
      {currencies.map((currency) => (
        <button
          key={currency}
          onClick={() => onCurrencyChange(currency)}
          className={`px-4 py-2 text-sm sm:text-base font-semibold rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-yellow-400 ${
            selectedCurrency === currency
              ? 'bg-yellow-500 text-gray-900 shadow-md'
              : 'bg-transparent text-gray-300 hover:bg-gray-700/50'
          }`}
        >
          {currency}
        </button>
      ))}
    </div>
  );
};
