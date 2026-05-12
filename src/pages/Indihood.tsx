import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Target, Eye, Cog, Zap, LayoutDashboard, BrainCircuit, Users } from "lucide-react";
import { ThemeToggle } from "../components/ui/theme-toggle";
import { cn } from "../lib/utils";
import { IndihoodMethodologyVisual } from "../components/indihood/methodology-visual";
import { ExploreProjects } from "../components/explore-projects";
import { PasswordLock } from "../components/password-lock";
import { SiteFooter } from "../components/site-footer";

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

export default function IndihoodPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
            {/* Header */}
            <nav className="fixed top-0 w-full px-6 py-4 md:px-12 z-50 flex justify-between items-center bg-background/90 backdrop-blur-md border-b border-border/10">
                <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-foreground/80 hover:text-primary transition-colors">
                    <ArrowLeft size={16} /> Mehul.
                </Link>
                <div className="flex items-center gap-6">
                    <ThemeToggle />
                </div>
            </nav>

            <main className="pb-32">
                {/* Hero Section */}
                <div className="w-full bg-muted/10 border-b border-border/10 font-sans pt-12 pb-20 px-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none"></div>
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
                        <div className="mb-8 flex items-center gap-3">
                            <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">Enterprise UX Research</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold tracking-tighter leading-[1.05] mb-8 text-balance font-sans text-foreground">
                            Automating Current Accounts: Revamping the Onboarding Journey
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-muted-foreground/80 font-normal max-w-3xl leading-relaxed font-sans mb-12">
                            How we mapped complex operational flows to transform high application rejection rates into a frictionless, automated ecosystem.
                        </p>
                        
                        <div className="w-full mt-8 rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/5 border border-border/10 flex items-center justify-center bg-muted/20">
                            <img src="/images/indihood/1.0.jpeg" alt="Indihood Hero" className="rounded-[1.5rem] max-h-[70vh] w-auto object-contain max-w-full" />
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-[800px] mx-auto px-6 md:px-0 mt-16 mb-16">
                    <div className="flex flex-wrap gap-8 text-sm uppercase tracking-widest font-semibold font-sans justify-center">
                        <div className="flex flex-col gap-1 items-center">
                            <span className="text-muted-foreground/50">Company</span>
                            <span className="text-foreground">Indihood</span>
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <span className="text-muted-foreground/50">Timeline</span>
                            <span className="text-foreground">4 Weeks</span>
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <span className="text-muted-foreground/50">Role</span>
                            <span className="text-foreground">Lead UX Researcher</span>
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <span className="text-muted-foreground/50">Team</span>
                            <span className="text-foreground">1 UXr, 1 PM, 1 PD</span>
                        </div>
                    </div>
                </div>

                {/* Main Content constraints */}
                <div className="max-w-[800px] mx-auto px-6 md:px-0">
                    
                    <section id="challenge" className="scroll-mt-32">
                        <InsightSection label="The Challenge" title="Digitization Without Optimization">
                            <p>
                                A Tier-1 financial institution launched a digital application to streamline the onboarding process for commercial current accounts (Sole Proprietors & Pvt. Ltd. companies). The business goal was a frictionless, same-day account opening experience.
                            </p>
                            <p>
                                Therefore, the initiative was failing to meet its targets. The process was plagued by a high <strong>First Time Not Right (FTNR)</strong> rate - meaning applications were constantly being rejected and sent back to the field agents for rework, resulting in delayed onboarding, frustrated customers, and exhausted relationship managers.
                            </p>
                            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 mt-6">
                                <h4 className="font-bold font-sans text-lg mb-2 flex items-center gap-2">
                                    <Target className="w-5 h-5 text-primary" /> My Goal
                                </h4>
                                <p className="text-base text-foreground/80">
                                    My goal was to find the root causes behind the high FTNR reasons. We already knew FTNR reasons because the data had been collected previously. You also wanted to know the "why" behind them, like why they were happening.
                                </p>
                            </div>
                        </InsightSection>
                    </section>

                    <div className="w-full h-px bg-border/20 my-16"></div>

                    <section id="methodology" className="scroll-mt-32">
                        <InsightSection label="Methodology" title="Mixed-Methods Deep Dive">
                            
                            <IndihoodMethodologyVisual />

                            <div className="space-y-8 mt-12">
                                <div className="flex gap-4">
                                    <div className="shrink-0 mt-1">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold font-sans mb-3 text-foreground">Quantitative Data Analysis & Hypothesis Generation</h4>
                                        <img src="/images/indihood/1.1.jpeg" alt="Quantitative Analysis" className="mb-4 rounded-2xl w-full" />
                                        <p className="text-lg font-spectral text-foreground/80">
                                            Before heading into the field, we acquired and analyzed the bank's historical FTNR data. By analyzing the backend rejection logs, we identified the highest-frequency failure points (e.g., photo rejections, document mismatches). This quantitative foundation allowed us to form initial hypotheses about where the system was breaking down and prioritize specific workflows for our qualitative phase.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="shrink-0 mt-1">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">2</div>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold font-sans mb-3 text-foreground">Ethnographic Field Study & Contextual Inquiry</h4>
                                        <p className="text-lg font-spectral text-foreground/80 mb-6">
                                            To truly understand why these failures were happening, we knew we couldn't rely on analytics or remote interviews alone. We went on the ground to observe the environment where the friction occurred.
                                        </p>
                                        
                                        <div className="grid gap-4 font-sans">
                                            <div className="bg-muted/30 p-5 rounded-xl border border-border/5">
                                                <h5 className="font-bold text-foreground mb-2 flex items-center gap-2"><Users className="w-4 h-4 text-primary"/> Multi-Node Shadowing</h5>
                                                <img src="/images/indihood/1.2.jpeg" alt="Shadowing Methodology" className="mb-4 rounded-2xl w-full" />
                                                <ul className="space-y-3 text-sm text-foreground/80">
                                                    <li><strong>Retail Branches:</strong> Shadowing frontline Relationship Managers (RMs) and Branch Managers during actual client visits.</li>
                                                    <li><strong>District Operations (WBO):</strong> Observing the mid-level back-office checkers who evaluated the incoming digital applications.</li>
                                                    <li><strong>Central Processing Units (CPU):</strong> Interviewing operators at the regional hub managing high-volume document warehousing and compliance.</li>
                                                </ul>
                                            </div>
                                            <div className="bg-muted/30 p-5 rounded-xl border border-border/5">
                                                <h5 className="font-bold text-foreground mb-2 flex items-center gap-2"><Cog className="w-4 h-4 text-primary"/> System Mapping</h5>
                                                <p className="text-sm text-foreground/80 leading-relaxed">
                                                    We mapped not just the UI flow, but the Service Blueprint - documenting the invisible "swivel-chair" tasks, manual API checks, and informal communication channels bridging the gaps in the software.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </InsightSection>
                    </section>

                    <div className="w-full h-px bg-border/20 my-16"></div>

                <PasswordLock>
                    <section id="insights" className="scroll-mt-32">
                        <InsightSection label="Findings" title="Key Insights">
                            <p className="mb-8">
                                By synthesizing our quantitative backend data with hours of qualitative field observation, we traced the root causes down to two critical systemic failures.
                            </p>

                            <div className="grid gap-8">
                                <div className="bg-background border border-border/10 rounded-3xl p-8 hover:border-primary/20 transition-colors">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-primary/10 rounded-xl">
                                            <Eye className="w-6 h-6 text-primary" />
                                        </div>
                                        <h4 className="text-2xl font-bold font-sans text-foreground">The "Subjectivity Gap" & The Human API</h4>
                                    </div>
                                    <img src="/images/indihood/1.3.jpeg" alt="Subjectivity Gap Insight" className="mb-4 rounded-2xl w-full" />
                                    <p className="font-spectral text-lg text-foreground/80 leading-relaxed mb-4">
                                        The digital app was essentially functioning as a simple data-capture frontend, while the backend remained a rigid, manual process. The highest driver of application rejection (FTNR) wasn't user error, but a mismatch in subjective interpretation between frontline agents and back-office checkers.
                                    </p>
                                    <div className="bg-muted/30 p-4 rounded-xl border-l-4 border-primary">
                                        <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest block mb-1 font-sans">Example</span>
                                        <p className="text-sm font-sans text-foreground/90 leading-relaxed">
                                            Frontline agents would upload a photo of a business signboard they deemed acceptable, but back-office checkers would reject it for appearing "too temporary" based on unwritten, subjective internal criteria. The digital system lacked objective, automated guardrails, forcing the back-office to act as a "Human API."
                                        </p>
                                    </div>
                                </div>

                                {/*
                                <div className="bg-background border border-border/10 rounded-3xl p-8 hover:border-primary/20 transition-colors">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-primary/10 rounded-xl">
                                            <BrainCircuit className="w-6 h-6 text-primary" />
                                        </div>
                                        <h4 className="text-2xl font-bold font-sans text-foreground">Frontline Cognitive Overload</h4>
                                    </div>
                                    <p className="font-spectral text-lg text-foreground/80 leading-relaxed">
                                        Instead of the app guiding the Relationship Managers (RMs) through complex compliance rules, the cognitive burden was placed entirely on them. RMs were expected to memorize hundreds of ever-changing regulatory circulars. The app allowed them to submit invalid document combinations, only to have the system reject them days later. The digital tool was creating friction rather than removing it.
                                    </p>
                                </div>
                                */}
                                
                                <div className="bg-background border border-dashed border-border/50 rounded-3xl p-8 text-center text-muted-foreground">
                                    <p className="font-spectral text-lg italic">
                                        Cannot share more, sensitive and proprietary information in insights.
                                    </p>
                                </div>
                            </div>
                        </InsightSection>
                    </section>

                    <div className="w-full h-px bg-border/20 my-16"></div>

                    <section id="outcomes" className="scroll-mt-32">
                        <InsightSection label="Impact" title="Outcomes & Strategic Pivot">
                            <p className="mb-8">
                                The research served as the catalyst for a complete pivot in how the product team approached the onboarding ecosystem. Moving away from trying to "fix the app," we focused on re-architecting the entire service blueprint.
                            </p>

                            <div className="space-y-12">
                                <div>
                                    <h4 className="text-2xl font-bold font-sans text-foreground mb-4">1. Cross-Functional Design Collaboration</h4>
                                    <p className="font-spectral text-lg text-foreground/80 leading-relaxed mb-4">
                                        The most immediate impact of the research was translating the "As-Is" pain points into "To-Be" solutions. I organized and facilitated deep-dive brainstorming sessions with the Product Design and UX/UI teams. Together, we translated the research into role-specific, high-fidelity UI flows.
                                    </p>
                                    <ul className="list-disc list-outside pl-5 font-spectral text-lg text-foreground/80 space-y-2">
                                        <li><strong>Relationship Managers:</strong> Guided, error-proof data entry and automated API fetches.</li>
                                        <li><strong>Branch Managers:</strong> Focused on exception handling.</li>
                                        <li><strong>Back-Office Checkers:</strong> Optimized split-screen review process, drastically reducing cognitive load.</li>
                                    </ul>
                                </div>

                                <div className="bg-background border border-dashed border-border/50 rounded-3xl p-8 text-center text-muted-foreground">
                                    <p className="font-spectral text-lg italic">
                                        Project is still ongoing. Further outcomes will be documented as the implementation progresses.
                                    </p>
                                </div>

                                {/*
                                <div>
                                    <h4 className="text-2xl font-bold font-sans text-foreground mb-4">2. From Subjective to Objective Validation</h4>
                                    <p className="font-spectral text-lg text-foreground/80 leading-relaxed">
                                        I championed the shift from manual "swivel-chair" checks to system-level validations. We integrated strict business rules and in-app validations directly into the new wireframes to proactively avoid rejects. By auto-fetching GST details via API and restricting invalid document combinations at the point of entry, we effectively eliminated the guesswork for frontline staff and prevented faulty applications from ever reaching the back office.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-2xl font-bold font-sans text-foreground mb-4">3. Restructuring the "Curing" Loop</h4>
                                    <p className="font-spectral text-lg text-foreground/80 leading-relaxed">
                                        While agents previously didn't have to start an application entirely over when errors occurred, the communication loop was highly manual and broken. Checkers relied on separate emails to branches and often left vague, minimal notes because there was no easy way to specify issues. Based on our journey maps, we introduced property/field-level commenting directly within the UI. Checkers could now flag a specific field (e.g., just the CPV photo) and leave a contextual note attached to it. This meant they didn't have to manually describe the affected field, completely avoiding the need to email branches separately and drastically reducing rework turnaround time.
                                    </p>
                                </div>
                                */}
                            </div>
                        </InsightSection>
                    </section>
                    
                    <div className="w-full h-px bg-border/20 my-16"></div>

                    <section id="reflection" className="scroll-mt-32">
                        <InsightSection label="Conclusion" title="Reflection">
                            <div className="bg-primary/5 rounded-3xl p-8 border border-primary/20 relative overflow-hidden">
                                <Zap className="absolute top-[-20%] right-[-10%] w-64 h-64 text-primary/5" />
                                <p className="font-spectral text-xl md:text-2xl italic leading-relaxed text-foreground/90 relative z-10">
                                    "This project highlighted the power of systemic UX research in enterprise environments. By looking beyond the screen and observing the human-to-human workflows, we were able to stop designing bandages for bad processes and instead co-create a holistic, automated ecosystem that empowered employees rather than policing them."
                                </p>
                            </div>
                        </InsightSection>
                    </section>
                </PasswordLock>
                </div>

                <ExploreProjects />

                <SiteFooter />
            </main>
        </div>
    );
}
