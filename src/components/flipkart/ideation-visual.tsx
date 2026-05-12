"use client";
import React from "react";
import { Search, CheckCircle2, TrendingUp, Lightbulb } from "lucide-react";

export function FlipkartIdeationVisual() {
  return (
    <div className="w-full flex flex-col items-center py-12 relative overflow-visible font-sans mb-8">
      
      {/* Horizontal Container */}
      <div className="w-full overflow-x-auto pb-8 pt-4 px-4 md:px-0 flex justify-start md:justify-center" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        
        <div className="flex flex-row items-center -space-x-6 sm:-space-x-10 min-w-max mx-auto px-4 sm:px-8">
          
          {/* I Saw This */}
          <div 
            className="relative flex flex-col items-center justify-center rounded-full backdrop-blur-[24px] shadow-[0_15px_30px_rgba(151,19,77,0.05)] border border-[#97134D]/10 w-40 h-40 sm:w-48 sm:h-48 shrink-0 transition-transform hover:-translate-y-2 duration-300"
            style={{ zIndex: 10, backgroundColor: 'rgba(151, 19, 77, 0.20)' }}
          >
            <div className="flex flex-col items-center justify-center pr-2">
              <Search className="w-8 h-8 sm:w-10 sm:h-10 text-white dark:text-white stroke-1 mb-2" />
              <span className="text-[10px] sm:text-[12px] font-black uppercase tracking-[0.1em] sm:tracking-[0.15em] text-[#4a0824] dark:text-white leading-tight text-center px-4">I Saw This</span>
              <span className="text-[9px] sm:text-[10px] font-bold text-white/90 mt-1 text-center">User Observation</span>
            </div>
          </div>

          {/* I Know This */}
          <div 
            className="relative flex flex-col items-center justify-center rounded-full backdrop-blur-[24px] shadow-[0_15px_30px_rgba(151,19,77,0.05)] border border-[#97134D]/10 w-40 h-40 sm:w-48 sm:h-48 shrink-0 transition-transform hover:-translate-y-2 duration-300"
            style={{ zIndex: 20, backgroundColor: 'rgba(151, 19, 77, 0.30)' }}
          >
            <div className="flex flex-col items-center justify-center pr-2">
              <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-white dark:text-white stroke-1 mb-2" />
              <span className="text-[10px] sm:text-[12px] font-black uppercase tracking-[0.1em] sm:tracking-[0.15em] text-[#3b061c] dark:text-white leading-tight text-center px-4">I Know This</span>
              <span className="text-[9px] sm:text-[10px] font-bold text-white/90 mt-1 text-center">Domain Knowledge</span>
            </div>
          </div>

          {/* Design Pattern */}
          <div 
            className="relative flex flex-col items-center justify-center rounded-full backdrop-blur-[24px] shadow-[0_15px_30px_rgba(151,19,77,0.05)] border border-[#97134D]/10 w-40 h-40 sm:w-48 sm:h-48 shrink-0 transition-transform hover:-translate-y-2 duration-300"
            style={{ zIndex: 30, backgroundColor: 'rgba(151, 19, 77, 0.40)' }}
          >
            <div className="flex flex-col items-center justify-center pr-2">
              <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-[#4a0824] dark:text-white stroke-1 mb-2" />
              <span className="text-[10px] sm:text-[12px] font-black uppercase tracking-[0.1em] sm:tracking-[0.15em] text-[#2c0415] dark:text-white leading-tight text-center px-4">Design Pattern</span>
              <span className="text-[9px] sm:text-[10px] font-bold text-[#4a0824] dark:text-white/90 mt-1 text-center px-2">Reusable Strategy</span>
            </div>
          </div>

          {/* Feature Idea */}
          <div 
            className="relative flex flex-col items-center justify-center rounded-full backdrop-blur-[24px] shadow-[0_15px_30px_rgba(151,19,77,0.05)] border border-[#97134D]/10 w-40 h-40 sm:w-48 sm:h-48 shrink-0 transition-transform hover:-translate-y-2 duration-300"
            style={{ zIndex: 40, backgroundColor: 'rgba(151, 19, 77, 0.50)' }}
          >
            <div className="flex flex-col items-center justify-center">
              <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10 text-white dark:text-white stroke-[1.5] mb-2 drop-shadow-md" />
              <span className="text-[10px] sm:text-[12px] font-black uppercase tracking-[0.1em] sm:tracking-[0.15em] text-white leading-tight text-center px-2 drop-shadow-sm">Feature Idea</span>
              <span className="text-[9px] sm:text-[10px] font-bold text-white/90 mt-1 text-center px-2">Actionable Output</span>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
}
