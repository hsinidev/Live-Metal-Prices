import React from 'react';
import type { Metal } from '../types';

interface MetalCardProps {
  name: string;
  symbol: string;
  price: number | null;
  currency: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  isLoading: boolean;
}

const colorVariants: { [key: string]: { border: string; bg: string; text: string } } = {
    yellow: { border: 'border-yellow-500/50', bg: 'hover:bg-yellow-500/10', text: 'text-yellow-400' },
    gray: { border: 'border-gray-400/50', bg: 'hover:bg-gray-400/10', text: 'text-gray-300' },
    slate: { border: 'border-slate-300/50', bg: 'hover:bg-slate-300/10', text: 'text-slate-200' },
    blue: { border: 'border-blue-400/50', bg: 'hover:bg-blue-400/10', text: 'text-blue-300' },
    indigo: { border: 'border-indigo-400/50', bg: 'hover:bg-indigo-400/10', text: 'text-indigo-300' },
    cyan: { border: 'border-cyan-400/50', bg: 'hover:bg-cyan-400/10', text: 'text-cyan-300' },
};

export const MetalCard: React.FC<MetalCardProps> = ({ name, symbol, price, currency, Icon, isLoading }) => {
  const metalDetails = {
    XAU: { color: 'yellow' },
    XAG: { color: 'gray' },
    XPT: { color: 'slate' },
    XPD: { color: 'blue' },
    XRH: { color: 'indigo' },
    XDM: { color: 'cyan' },
  };
  
  const metalColor = metalDetails[symbol as keyof typeof metalDetails]?.color || 'gray';
  const colors = colorVariants[metalColor];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };
  
  const SkeletonLoader = () => (
      <div className="animate-pulse">
        <div className="h-9 bg-gray-700 rounded w-3/4 mb-2"></div>
        <div className="h-6 bg-gray-700 rounded w-1/2"></div>
      </div>
  );

  return (
    <div className={`bg-gray-800/50 border ${colors.border} rounded-xl p-6 transition-all duration-300 ${colors.bg} shadow-lg backdrop-blur-sm`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className={`text-2xl font-bold ${colors.text}`}>{name}</h2>
        <Icon className={`w-10 h-10 ${colors.text} opacity-80`} />
      </div>

      <div className="mt-2">
        {isLoading || price === null ? (
            <SkeletonLoader />
        ) : (
            <>
                <p className="text-4xl font-mono tracking-tight text-white">
                    {formatCurrency(price)}
                </p>
                <p className="text-sm font-semibold text-gray-400 mt-1">{symbol}</p>
            </>
        )}
      </div>
    </div>
  );
};
