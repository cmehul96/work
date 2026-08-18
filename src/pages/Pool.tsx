import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Share2, Check, Home, Clock, DollarSign, Car, Map, User, CheckCircle2, XCircle, AlertCircle, TrendingUp, Lightbulb, Search } from "lucide-react";
import { Button } from "../components/ui/button";
import { ThemeToggle } from "../components/ui/theme-toggle";
import { cn } from "../lib/utils";
import { ExploreProjects } from "../components/explore-projects";
import { PasswordLock } from "../components/password-lock";
import { SiteFooter } from "../components/site-footer";
import { FrameworkVisual } from "../components/pool/framework-visual";

// --- Images Mapping ---
const heroBanner = "/images/pool/1.0.jpeg";
const processImage = "/images/pool/1.1.jpeg";
const participantImage = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000";

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

function IdeationCard({ saw, know, pattern, idea }: { saw: string, know: string, pattern: string, idea: React.ReactNode }) {
    return (
        <div className="bg-background border border-border/10 rounded-3xl overflow-hidden shadow-sm flex flex-col font-sans mb-8">
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border/10">
                <div className="p-6 md:p-8 bg-muted/20">
                    <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
                        <Search className="w-3 h-3 text-primary" /> I saw this
                    </div>
                    <p className="text-foreground/90 font-medium">{saw}</p>
                </div>
                <div className="p-6 md:p-8 bg-muted/20">
                    <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-primary" /> I know this
                    </div>
                    <p className="text-foreground/90 font-medium">{know}</p>
                </div>
            </div>
            
            <div className="p-6 md:p-8 border-t border-border/10 bg-primary/5">
                <div className="flex flex-col md:flex-row md:items-center gap-8">
                    <div className="flex-1">
                        <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 flex items-center gap-2">
                            <TrendingUp className="w-3 h-3" /> Design Pattern
                        </div>
                        <p className="text-foreground font-bold text-lg leading-tight">{pattern}</p>
                    </div>
                    <div className="hidden md:block w-px h-16 bg-primary/10"></div>
                    <div className="flex-1">
                        <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 flex items-center gap-2">
                            <Lightbulb className="w-3 h-3 fill-primary/20" /> Feature Idea
                        </div>
                        <div className="text-primary font-medium">{idea}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function PoolPage() {
    return (
        <main className="min-h-screen bg-background text-foreground font-spectral selection:bg-primary/20">
            {/* Header */}
            <header className="h-16 w-full flex items-center justify-between px-6 md:px-12 border-b border-border/5 bg-background/95 backdrop-blur-md sticky top-0 z-50 font-sans">
                <Link to="/" className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-muted group text-foreground transition-colors">
                    <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
                </Link>
                
                <div className="flex items-center gap-2 font-sans font-black tracking-[0.2em] uppercase text-xs">
                    Uber
                </div>
                
                <div className="flex items-center gap-4 font-sans">
                    <ThemeToggle />
                </div>
            </header>

            {/* Hero Section */}
            <div className="w-full bg-muted/10 border-b border-border/10 font-sans pt-12 pb-20 px-6">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                    <div className="mb-8 flex items-center gap-3">
                        <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-primary/10 text-primary border border-primary/20">Diary Study</span>
                        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">September 2018</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold tracking-tighter leading-[1.05] mb-8 text-balance font-sans text-foreground">
                        Decoding the Commute.
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-muted-foreground/80 font-normal max-w-3xl leading-relaxed font-sans mb-4">
                        A foundational Diary Study tracking 140 rides to understand the UberPool journey shape and define the mapless architecture for Uber Lite.
                    </p>

                    <div className="w-full mt-8 rounded-[2rem] overflow-hidden bg-muted/10 shadow-2xl shadow-primary/5">
                        <img 
                            src={heroBanner} 
                            alt="City Traffic" 
                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" 
                        />
                    </div>
                </div>
            </div>


            {/* Content Container */}
            <article className="max-w-3xl mx-auto px-6 py-16 font-sans">
                
                {/* TOC */}
                <div className="mb-20 p-8 rounded-3xl bg-muted/30 border border-border/10 font-sans">
                    <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-6">Table of Contents</div>
                    <ul className="space-y-4 text-base font-bold text-foreground/80">
                        <li><a href="#overview" className="flex items-center gap-4 hover:text-primary transition-colors">Overview</a></li>
                        <li><a href="#process" className="flex items-center gap-4 hover:text-primary transition-colors">The Funnel & Process</a></li>
                        <li><a href="#framework" className="flex items-center gap-4 hover:text-primary transition-colors">The Framework of Commute</a></li>
                        <li><a href="#themes" className="flex items-center gap-4 hover:text-primary transition-colors">4 Core Themes</a></li>
                        <li><a href="#ideation" className="flex items-center gap-4 hover:text-primary transition-colors">From Insight to Features</a></li>
                    </ul>
                </div>

                <section id="overview" className="scroll-mt-32">
                    <InsightSection label="The Challenge" title="Why focus on Commute?">
                        <p>
                            In 2018, commuting accounted for a staggering <strong className="font-bold text-foreground">55% of all UberPool usage in India</strong>. As Uber was building <span className="italic">Uber Lite</span> - a network-optimized, mapless application for emerging markets - we needed a raw, unfiltered look at the Pool experience.
                        </p>
                        <p>
                            We set out to answer four fundamental questions:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-primary">
                            <li>What does the "perfect" customer journey look like for a Pool ride?</li>
                            <li>Where are the exact friction points regarding ETAs, detours, and co-rider dynamics?</li>
                            <li>What information is strictly necessary for a rider at any given moment if we remove the map?</li>
                            <li>What pushes users to abandon Pool for alternatives?</li>
                        </ul>
                    </InsightSection>
                </section>

                <section id="process" className="scroll-mt-32">
                    <InsightSection label="Methodology" title="The Diary Study Funnel">
                        <div className="w-full my-8 flex flex-col md:flex-row gap-6 font-sans">
                            <div className="flex-1 bg-muted/30 rounded-3xl p-8 border border-border/10 flex flex-col items-center justify-center text-center relative overflow-hidden">
                                <div className="text-[10px] uppercase tracking-widest font-black text-muted-foreground mb-2">Initial Screen</div>
                                <div className="text-4xl font-bold tracking-tighter">6,600</div>
                                <div className="text-sm text-muted-foreground mt-2 font-medium">Eligible Users</div>
                            </div>
                            <div className="flex-1 bg-muted/40 rounded-3xl p-8 border border-border/10 flex flex-col items-center justify-center text-center relative overflow-hidden">
                                <div className="text-[10px] uppercase tracking-widest font-black text-primary mb-2">Survey Output</div>
                                <div className="text-4xl font-bold tracking-tighter text-primary">191</div>
                                <div className="text-sm text-primary/80 mt-2 font-medium">Detailed Responses</div>
                            </div>
                            <div className="flex-1 bg-primary/5 rounded-3xl p-8 border border-primary/20 flex flex-col items-center justify-center text-center relative overflow-hidden">
                                <div className="text-[10px] uppercase tracking-widest font-black text-primary mb-2">Selected</div>
                                <div className="text-4xl font-bold tracking-tighter text-primary">20</div>
                                <div className="text-sm text-foreground/80 mt-2 font-medium">Core Participants</div>
                            </div>
                        </div>

                        <p>
                            We tracked 20 cross-city daily commuters over 10 days using WhatsApp and Google Forms, generating raw qualitative data for <strong className="font-bold">140 distinct rides</strong>. 
                        </p>
                        
                        <div className="w-full my-12 rounded-[2rem] overflow-hidden bg-muted/10 shadow-xl shadow-primary/5">
                            <img 
                                src={processImage} 
                                alt="Data synthesis process" 
                                className="w-full h-auto object-cover opacity-90" 
                            />
                        </div>
                    </InsightSection>
                </section>

                <div className="w-full h-px bg-border/20 my-20"></div>

                {/* THE FRAMEWORK */}
                <section id="framework" className="scroll-mt-32 mb-20 font-sans">
                    <div className="flex flex-col items-center text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-4">
                            Mental Model
                        </div>
                        <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground/90">The Framework of Commute</h3>
                        <p className="mt-4 text-muted-foreground max-w-xl text-lg">We distilled the entire commuter mindset into concentric psychological rings.</p>
                    </div>

                    <FrameworkVisual />
                </section>

                <div className="w-full h-px bg-border/20 my-16"></div>

                <PasswordLock>
                <section id="themes" className="scroll-mt-32">
                    <InsightSection label="Deep Dive" title="User Insights">
                        
                        {/* Insight 1: Decision Making */}
                        <div className="mt-12 mb-20">
                            <h4 className="text-2xl font-sans font-bold flex items-center gap-3 mb-6 text-foreground">
                                <DollarSign className="text-primary bg-primary/10 p-1.5 rounded-lg w-8 h-8" />
                                Decision Making (Price & Reliability)
                            </h4>
                            <p className="font-spectral text-lg text-foreground/80 leading-relaxed mb-6">
                                The outermost filter is highly elastic. If prices surge or ETAs stretch, Pool loses instantly to Autos, Metros, or competitors. It demands immediate affirmation of value and speed.
                            </p>
                            <ExpandableQuotes 
                                topQuotes={
                                    <>
                                        <img src="/images/pool/1.2.jpeg" alt="Decision Making Insight" className="mb-4 rounded-2xl w-full" />
                                        <QuoteBlock 
                                            quote="Took Uber Premium as the price was almost similar to Pool." 
                                            author="Neeraj" role="Bengaluru" 
                                        />
                                        <QuoteBlock 
                                            quote="If I book a cab to same drop but with a pick up which is about 1 km ahead of my routine pick up, then fare is nearly half." 
                                            author="S Dineshkumar" role="Chennai" 
                                        />
                                    </>
                                }
                                hiddenQuotes={
                                    <>
                                        <QuoteBlock 
                                            quote="I took Ola share @75 today. Uber Pool was @259" 
                                            author="Amit" role="Kolkata" 
                                        />
                                        <QuoteBlock 
                                            quote="The price can vary anywhere between 100-400. Total distance to office is 19 kms of which 12 kms I travel by train because it's not affordable." 
                                            author="Nirav" role="Mumbai" 
                                        />
                                        <QuoteBlock 
                                            quote="App was showing just 1 min away but Driver took 7-8 mins." 
                                            author="Yasha" role="Ahmedabad" 
                                        />
                                        <QuoteBlock 
                                            quote="The driver kept going in circles. He couldn't explain where he was." 
                                            author="Kiran" role="Delhi" 
                                        />
                                        <QuoteBlock 
                                            quote="There were 10 cars near my apartment complex, still had to wait 7 mins." 
                                            author="Anand" role="Hyderabad" 
                                        />
                                    </>
                                }
                            />
                        </div>

                        {/* Insight 2: Primary Experience */}
                        <div className="mb-20">
                            <h4 className="text-2xl font-sans font-bold flex items-center gap-3 mb-6 text-foreground">
                                <Map className="text-primary bg-primary/10 p-1.5 rounded-lg w-8 h-8" />
                                Primary Experience (Pickups & Routing)
                            </h4>
                            <p className="font-spectral text-lg text-foreground/80 leading-relaxed mb-6">
                                Once inside the cab, the core product experience is defined strictly by execution. Severe detours, sluggish co-riders, and poorly mapped complex entrances break the routing trust.
                            </p>
                            <ExpandableQuotes 
                                topQuotes={
                                    <>
                                        <img src="/images/pool/1.3.jpeg" alt="Primary Experience Insight" className="mb-4 rounded-2xl w-full" />
                                        <QuoteBlock 
                                            quote="A 15 min ride took 40 mins because of two off-route drops." 
                                            author="Nirav" role="Mumbai" 
                                        />
                                        <QuoteBlock 
                                            quote="To and Fro pickups from the front and back entrance of the same complex. Terrible routing." 
                                            author="Anand" role="Hyderabad" 
                                        />
                                    </>
                                }
                                hiddenQuotes={
                                    <>
                                        <QuoteBlock 
                                            quote="I have to reach on time else my salary gets deducted and with pool i can't rely on time." 
                                            author="Amit" role="Kolkata" 
                                        />
                                        <QuoteBlock 
                                            quote="Some people even take 10-15 minutes to board the cab. It's complete headache!" 
                                            author="Muskan" role="Bengaluru" 
                                        />
                                        <QuoteBlock 
                                            quote="Sometimes we are on a bridge and the pickup comes from the street passing below the bridge." 
                                            author="Aradhya" role="Mumbai" 
                                        />
                                        <QuoteBlock 
                                            quote="People were loudly talking on phone in back seat and discuss personal problems." 
                                            author="Hemant" role="Delhi" 
                                        />
                                    </>
                                }
                            />
                        </div>

                        {/* Insight 3: Delighters */}
                        <div className="mb-20">
                            <h4 className="text-2xl font-sans font-bold flex items-center gap-3 mb-6 text-foreground">
                                <Car className="text-primary bg-primary/10 p-1.5 rounded-lg w-8 h-8" />
                                Delighters (Comfort & Safety)
                            </h4>
                            <p className="font-spectral text-lg text-foreground/80 leading-relaxed mb-6">
                                A highly professional driver, AC, and music function as 'equalizers'. They mask the flaws of routing and instantly elevate the mundane commute into a moment of personal space. Safety protocols also deeply govern this localized choice.
                            </p>
                            <ExpandableQuotes 
                                topQuotes={
                                    <>
                                        <img src="/images/pool/1.4.jpeg" alt="Delighters Insight" className="mb-4 rounded-2xl w-full" />
                                        <QuoteBlock 
                                            quote="Cab had fm on and it was playing all my favorite songs! The music took over everything." 
                                            author="Poonam" role="Bengaluru" 
                                        />
                                        <QuoteBlock 
                                            quote="Car condition was bad but the Driver's Professionalism changed my mind!" 
                                            author="S Dineshkumar" role="Chennai" 
                                        />
                                    </>
                                }
                                hiddenQuotes={
                                    <>
                                        <QuoteBlock 
                                            quote="I take the cab to just switch off mentally. I look at it as 'me' time." 
                                            author="Kiran" role="Delhi" 
                                        />
                                        <QuoteBlock 
                                            quote="I don't want myself to get involved in any problem so I prefer GO if it gets late in night." 
                                            author="Poonam" role="Bengaluru" 
                                        />
                                        <QuoteBlock 
                                            quote="I book only Go for my girls and I share the cab's details with my husband and brother." 
                                            author="Kiran" role="Delhi" 
                                        />
                                    </>
                                }
                            />
                        </div>

                        {/* Insight 4: Information */}
                        <div className="mb-8">
                            <h4 className="text-2xl font-sans font-bold flex items-center gap-3 mb-6 text-foreground">
                                <Search className="text-primary bg-primary/10 p-1.5 rounded-lg w-8 h-8" />
                                The Information Vacuum
                            </h4>
                            <p className="font-spectral text-lg text-foreground/80 leading-relaxed mb-8">
                                Rider map dependency spikes dramatically exclusively to understand the <strong>order of operations</strong> - "Am I being dropped first or second?". If Uber Lite removes the map, we must fulfill this hyper-specific localized spatial anxiety with pure temporal certainty.
                            </p>
                            <div className="p-8 rounded-[2rem] bg-background border border-border/10 shadow-sm font-sans flex flex-col md:flex-row gap-8 items-center">
                                <div className="flex-1 space-y-4">
                                    <h5 className="font-bold text-lg">Top Rider Data Desires</h5>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3"><span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">1</span> Estimated Time of Drop (ETD)</li>
                                        <li className="flex items-center gap-3"><span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">2</span> Drop Priority (Am I next?)</li>
                                        <li className="flex items-center gap-3"><span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">3</span> Number of upcoming Co-rider Pickups</li>
                                    </ul>
                                </div>
                                <div className="w-px h-32 bg-border/20 hidden md:block"></div>
                                <div className="flex-1 text-muted-foreground italic text-sm">
                                    "Maps are predominantly functioning as a coping mechanism for routing uncertainty rather than active navigation."
                                </div>
                            </div>
                        </div>

                    </InsightSection>
                </section>

                <div className="w-full h-px bg-border/20 my-16"></div>

                <section id="ideation" className="scroll-mt-32">
                    <InsightSection label="Synthesis" title="From Insight to Features">
                        <p className="mb-12">
                            Using our generative framework, we mapped user realities to targeted product features designed specifically for the Indian commute context and the lite application.
                        </p>

                        <div className="space-y-6">
                            <IdeationCard 
                                saw="People don't consider pool reliable in urgency due to unpredictable ETDs."
                                know="High-frequency commuters need guarantees to not lose pay."
                                pattern="Design logic that buffers unpredictability for time-bound riders."
                                idea={
                                    <ul className="space-y-2">
                                        <li>• <strong className="font-bold">Last-In-First-Out (LIFO)</strong> routing prioritizing the last picked passenger to minimalize their detour pain.</li>
                                        <li>• Pre-booking priority drop toggle.</li>
                                    </ul>
                                }
                            />

                            <IdeationCard 
                                saw="To & fro pickups within the exact same complex cause immense frustration and delays."
                                know="A vast majority of commutes originate from dense residential 'Hot Spots'."
                                pattern="Consolidate spatial chaos by standardizing origin nodes."
                                idea={
                                    <ul className="space-y-2">
                                        <li>• <strong className="font-bold">Express Pool Walk:</strong> Assigning a single common pickup point (e.g., the complex main gate) for concurrent riders.</li>
                                    </ul>
                                }
                            />

                            <IdeationCard 
                                saw="In-cab map usage spikes solely to determine if one is being dropped first or second."
                                know="Uber Lite removes the map to save data, creating an information vacuum."
                                pattern="Provide temporal certainty without spatial rendering."
                                idea={
                                    <ul className="space-y-2">
                                        <li>• <strong className="font-bold">Linear Timeline UI:</strong> A vertical node-based timeline showing upcoming pick-ups and drops with exact minute indicators, functioning purely textually independent of a map.</li>
                                    </ul>
                                }
                            />
                        </div>
                    </InsightSection>
                </section>

                <div className="w-full h-px bg-border/20 my-16"></div>

                <section id="impact" className="scroll-mt-32">
                    <InsightSection label="Impact" title="From Research to Shipped Experience">
                        <p className="mb-8">
                            The Linear Timeline UI concept born out of this research wasn't just a proposal - it was actually built and shipped to riders, becoming the core mapless way of showing the Pool experience in Uber Lite.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="rounded-[2rem] overflow-hidden bg-muted/10 shadow-xl shadow-primary/5">
                                <img
                                    src="/images/pool/impact-1.png"
                                    alt="Uber Lite shipped Pool experience"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="rounded-[2rem] overflow-hidden bg-muted/10 shadow-xl shadow-primary/5">
                                <img
                                    src="/images/pool/impact-2.avif"
                                    alt="Uber Lite shipped Pool timeline UI"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </InsightSection>
                </section>
                </PasswordLock>

                <div className="h-16"></div>
            </article>

            {/* Explore Projects */}
            <ExploreProjects />

            <SiteFooter />
        </main>
    );
}
