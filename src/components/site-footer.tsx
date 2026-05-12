import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { ForesightMascot } from './ui/foresight-mascot';

export function SiteFooter({ 
  showHomeButton = true, 
  text = "Developed with intention.", 
  brand = "" 
}: { 
  showHomeButton?: boolean, 
  text?: string | React.ReactNode, 
  brand?: string 
}) {
  return (
    <footer className="w-full bg-muted/40 border-t border-border/10 py-16 flex flex-col items-center font-sans">
        <div className="max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-12">
            
            {/* Branding Group */}
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left group transition-all duration-300">
                {brand === "Foresite" && (
                    <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <ForesightMascot isVisible={true} />
                    </div>
                )}
                <div className="max-w-md">
                    <div className="text-sm font-semibold leading-relaxed text-foreground/80 font-sans">
                        {text}
                    </div>
                    <div className="text-[10px] text-muted-foreground/40 uppercase tracking-widest mt-1">
                        &copy; 2026 All Rights Reserved
                    </div>
                </div>
            </div>

            {showHomeButton && (
                <Link to="/" className="inline-flex items-center justify-center h-14 px-10 rounded-2xl gap-3 text-base font-bold transition-all bg-background border border-border/10 hover:bg-muted/10 text-foreground">
                    <Home className="w-5 h-5 text-primary" />
                    Go to Home
                </Link>
            )}
        </div>
    </footer>
  );
}
