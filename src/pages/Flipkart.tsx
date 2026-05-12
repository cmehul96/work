import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, CheckCircle2, TrendingUp, Lightbulb, User, Shield, CreditCard, Award, XCircle, Sparkles, Gem } from "lucide-react";
import { Button } from "../components/ui/button";
import { ThemeToggle } from "../components/ui/theme-toggle";
import { cn } from "../lib/utils";
import { ExploreProjects } from "../components/explore-projects";
import { PasswordLock } from "../components/password-lock";
import { SiteFooter } from "../components/site-footer";
import { FlipkartFrameworkVisual } from "../components/flipkart/framework-visual";

import { FlipkartIdeationVisual } from "../components/flipkart/ideation-visual";

// --- Images Mapping ---
const heroBanner = "/images/flipkart/1.0.jpeg";
const insight1Image = "/images/flipkart/1.1.jpeg";
const insight2Image = "/images/flipkart/1.2.jpeg";
const insight3Image = "/images/flipkart/1.3.jpeg";

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

function TargetChip({ target }: { target: 'NTC' | 'ETC' | 'Both' }) {
    const text = target === 'Both' ? 'NTC & ETC' : target;
    return <span className="inline-flex items-center px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest bg-primary/10 text-primary border border-primary/20">{text}</span>;
}

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

