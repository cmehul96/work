"use client";
import React from "react";
import { motion } from "framer-motion";
import { Filter, Map, Car } from "lucide-react";

export function FrameworkVisual() {
  return (
    <div className="w-full flex flex-col items-center py-12 relative overflow-visible font-sans">
      <div className="relative w-full max-w-[650px] aspect-square flex items-center justify-center my-8 px-4 md:px-0">
        <svg viewBox="0 0 600 600" className="w-full h-full overflow-visible">
          <defs>
            <path id="delightersArc" d="M 50,300 A 250,250 0 0,1 550,300" fill="none" />
            <path id="primaryArc" d="M 140,300 A 160,160 0 0,1 460,300" fill="none" />
            <path id="decisionArc" d="M 235,300 A 65,65 0 0,1 365,300" fill="none" />
            <filter id="glass-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#000000" floodOpacity="0.08" />
            </filter>
          </defs>

          {/* Circles with glassmorphism */}
          <circle cx="300" cy="300" r="270" className="fill-blue-200/20 transition-all hover:fill-blue-200/30" filter="url(#glass-shadow)" style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }} />
          <circle cx="300" cy="300" r="180" className="fill-blue-400/30 transition-all hover:fill-blue-400/40" filter="url(#glass-shadow)" style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }} />
          <circle cx="300" cy="300" r="90" className="fill-blue-600/90 transition-all hover:fill-blue-600/100" filter="url(#glass-shadow)" style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }} />

          {/* Precisely placed Icons */}
          <Car x="284" y="66" className="w-8 h-8 text-blue-950 stroke-[1.5]" />
          <Map x="286" y="156" className="w-7 h-7 text-blue-950 stroke-[1.5]" />
          <Filter x="288" y="284" className="w-6 h-6 text-white stroke-[2]" />

          {/* Titles as perfectly aligned circular arcs */}
          <text className="text-[12px] font-black uppercase tracking-[0.25em] fill-blue-950" textAnchor="middle">
            <textPath href="#delightersArc" startOffset="50%">Delighters</textPath>
          </text>
          <text className="text-[12px] font-black uppercase tracking-[0.25em] fill-blue-950" textAnchor="middle">
            <textPath href="#primaryArc" startOffset="50%">Primary Experience</textPath>
          </text>
          <text className="text-[10px] font-bold uppercase tracking-[0.2em] fill-white" textAnchor="middle">
            <textPath href="#decisionArc" startOffset="50%">Decision</textPath>
          </text>
        </svg>
      </div>
        
        {/* Restored body text underneath */}
        <div className="mt-8 text-center max-w-xl space-y-4 px-6 md:px-0 relative z-10">
            <h4 className="text-2xl font-bold text-foreground font-sans">The Commute Framework</h4>
            <p className="text-lg text-muted-foreground/80 leading-relaxed font-spectral">
                We distilled the entire commuter mindset into concentric rings - starting from <strong>Decision</strong> (Price/Speed), moving into the <strong>Primary Experience</strong> (Pickups/Routing), and finally governed by the <strong>Delighters</strong> (Comfort/Mood).
            </p>
        </div>
    </div>
  );
}


