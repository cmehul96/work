import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../components/ui/theme-toggle';
import { AgentWorkflowVisualization } from '../components/agent-visualization';
import { projects } from '../data/projects';

export default function Home() {

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 py-4 md:px-12 z-50 flex justify-between items-center bg-background/90 backdrop-blur-md border-b border-border/10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-sans text-xl font-bold tracking-tight text-foreground"
        >
          Mehul.
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center gap-6 font-sans"
        >
          <Link to="/resume" className="text-xs uppercase tracking-widest font-bold text-primary hover:opacity-80 transition-opacity">
            Resume
          </Link>
          <ThemeToggle />
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-28 md:pt-48 pb-24 px-6 md:px-12 w-full flex flex-col items-center justify-center min-h-[80vh] overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col md:flex-row gap-12 md:gap-16 items-start md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 max-w-5xl text-left"
          >
            <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
              <span className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-muted/60 text-[10px] md:text-xs font-semibold tracking-wider uppercase text-foreground/80">Generative Research</span>
              <span className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-muted/60 text-[10px] md:text-xs font-semibold tracking-wider uppercase text-foreground/80">Mixed Methods</span>
              <span className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-muted/60 text-[10px] md:text-xs font-semibold tracking-wider uppercase text-foreground/80">UX Strategy</span>
              <span className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-muted/60 text-[10px] md:text-xs font-semibold tracking-wider uppercase text-foreground/80">Vibe Coding</span>
            </div>
            
            <div className="flex flex-row items-stretch md:block gap-4 sm:gap-6 mb-6">
              <div className="w-24 sm:w-36 md:hidden rounded-2xl overflow-hidden shrink-0 bg-muted relative">
                <img 
                  src="/images/DP.jpeg"
                  alt="Mehul Chaudhary"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <h1 className="font-sans text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] md:leading-[1.05] tracking-tighter text-foreground group text-left m-0 md:mb-6 flex-1 py-0.5 md:py-0">
                <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70 block">Mehul Chaudhary</span>
                <span className="text-foreground/30 font-medium tracking-tight text-lg sm:text-xl md:text-4xl lg:text-5xl mt-1 md:mt-3 block">
                  Mixed-Methods UX Researcher & Builder
                </span>
              </h1>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-foreground/70 font-sans leading-relaxed max-w-2xl text-balance font-medium mt-4 md:mt-6 text-left">
              I figure out how people actually use things by throwing myself into their environments. I triangulate messy qualitative insights with hard data to build better experiences. I'm into vibe coding, and actively build my own internal tools, ranging from a research repository to entire autonomous platforms like <a href="https://theforesite.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Foresite</a>.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative shrink-0 hidden md:flex justify-end mt-4 md:mt-0"
          >
            <div className="relative p-3 rounded-[2.5rem] bg-background/50 border border-border/10 backdrop-blur-sm">
              <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-[2rem] overflow-hidden relative isolate z-10 bg-muted transition-all duration-700 ease-out">
                <img 
                  src="/images/DP.jpeg"
                  alt="Mehul Chaudhary"
                  className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700 ease-out" 
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-border/20"></div>

      {/* Projects Section */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-12 md:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 font-sans text-3xl font-bold tracking-tight text-foreground"
        >
          <h2>Selected Work</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group flex flex-col h-full cursor-pointer"
            >
              {project.isInternal ? (
                <Link to={project.link || '#'} className="flex flex-col h-full">
                  <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] bg-muted/40 flex items-center justify-center mb-6">
                    {project.hasIllustration ? (
                      <div className="absolute inset-0 flex items-center justify-center scale-[0.6] sm:scale-75 origin-center pointer-events-none pb-0 mt-8">
                        <AgentWorkflowVisualization />
                      </div>
                    ) : (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                        onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop'; }}
                      />
                    )}
                    <div className="absolute top-4 left-4 md:top-6 md:left-6 px-3 py-1.5 md:px-4 md:py-2 bg-background/90 backdrop-blur-sm rounded-full text-[10px] md:text-sm font-bold tracking-widest uppercase">
                      <span className={project.logoColor || 'text-foreground'}>{project.logoText}</span>
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow px-2">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-sans text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                      <div className="w-10 h-10 rounded-full bg-primary/5 text-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0 duration-300">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                    <p className="text-foreground/70 leading-[1.6] font-spectral text-lg mb-4 flex-grow">
                      {project.description}
                    </p>
                    {project.impact && (
                      <div className="flex items-start gap-2.5 mb-6 p-3.5 rounded-2xl bg-primary/5 border border-primary/10">
                        <TrendingUp className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <p className="text-foreground/80 text-sm font-medium leading-relaxed font-sans">
                          {project.impact}
                        </p>
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-full bg-muted text-foreground/80 text-[11px] font-bold uppercase tracking-widest font-sans"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ) : project.link && (
                <a href={`https://${project.link}`} target="_blank" rel="noreferrer" className="flex flex-col h-full">
                  <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] bg-muted/40 flex items-center justify-center mb-6">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop'; }}
                    />
                    <div className="absolute top-4 left-4 md:top-6 md:left-6 px-3 py-1.5 md:px-4 md:py-2 bg-background/90 backdrop-blur-sm rounded-full text-[10px] md:text-sm font-bold tracking-widest uppercase">
                      <span className={project.logoColor || 'text-foreground'}>{project.logoText}</span>
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow px-2">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-sans text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                      <div className="w-10 h-10 rounded-full bg-primary/5 text-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0 duration-300">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                    <p className="text-foreground/70 leading-[1.6] font-spectral text-lg mb-6 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-full bg-muted text-foreground/80 text-[11px] font-bold uppercase tracking-widest font-sans"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 text-center text-sm opacity-50 font-medium uppercase tracking-widest flex flex-col items-center gap-4 border-t border-border/10 bg-muted/40 font-sans">
        <div>
          &copy; 2026 Mehul Chaudhary
        </div>
      </footer>
    </div>
  );
}
