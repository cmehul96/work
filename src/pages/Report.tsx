import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Share2, Lock, Check, Mail, Home, Search, FileText, ShieldCheck, Zap, Clock, Target, Shield, Cpu, User, AlertTriangle, IndianRupee } from "lucide-react";
import { ForesightMascot } from "../components/ui/foresight-mascot";
import { Button } from "../components/ui/button";
import { ThemeToggle } from "../components/ui/theme-toggle";
import { cn } from "../lib/utils";
import { ExploreProjects } from "../components/explore-projects";

import { SiteFooter } from "../components/site-footer";

// --- Images Mapping ---
const heroBanner = "/images/ai_investing/1.0.jpeg";
const methodologyImage = "/images/ai_investing/1.6.jpeg";
const insight1Image = "/images/ai_investing/1.1.jpeg";
const insight2Image = "/images/ai_investing/1.2.jpeg";
const insight3Image = "/images/ai_investing/1.4.jpeg";
const insight4Image = "/images/ai_investing/1.5.jpeg";
const insight5Image = "/images/ai_investing/1.3.jpeg";


// --- Helper UI Components ---

function QuoteBlock({ quote, author, role, blurred = false }: { quote: React.ReactNode, author: React.ReactNode, role: React.ReactNode, blurred?: boolean }) {
    return (
        <blockquote className={cn("my-8 pl-6 md:pl-8 py-2 border-l-[3px] border-primary relative", blurred && "blur-md pointer-events-none opacity-40 select-none")}>
            <div className="absolute -left-3 top-0 text-7xl text-primary/10 font-spectral leading-none">"</div>
            <p className="text-base md:text-lg italic font-normal text-muted-foreground leading-relaxed mb-4 font-spectral tracking-normal">"{quote}"</p>
            <footer className="text-sm font-semibold tracking-wide uppercase text-muted-foreground flex items-center gap-2 font-sans">
                <span className="w-4 h-px bg-muted-foreground/30"></span>
                <span className="text-primary">{author}</span> 
                <span className="text-muted-foreground/40">•</span> 
                <span className="font-medium">{role}</span>
            </footer>
        </blockquote>
    );
}

