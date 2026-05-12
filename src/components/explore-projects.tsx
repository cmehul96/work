import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import { AgentWorkflowVisualization } from './agent-visualization';

export function ExploreProjects() {
  const location = useLocation();
  const currentPath = location.pathname;

  // Show all projects except the current one
  const displayProjects = projects.filter(p => p.link !== currentPath);

  return (
    <section className="max-w-3xl mx-auto px-6 py-20 font-sans mb-8">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Explore more work</h2>
      </div>

      {/* Carousel Container */}
      <div className="w-full overflow-x-auto pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex gap-6 w-max">
          {displayProjects.map((project, index) => (
            <div key={index} className="snap-start shrink-0 w-[280px] sm:w-[320px] group relative flex flex-col transition-all duration-300">
              <Link to={project.link || '#'} className="flex flex-col h-full w-full">
                <div className="relative aspect-[4/3] w-full bg-muted/40 overflow-hidden rounded-[2rem] mb-6">
                  {project.hasIllustration ? (
                    <div className="absolute inset-0 flex items-center justify-center scale-[0.6] origin-center mt-6">
                      <AgentWorkflowVisualization />
                    </div>
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop'; }}
                    />
                  )}
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-background/95 backdrop-blur-md rounded-lg text-[10px] font-bold tracking-wider uppercase">
                    <span className={project.logoColor || 'text-foreground'}>{project.logoText}</span>
                  </div>
                </div>
                <div className="flex flex-col flex-grow px-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-sans text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors pr-6">
                      {project.title}
                    </h3>
                  </div>
                  <div className="absolute top-[40%] right-0 w-9 h-9 rounded-full bg-primary/5 text-primary flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight size={18} />
                  </div>
                  <p className="text-foreground/70 text-lg leading-[1.6] font-spectral line-clamp-2 italic mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags?.slice(0, 2).map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-full bg-muted text-foreground/80 text-[10px] font-bold uppercase tracking-widest font-sans"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
