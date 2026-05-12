"use client";
import React from "react";
import { Shield, Gem, CreditCard, Zap } from "lucide-react";

export function FlipkartFrameworkVisual() {
  return (
    <div className="w-full flex flex-col items-center py-12 relative overflow-visible font-sans">
      <div className="relative w-full max-w-[600px] aspect-square flex flex-col items-center justify-center my-8 mx-auto px-4 sm:px-0">
        
        {/* Top Circle: Trust (NTC Focus) */}
        <div 
          className="absolute rounded-full backdrop-blur-[24px] shadow-[0_15px_30px_rgba(151,19,77,0.05)] border border-[#97134D]/10"
          style={{ width: '56.66%', height: '56.66%', left: '21.67%', top: '8.33%', zIndex: 10, backgroundColor: 'rgba(151, 19, 77, 0.35)' }}
        >
          <div className="absolute flex flex-col items-center text-center w-[80%]" style={{ left: '50%', top: '25%', transform: 'translate(-50%, -50%)' }}>
            <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-[#97134D] dark:text-[#f8b4d9] stroke-1 mb-2" />
            <span className="text-[10px] sm:text-[13px] font-black uppercase tracking-[0.1em] sm:tracking-[0.15em] text-[#4a0824] dark:text-white leading-tight">Trust Foundation</span>
            <span className="text-[9px] sm:text-[11px] font-bold text-[#97134D] dark:text-[#f8b4d9] mt-1">Addressing NTC fears</span>
          </div>
        </div>
          
        {/* Bottom Left Circle: Value (ETC Focus) */}
        <div 
          className="absolute rounded-full backdrop-blur-[24px] shadow-[0_15px_30px_rgba(151,19,77,0.05)] border border-[#97134D]/10"
          style={{ width: '56.66%', height: '56.66%', left: '6.67%', top: '35%', zIndex: 20, backgroundColor: 'rgba(151, 19, 77, 0.45)' }}
        >
          <div className="absolute flex flex-col items-center text-center w-[80%]" style={{ left: '36%', top: '65%', transform: 'translate(-50%, -50%)' }}>
            <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-[#97134D] dark:text-[#f8b4d9] stroke-1 mb-2" />
            <span className="text-[10px] sm:text-[13px] font-black uppercase tracking-[0.1em] sm:tracking-[0.15em] text-[#4a0824] dark:text-white leading-tight">Tangible Value</span>
            <span className="text-[9px] sm:text-[11px] font-bold text-[#97134D] dark:text-[#f8b4d9] mt-1">EMIs & Cashbacks</span>
          </div>
        </div>
          
        {/* Bottom Right Circle: Aspiration (Exclusivity) */}
        <div 
          className="absolute rounded-full backdrop-blur-[24px] shadow-[0_15px_30px_rgba(151,19,77,0.05)] border border-[#97134D]/10"
          style={{ width: '56.66%', height: '56.66%', left: '36.67%', top: '35%', zIndex: 30, backgroundColor: 'rgba(151, 19, 77, 0.55)' }}
        >
          <div className="absolute flex flex-col items-center text-center w-[80%]" style={{ left: '64%', top: '65%', transform: 'translate(-50%, -50%)' }}>
            <Gem className="w-8 h-8 sm:w-10 sm:h-10 text-[#97134D] dark:text-[#f8b4d9] stroke-1 mb-2" />
            <span className="text-[10px] sm:text-[13px] font-black uppercase tracking-[0.1em] sm:tracking-[0.15em] text-[#4a0824] dark:text-white leading-tight">Exclusivity</span>
            <span className="text-[9px] sm:text-[11px] font-bold text-[#97134D] dark:text-[#f8b4d9] mt-1">Re-elevating status</span>
          </div>
        </div>
        
        {/* Central Intersection overlay icon */}
        <div 
          className="absolute z-40 flex flex-col items-center justify-center w-32"
          style={{ left: '50%', top: '48.33%', transform: 'translate(-50%, -50%)' }}
        >
          <CreditCard className="w-8 h-8 sm:w-10 sm:h-10 text-[#97134D] dark:text-white stroke-[1.5] mb-1 sm:mb-2" />
          <span className="text-[9px] sm:text-[11px] font-black uppercase tracking-[0.1em] text-[#4a0824] dark:text-white text-center leading-tight">Co-Branded Card</span>
        </div>

      </div>
      
      <div className="mt-8 sm:mt-4 text-center max-w-xl space-y-4 px-6 md:px-0 relative z-10 font-sans">
        <h4 className="text-2xl font-bold text-foreground font-sans tracking-tight">The Credit Adoption Engine</h4>
        <p className="text-lg text-muted-foreground/80 leading-relaxed font-spectral">
            A cohesive strategy requires three interconnected pillars: overcoming fear with a strong <strong>Trust Foundation</strong>, delivering immediate material benefits via <strong>Tangible Value</strong>, and escaping commoditization through <strong>Exclusivity</strong>.
        </p>
      </div>
    </div>
  );
}
