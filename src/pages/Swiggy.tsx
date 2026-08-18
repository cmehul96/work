import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, CheckCircle2, TrendingUp, Lightbulb, User, Shield, CreditCard, Award, XCircle, Sparkles, Gem, Clock, Utensils, AlertCircle, Zap } from "lucide-react";
import { Button } from "../components/ui/button";
import { ThemeToggle } from "../components/ui/theme-toggle";
import { cn } from "../lib/utils";
import { ExploreProjects } from "../components/explore-projects";
import { PasswordLock } from "../components/password-lock";
import { SiteFooter } from "../components/site-footer";
import { SwiggyFrameworkVisual } from "../components/swiggy/framework-visual";

import { EffortGraphs } from "../components/swiggy/effort-graphs";

// --- Images Mapping ---
const heroBanner = "/images/swiggy/1.0.jpeg";
const processImage = "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=2000";
const participantImage = "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=2000";

// --- Helper UI Components ---
function TargetChip({ target }: { target: 'NTC' | 'ETC' | 'Both' | 'High-Frequency' }) {
    const text = target === 'Both' ? 'NTC & ETC' : target;
    return <span className="inline-flex items-center px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest bg-[#fc8019]/10 text-[#fc8019] border border-[#fc8019]/20">{text}</span>;
}

function InsightSection({ label, title, children }: { label: string, title: string, children: React.ReactNode }) {
    return (
        <div className="mb-20">
            <div className="flex flex-col mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#fc8019]/10 text-[#fc8019] text-[10px] font-black uppercase tracking-widest mb-4 w-fit font-sans">
                    {label}
                </div>
                <h3 className="text-2xl md:text-4xl font-bold tracking-tight leading-[1.2] font-sans text-foreground/90">{title}</h3>
            </div>
            <div className="text-lg md:text-xl font-spectral text-foreground/80 leading-[1.8] space-y-6 flex flex-col">
                {children}
            </div>
        </div>
    );
}