function ExpandableQuotes({ topQuotes, hiddenQuotes }: { topQuotes: React.ReactNode, hiddenQuotes?: React.ReactNode }) {
    const [expanded, setExpanded] = useState(false);
    
    return (
        <div>
            {topQuotes}
            {hiddenQuotes && (
                <>
                    <div className={cn("overflow-hidden transition-all duration-700 ease-in-out will-change-[max-height,opacity]", expanded ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0 pointer-events-none")}>
                        {hiddenQuotes}
                    </div>
                    <Button variant="ghost" size="sm" className="w-full mt-4 text-muted-foreground hover:text-primary transition-colors bg-primary/5 hover:bg-primary/10 rounded-xl font-sans" onClick={() => setExpanded(!expanded)}>
                        {expanded ? "Show Less" : "See More Quotes"}
                    </Button>
                </>
            )}
        </div>
    );
}

function InsightSection({ label, title, blurred = false, children }: { label: string, title: string, blurred?: boolean, children: React.ReactNode }) {
    return (
        <div className={cn("mb-20", blurred && "blur-[6px] pointer-events-none opacity-30 select-none")}>
            <div className="flex flex-col mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-4 w-fit font-sans">
                    {label}
                </div>
                <h3 className="text-2xl md:text-4xl font-bold tracking-tight leading-[1.2] font-sans text-foreground/90">{title}</h3>
            </div>
            <div className="text-lg md:text-xl font-spectral text-foreground/80 leading-[1.8] space-y-6">
                {children}
            </div>
        </div>
    );
}

function TrustBarrierInfographic() {
    return (
        <div className="w-full my-20 md:my-32 relative font-sans overflow-hidden">
            <div className="absolute top-0 right-0 p-20 md:p-32 bg-primary/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none -z-10"></div>
            <div className="absolute bottom-1/4 left-0 p-20 md:p-32 bg-red-500/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none -z-10"></div>
            
            <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center font-sans perspective-[2000px] px-8 md:px-12 py-10">

                {/* ROW 1: L4 (Top plate) */}
                <div className="grid grid-cols-[1fr_96px_1fr] md:grid-cols-[1fr_224px_1fr] w-full items-center relative z-50">
                    <div className="w-full flex justify-end pr-6 md:pr-20 text-right opacity-60 hover:opacity-100 transition-opacity min-w-0">
                        <div className="relative w-full max-w-[140px] md:max-w-none ml-auto">
                            <span className="text-[7.5px] md:text-xs font-black uppercase tracking-widest text-muted-foreground mb-0.5 md:mb-1 block truncate md:whitespace-normal">L4: The Manager</span>
                            <h4 className="font-bold text-[11px] md:text-xl text-muted-foreground line-through decoration-muted-foreground/50 decoration-2 mb-0">Black-box Autonomy</h4>
                            <p className="text-[10px] md:text-sm text-muted-foreground/80 leading-relaxed ml-auto hidden md:block mt-2">Universally rejected due to uncontrollable API access and privacy fears.</p>
                        </div>
                    </div>
                    
                    <div className="w-24 h-24 md:w-56 md:h-56 perspective-[2000px] relative z-50 flex justify-center items-center shrink-0">
                        <div 
                            className="w-full h-full bg-gradient-to-br from-muted-foreground/20 to-muted-foreground/10 backdrop-blur-xl border border-border/40 rounded-[1rem] md:rounded-[2.5rem] shadow-xl transition-transform duration-700 hover:-translate-y-2 md:hover:-translate-y-4 flex items-center justify-center relative"
                            style={{ transform: "rotateX(60deg) rotateZ(-45deg)" }}
                        >
                            <div className="absolute inset-0 rounded-[1rem] md:rounded-[2.5rem] border-b-[2px] md:border-b-[5px] border-l-[2px] md:border-l-[5px] border-muted-foreground/20 pointer-events-none"></div>
                            <span className="text-xl md:text-4xl font-black text-muted-foreground/40 rotate-[45deg] -skew-x-[15deg]">L4</span>
                        </div>
                    </div>

                    <div className="w-full min-w-0"></div>
                </div>

                {/* ROW 2: L3 */}
                <div className="grid grid-cols-[1fr_96px_1fr] md:grid-cols-[1fr_224px_1fr] w-full items-center relative z-40 -mt-[45px] md:-mt-[110px]">
                    <div className="w-full min-w-0"></div>
                    
                    <div className="w-24 h-24 md:w-56 md:h-56 perspective-[2000px] relative z-40 flex justify-center items-center shrink-0">
                        <div 
                            className="w-full h-full bg-gradient-to-br from-primary/60 to-primary/40 backdrop-blur-xl border border-primary/40 rounded-[1rem] md:rounded-[2.5rem] shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-transform duration-700 hover:-translate-y-2 md:hover:-translate-y-4 flex items-center justify-center relative"
                            style={{ transform: "rotateX(60deg) rotateZ(-45deg)" }}
                        >
                            <div className="absolute inset-0 rounded-[1rem] md:rounded-[2.5rem] border-b-[2px] md:border-b-[5px] border-l-[2px] md:border-l-[5px] border-primary/30 pointer-events-none"></div>
                            <span className="text-xl md:text-4xl font-black text-primary-foreground/60 rotate-[45deg] -skew-x-[15deg]">L3</span>
                        </div>
                    </div>

                    <div className="w-full flex justify-start pl-6 md:pl-20 text-left min-w-0">
                        <div className="relative w-full max-w-[140px] md:max-w-none mr-auto">
                            <span className="text-[7.5px] md:text-xs font-black uppercase tracking-widest text-primary mb-0.5 md:mb-1 block truncate md:whitespace-normal">L3: The Rule-Based Assistant</span>
                            <h4 className="font-bold text-[11px] md:text-xl text-foreground mb-0">Custom Guardrails</h4>
                            <p className="text-[10px] md:text-sm text-muted-foreground leading-relaxed mr-auto hidden md:block mt-2">Deterministic programmatic actions. The safest desired state.</p>
                        </div>
                    </div>
                </div>

                {/* ROW 3: Barrier */}
                <div className="grid grid-cols-[1fr_96px_1fr] md:grid-cols-[1fr_224px_1fr] w-full items-center relative z-30 -mt-[45px] md:-mt-[110px]">
                    <div className="w-full flex justify-end pr-6 md:pr-20 text-right min-w-0">
                        <div className="relative w-full max-w-[140px] md:max-w-none ml-auto flex flex-col items-end">
                            <span className="text-[7.5px] md:text-xs font-black text-red-500 uppercase tracking-widest bg-red-500/10 border border-red-500/20 px-2 py-1 md:px-4 md:py-2 rounded-lg md:rounded-xl backdrop-blur-md flex flex-row md:flex-col items-center md:items-end gap-1 md:gap-0 whitespace-nowrap">
                                <div className="flex items-center gap-1">
                                    <AlertTriangle className="w-2.5 h-2.5 md:w-4 md:h-4"/> 
                                    <span>The Trust</span>
                                </div>
                                <span>Barrier</span>
                            </span>
                        </div>
                    </div>
                    
                    <div className="w-24 h-24 md:w-56 md:h-56 perspective-[2000px] relative z-30 flex justify-center items-center shrink-0">
                        <div 
                            className="w-full h-full bg-red-500/10 backdrop-blur-md border-[2px] md:border-[3px] border-dashed border-red-500/40 rounded-[1rem] md:rounded-[2.5rem] shadow-[0_0_30px_rgba(239,68,68,0.2)] animate-pulse flex items-center justify-center relative"
                            style={{ transform: "rotateX(60deg) rotateZ(-45deg)" }}
                        >
                        </div>
                    </div>

                    <div className="w-full min-w-0"></div>
                </div>

                {/* ROW 4: L2 */}
                <div className="grid grid-cols-[1fr_96px_1fr] md:grid-cols-[1fr_224px_1fr] w-full items-center relative z-20 -mt-[45px] md:-mt-[110px]">
                    <div className="w-full min-w-0"></div>
                    
                    <div className="w-24 h-24 md:w-56 md:h-56 perspective-[2000px] relative z-20 flex justify-center items-center shrink-0">
                        <div 
                            className="w-full h-full bg-gradient-to-br from-primary/30 to-primary/10 backdrop-blur-xl border border-primary/20 rounded-[1rem] md:rounded-[2.5rem] shadow-[0_15px_30px_rgba(0,0,0,0.1)] transition-transform duration-700 hover:-translate-y-2 md:hover:-translate-y-4 flex items-center justify-center relative"
                            style={{ transform: "rotateX(60deg) rotateZ(-45deg)" }}
                        >
                            <div className="absolute inset-0 rounded-[1rem] md:rounded-[2.5rem] border-b-[2px] md:border-b-[5px] border-l-[2px] md:border-l-[5px] border-primary/20 pointer-events-none"></div>
                            <span className="text-xl md:text-4xl font-black text-primary/40 rotate-[45deg] -skew-x-[15deg]">L2</span>
                        </div>
                    </div>

                    <div className="w-full flex justify-start pl-6 md:pl-20 text-left min-w-0">
                        <div className="relative w-full max-w-[140px] md:max-w-none mr-auto">
                            <span className="text-[7.5px] md:text-xs font-black uppercase tracking-widest text-primary/80 mb-0.5 md:mb-1 block truncate md:whitespace-normal">L2: The Strategist</span>
                            <h4 className="font-bold text-[11px] md:text-xl text-foreground mb-0">Strategy Verification</h4>
                            <p className="text-[10px] md:text-sm text-muted-foreground leading-relaxed mr-auto hidden md:block mt-2">Market evaluations trigger extreme "Accuracy Fears".</p>
                        </div>
                    </div>
                </div>

                {/* ROW 5: L1 (Bottom plate) */}
                <div className="grid grid-cols-[1fr_96px_1fr] md:grid-cols-[1fr_224px_1fr] w-full items-center relative z-10 -mt-[45px] md:-mt-[110px]">
                    <div className="w-full flex justify-end pr-6 md:pr-20 text-right min-w-0">
                        <div className="relative w-full max-w-[140px] md:max-w-none ml-auto">
                            <span className="text-[7.5px] md:text-xs font-black uppercase tracking-widest text-primary/60 mb-0.5 md:mb-1 block truncate md:whitespace-normal">L1: The Copilot</span>
                            <h4 className="font-bold text-[11px] md:text-xl text-foreground mb-0">Research & Synthesis</h4>
                            <p className="text-[10px] md:text-sm text-muted-foreground leading-relaxed ml-auto hidden md:block mt-2">Aggressive usage for knowledge retrieval. Zero decision autonomy.</p>
                        </div>
                    </div>
                    
                    <div className="w-24 h-24 md:w-56 md:h-56 perspective-[2000px] relative z-10 flex justify-center items-center shrink-0">
                        <div 
                            className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-xl border border-primary/10 rounded-[1rem] md:rounded-[2.5rem] shadow-[0_15px_30px_rgba(0,0,0,0.05)] transition-transform duration-700 hover:-translate-y-2 md:hover:-translate-y-4 flex items-center justify-center relative"
                            style={{ transform: "rotateX(60deg) rotateZ(-45deg)" }}
                        >
                            <div className="absolute inset-0 rounded-[1rem] md:rounded-[2.5rem] border-b-[2px] md:border-b-[5px] border-l-[2px] md:border-l-[5px] border-primary/10 pointer-events-none"></div>
                            <span className="text-xl md:text-4xl font-black text-primary/30 rotate-[45deg] -skew-x-[15deg]">L1</span>
                        </div>
                    </div>

                    <div className="w-full min-w-0"></div>
                </div>

            </div>
        </div>
    );
}

export default function ReportPage() {
    const participants = [
        { name: "Aarav", age: 26, role: "Product Manager", location: "Singapore (from Delhi)", status: "Completed" },
        { name: "Bharat", age: 31, role: "Software Engineer", location: "Bangalore", status: "Completed" },
        { name: "Chirag", age: 30, role: "Product Manager", location: "Davangere / Bangalore", status: "Completed" },
        { name: "Eshan", age: 26, role: "Software Engineer (HFT)", location: "Singapore", status: "Completed" },
        { name: "Rohan", age: 27, role: "Product Manager", location: "Gurgaon", status: "Completed" },
        { name: "Gaurav", age: 30, role: "Program Manager", location: "Bangalore", status: "Completed" },
        { name: "Hari", age: 29, role: "Software Developer", location: "Bangalore", status: "Completed" },
        { name: "Ishaan", age: 29, role: "Management Consultant", location: "Mumbai", status: "Completed / Substantial" },
        { name: "Jaya", age: 30, role: "Businessman", location: "Rajasthan", status: "Completed / Substantial" },
        { name: "Karan", age: 26, role: "Managing Consultant", location: "Mumbai", status: "Completed / Substantial" },
        { name: "Manish", age: 26, role: "Consultant", location: "Bangalore", status: "Completed / Substantial" },
    ];

    return (
        <main className="min-h-screen bg-background text-foreground font-spectral selection:bg-primary/20">
            {/* Header */}
            <header className="h-16 w-full flex items-center justify-between px-6 md:px-12 border-b border-border/5 bg-background/95 backdrop-blur-md sticky top-0 z-50 font-sans">
                <Link to="/" className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary/5 group text-foreground">
                    <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
                </Link>
                
                <div className="flex items-center gap-2 opacity-0 pointer-events-none font-sans">
                    <div className="w-6 h-6 flex items-center justify-center text-primary">
                        <ForesightMascot isVisible={true} />
                    </div>
                    <span className="font-black tracking-[0.2em] uppercase text-xs">Reports</span>
                </div>
                
                <div className="flex items-center gap-4 font-sans">
                    <ThemeToggle />
                </div>
            </header>

            {/* Report Hero */}
            <div className="w-full bg-muted/10 border-b border-border/10 font-sans pt-12 pb-20 px-6">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full font-sans">
                            UX Research
                        </span>
                        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">April 2026</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold tracking-tighter leading-[1.05] mb-8 text-balance font-sans">
                        AI Adoption in Individual Investors
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-muted-foreground/80 font-normal max-w-3xl leading-relaxed font-sans mb-4">
                        Analyzing the trust barrier preventing AI from transforming into an autonomous wealth advisor.
                    </p>

                    <div className="w-full mt-8 rounded-[2rem] overflow-hidden bg-muted/10 shadow-2xl shadow-primary/5">
                        <img 
                            src={heroBanner} 
                            alt="UX Research Hero Banner" 
                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" 
                        />
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <article className="max-w-3xl mx-auto px-6 py-12 font-sans">
                
                {/* TOC */}
                <div className="mb-16 p-8 rounded-3xl bg-primary/[0.02] border border-primary/10 font-sans">
                    <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-6">Table of Contents</div>
                    <ul className="space-y-4 text-base font-bold text-foreground/80">
                        <li><a href="#executive-summary" className="flex items-center gap-4 hover:text-primary transition-colors hover:translate-x-1 transform duration-200">Executive Summary</a></li>
                        <li><a href="#the-framework" className="flex items-center gap-4 hover:text-primary transition-colors hover:translate-x-1 transform duration-200">The Autonomy Framework</a></li>
                        <li><a href="#level-1" className="flex items-center gap-4 hover:text-primary transition-colors hover:translate-x-1 transform duration-200">Level 1: The Copilot</a></li>
                        <li><a href="#level-2" className="flex items-center gap-4 hover:text-primary transition-colors hover:translate-x-1 transform duration-200">Level 2: The Strategist</a></li>
                        <li><a href="#level-3" className="flex items-center gap-4 hover:text-primary transition-colors hover:translate-x-1 transform duration-200">Level 3: The Rule-Based Assistant</a></li>
                        <li><a href="#level-4" className="flex items-center gap-4 hover:text-primary transition-colors hover:translate-x-1 transform duration-200">Level 4: The Autonomous Manager</a></li>
                        <li><a href="#strategy" className="flex items-center gap-4 hover:text-primary transition-colors hover:translate-x-1 transform duration-200">Strategic Recommendations</a></li>
                        <li><a href="#methodology" className="flex items-center gap-4 hover:text-primary transition-colors hover:translate-x-1 transform duration-200">Methodology & Research Context</a></li>
                    </ul>
                </div>

                <section id="executive-summary" className="mb-20">
                    <h2 className="text-3xl font-bold tracking-tight mb-8 font-sans">Executive Summary</h2>
                    <p className="text-lg md:text-xl text-foreground/80 leading-[1.8] mb-12 font-spectral">
                        This research uncovers a fundamental architectural shift needed in fintech. While individual investors are enthusiastic early adopters of AI for knowledge gathering, they harbor a profound <strong className="font-bold italic text-foreground">"trust barrier"</strong> preventing AI from graduating to an autonomous wealth advisor. 
                        We propose shifting product design away from black-box autonomy toward transparent tools that give users clear control.
                    </p>
                </section>

                <div className="w-full h-px bg-border/20 my-16"></div>

                <section id="the-framework" className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 font-sans text-balance">The 4 Levels of AI Financial Autonomy</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed font-spectral mb-8">
                        Our research maps the individual investors user behavior against four distinct stages of AI autonomy. The critical product challenge lies in bridging the "Trust Barrier" between Stage 2 and Stage 3.
                    </p>
                    
                    <TrustBarrierInfographic />
                </section>

                <section id="level-1" className="mb-20 relative">
                    <InsightSection label="Level 1: The Copilot" title="AI is treated as a Research Accelerator, not a Decision-Maker.">
                        <div className="w-full my-8 rounded-[2rem] overflow-hidden bg-muted/10 shadow-2xl shadow-primary/5">
                            <img 
                                src={insight1Image} 
                                alt="AI as a Research Accelerator Visualization" 
                                className="w-full h-auto object-cover" 
                            />
                        </div>
                        <p className="text-lg md:text-xl text-foreground/80 leading-[1.8] mb-12 font-spectral">
                            Users heavily leverage LLMs to parse complex financial documents, summarize news, and decode investment vocabulary. However, they strictly draw the line at letting AI make buy/sell decisions due to the "human element" missing in fundamental analysis.
                        </p>
                        
                        <ExpandableQuotes 
                            topQuotes={
                                <>
                                    <QuoteBlock quote="I don't use AI for investing, but I do use AI for research, and it's mostly claude." author="Bharat" role="Software Eng, 31" />
                                    <QuoteBlock quote="I don't use AI for decision making. I use AI only to learn about investment or investing concepts... if I don't know a term, for example if I don't know what PE means." author="Chirag" role="Product Manager, 30" />
                                </>
                            }
                            hiddenQuotes={
                                <>
                                    <QuoteBlock quote="AI helps majorly in shortlisting the stocks not in buying or selling... I put the same prompt in the different LLMs... and make a comparative analysis." author="Rohan" role="Product Manager, 27" />
                                    <QuoteBlock quote="I basically use perplexity finance and basically help me understand the movement of the stock... It points me towards the right direction." author="Ishaan" role="Consultant, 29" />
                                    <QuoteBlock quote="I use NotebookLM to just read up on the annual report... I am still skeptical to take decisions based on AI's recommendations just directly." author="Manish" role="Consultant, 26" />
                                    <QuoteBlock quote="I created an Excel sheet of the current portfolio investment that I have in equity and I gave it to AI... I defined set parameters like P-E ratio or the industry... It went row by row, searching about all the stocks that I had and gave me a clear insight." author="Jaya" role="Businessman, 30" />
                                </>
                            }
                        />
                    </InsightSection>

                    <div className="w-16 h-px bg-border/20 mx-auto my-16"></div>

                    <div id="level-2" className="scroll-mt-32">
                        <InsightSection label="Level 2: The Strategist" title="Accuracy Fears hit the wall of high financial stakes.">
                            <div className="w-full my-12 rounded-[2rem] overflow-hidden bg-muted/10 shadow-2xl shadow-primary/5">
                                <img 
                                    src={insight2Image} 
                                    alt="Accuracy and Verification Trends" 
                                    className="w-full h-auto object-cover" 
                                />
                            </div>
                            <div className="mb-12">
                                <p className="text-lg md:text-xl text-foreground/80 leading-[1.8] font-spectral mb-8">
                                    Fearing AI hallucinations and high financial stakes, users don't trust AI for executing trades. Instead of verifying AI outputs, they use it merely as a preliminary aid or bypass it entirely. For actual decisions, they rely on primary research, scrutinizing raw data and objective metrics on trusted platforms, demanding verifiable sources and proven success ratios.
                                </p>
                            </div>

                        <ExpandableQuotes 
                            topQuotes={
                                <>
                                    <QuoteBlock quote="AI can hallucinate. So agents can hallucinate... usually is good to do is have contrasting agents debate out certain things and keep them grounded... I usually don't trust LLMs recommending stocks as such." author="Aarav" role="Product Manager, 26" />
                                    <QuoteBlock quote="I don't think AIs are smart enough to process complex data points yet. They can be blindsided... I need fundamental research backed by data, and not just made up hallucinated data - actual real data." author="Hari" role="Software Dev, 29" />
                                </>
                            }
                            hiddenQuotes={
                                <>
                                    <QuoteBlock quote="I was pretty skeptical about what the result was at the starting because it hallucinated a lot... I scolded it again and again that you have to pick the data from this website." author="Jaya" role="Businessman, 30" />
                                    <QuoteBlock quote="Right now the way AI works is that it aggregates all of the information that's there on the internet... but it doesn't mean that the suggestion is correct, so there's no strong reason for me to trust AI-suggested stocks or funds." author="Chirag" role="Product Manager, 30" />
                                    <QuoteBlock quote="I need clear objective criteria as to why I should invest in this. It should be objective metrics. Second, I need a success ratio because it's an AI which is providing me that strategy." author="Manish" role="Consultant, 26" />
                                </>
                            }
                        />
                        
                        <div className="pt-12 mt-12 border-t border-border/10 font-sans">
                            <div className="bg-muted/30 p-8 md:p-10 rounded-[2rem]">
                                <div className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest mb-3 text-[10px] font-sans">
                                    <Search className="w-3.5 h-3.5" /> Verification Net
                                </div>
                                <h4 className="font-bold text-2xl md:text-3xl mb-6 tracking-tight font-sans text-foreground">Human Social Proof</h4>
                                
                                <div className="w-full rounded-2xl overflow-hidden mb-8 shadow-xl shadow-black/5">
                                    <img src={insight5Image} alt="Social Proof" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                                </div>

                                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-spectral pb-6">
                                    When Level 2 outputs falter, users fall back on their networks and influencers to validate their final decisions. AI is viewed as a solitary tool, whereas investing remains a deeply social validation exercise.
                                </p>
                                
                                <ExpandableQuotes 
                                    topQuotes={
                                        <>
                                            <QuoteBlock quote="I think I mostly trusted my friends." author="Eshan" role="Software Eng, 26" />
                                            <QuoteBlock quote="So, pretty much follow YouTube influencers such as Ankur Warikoo or Akshat Srivastava... try to research a bit about it and then only take a decision." author="Gaurav" role="Program Manager, 30" />
                                        </>
                                    }
                                    hiddenQuotes={
                                        <>
                                            <QuoteBlock quote="It's usually led by the opinions of the people... if I know a person who is well versed and has a good track record with respect to the recommendations of the stock I usually buy it." author="Karan" role="Managing Consultant, 26" />
                                            <QuoteBlock quote="I try to have a contra-approach to the popular approach. So that way, I know where the common people are... And if I am aligned, I'll agree. If I am not, I'll take a contrarian stance." author="Hari" role="Software Dev, 29" />
                                        </>
                                    }
                                />
                            </div>
                        </div>
                    </InsightSection>
                </div>

                    {/* Unlocked Content */}
                    <div id="level-3" className="scroll-mt-32">
                        <InsightSection label="Level 3: The Rule-Based Assistant" title="The ultimate trust signal is 'Custom Agentic Control'.">
                            <div className="w-full my-8 rounded-[2rem] overflow-hidden bg-muted/10 shadow-2xl shadow-primary/5">
                                <img 
                                    src={insight3Image} 
                                    alt="Trust Mapping: Agentic Control vs Generic Prompting" 
                                    className="w-full h-auto object-cover" 
                                />
                            </div>
                            <p className="text-lg md:text-xl text-foreground/80 leading-[1.8] mb-12 font-spectral">
                                The highest level of satisfaction and trust in AI came from a user who built and controlled their own parameters, effectively stripping the AI of autonomous strategy and utilizing it purely as a deterministic execution and scraping engine based on their own rules. This successfully bridges the Trust Barrier.
                            </p>

                            <QuoteBlock 
                                quote="I've actually built my own trading agent... My portfolios are sitting on streamlit. They give me a regular view... my agent directly allocates... the confidence comes from the place that I am guiding the AI rather than the AI is guiding me to make the decisions. And that's the beauty of it." 
                                author="Aarav" role="Product Manager, 26" 
                            />
                        </InsightSection>
                    </div>

                    <div className="w-16 h-px bg-border/20 mx-auto my-16"></div>

                    <div id="level-4" className="scroll-mt-32">
                        <InsightSection label="Level 4: The Autonomous Manager" title="The Privacy Wall prevents full 'Hands-Off' automation.">
                            <div className="w-full my-8 rounded-[2rem] overflow-hidden bg-muted/10 shadow-2xl shadow-primary/5">
                                <img 
                                    src={insight4Image} 
                                    alt="Privacy vs Utility Trends" 
                                    className="w-full h-auto object-cover" 
                                />
                            </div>
                            <p className="text-lg md:text-xl text-foreground/80 leading-[1.8] mb-8 font-spectral">
                                Even if Level 3 trust is established, moving to Level 4 (full, unmonitored autonomy) is unanimously rejected. The idea of linking broker accounts or sharing transaction history with corporate LLMs triggers severe pushback regarding unauthorized data training and "blowing up the account".
                            </p>

                            <ExpandableQuotes 
                                topQuotes={
                                    <>
                                        <QuoteBlock quote="I would like encryption key, I would not want claude or any other LLM to have my data or my investment details. Yeah, I mean they should keep my identity my portfolio secret." author="Rohan" role="Product Manager, 27" />
                                        <QuoteBlock quote="I just need it to not make random trades or blow up my account, but apart from that if there are proper safeguard, like guardrails present, I think it should be fine." author="Manish" role="Consultant, 26" />
                                    </>
                                }
                                hiddenQuotes={
                                    <>
                                        <QuoteBlock quote="My main initial thing would be, obviously, not using my data. It has to be very personal and private to me... during the case of breach, it should not my data should not be easily readable." author="Gaurav" role="Program Manager, 30" />
                                        <QuoteBlock quote="Personal identifier information... should be obfuscated. That's all." author="Hari" role="Software Dev, 29" />
                                        <QuoteBlock quote="I am not comfortable with anyone seeing my portfolio at this moment unless it's a hired mutual fund manager or someone or a CA." author="Chirag" role="Product Manager, 30" />
                                    </>
                                }
                            />
                        </InsightSection>
                    </div>
                </section>

                        <div className="w-full h-px bg-border/20 my-20"></div>

                        <section id="strategy" className="mb-20 font-sans">
                            <h2 className="text-3xl font-bold tracking-tight mb-12 font-sans">Strategic Recommendations for the Journey</h2>
                            
                            <p className="text-lg md:text-xl text-foreground/80 leading-[1.8] mb-12 font-spectral">
                                Based on the 4 Levels of Autonomy, fintech products must shift their focus to building sturdy bridges between Level 2 and Level 3 rather than jumping straight to Level 4. Focus on parametric control:
                            </p>

                            <div className="grid gap-8">
                                <div className="p-8 rounded-[2rem] bg-muted/40 relative overflow-hidden group transition-colors flex flex-col md:flex-row gap-8 items-start">
                                    <div className="flex-shrink-0 p-4 rounded-xl bg-primary/10 text-primary">
                                        <Search className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold tracking-tight mb-3 font-sans">
                                            Knowledge & Research Assistance
                                        </h3>
                                        <ul className="text-base text-muted-foreground/90 leading-relaxed font-spectral list-disc pl-5 space-y-1">
                                            <li>Supporting multi-model comparison to identify and resolve potential hallucinations.</li>
                                            <li>Integrating direct links to primary data sources for real-time verification.</li>
                                            <li>Facilitating conceptual deep-dives into complex financial jargon.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="p-8 rounded-[2rem] bg-muted/40 relative overflow-hidden group transition-colors flex flex-col md:flex-row gap-8 items-start">
                                    <div className="flex-shrink-0 p-4 rounded-xl bg-primary/10 text-primary">
                                        <FileText className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold tracking-tight mb-3 font-sans">
                                            Strategy Grounding
                                        </h3>
                                        <ul className="text-base text-muted-foreground/90 leading-relaxed font-spectral list-disc pl-5 space-y-1">
                                            <li>Building transparent citation layers to anchor qualitative insights in objective facts.</li>
                                            <li>Providing historical back-testing and success ratios for suggested strategies.</li>
                                            <li>Prioritizing raw data visibility to allow for independent human verification.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="p-8 rounded-[2rem] bg-muted/40 relative overflow-hidden group transition-colors flex flex-col md:flex-row gap-8 items-start">
                                    <div className="flex-shrink-0 p-4 rounded-xl bg-primary/10 text-primary">
                                        <Zap className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold tracking-tight mb-3 font-sans">
                                            Controlled Autonomy
                                        </h3>
                                        <ul className="text-base text-muted-foreground/90 leading-relaxed font-spectral list-disc pl-5 space-y-1">
                                            <li>Implementing user-defined parametric guardrails to restrict AI activity.</li>
                                            <li>Requiring manual multi-factor approval for any execution-layer suggestions.</li>
                                            <li>Shifting product archetypes toward "Expert Tools" rather than "Autonomous Agents."</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="p-8 rounded-[2rem] bg-muted/40 relative overflow-hidden group transition-colors flex flex-col md:flex-row gap-8 items-start">
                                    <div className="flex-shrink-0 p-4 rounded-xl bg-red-500/10 text-red-500">
                                        <ShieldCheck className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold tracking-tight mb-3 font-sans">
                                            Privacy-First Architecture
                                        </h3>
                                        <ul className="text-base text-muted-foreground/90 leading-relaxed font-spectral list-disc pl-5 space-y-1">
                                            <li>Evaluating client-side processing to keep sensitive portfolio data secured locally.</li>
                                            <li>Implementing data obfuscation triggers for all public-facing LLM interactions.</li>
                                            <li>Providing granular control over how and when PII and transactional history are shared.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="w-full h-px bg-border/20 my-20"></div>

                        <section id="methodology" className="mb-20">
                            <h2 className="text-3xl font-bold tracking-tight mb-8 font-sans">Methodology & Research Context</h2>
                            
                            <div className="w-full mb-12 rounded-[2rem] overflow-hidden bg-muted/10 shadow-2xl shadow-primary/5">
                                <img 
                                    src={methodologyImage} 
                                    alt="Research Methodology Overview" 
                                    className="w-full h-auto object-cover" 
                                />
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6 mb-16 font-sans">
                                <div className="p-6 rounded-3xl bg-muted/40 font-spectral">
                                    <div className="text-[10px] font-black font-sans uppercase tracking-widest text-muted-foreground/60 mb-2">Method</div>
                                    <div className="text-lg font-medium">In-depth qualitative interviews (IDIs)</div>
                                </div>
                                <div className="p-6 rounded-3xl bg-muted/40 font-spectral">
                                    <div className="text-[10px] font-black font-sans uppercase tracking-widest text-muted-foreground/60 mb-2">Sample Size</div>
                                    <div className="text-lg font-medium">19 scheduled <span className="text-muted-foreground/60 font-light font-spectral">(11 substantive)</span></div>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold tracking-tight mb-8 font-sans">Participant Profile Summary</h3>

                            <div className="grid sm:grid-cols-2 gap-6 mb-16 font-sans">
                                <div className="p-6 rounded-3xl bg-muted/40 transition-all hover:bg-muted/60 group">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 rounded-xl bg-primary/10 text-primary">
                                            <Clock className="w-4 h-4" />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/40 group-hover:text-primary transition-colors">Experience</span>
                                    </div>
                                    <p className="text-base text-foreground leading-relaxed font-spectral">Ranges from beginners (1-2 years) to experienced investors (7-10 years).</p>
                                </div>
                                <div className="p-6 rounded-3xl bg-muted/40 transition-all hover:bg-muted/60 group">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 rounded-xl bg-primary/10 text-primary">
                                            <Target className="w-4 h-4" />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/40 group-hover:text-primary transition-colors">Primary Goals</span>
                                    </div>
                                    <p className="text-base text-foreground leading-relaxed font-spectral">Long-term wealth creation, beating inflation, and retirement security.</p>
                                </div>
                                <div className="p-6 rounded-3xl bg-muted/40 transition-all hover:bg-muted/60 group">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 rounded-xl bg-primary/10 text-primary">
                                            <Zap className="w-4 h-4" />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/40 group-hover:text-primary transition-colors">Current Workflow</span>
                                    </div>
                                    <p className="text-base text-foreground leading-relaxed font-spectral">Heavy reliance on mobile platforms like Zerodha and Groww for tracking.</p>
                                </div>
                                <div className="p-6 rounded-3xl bg-muted/40 transition-all hover:bg-muted/60 group">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 rounded-xl bg-primary/10 text-primary">
                                            <IndianRupee className="w-4 h-4" />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/40 group-hover:text-primary transition-colors">Net Worth</span>
                                    </div>
                                    <p className="text-base text-foreground leading-relaxed font-spectral">Concentrated between ₹50 Lakhs - ₹2 Crores net worth per participant.</p>
                                </div>
                                <div className="p-6 rounded-3xl bg-primary/10 transition-all hover:bg-primary/20 group sm:col-span-2">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 rounded-xl bg-primary/20 text-primary font-bold">
                                            <Cpu className="w-4 h-4" />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-primary/60 group-hover:text-primary transition-colors">AI Toolsets</span>
                                    </div>
                                    <p className="text-base text-foreground/90 font-medium leading-relaxed font-spectral">Active usage of ChatGPT, Claude, Gemini, and Perplexity Finance for knowledge retrieval.</p>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold tracking-tight mb-8 font-sans">Research Demographics Table</h3>
                    
                            <div className="w-full overflow-x-auto mb-20 font-sans">
                                <table className="w-full text-left border-collapse min-w-[600px]">
                                    <thead>
                                        <tr className="border-b-2 border-primary/20">
                                            <th className="py-4 px-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">Pseudonym</th>
                                            <th className="py-4 px-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">Age</th>
                                            <th className="py-4 px-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">Profession</th>
                                            <th className="py-4 px-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">Location</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm font-medium font-spectral">
                                        {participants.map((p, i) => (
                                            <tr key={i} className="border-b border-border/10 hover:bg-muted/10 transition-all group">
                                                <td className="py-4 px-4 text-foreground/90 font-bold group-hover:text-primary transition-colors font-spectral">{p.name}</td>
                                                <td className="py-4 px-4 text-muted-foreground font-spectral">{p.age}</td>
                                                <td className="py-4 px-4 text-foreground/80 font-spectral">{p.role}</td>
                                                <td className="py-4 px-4 text-muted-foreground font-spectral">{p.location}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-xl font-bold tracking-tight mb-8 font-sans">Research Efficiency Metrics</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 font-sans">
                                <div className="p-6 md:p-8 rounded-3xl bg-primary/[0.03] flex items-center gap-6">
                                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-primary/70 mb-1">Total Cost</div>
                                        <div className="text-3xl md:text-3xl font-extrabold text-primary mb-2">$200</div>
                                        <p className="text-sm text-muted-foreground leading-relaxed font-spectral">Includes speech-to-speech APIs, LLM request costs, etc.</p>
                                    </div>
                                </div>
                                <div className="p-6 md:p-8 rounded-3xl bg-primary/[0.03] flex items-center gap-6">
                                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                        <User className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-primary/70 mb-1">Human Researcher</div>
                                        <div className="text-3xl md:text-3xl font-extrabold text-primary mb-2">30 min</div>
                                        <p className="text-sm text-muted-foreground leading-relaxed font-spectral">Time strictly used for initial project setup and final review.</p>
                                    </div>
                                </div>
                                <div className="p-6 md:p-8 rounded-3xl bg-primary/[0.03] flex items-center gap-6">
                                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-primary/70 mb-1">Avg. Session</div>
                                        <div className="text-3xl md:text-3xl font-extrabold text-primary mb-2">20 min</div>
                                        <p className="text-sm text-muted-foreground leading-relaxed font-spectral">Average duration of the interviews taken by the agent.</p>
                                    </div>
                                </div>
                                <div className="p-6 md:p-8 rounded-3xl bg-primary/[0.03] flex items-center gap-6">
                                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                        <Cpu className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-primary/70 mb-1">Agent Moderation</div>
                                        <div className="text-3xl md:text-3xl font-extrabold text-primary mb-2">3.6 hrs</div>
                                        <p className="text-sm text-muted-foreground leading-relaxed font-spectral font-medium">Total duration of moderation sessions conducted by the agent.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="h-16"></div>
            </article>

            {/* Explore Projects */}
            <ExploreProjects />

            <SiteFooter brand="Foresite" text={<>Research planning, questionnaire, moderation, and report synthesis by <span className="font-bold text-primary">Foresite</span>.</>} />
        </main>
    );
}