export default function FlipkartPage() {
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
                <div className="w-full bg-muted/10 border-b border-border/10 font-sans pt-12 pb-20 px-6">
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <div className="mb-8 flex items-center gap-3">
                            <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">UX Research</span>
                            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">Mar 2020</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold tracking-tighter leading-[1.05] mb-8 text-balance font-sans text-foreground">
                            Co-Branded Card <br/>Research & Strategy
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-muted-foreground/80 font-normal max-w-3xl leading-relaxed font-sans mb-4">
                            Understanding the motivations, apprehensions, and critical deterrents surrounding the adoption of Co-Branded Credit Cards among both 'New to Credit' (NTC) and 'Existing to Credit' (ETC) users.
                        </p>

                        <div className="w-full mt-8 rounded-[2rem] overflow-hidden bg-muted/10 shadow-2xl shadow-primary/5">
                            <img 
                                src={heroBanner} 
                                alt="Credit Card Interface Mockup" 
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" 
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-[800px] mx-auto px-6 md:px-0 mt-16 mb-16">
                    <div className="flex flex-wrap gap-8 text-sm uppercase tracking-widest font-semibold font-sans justify-center">
                        <div className="flex flex-col gap-1 items-center">
                            <span className="text-muted-foreground/50">Company</span>
                            <span className="text-foreground">Flipkart</span>
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <span className="text-muted-foreground/50">Timeline</span>
                            <span className="text-foreground">Mar 2020</span>
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <span className="text-muted-foreground/50">Role</span>
                            <span className="text-foreground">Lead Researcher</span>
                        </div>
                    </div>
                </div>

                {/* Main Content constraints */}
                <div className="max-w-[800px] mx-auto px-6 md:px-0">
                    
                    <section id="methodology" className="scroll-mt-32">
                        <InsightSection label="Groundwork" title="Methodology">
                            <p>
                                To uncover actionable insights, we conducted intensive focus group sessions over two major Indian cities: Bangalore and Jaipur. 
                                We deliberately constructed 8 focus groups across age and gender divides, ensuring a hyper-localized view of credit perception.
                            </p>
                            <p>
                                By placing both NTC (New to Credit) and ETC (Existing to Credit) participants in the same rooms, 
                                we incited vigorous debates. This hybrid approach allowed us to observe the organic dismantling of credit myths and the transfer of financial literacy in real-time.
                            </p>
                            <div className="my-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="p-6 rounded-2xl bg-muted/30 border border-border/5 text-center flex flex-col items-center justify-center">
                                    <span className="text-3xl font-black text-primary mb-2">12</span>
                                    <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Study Hours</span>
                                </div>
                                <div className="p-6 rounded-2xl bg-muted/30 border border-border/5 text-center flex flex-col items-center justify-center">
                                    <span className="text-3xl font-black text-primary mb-2">42</span>
                                    <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Participants</span>
                                </div>
                                <div className="p-6 rounded-2xl bg-muted/30 border border-border/5 text-center flex flex-col items-center justify-center">
                                    <span className="text-3xl font-black text-primary mb-2">8</span>
                                    <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Focus Groups</span>
                                </div>
                                <div className="p-6 rounded-2xl bg-muted/30 border border-border/5 text-center flex flex-col items-center justify-center">
                                    <span className="text-3xl font-black text-primary mb-2">2</span>
                                    <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Cities</span>
                                </div>
                            </div>
                        </InsightSection>
                    </section>

                    <div className="w-full h-px bg-border/20 my-16"></div>

                    <section id="framework" className="scroll-mt-32">
                        <InsightSection label="Synthesis" title="The Credit Adoption Engine">
                            <p>
                                The research stripped away the surface-level metrics to reveal the true psychology of credit adoption. 
                                We found that adoption isn't linear; it's a simultaneous negotiation of three overlapping paradigms.
                            </p>
                            
                            <FlipkartFrameworkVisual />

                            <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10 mt-12 font-sans relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 text-primary/10 opacity-50">
                                    <CreditCard className="w-32 h-32" />
                                </div>
                                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    Key Findings by Cohort
                                </h4>
                                <ul className="space-y-4 relative z-10 text-foreground/80 leading-relaxed max-w-[90%]">
                                    <li className="flex gap-4">
                                        <Shield className="w-6 h-6 text-foreground shrink-0" />
                                        <span><strong>New to Credit (NTC):</strong> Defined by apprehension. They believe credit leads to uncontrollable debt and hidden fees. Cash signifies control. Trust is the primary barrier.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <Sparkles className="w-6 h-6 text-foreground shrink-0" />
                                        <span><strong>Existing to Credit (ETC):</strong> Defined by optimization. They view credit as liquid capital. They meticulously track 'No Cost EMIs' and cashback rewards. Tangible value is their metric.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <Award className="w-6 h-6 text-foreground shrink-0" />
                                        <span><strong>The Commoditization Trap:</strong> With aggressive mall kiosks and cold calls, credit cards have lost their aspirational allure. Users wait to be courted rather than applying upfront. Exclusivity must be restored.</span>
                                    </li>
                                </ul>
                            </div>
                        </InsightSection>
                    </section>
                    
                    <div className="w-full h-px bg-border/20 my-16"></div>

                    <PasswordLock>
                    <section id="insights" className="scroll-mt-32">
                        <InsightSection label="Deep Dive" title="User Insights">
                            
                            {/* Pillar 1: Trust Foundation */}
                            <div className="mt-12 mb-20">
                                <h4 className="text-2xl font-sans font-bold flex items-center gap-3 mb-4 text-foreground">
                                    <Shield className="text-foreground bg-primary/10 p-1.5 rounded-lg w-8 h-8" />
                                    Trust Foundation: Addressing Apprehensions
                                </h4>
                                <p className="font-spectral text-lg text-foreground/80 leading-relaxed mb-8">
                                    Credit limits are often viewed not as purchasing power, but as a liability. Building trust requires addressing deep-rooted fears regarding budgeting, hidden charges, and penalties. Cash is still seen as the ultimate tool for financial discipline.
                                </p>
                                <div className="mb-8 rounded-3xl overflow-hidden border border-border/10">
                                    <img src={insight1Image} alt="Trust Foundation Insights" className="w-full h-auto" />
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-muted/20 border border-border/10 rounded-2xl p-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <TargetChip target="NTC" />
                                            <h5 className="font-bold text-foreground">Apprehensions about Expenses and Charges</h5>
                                        </div>
                                        <ExpandableQuotes 
                                            topQuotes={
                                                <>
                                                    <QuoteBlock 
                                                        quote="I totally believe in COD as I spend a lot & it would be difficult to budget myself using a CC."
                                                        author="Sneha"
                                                        role="Bangalore"
                                                    />
                                                    <QuoteBlock 
                                                        quote="CC is the most expensive loan, late fee, EMI interest, lots of expenses, so it's best to avoid it."
                                                        author="Muskan"
                                                        role="Jaipur"
                                                    />
                                                </>
                                            }
                                            hiddenQuotes={
                                                <>
                                                    <QuoteBlock 
                                                        quote="I am a B.Com and I know how to handle my finances. I have good savings hence I don't need Credit."
                                                        author="Muskan"
                                                        role="Jaipur"
                                                    />
                                                </>
                                            }
                                        />
                                    </div>

                                    <div className="bg-muted/20 border border-border/10 rounded-2xl p-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <TargetChip target="NTC" />
                                            <h5 className="font-bold text-foreground">Concerns about CIBIL and Penalties</h5>
                                        </div>
                                        <QuoteBlock 
                                            quote="Market low chala jayega to CC ka kaise pay karenge, uska darr lagta hai mujhe. CIBIL score also affects agar payment time par na ho."
                                            author="Vikram"
                                            role="Jaipur"
                                        />
                                    </div>

                                    <div className="bg-muted/20 border border-border/10 rounded-2xl p-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <TargetChip target="Both" />
                                            <h5 className="font-bold text-foreground">Cash & Debit as Finance Managers</h5>
                                        </div>
                                        <ExpandableQuotes 
                                            topQuotes={
                                                <>
                                                    <QuoteBlock 
                                                        quote="Wife ke sath shopping par Cash le jao to utna hi kharch hoga. CC mein to koi limit hi nhi hai."
                                                        author="Nilesh"
                                                        role="Jaipur"
                                                    />
                                                    <QuoteBlock 
                                                        quote="Month ke starting mein hi main 10k cash nikal kar ghar pe rakh deta hun. Ghar ke kharcho ke liye uss mein se hi lete rehte hain."
                                                        author="Abhishek"
                                                        role="Jaipur"
                                                    />
                                                </>
                                            }
                                            hiddenQuotes={
                                                <QuoteBlock 
                                                    quote="Shuru mein maine CC se paise nikal liye the, to uspe kafi penalty lagti hai."
                                                    author="Kaushal"
                                                    role="Jaipur"
                                                />
                                            }
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Pillar 2: Tangible Value */}
                            <div className="mb-20">
                                <h4 className="text-2xl font-sans font-bold flex items-center gap-3 mb-4 text-foreground">
                                    <Sparkles className="text-foreground bg-primary/10 p-1.5 rounded-lg w-8 h-8" />
                                    Tangible Value: EMIs, Cashbacks & Relevance
                                </h4>
                                <p className="font-spectral text-lg text-foreground/80 leading-relaxed mb-8">
                                    Once past the trust barrier, adoption relies purely on concrete value. Abstract perks are ignored, while tangible monetary returns, specifically No Cost EMIs and direct cashbacks, act as the primary catalyst for usage. Yet, this value must directly match the user's spending habits.
                                </p>
                                <div className="mb-8 rounded-3xl overflow-hidden border border-border/10">
                                    <img src={insight2Image} alt="Tangible Value Insights" className="w-full h-auto" />
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-muted/20 border border-border/10 rounded-2xl p-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <TargetChip target="ETC" />
                                            <h5 className="font-bold text-foreground">Financial Independence via No Cost EMIs</h5>
                                        </div>
                                        <ExpandableQuotes 
                                            topQuotes={
                                                <>
                                                    <QuoteBlock 
                                                        quote="Why should I pay from savings if I am getting 0% EMI on CC? I will get interest on my savings too!"
                                                        author="Rajesh"
                                                        role="Jaipur"
                                                    />
                                                    <QuoteBlock 
                                                        quote="Kisi friend/relative ki zarurat nhi hai money ko leke. I have 30 lacs (6 CC's with 5 lac limit) with me which I can access any time."
                                                        author="Sandeep"
                                                        role="Jaipur"
                                                    />
                                                </>
                                            }
                                            hiddenQuotes={
                                                <>
                                                    <QuoteBlock 
                                                        quote="I bought a phone for my dad and paid through my CC as I was low on cash and could pay next month."
                                                        author="Krithika"
                                                        role="Bangalore"
                                                    />
                                                </>
                                            }
                                        />
                                    </div>

                                    <div className="bg-muted/20 border border-border/10 rounded-2xl p-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <TargetChip target="Both" />
                                            <h5 className="font-bold text-foreground">Navigating the Noise of Offers</h5>
                                        </div>
                                        <ExpandableQuotes 
                                            topQuotes={
                                                <>
                                                    <QuoteBlock 
                                                        quote="5% off to ab normal si cheez ho chuki hai. Har koi 5% ya 10% off deta hi hai."
                                                        author="Balkrishan"
                                                        role="Jaipur"
                                                    />
                                                    <QuoteBlock 
                                                        quote="(After watching the video) 500 ki worth nikal deta hai ye card. Purchasing ke point of view se dekho to beneficial hai."
                                                        author="Vikram"
                                                        role="Jaipur"
                                                    />
                                                </>
                                            }
                                            hiddenQuotes={
                                                <QuoteBlock 
                                                    quote="Offers use mein aaye to main dekhti hun. Mujhe Grofers, DMart, Fuel par offers dikhao. Flipkart se to main shopping karti nhi hun."
                                                    author="Nalini"
                                                    role="Jaipur"
                                                />
                                            }
                                        />
                                    </div>
                                    
                                </div>
                            </div>

                            {/* Pillar 3: Exclusivity */}
                            <div className="mb-20">
                                <h4 className="text-2xl font-sans font-bold flex items-center gap-3 mb-4 text-foreground">
                                    <Gem className="text-foreground bg-primary/10 p-1.5 rounded-lg w-8 h-8" />
                                    Exclusivity: Escaping the Commoditization Trap
                                </h4>
                                <p className="font-spectral text-lg text-foreground/80 leading-relaxed mb-8">
                                    Credit cards are no longer status symbols. Aggressive offline marketing (e.g., kiosks in malls) has diluted exclusivity. Users now feel that the power resides with them; they wait for banks to approach them rather than actively applying. Premium features like lounge access and credit limits determine perceived value.
                                </p>
                                <div className="mb-8 rounded-3xl overflow-hidden border border-border/10">
                                    <img src={insight3Image} alt="Exclusivity Insights" className="w-full h-auto" />
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-muted/20 border border-border/10 rounded-2xl p-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <TargetChip target="Both" />
                                            <h5 className="font-bold text-foreground">The Loss of Aspirational Value</h5>
                                        </div>
                                        <ExpandableQuotes 
                                            topQuotes={
                                                <>
                                                    <QuoteBlock 
                                                        quote="Mujhe CC lena nhi hai, interest show karo to malls mein bohot ghumte hain CC dene ke liye."
                                                        author="Sakshi"
                                                        role="Jaipur"
                                                    />
                                                    <QuoteBlock 
                                                        quote="Saamne se koi approach kare to main sochta hun, khud jaake kyu apply karna."
                                                        author="Sandeep"
                                                        role="Jaipur"
                                                    />
                                                </>
                                            }
                                            hiddenQuotes={
                                                <>
                                                    <QuoteBlock 
                                                        quote="Mere office aaye the bank wale, free mein headphones mil rahe the apply karne ke liye, to wahi apply kiya maine."
                                                        author="Geeta"
                                                        role="Jaipur"
                                                    />
                                                </>
                                            }
                                        />
                                    </div>

                                    <div className="bg-muted/20 border border-border/10 rounded-2xl p-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <TargetChip target="ETC" />
                                            <h5 className="font-bold text-foreground">Scrutinizing Limits and Premium Perks</h5>
                                        </div>
                                        <ExpandableQuotes 
                                            topQuotes={
                                                <>
                                                    <QuoteBlock 
                                                        quote="Limit kya milegi ye pata chal jaata to aur achha rehta. Kya pata 20000 ka card banake de diya to main karunga hi kya. 2.5 lac ke cards hain mere pass."
                                                        author="Nilesh"
                                                        role="Jaipur"
                                                    />
                                                    <QuoteBlock 
                                                        quote="Lounge access mostly premium cards par milta hai, ye achha hai. Airport jaana to ab normal sa ho gaya hai."
                                                        author="Manish"
                                                        role="Jaipur"
                                                    />
                                                </>
                                            }
                                            hiddenQuotes={
                                                <QuoteBlock 
                                                    quote="Pehle bhi FK CBC ke baare mein dekha tha, lekin 500 fees dekh ke hata diya. Fees kam honi chahiye canopy walo se compare karu to."
                                                    author="Abhishek"
                                                    role="Jaipur"
                                                />
                                            }
                                        />
                                    </div>
                                    
                                    <div className="bg-muted/20 border border-border/10 rounded-2xl p-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <TargetChip target="Both" />
                                            <h5 className="font-bold text-foreground">Missing the Co-Branded Context</h5>
                                        </div>
                                        <QuoteBlock 
                                            quote="I saw the OLA CBC in the app but didn't apply for it. If I want a card I will ask the bank. I think OLA becomes a mediator."
                                            author="Rahul"
                                            role="Bangalore"
                                        />
                                    </div>
                                </div>
                            </div>

                        </InsightSection>
                    </section>

                    <div className="w-full h-px bg-border/20 my-16"></div>

                    <section id="personas" className="scroll-mt-32">
                        <InsightSection label="Archetypes" title="User Personas">
                            <div className="grid md:grid-cols-2 gap-6 mt-8 font-sans">
                                
                                {/* Persona 1 */}
                                <div className="bg-muted/20 border border-border/10 rounded-3xl p-8 flex flex-col hover:bg-muted/40 transition-colors">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black text-2xl uppercase">
                                            V
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-foreground">The Veteran</h4>
                                            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Multiple CC Holder</p>
                                        </div>
                                    </div>
                                    <div className="flex-1 space-y-4">
                                        <div>
                                            <span className="text-[10px] uppercase font-bold text-foreground tracking-widest mb-1 block">Feels</span>
                                            <ul className="text-sm text-foreground/80 space-y-1 list-disc list-inside">
                                                <li>CCs provide financial independence</li>
                                                <li>Meant to be used for all transactions</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <span className="text-[10px] uppercase font-bold text-foreground tracking-widest mb-1 block">Wants</span>
                                            <ul className="text-sm text-foreground/80 space-y-1 list-disc list-inside">
                                                <li>Incremental, highly tangible benefits</li>
                                                <li>Credit limits on par with their premium cards</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Persona 2 */}
                                <div className="bg-muted/20 border border-border/10 rounded-3xl p-8 flex flex-col hover:bg-muted/40 transition-colors">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black text-2xl uppercase">
                                            S
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-foreground">The Shopper</h4>
                                            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Manages Household Budget</p>
                                        </div>
                                    </div>
                                    <div className="flex-1 space-y-4">
                                        <div>
                                            <span className="text-[10px] uppercase font-bold text-foreground tracking-widest mb-1 block">Feels</span>
                                            <ul className="text-sm text-foreground/80 space-y-1 list-disc list-inside">
                                                <li>CCs might tempt them to increase expenses</li>
                                                <li>Fear of hidden charges</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <span className="text-[10px] uppercase font-bold text-foreground tracking-widest mb-1 block">Wants</span>
                                            <ul className="text-sm text-foreground/80 space-y-1 list-disc list-inside">
                                                <li>Highly relevant, category-specific offers</li>
                                                <li>Clear math on how shopping saves them money</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Persona 3 */}
                                <div className="bg-muted/20 border border-border/10 rounded-3xl p-8 flex flex-col md:col-span-2 hover:bg-muted/40 transition-colors">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black text-2xl uppercase">
                                            O
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-foreground">The Orthodox</h4>
                                            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Cash & Debit Purist</p>
                                        </div>
                                    </div>
                                    <div className="flex-1 grid md:grid-cols-2 gap-4">
                                        <div>
                                            <span className="text-[10px] uppercase font-bold text-foreground tracking-widest mb-1 block">Feels</span>
                                            <ul className="text-sm text-foreground/80 space-y-1 list-disc list-inside">
                                                <li>Strongly against the idea of credit/loans</li>
                                                <li>Deep fear of negative CIBIL impact</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <span className="text-[10px] uppercase font-bold text-foreground tracking-widest mb-1 block">Wants</span>
                                            <ul className="text-sm text-foreground/80 space-y-1 list-disc list-inside">
                                                <li>To play it safe using only personal savings</li>
                                                <li>Absolute assurance of control over personal finances</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </InsightSection>
                    </section>

                    <div className="w-full h-px bg-border/20 my-16"></div>

                    <section id="strategy" className="scroll-mt-32">
                        <InsightSection label="Translation" title="Strategy to Feature">
                            <p className="mb-10">
                                Shifting from raw psychology to actionable features requires bridging what we observed ('I saw this') 
                                with our domain knowledge ('I know this'), leading to concrete product ideation.
                            </p>

                            <FlipkartIdeationVisual />

                            <IdeationCard 
                                saw="NTC users hold vast misconceptions about hidden charges, penalties, and interest rates. Most are completely unaware of what a Co-Branded Card actually is."
                                know="Financial anxiety blocks conversion. Ambiguity is the enemy of adoption."
                                pattern="Interactive Financial Education"
                                idea="Implement a highly transparent, interactive 'CC anatomy' explainer video and interactive sandbox during the application flow. Show exactly how billing cycles work and where fees apply, building immense trust upfront."
                            />

                            <IdeationCard 
                                saw="Users couldn't comprehend the static value of '1.5% cashback'. But when shown a video demonstrating actual savings, they were immediately intrigued and wanted to apply."
                                know="Abstract percentages lack emotional weight. Concrete monetary value drives desire."
                                pattern="Dynamic Value Projections"
                                idea="Build a dynamic 'Savings Simulator' on the Store Page. Users input their monthly spend across categories (grocery, flights, e-commerce), and the UI generates a concrete, projected annual savings figure."
                            />

                            <IdeationCard 
                                saw="People using aggressive credit card 'booths' at malls view the card as cheap/replaceable. Meanwhile, experienced users heavily scrutinize their credit limits."
                                know="Prestige and exclusivity are powerful motivators. Users want to feel selected, not sold to."
                                pattern="Invitational Exclusivity"
                                idea="Pivot the marketing from 'Apply Now' to an aesthetic 'Request an Invite' or 'Check your exclusive pre-approval limit', positioning the card as a privileged membership rather than a commodity."
                            />
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