function IdeationCard({ saw, know, pattern, idea }: { saw: string, know: string, pattern: string, idea: React.ReactNode }) {
    return (
        <div className="bg-background border border-border/10 rounded-3xl overflow-hidden shadow-sm flex flex-col font-sans mb-8">
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border/10">
                <div className="p-6 md:p-8 bg-muted/20">
                    <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
                        <Search className="w-3 h-3 text-[#fc8019]" /> What We Found
                    </div>
                    <p className="text-foreground/90 font-medium">{saw}</p>
                </div>
                <div className="p-6 md:p-8 bg-muted/20">
                    <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-[#fc8019]" /> Opportunity
                    </div>
                    <p className="text-foreground/90 font-medium">{know}</p>
                </div>
            </div>
            
            <div className="p-6 md:p-8 border-t border-border/10 bg-[#fc8019]/5">
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                    <div className="flex-1">
                        <div className="text-[10px] font-black uppercase tracking-widest text-[#fc8019] mb-3 flex items-center gap-2">
                            <TrendingUp className="w-3 h-3" /> Core Strategic Pillar
                        </div>
                        <p className="text-foreground font-bold text-lg leading-tight">{pattern}</p>
                    </div>
                    <div className="hidden md:block w-px h-16 bg-[#fc8019]/10"></div>
                    <div className="flex-1">
                        <div className="text-[10px] font-black uppercase tracking-widest text-[#fc8019] mb-3 flex items-center gap-2">
                            <Lightbulb className="w-3 h-3 fill-[#fc8019]/20" /> Idea/Recommendation
                        </div>
                        <div className="text-[#fc8019] font-medium">{idea}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function SwiggyPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-[#fc8019]/20">
            {/* Header / Nav */}
            <header className="fixed top-0 w-full px-6 py-4 z-50 flex items-center justify-between bg-background/80 backdrop-blur-md border-b border-border/10">
                <Link to="/" className="flex items-center gap-2 text-sm font-semibold tracking-wide text-muted-foreground hover:text-foreground transition-colors group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Projects
                </Link>
                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground/60 border border-border/20 px-3 py-1.5 rounded-full bg-muted/10">
                        <User className="w-3 h-3" />
                        Research Case Study
                    </div>
                    <ThemeToggle />
                </div>
            </header>

            <main className="pb-32">
                {/* Hero Section */}
                <section className="pt-28 pb-20 px-6 max-w-4xl mx-auto flex flex-col items-center text-center">
                    <div className="mb-8 flex flex-wrap gap-2 justify-center">
                        <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-[#fc8019]/10 text-[#fc8019]">Swiggy</span>
                        <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-muted text-muted-foreground">2022</span>
                        <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-muted text-muted-foreground hidden sm:inline-block">Interviews</span>
                        <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-muted text-muted-foreground hidden sm:inline-block">Walkthroughs</span>
                        <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-muted text-muted-foreground hidden sm:inline-block">Quant</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold tracking-tighter leading-[1.05] mb-8 font-sans">
                        The Exploration Paradox
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-foreground/70 font-spectral leading-[1.6] max-w-3xl mb-12">
                        A deep dive to deconstruct the decision-making process of high-frequency users and reduce their order placement time.
                    </p>

                    <div className="w-full mt-8 rounded-[2rem] overflow-hidden bg-muted/10 shadow-2xl">
                        <img 
                            src={heroBanner} 
                            alt="Swiggy Project Hero Banner" 
                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" 
                        />
                    </div>
                </section>

                <div className="max-w-3xl mx-auto px-6 md:px-12 flex flex-col gap-12 mt-12">
                    {/* Main Content */}
                    <div className="w-full">
                        <section id="problem" className="scroll-mt-32">
                            <InsightSection label="Context" title="The Business Problem">
                                <p>
                                    Analytics revealed a critical friction point: Swiggy's high-frequency (HF) users took over 2.5 times longer to place an order than average users. 
                                </p>
                                <p>
                                    This paradox, where the most engaged users faced the most difficulty, caused frustration and was a significant opportunity to improve retention and satisfaction.
                                </p>
                            </InsightSection>
                        </section>

                        <div className="w-full h-px bg-border/20 my-16"></div>

                        <section id="methodology" className="scroll-mt-32">
                            <InsightSection label="Approach" title="Deconstructing the Decision-Making Process">
                                <p>
                                    A deep qualitative study was designed using a hybrid methodology. This involved 1:1 in-depth interviews and behavioral walkthroughs with 8 high-frequency users in Bengaluru and Delhi. These qualitative insights were further validated and triangulated using Swiggy's quantitative data.
                                </p>
                                
                                <div className="grid sm:grid-cols-3 gap-6 my-10 font-sans">
                                    <div className="bg-muted/30 p-6 rounded-3xl border border-border/10">
                                        <div className="w-10 h-10 rounded-full bg-[#fc8019]/10 flex items-center justify-center mb-4">
                                            <Search className="w-5 h-5 text-[#fc8019]" />
                                        </div>
                                        <h4 className="font-bold text-foreground mb-2">Probing Questions</h4>
                                        <p className="text-sm text-foreground/70">General ordering habits and contexts.</p>
                                    </div>
                                    <div className="bg-muted/30 p-6 rounded-3xl border border-border/10">
                                        <div className="w-10 h-10 rounded-full bg-[#fc8019]/10 flex items-center justify-center mb-4">
                                            <Clock className="w-5 h-5 text-[#fc8019]" />
                                        </div>
                                        <h4 className="font-bold text-foreground mb-2">Retrospective Walkthroughs</h4>
                                        <p className="text-sm text-foreground/70">On their last five orders to uncover context and triggers.</p>
                                    </div>
                                    <div className="bg-muted/30 p-6 rounded-3xl border border-border/10">
                                        <div className="w-10 h-10 rounded-full bg-[#fc8019]/10 flex items-center justify-center mb-4">
                                            <TrendingUp className="w-5 h-5 text-[#fc8019]" />
                                        </div>
                                        <h4 className="font-bold text-foreground mb-2">Live Think-Aloud Task</h4>
                                        <p className="text-sm text-foreground/70">Observe real-time discovery and decision-making.</p>
                                    </div>
                                </div>
                            </InsightSection>
                        </section>

                        <div className="w-full h-px bg-border/20 my-16"></div>

                        <section id="framework" className="scroll-mt-32">
                            <InsightSection label="Strategy" title="A Strategic Framework for a Smarter Experience">
                                <p className="mb-4">
                                    Our research revealed that HF users were caught in a unique "exploration-exploitation" loop. Choosing a meal was a high-effort, high-risk process.
                                </p>
                                <p className="mb-12">
                                    This framework shifts the product strategy towards enabling smarter, faster decisions across three core opportunities: <strong>Intelligent Discovery</strong>, <strong>Effortless Re-ordering</strong>, and <strong>Need-Based Filtering</strong>.
                                </p>
                                
                                <SwiggyFrameworkVisual />
                            </InsightSection>
                        </section>

                        <div className="w-full h-px bg-border/20 my-16"></div>

                        <PasswordLock>
                        <section id="insights" className="scroll-mt-32">
                            <InsightSection label="Deep Dive" title="Segmented Insights & Recommendations">
                                
                                <p className="mb-12">
                                    Each pillar of the framework directly addresses a core friction point uncovered during the behavioural walkthroughs.
                                </p>

                                {/* Pillar 1: Discovery */}
                                <div className="mb-20">
                                    <h4 className="text-2xl font-sans font-bold flex items-center gap-3 mb-4 text-foreground">
                                        <Search className="text-foreground bg-[#fc8019]/10 p-1.5 rounded-lg w-8 h-8" />
                                        Intelligent Discovery: Combating 'Cuisine Fatigue'
                                    </h4>
                                    <p className="font-spectral text-lg text-foreground/80 leading-relaxed mb-6">
                                        High-frequency users get bored quickly. We found their week-over-week cuisine overlap was low (25% vs. 48% for average users). This forces them into an exhausting discovery process, causing decision paralysis.
                                    </p>

                                    <div className="mb-8 rounded-3xl overflow-hidden border border-border/10 bg-muted/20">
                                        <img src="/images/swiggy/1.1.jpeg" alt="Intelligent Discovery Insights" className="w-full h-auto block" />
                                    </div>

                                    <IdeationCard 
                                        saw="Users suffer from ‘cuisine fatigue’ making discovery exhausting. The current 'Swiggy Suggests' is too static and doesn't account for recent orders."
                                        know="There is an opportunity to power intelligent discovery."
                                        pattern="Algorithmic Rotation"
                                        idea="Enhance 'Swiggy Suggests' with intelligent, algorithmic rotation of cuisine and restaurant recommendations for freshness, explicitly avoiding what they ordered recently."
                                    />
                                </div>

                                {/* Pillar 2: Re-ordering */}
                                <div className="mb-20">
                                    <h4 className="text-2xl font-sans font-bold flex items-center gap-3 mb-4 text-foreground">
                                        <Zap className="text-foreground bg-[#fc8019]/10 p-1.5 rounded-lg w-8 h-8" />
                                        Effortless Re-ordering: The 'High Effort' Escape Hatch
                                    </h4>
                                    <p className="font-spectral text-lg text-foreground/80 leading-relaxed mb-6">
                                        Exploration is high-effort and high-risk. HF users explore more menus but have higher rating standards. When extensive search yields no compelling new option, they 'fall back' to trusted favorites. The app provided no easy 'escape hatch'.
                                    </p>

                                    <EffortGraphs />

                                    <IdeationCard 
                                        saw="High-frequency users explore multiple restaurants but often ultimately order from their trusted favorites after a long search."
                                        know="Users need a quick 'escape hatch' when they experience decision fatigue."
                                        pattern="Enable Effortless Re-ordering"
                                        idea="Make 'my usuals' (favorite dishes/restaurants) a persistent, easily accessible entry point straight from the home screen."
                                    />
                                </div>

                                {/* Pillar 3: Filtering */}
                                <div className="mb-20">
                                    <h4 className="text-2xl font-sans font-bold flex items-center gap-3 mb-4 text-foreground">
                                        <Utensils className="text-foreground bg-[#fc8019]/10 p-1.5 rounded-lg w-8 h-8" />
                                        Need-Based Filtering: Deciding by Appetite
                                    </h4>
                                    <p className="font-spectral text-lg text-foreground/80 leading-relaxed mb-6">
                                        Choice is heavily influenced by immediate physical need or context (like time of day or desired 'heaviness' of a meal). The app's cuisine-focused discovery completely failed to address this fundamental trigger.
                                    </p>
                                    
                                    <div className="mb-8 rounded-3xl overflow-hidden border border-border/10 bg-muted/20">
                                        <img src="/images/swiggy/1.2.jpeg" alt="Need-Based Filtering Insights" className="w-full h-auto block" />
                                    </div>
                                    
                                    <IdeationCard 
                                        saw="Users decide what to eat based on their immediate physical 'appetite' (light vs. heavy) or context (time of day), not just by cuisine type."
                                        know="Cuisine-based filtering is too rigid for need-state ordering."
                                        pattern="Introduce Need-Based Filtering"
                                        idea="Add discovery pathways and filters based on meal type and appetite (e.g., 'Light Meals', 'Hearty Feasts', 'Quick Snacks')."
                                    />
                                </div>

                            </InsightSection>
                        </section>
                        </PasswordLock>

                    </div>
                </div>

                <ExploreProjects />

                <SiteFooter />
            </main>
        </div>
    );
}
