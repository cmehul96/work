import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Share2, Check, Home, Lightbulb, Code, Users, Rocket, Target, PlayCircle, BarChart, FileText, ArrowRight } from "lucide-react";
import { AgentWorkflowVisualization } from "../components/agent-visualization";
import { ForesightMascot } from "../components/ui/foresight-mascot";
import { Button } from "../components/ui/button";
import { ThemeToggle } from "../components/ui/theme-toggle";
import { cn } from "../lib/utils";
import { ExploreProjects } from "../components/explore-projects";

import { SiteFooter } from "../components/site-footer";

// --- Images Mapping ---
// No longer needed

// --- Helper UI Components ---
function InsightSection({ label, title, children }: { label: string, title: string, children: React.ReactNode }) {
    return (
        <div className="mb-20">
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

export default function ForesitePage() {
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
                    <span className="font-black tracking-[0.2em] uppercase text-xs">Foresite</span>
                </div>
                
                <div className="flex items-center gap-4 font-sans">
                    <ThemeToggle />
                </div>
            </header>

            {/* Hero Section */}
            <div className="w-full bg-muted/10 border-b border-border/10 font-sans pt-12 pb-20 px-6">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full font-sans">
                            Case Study
                        </span>
                        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">Aug 2025 - Dec 2025</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold tracking-tighter leading-[1.05] mb-8 text-balance font-sans">
                        <a href="https://theforesite.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline decoration-primary/30 underline-offset-8">Foresite</a>: AI Research Team
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-muted-foreground/80 font-normal max-w-3xl leading-relaxed font-sans mb-4">
                        Building an always-on AI research platform that autonomously conducts interviews, analyzes insights, and delivers actionable recommendations.
                    </p>

                    <div className="w-full mt-8 max-w-5xl mx-auto h-[500px] md:h-[600px] flex items-center justify-center rounded-[2rem] overflow-hidden bg-muted/10 shadow-2xl shadow-primary/5 border border-border/5 relative">
                        <div className="absolute inset-0 flex items-center justify-center scale-90 md:scale-100">
                            <AgentWorkflowVisualization />
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <article className="max-w-3xl mx-auto px-6 py-12 font-sans">
                
                {/* TOC */}
                <div className="mb-16 p-8 rounded-3xl bg-primary/[0.02] border border-primary/10 font-sans">
                    <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-6">Table of Contents</div>
                    <ul className="space-y-4 text-base font-bold text-foreground/80">
                        <li><a href="#initiation" className="flex items-center gap-4 hover:text-primary transition-colors hover:translate-x-1 transform duration-200">The Initiation</a></li>
                        <li><a href="#building-the-product" className="flex items-center gap-4 hover:text-primary transition-colors hover:translate-x-1 transform duration-200">Building the Product</a></li>
                        <li><a href="#pilots-and-deployment" className="flex items-center gap-4 hover:text-primary transition-colors hover:translate-x-1 transform duration-200">Pilots and Deployment</a></li>
                        <li><a href="#demo-video" className="flex items-center gap-4 hover:text-primary transition-colors hover:translate-x-1 transform duration-200">Demo Video</a></li>
                        <li><a href="#outcome-and-learnings" className="flex items-center gap-4 hover:text-primary transition-colors hover:translate-x-1 transform duration-200">Outcome & Learnings</a></li>
                        <li><a href="#real-world-application" className="flex items-center gap-4 hover:text-primary transition-colors hover:translate-x-1 transform duration-200">Real-World Application: Groww</a></li>
                    </ul>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-16 font-sans">
                    <div className="p-6 rounded-3xl bg-muted/40 font-spectral">
                        <div className="text-[10px] font-black font-sans uppercase tracking-widest text-muted-foreground/60 mb-2">My Role</div>
                        <div className="text-lg font-medium">Founder, Lead Design & Product, Frontend Engineer</div>
                    </div>
                    <div className="p-6 rounded-3xl bg-muted/40 font-spectral">
                        <div className="text-[10px] font-black font-sans uppercase tracking-widest text-muted-foreground/60 mb-2">Team Size</div>
                        <div className="text-lg font-medium">3 (Co-founder, Intern, Myself)</div>
                    </div>
                </div>

                <div className="w-full h-px bg-border/20 my-16"></div>

                <section id="initiation" className="scroll-mt-32">
                    <InsightSection label="Genesis" title="The Initiation">
                        <p>
                            With the advent of voice models rapidly improving, an undeniable industry trend emerged: researchers were increasingly relying on LLMs for formulating questions and conducting post-research analysis. 
                        </p>
                        <p>
                            However, the "missing link" remained moderation. I realized that <strong className="font-bold italic text-foreground">even moderation could be executed autonomously</strong> utilizing advanced voice models and agents. This realization served as the foundational spark for <a href="https://theforesite.com" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">Foresite</a>.
                        </p>
                    </InsightSection>
                </section>

                <section id="building-the-product" className="scroll-mt-32">
                    <InsightSection label="Execution" title="Building the Product">
                        <div className="grid gap-6 my-10 font-sans">
                            <div className="p-8 rounded-[2rem] bg-muted/40 relative overflow-hidden group transition-colors flex flex-col md:flex-row gap-6 items-start">
                                <div className="flex-shrink-0 p-4 rounded-xl bg-primary/10 text-primary">
                                    <Code className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold tracking-tight mb-2 font-sans">Phase 1: Vibe Coding</h3>
                                    <p className="text-base text-muted-foreground/90 leading-relaxed font-spectral">
                                        I developed the initial prototype entirely on my own using vibe coding. This first iteration was a text-based interviewing platform that validated the core premise of agentic moderation.
                                    </p>
                                </div>
                            </div>

                            <div className="p-8 rounded-[2rem] bg-muted/40 relative overflow-hidden group transition-colors flex flex-col md:flex-row gap-6 items-start">
                                <div className="flex-shrink-0 p-4 rounded-xl bg-primary/10 text-primary">
                                    <Users className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold tracking-tight mb-2 font-sans">Phase 2: Team Expansion</h3>
                                    <p className="text-base text-muted-foreground/90 leading-relaxed font-spectral">
                                        To scale the vision, I partnered with a co-founder and brought on an intern. Together, we built the full agentic experience and integrated real-time voice-based interviewing capabilities.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="p-8 rounded-[2rem] bg-primary/5 border border-primary/10 relative overflow-hidden group transition-colors flex flex-col md:flex-row gap-6 items-start">
                                <div className="flex-shrink-0 p-4 rounded-xl bg-primary/20 text-primary">
                                    <Target className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold tracking-tight mb-2 font-sans">Responsibilities</h3>
                                    <p className="text-base text-foreground/90 leading-relaxed font-spectral">
                                        I spearheaded the <strong className="font-bold">design, product strategy, and front-end development</strong>. The robust backend infrastructure was concurrently developed by my co-founder and our intern.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </InsightSection>
                </section>

                <section id="pilots-and-deployment" className="scroll-mt-32">
                    <InsightSection label="Traction" title="Pilots and Deployment">
                        <p>
                            Development was completed by the end of December 2025. Following the launch, we engaged in aggressive go-to-market efforts, conducting demos with numerous companies across India and several in the US.
                        </p>
                        <p>
                            We successfully secured and executed pilot programs with two prominent tech companies in India: <strong className="font-bold text-foreground">Myntra and Groww</strong>.
                        </p>
                    </InsightSection>
                </section>

                <div className="w-full h-px bg-border/20 my-16"></div>

                <section id="demo-video" className="scroll-mt-32 mb-20">
                    <div className="flex flex-col mb-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-4 w-fit font-sans">
                            Product Demo
                        </div>
                        <h3 className="text-2xl md:text-4xl font-bold tracking-tight leading-[1.2] font-sans text-foreground/90">See Foresite in Action</h3>
                    </div>
                    
                    <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
                        <iframe 
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/zNpQX1fGpzg"
                            title="Foresite Platform Demo"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </div>
                </section>

                <div className="w-full h-px bg-border/20 my-16"></div>

                <section id="outcome-and-learnings" className="scroll-mt-32">
                    <InsightSection label="Conclusion" title="Outcome & Learnings">
                        <p>
                            While the pilot programs proved highly successful from a product utility standpoint, the business reality was more challenging.
                        </p>
                        <ul className="list-none space-y-6 my-8 p-0">
                            <li className="flex gap-4 items-start">
                                <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                </div>
                                <div className="font-spectral text-lg text-foreground/80 leading-relaxed">
                                    <strong className="font-sans font-bold block text-foreground mb-1">Market Size Constraint</strong>
                                    We ultimately realized that the Indian market, at its current maturity level, was not sufficiently large to support a venture-scale product in this specific niche.
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                </div>
                                <div className="font-spectral text-lg text-foreground/80 leading-relaxed">
                                    <strong className="font-sans font-bold block text-foreground mb-1">Fierce US Competition</strong>
                                    Conversely, the US market - though mature enough - already possessed heavily funded, entrenched competitors executing rapidly.
                                </div>
                            </li>
                        </ul>
                        <p>
                            Based on these market dynamics, we ultimately made the decision to cease operations. However, the journey provided an immense depth of learning in AI agentic workflows, product-market fit evaluation, and voice-model integration.
                        </p>
                    </InsightSection>
                </section>

                <section id="real-world-application" className="scroll-mt-32">
                    <div className="bg-muted/40 border border-border/10 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
                        
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-6 w-fit font-sans">
                            End-to-End Execution
                        </div>
                        
                        <h3 className="text-2xl md:text-4xl font-bold tracking-tight mb-6 font-sans">
                            AI Adoption in Investors <span className="font-light italic text-muted-foreground block text-2xl mt-2">(Groww Pilot)</span>
                        </h3>
                        
                        <p className="text-lg md:text-xl text-foreground/80 leading-[1.8] font-spectral mb-10">
                            The extensive research report analyzing the "Trust Barrier" in AI wealth advisors was conducted <strong className="font-bold text-foreground">end-to-end utilizing Foresite</strong> during our pilot with Groww. Foresite structured the plans, conducted autonomous moderation sessions, and synthesized the qualitative insights.
                        </p>

                        <Link to="/report" className="inline-flex items-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-2xl font-bold font-sans hover:bg-primary/90 transition-colors group/btn">
                            <FileText className="w-5 h-5" />
                            Read the AI Adoption Report
                            <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </section>

                <div className="h-16"></div>
            </article>

            {/* Explore Projects */}
            <ExploreProjects />

            <SiteFooter />
        </main>
    );
}
