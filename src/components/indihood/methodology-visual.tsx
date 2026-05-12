"use client";
import React from "react";
import { Database, Search, Map, Zap } from "lucide-react";

export function IndihoodMethodologyVisual() {
  return (
    <div className="w-full flex flex-col items-center py-12 relative overflow-visible font-sans mb-8">
      
      {/* Horizontal Container */}
      <div className="w-full overflow-x-auto pb-8 pt-4 px-4 md:px-0 flex justify-start md:justify-center" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        
        <div className="flex flex-row items-center -space-x-6 sm:-space-x-10 min-w-max mx-auto px-4 sm:px-8">
          
          {/* Quant Data */}
          <div 
            className="relative flex flex-col items-center justify-center rounded-full backdrop-blur-[24px] shadow-[0_15px_30px_rgba(10,102,194,0.05)] w-40 h-40 sm:w-48 sm:h-48 shrink-0 transition-transform hover:-translate-y-2 duration-300 border-none"
            style={{ zIndex: 10, backgroundColor: 'rgba(10, 102, 194, 0.20)' }}
          >
            <div className="flex flex-col items-center justify-center pr-2">
              <Database className="w-8 h-8 sm:w-10 sm:h-10 text-[#05325f] dark:text-white stroke-1 mb-2" />
              <span className="text-[10px] sm:text-[12px] font-black uppercase tracking-[0.1em] sm:tracking-[0.15em] text-[#05325f] dark:text-white leading-tight text-center px-4">Quant Data</span>
              <span className="text-[9px] sm:text-[10px] font-bold text-[#05325f]/90 dark:text-white/90 mt-1 text-center">Failure Logs</span>
            </div>
          </div>

          {/* Field Context */}
          <div 
            className="relative flex flex-col items-center justify-center rounded-full backdrop-blur-[24px] shadow-[0_15px_30px_rgba(10,102,194,0.05)] w-40 h-40 sm:w-48 sm:h-48 shrink-0 transition-transform hover:-translate-y-2 duration-300 border-none"
            style={{ zIndex: 20, backgroundColor: 'rgba(10, 102, 194, 0.40)' }}
          >
            <div className="flex flex-col items-center justify-center pr-2">
              <Search className="w-8 h-8 sm:w-10 sm:h-10 text-white dark:text-white stroke-1 mb-2" />
              <span className="text-[10px] sm:text-[12px] font-black uppercase tracking-[0.1em] sm:tracking-[0.15em] text-white dark:text-white leading-tight text-center px-4">Field Context</span>
              <span className="text-[9px] sm:text-[10px] font-bold text-white/90 mt-1 text-center">Node Shadowing</span>
            </div>
          </div>

          {/* Process Map */}
          <div 
            className="relative flex flex-col items-center justify-center rounded-full backdrop-blur-[24px] shadow-[0_15px_30px_rgba(10,102,194,0.05)] w-40 h-40 sm:w-48 sm:h-48 shrink-0 transition-transform hover:-translate-y-2 duration-300 border-none"
            style={{ zIndex: 30, backgroundColor: 'rgba(10, 102, 194, 0.60)' }}
          >
            <div className="flex flex-col items-center justify-center pr-2">
              <Map className="w-8 h-8 sm:w-10 sm:h-10 text-white dark:text-white stroke-1 mb-2" />
              <span className="text-[10px] sm:text-[12px] font-black uppercase tracking-[0.1em] sm:tracking-[0.15em] text-white dark:text-white leading-tight text-center px-4">Process Map</span>
              <span className="text-[9px] sm:text-[10px] font-bold text-white/90 mt-1 text-center px-2">Service Blueprint</span>
            </div>
          </div>

          {/* Root Causes */}
          <div 
            className="relative flex flex-col items-center justify-center rounded-full backdrop-blur-[24px] shadow-[0_15px_30px_rgba(10,102,194,0.05)] w-40 h-40 sm:w-48 sm:h-48 shrink-0 transition-transform hover:-translate-y-2 duration-300 border-none"
            style={{ zIndex: 40, backgroundColor: 'rgba(10, 102, 194, 0.80)' }}
          >
            <div className="flex flex-col items-center justify-center">
              <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white dark:text-white stroke-[1.5] mb-2 drop-shadow-md" />
              <span className="text-[10px] sm:text-[12px] font-black uppercase tracking-[0.1em] sm:tracking-[0.15em] text-white leading-tight text-center px-2 drop-shadow-sm">Root Causes</span>
              <span className="text-[9px] sm:text-[10px] font-bold text-white/90 mt-1 text-center px-2">The 'As-Is' Model</span>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
}
