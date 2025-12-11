import React from 'react';

export interface MetalRates {
  XAU: number;
  XAG: number;
  XPT: number;
  XPD: number;
  XRH: number;
  XDM: number;
}

export interface Metal {
  name: string;
  symbol: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  baseColor: string;
}
