import type { Metal } from './types';
import { GoldIcon } from './components/icons/GoldIcon';
import { SilverIcon } from './components/icons/SilverIcon';
import { PlatinumIcon } from './components/icons/PlatinumIcon';
import { PalladiumIcon } from './components/icons/PalladiumIcon';
import { RhodiumIcon } from './components/icons/RhodiumIcon';
import { DiamondIcon } from './components/icons/DiamondIcon';


export const METALS: Metal[] = [
  {
    name: 'Gold',
    symbol: 'XAU',
    icon: GoldIcon,
    baseColor: 'yellow',
  },
  {
    name: 'Silver',
    symbol: 'XAG',
    icon: SilverIcon,
    baseColor: 'gray',
  },
  {
    name: 'Platinum',
    symbol: 'XPT',
    icon: PlatinumIcon,
    baseColor: 'slate',
  },
  {
    name: 'Palladium',
    symbol: 'XPD',
    icon: PalladiumIcon,
    baseColor: 'blue',
  },
  {
    name: 'Rhodium',
    symbol: 'XRH',
    icon: RhodiumIcon,
    baseColor: 'indigo',
  },
  {
    name: 'Diamond',
    symbol: 'XDM',
    icon: DiamondIcon,
    baseColor: 'cyan',
  },
];

export const CURRENCIES: string[] = [
    'USD', 'EUR', 'JPY', 'GBP', 'AUD', 'CAD', 'CHF', 'CNY', 'HKD', 'NZD', 
    'SEK', 'KRW', 'SGD', 'NOK', 'MXN', 'INR', 'RUB', 'ZAR', 'TRY', 'BRL',
    'AED', 'SAR', 'QAR', 'KWD', 'OMR'
];
