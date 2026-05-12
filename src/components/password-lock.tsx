import React, { useState, useEffect } from 'react';
import { Lock } from 'lucide-react';

export function PasswordLock({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    // Check initial state
    if (sessionStorage.getItem('foresite-insights-unlocked') === 'true') {
      setUnlocked(true);
    }
    
    // Listen for custom event to sync state across app
    const handleUnlockEvent = () => {
      setUnlocked(true);
    };
    
    window.addEventListener('foresite-insights-unlocked', handleUnlockEvent);
    return () => window.removeEventListener('foresite-insights-unlocked', handleUnlockEvent);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'foresite2026') {
      setUnlocked(true);
      setError(false);
      sessionStorage.setItem('foresite-insights-unlocked', 'true');
      window.dispatchEvent(new Event('foresite-insights-unlocked'));
    } else {
      setError(true);
    }
  };

  if (unlocked) {
    return <>{children}</>;
  }

  return (
    <div className="relative w-full overflow-hidden mt-12 bg-muted/20">
      <div className="relative z-10 flex flex-col items-center justify-center py-24 px-6 text-center">
        <div className="w-16 h-16 bg-background flex items-center justify-center mb-6 rounded-full">
          <Lock className="w-8 h-8 text-muted-foreground" />
        </div>
        <h3 className="text-2xl font-bold font-sans tracking-tight mb-2 text-foreground">Restricted Access</h3>
        <p className="text-muted-foreground max-w-md mx-auto mb-8 font-sans">
          This section contains sensitive project insights and requires a password to view.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto relative">
          <div className="flex-1 w-full">
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              className={`w-full px-4 py-3 rounded-lg bg-background border ${error ? 'border-red-500 focus:ring-red-500/20' : 'border-border focus:ring-primary/20'} focus:outline-none focus:ring-2 font-sans`}
            />
            {error && <p className="text-red-500 text-sm mt-1 text-left absolute -bottom-6">Incorrect password</p>}
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors whitespace-nowrap h-[50px]"
          >
            Unlock Insights
          </button>
        </form>
      </div>
    </div>
  );
}
