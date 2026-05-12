import React, { useEffect } from 'react';
import { Download, ArrowLeft, Mail, Phone, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../components/ui/theme-toggle';

export default function Resume() {
  const handlePrint = () => {
    const isIframe = window !== window.parent;
    if (isIframe) {
      const url = new URL(window.location.href);
      url.searchParams.set('print', 'true');
      const newWindow = window.open(url.toString(), '_blank');
      // Fallback in case window doesn't open properly (e.g. popups blocked)
      if (!newWindow) {
        alert("Please allow popups or open the app in a new tab to download the PDF.");
      }
    } else {
      window.print();
    }
  };

  useEffect(() => {
    // Auto-trigger print if requested via query param
    const searchParams = new URLSearchParams(window.location.search);
    let printTimeout: number | undefined;
    
    if (searchParams.get('print') === 'true') {
      let hasPrinted = false;
      const doPrint = () => {
        if (hasPrinted) return;
        hasPrinted = true;
        window.print();
        
        // Remove print parameter from URL to prevent duplicate prints
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.delete('print');
        window.history.replaceState({}, document.title, newUrl.toString());
      };

      // Slight delay to ensure content is fully painted
      printTimeout = window.setTimeout(doPrint, 300);

      window.onafterprint = () => {
        window.close();
      };
    }
    
    return () => {
      if (printTimeout) clearTimeout(printTimeout);
    };
  }, []);

  return (
    <div className="min-h-screen print:min-h-0 print:h-full bg-background print:bg-white text-foreground font-sans selection:bg-primary/20">
      {/* Navigation - hidden on print */}
      <nav className="print:hidden fixed top-0 w-full px-6 py-4 md:px-12 z-50 flex justify-between items-center bg-background/90 backdrop-blur-md border-b border-border/10">
        <div className="flex items-center gap-6">
          <Link to="/" className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="font-sans text-xl font-bold tracking-tight text-foreground">
            Mehul.
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Download PDF</span>
          </button>
        </div>
      </nav>

      {/* Resume Content */}
      <div className="pt-28 pb-16 px-4 sm:px-6 md:px-12 print:p-0">
        <main className="bg-transparent text-foreground px-4 py-8 md:px-8 max-w-4xl mx-auto print:p-0 print:max-w-none print:w-full print:bg-white print:text-black">
        
        {/* Header */}
        <header className="mb-12 print:mb-6 border-b border-border/10 print:border-gray-300 pb-8 print:pb-5">
          <h1 className="text-4xl md:text-5xl font-bold font-sans tracking-tight mb-2 print:mb-1">Mehul Chaudhary</h1>
          <h2 className="text-xl md:text-2xl text-foreground/70 print:text-gray-600 font-sans tracking-tight mb-6 print:mb-4">Mixed Methods UX Researcher</h2>
          
          <div className="flex flex-wrap gap-4 text-sm font-medium font-sans print:gap-3 print:text-[10px]">
            <a href="mailto:mehulchaudhary2014@gmail.com" className="flex items-center gap-2 text-foreground/80 print:text-gray-800 hover:text-primary transition-colors">
              <Mail className="print:w-[10px] print:h-[10px] w-4 h-4" /> mehulchaudhary2014@gmail.com
            </a>
            <a href="tel:+919085684420" className="flex items-center gap-2 text-foreground/80 print:text-gray-800 hover:text-primary transition-colors">
              <Phone className="print:w-[10px] print:h-[10px] w-4 h-4" /> +919085684420
            </a>
            <a href="https://linkedin.com/in/cmehul" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/80 print:text-gray-800 hover:text-primary transition-colors">
              <ExternalLink className="print:w-[10px] print:h-[10px] w-4 h-4" /> linkedin.com/in/cmehul
            </a>
            <a href="https://mehul-work.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/80 print:text-gray-800 hover:text-primary transition-colors">
              <ExternalLink className="print:w-[10px] print:h-[10px] w-4 h-4" /> Portfolio
            </a>
          </div>
        </header>

        {/* Work Experience */}
        <section className="mb-14 work-exp-section print:mb-6">
          <h3 className="text-2xl font-bold font-sans tracking-tight mb-8 print:mb-4 uppercase text-primary/80 print:text-black text-sm tracking-widest">Work Experience</h3>
          
          <div className="relative border-l-2 border-transparent ml-2 md:ml-3 flex flex-col gap-12 print:gap-5">
            <div className="absolute top-[8px] bottom-6 -left-[2px] w-[2px] bg-border/50 print:bg-gray-300 z-0"></div>
            
            <div className="relative pl-6 md:pl-8 print:pl-6 print:break-inside-avoid z-10">
              <div className="absolute w-3 h-3 bg-muted-foreground print:bg-gray-400 rounded-full top-2 sm:top-[6px] print:top-[4px] -left-[7.5px] print:-left-[6.5px] ring-4 ring-background print:ring-white"></div>
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-1 print:flex-row print:gap-4 print:mb-1">
                <h4 className="text-xl font-bold font-sans text-foreground print:text-black">Founder</h4>
                <div className="text-sm font-bold text-muted-foreground print:text-gray-600">Aug 2025 – Apr 2026</div>
              </div>
              <div className="text-lg text-primary font-medium mb-4 print:mb-2 font-sans">Foresite • Bengaluru</div>
              <ul className="list-none space-y-2 text-muted-foreground print:text-gray-800 font-sans text-base leading-relaxed">
                <li className="flex gap-2 print:break-inside-avoid"><span className="text-primary/40 print:text-gray-400">•</span> <div>Built Foresite, an always-on AI research platform.</div></li>
                <li className="flex gap-2 print:break-inside-avoid"><span className="text-primary/40 print:text-gray-400">•</span> <div>Developed AI agents that conduct parallel interviews, analyze insights, and deliver actionable recommendations automatically.</div></li>
                <li className="flex gap-2 print:break-inside-avoid"><span className="text-primary/40 print:text-gray-400">•</span> <div>Piloted the platform successfully with companies like Myntra and Groww in India to streamline product discovery and usability testing.</div></li>
                <li className="flex gap-2 print:break-inside-avoid"><span className="text-primary/40 print:text-gray-400">•</span> <div>Ultimately ceased operations due to market maturity constraints in India and heavily funded, entrenched competition in the US.</div></li>
              </ul>
            </div>

            <div className="relative pl-6 md:pl-8 print:pl-6 print:break-inside-avoid z-10">
              <div className="absolute w-3 h-3 bg-muted-foreground print:bg-gray-400 rounded-full top-2 sm:top-[6px] print:top-[4px] -left-[7.5px] print:-left-[6.5px] ring-4 ring-background print:ring-white"></div>
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-1 print:flex-row print:gap-4 print:mb-1">
                <h4 className="text-xl font-bold font-sans text-foreground print:text-black">UX Researcher III</h4>
                <div className="text-sm font-bold text-muted-foreground print:text-gray-600">Jul 2023 – Present</div>
              </div>
              <div className="text-lg text-primary/80 font-medium mb-4 print:mb-2 font-sans">Indihood • Bengaluru</div>
              <ul className="list-none space-y-2 text-muted-foreground print:text-gray-800 font-sans text-base leading-relaxed">
                <li className="flex gap-2"><span className="text-primary/40 print:text-gray-400">•</span> <div>Revamped the commercial current account onboarding journey for HDFC Bank. Translated complex operational workflows to transform an error-prone process into a frictionless, automated ecosystem.</div></li>
                <li className="flex gap-2"><span className="text-primary/40 print:text-gray-400">•</span> <div>Organised and conducted the generative study to understand the end users of Avanti, involving shadowing and in-depth interviews to understand their jobs to be done, resulting in crucial pain-points discovery addressed with revamped designs.</div></li>
                <li className="flex gap-2"><span className="text-primary/40 print:text-gray-400">•</span> <div>Fetched data using SQL and analysed it on Excel to find relevant user groups for recruitment, triangulate qualitative insights and discover issues/behaviours to follow up on.</div></li>
              </ul>
            </div>

            <div className="relative pl-6 md:pl-8 print:pl-6 print:break-inside-avoid z-10">
              <div className="absolute w-3 h-3 bg-muted-foreground print:bg-gray-400 rounded-full top-2 sm:top-[6px] print:top-[4px] -left-[7.5px] print:-left-[6.5px] ring-4 ring-background print:ring-white"></div>
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-1 print:flex-row print:gap-4 print:mb-1">
                <h4 className="text-xl font-bold font-sans text-foreground print:text-black">Senior UX Researcher</h4>
                <div className="text-sm font-bold text-muted-foreground print:text-gray-600">Aug 2022 – Jan 2023</div>
              </div>
              <div className="text-lg text-primary/80 font-medium mb-4 print:mb-2 font-sans">Swiggy • Bengaluru</div>
              <ul className="list-none space-y-2 text-muted-foreground print:text-gray-800 font-sans text-base leading-relaxed">
                <li className="flex gap-2"><span className="text-primary/40 print:text-gray-400">•</span> <div>Conducted the foundational study to understand how India Next (users in Tier2 and beyond) think, behave and act to help us solve for their specific needs. Suggested a number of UX interventions to improve the experience of India Next.</div></li>
                <li className="flex gap-2"><span className="text-primary/40 print:text-gray-400">•</span> <div>Investigated why high frequency users take significantly more time to decide compared to an average user and came up with recommendations.</div></li>
                <li className="flex gap-2"><span className="text-primary/40 print:text-gray-400">•</span> <div>Conducted usability/concept evaluations to assess if solutions solved intended problems and added value.</div></li>
              </ul>
            </div>

            <div className="relative pl-6 md:pl-8 print:pl-6 print:break-inside-avoid z-10">
              <div className="absolute w-3 h-3 bg-muted-foreground print:bg-gray-400 rounded-full top-2 sm:top-[6px] print:top-[4px] -left-[7.5px] print:-left-[6.5px] ring-4 ring-background print:ring-white"></div>
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-1 print:flex-row print:gap-4 print:mb-1">
                <h4 className="text-xl font-bold font-sans text-foreground print:text-black">UX Researcher II</h4>
                <div className="text-sm font-bold text-muted-foreground print:text-gray-600">Jul 2019 – Jul 2022</div>
              </div>
              <div className="text-lg text-primary/80 font-medium mb-4 print:mb-2 font-sans">Flipkart • Bengaluru</div>
              <ul className="list-none space-y-2 text-muted-foreground print:text-gray-800 font-sans text-base leading-relaxed">
                <li className="flex gap-2"><span className="text-primary/40 print:text-gray-400">•</span> <div>Led the Research charter of the Fintech and Payments Group at Flipkart.</div></li>
                <li className="flex gap-2"><span className="text-primary/40 print:text-gray-400">•</span> <div>Led research to understand core perceptions of low affluent sections towards low credit line.</div></li>
                <li className="flex gap-2"><span className="text-primary/40 print:text-gray-400">•</span> <div>Conducted initial foundational piece on Flipkart's co-branded credit card, understanding market dynamics and shaping future strategy.</div></li>
                <li className="flex gap-2"><span className="text-primary/40 print:text-gray-400">•</span> <div>Conducted multiple brainstorming sessions with product and business based on research insights.</div></li>
              </ul>
            </div>

            <div className="relative pl-6 md:pl-8 print:pl-6 print:break-inside-avoid z-10">
              <div className="absolute w-3 h-3 bg-muted-foreground print:bg-gray-400 rounded-full top-2 sm:top-[6px] print:top-[4px] -left-[7.5px] print:-left-[6.5px] ring-4 ring-background print:ring-white"></div>
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-1 print:flex-row print:gap-4 print:mb-1">
                <h4 className="text-xl font-bold font-sans text-foreground print:text-black">UX Researcher (Contract)</h4>
                <div className="text-sm font-bold text-muted-foreground print:text-gray-600">Jun 2018 – Dec 2018</div>
              </div>
              <div className="text-lg text-primary/80 font-medium mb-4 print:mb-2 font-sans">Uber • Bengaluru</div>
              <ul className="list-none space-y-2 text-muted-foreground print:text-gray-800 font-sans text-base leading-relaxed">
                <li className="flex gap-2"><span className="text-primary/40 print:text-gray-400">•</span> <div>Worked with the Global Research Team on the riders side.</div></li>
                <li className="flex gap-2"><span className="text-primary/40 print:text-gray-400">•</span> <div>Led foundational research using diary studies to redefine the experience of pool rides in India for Uber Lite, identifying core needs and crafting relevant UX for low-end smartphones/patchy networks.</div></li>
                <li className="flex gap-2"><span className="text-primary/40 print:text-gray-400">•</span> <div>Co-worked on evaluating high capacity vehicles for commute in India, involving ride-alongs and in-depth interviews, aiding leadership decisions.</div></li>
              </ul>
            </div>

            <div className="relative pl-6 md:pl-8 print:pl-6 print:break-inside-avoid z-10">
              <div className="absolute w-3 h-3 bg-muted-foreground print:bg-gray-400 rounded-full top-2 sm:top-[6px] print:top-[4px] -left-[7.5px] print:-left-[6.5px] ring-4 ring-background print:ring-white"></div>
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-1 print:flex-row print:gap-4 print:mb-1">
                <h4 className="text-xl font-bold font-sans text-foreground print:text-black">User Experience Design Intern</h4>
                <div className="text-sm font-bold text-muted-foreground print:text-gray-600">May 2017 – Jul 2017</div>
              </div>
              <div className="text-lg text-primary/80 font-medium mb-4 print:mb-2 font-sans">Amazon • Bengaluru</div>
              <ul className="list-none space-y-2 text-muted-foreground print:text-gray-800 font-sans text-base leading-relaxed">
                <li className="flex gap-2"><span className="text-primary/40 print:text-gray-400">•</span> <div>Researched and designed discoverability and navigation methods to improve the overall customer experience of amazonbusiness.in.</div></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Rows for Skills and Education */}
        <div className="flex flex-col gap-12 skills-edu-section print:gap-6">
          {/* Skills */}
          <section className="print:break-inside-avoid">
            <h3 className="text-2xl font-bold font-sans tracking-tight mb-6 print:mb-3 uppercase text-primary/80 print:text-black text-sm tracking-widest">Skills & Expertise</h3>
            <div className="flex flex-wrap gap-2 md:gap-3 print:gap-1.5">
              {[
                'Foundational Research', 'Usability Testing', 'In-Depth Interviews', 'Shadowing / Ethnography',
                'Diary Studies', 'Survey Design', 'Quantitative Analysis', 'SQL & Data Analytics', 'AI Agents / Synthesis',
                'Service Blueprinting', 'Journey Mapping', 'Design Workshops'
              ].map(skill => (
                <span key={skill} className="px-3 md:px-4 py-1.5 md:py-2 bg-muted/60 print:bg-gray-100 print:text-gray-900 print:py-1 print:px-2 rounded-full text-sm print:text-[10px] font-medium text-foreground tracking-tight font-sans transition-colors hover:bg-muted/80">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="print:break-inside-avoid print:pb-0">
            <h3 className="text-2xl font-bold font-sans tracking-tight mb-6 print:mb-3 uppercase text-primary/80 print:text-black text-sm tracking-widest">Education</h3>
            <div>
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 print:flex-row print:gap-4">
                <h4 className="text-xl font-bold font-sans text-foreground print:text-black">Bachelors of Design</h4>
                <div className="text-sm font-bold text-muted-foreground print:text-gray-600">Jul 2014 – May 2018</div>
              </div>
              <div className="text-lg text-primary font-medium mb-1 print:mb-0 font-sans mt-2 print:mt-1">IIT Guwahati</div>
              <p className="text-muted-foreground print:text-gray-800 font-sans text-base font-medium">CGPA: 8.39</p>
            </div>
          </section>
        </div>

        </main>
      </div>
      
      {/* CSS for printing */}
      <style>{`
        @page {
          size: a4 portrait;
          margin: 0;
        }
        @media print {
          :root, .dark {
            --background: 0 0% 100%;
            --foreground: 0 0% 0%;
            --primary: 0 0% 0%;
            --primary-foreground: 0 0% 100%;
            --muted: 0 0% 100%;
            --muted-foreground: 0 0% 40%;
            --border: 0 0% 85%;
            --card: 0 0% 100%;
            --card-foreground: 0 0% 0%;
          }
          html {
            height: auto;
          }
          body {
            background-color: white !important;
            color: black !important;
            padding: 10mm 15mm !important;
            margin: 0 !important;
            font-size: 10px !important;
            line-height: 1.35 !important;
            box-sizing: border-box !important;
          }
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          /* Force components to fit */
          main { padding: 0 !important; border-bottom: 0 !important; display: block !important; }
          header { margin-bottom: 20px !important; padding-bottom: 20px !important; }
          h1 { font-size: 24px !important; margin-bottom: 0px !important; }
          h2 { font-size: 14px !important; margin-bottom: 4px !important; }
          h3 { font-size: 12px !important; margin-bottom: 6px !important; }
          h4 { font-size: 12.5px !important; }
          .text-lg { font-size: 11px !important; margin-bottom: 1px !important; }
          .text-base { font-size: 9.5px !important; line-height: 1.35 !important; }
          .text-sm { font-size: 9px !important; }
          ul.space-y-2 { margin-top: 2px !important; }
          ul.space-y-2 > li { margin-bottom: 2px !important; }
          
          /* Layout adjustments */
          .gap-12 { gap: 12px !important; }
          .skills-edu-section { gap: 24px !important; }
          .mb-14 { margin-bottom: 16px !important; }
          .work-exp-section { margin-bottom: 32px !important; }
          .pt-28, .pb-16 { padding-top: 0 !important; padding-bottom: 0 !important; }
        }
      `}</style>
    </div>
  );
}

