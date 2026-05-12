"use client";
import React from "react";
import { Utensils, Search, Zap } from "lucide-react";

export function SwiggyFrameworkVisual() {
  return (
    <div className="w-full flex justify-center py-12 relative z-10 font-sans">
      <div className="relative w-full max-w-[420px] aspect-square rounded-[2rem] overflow-hidden isolate">
        <svg viewBox="0 0 400 400" className="w-full h-full font-sans">
          {/* Top Piece */}
          <g className="group cursor-default">
            <path 
              d="M 0 200 L 0 32 Q 0 0 32 0 L 368 0 Q 400 0 400 32 L 400 200 L 332 200 A 32 32 0 1 1 268 200 L 200 200 L 132 200 A 32 32 0 1 0 68 200 Z" 
              className="fill-[#fc8019]/15 dark:fill-[#fc8019]/20 stroke-background stroke-[8px] transition-colors duration-500 group-hover:fill-[#fc8019]/20 dark:group-hover:fill-[#fc8019]/25" 
              strokeLinejoin="round"
            />
            <foreignObject x="0" y="20" width="400" height="150">
              <div className="w-full h-full flex flex-col items-center justify-center p-4 select-none">
                <Search className="w-5 h-5 text-[#fc8019] mb-2.5 transition-transform duration-500 group-hover:scale-110" strokeWidth={2} />
                <span className="font-bold text-[10px] md:text-[12px] tracking-[0.15em] uppercase text-foreground/90 mb-1">Intelligent Discovery</span>
                <span className="text-[9px] md:text-[11px] text-foreground/60 font-medium">Combatting Cuisine Fatigue</span>
              </div>
            </foreignObject>
          </g>

          {/* Bottom Left Piece */}
          <g className="group cursor-default">
            <path 
              d="M 0 200 L 68 200 A 32 32 0 1 1 132 200 L 200 200 L 200 268 A 32 32 0 1 0 200 332 L 200 400 L 32 400 Q 0 400 0 368 Z" 
              className="fill-[#fc8019]/30 dark:fill-[#fc8019]/35 stroke-background stroke-[8px] transition-colors duration-500 group-hover:fill-[#fc8019]/35 dark:group-hover:fill-[#fc8019]/40" 
              strokeLinejoin="round"
            />
            <foreignObject x="0" y="220" width="200" height="160">
              <div className="w-full h-full flex flex-col items-center justify-center p-4 select-none">
                <Zap className="w-5 h-5 text-[#fc8019] mb-3 transition-transform duration-500 group-hover:scale-110" strokeWidth={2} />
                <span className="font-bold text-[10px] md:text-[12px] text-center tracking-[0.1em] uppercase text-foreground/90 leading-relaxed">Effortless<br/>Re-ordering</span>
              </div>
            </foreignObject>
          </g>

          {/* Bottom Right Piece */}
          <g className="group cursor-default">
            <path 
              d="M 200 200 L 268 200 A 32 32 0 1 0 332 200 L 400 200 L 400 368 Q 400 400 368 400 L 200 400 L 200 332 A 32 32 0 1 1 200 268 Z" 
              className="fill-[#fc8019]/45 dark:fill-[#fc8019]/50 stroke-background stroke-[8px] transition-colors duration-500 group-hover:fill-[#fc8019]/50 dark:group-hover:fill-[#fc8019]/55" 
              strokeLinejoin="round"
            />
            <foreignObject x="200" y="220" width="200" height="160">
              <div className="w-full h-full flex flex-col items-center justify-center p-4 select-none">
                <Utensils className="w-5 h-5 text-[#c45a0b] dark:text-[#fc8019] mb-3 transition-transform duration-500 group-hover:scale-110" strokeWidth={2} />
                <span className="font-bold text-[10px] md:text-[12px] text-center tracking-[0.1em] uppercase text-foreground/90 leading-relaxed">Need-Based<br/>Filtering</span>
              </div>
            </foreignObject>
          </g>
        </svg>
      </div>
    </div>
  );
}

