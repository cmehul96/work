"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ForesightMascot } from "../ui/foresight-mascot";
import {
  Database,
  FileText,
  Users,
  BarChart3,
  Send,
  MessageSquare,
  Headphones,
  Globe,
  ClipboardList
} from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { useIsMobile } from "../../hooks/use-mobile";

// Tooltip descriptions for each icon
const iconDescriptions: Record<string, string> = {
  web: "Scrapes public web data and competitor insights",
  crm: "Analyzes customer data from your CRM system",
  support: "Reviews support tickets and customer feedback",
  historical: "Processes historical research and analytics data",
  plan: "Generates research plan with objectives and methodology",
  participants: "Identifies and recruits target user segments",
  questionnaire: "Creates screening surveys for participant qualification",
  sessions: "Conducts AI-powered interview sessions",
  report: "Synthesizes findings into comprehensive research reports",
  actionables: "Extracts actionable insights and recommendations",
  communication: "Shares results with stakeholders and team members",
};

export function AgentWorkflowVisualization() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredPlanet, setHoveredPlanet] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [tooltipAlignment, setTooltipAlignment] = useState<'center' | 'left' | 'right'>('center');
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Slower, smooth time progression for orbital motion
  // On mobile, use slower update interval to reduce flickering
  useEffect(() => {
    if (isPaused) return;

    const interval = isMobile ? 100 : 50; // Slower updates on mobile
    const increment = isMobile ? 0.004 : 0.008; // Slower motion on mobile

    const timer = setInterval(() => {
      setTime(prev => prev + increment);
    }, interval);

    return () => clearInterval(timer);
  }, [isPaused, isMobile]);

  // Three named orbits with grouped workflow steps
  const planets = [
    // Orbit 1: Context Gathering - All on same radius for perfect alignment (fastest - inner orbit)
    {
      id: 'web',
      label: 'Web',
      icon: Globe,
      radius: 140,
      speed: 1.12, // 40% faster than original - inner orbit moves fastest
      size: 'sm',
      orbit: 'Context Gathering'
    },
    {
      id: 'crm',
      label: 'CRM',
      icon: Database,
      radius: 140,
      speed: 1.12,
      size: 'sm',
      orbit: 'Context Gathering'
    },
    {
      id: 'support',
      label: 'Support',
      icon: Headphones,
      radius: 140,
      speed: 1.12,
      size: 'sm',
      orbit: 'Context Gathering'
    },
    {
      id: 'historical',
      label: 'Data',
      icon: BarChart3,
      radius: 140,
      speed: 1.12,
      size: 'sm',
      orbit: 'Context Gathering'
    },

    // Orbit 2: Plan and Sessions - All on same radius for perfect alignment (medium speed - middle orbit)
    {
      id: 'plan',
      label: 'Plan',
      icon: FileText,
      radius: 200,
      speed: 0.72, // 20% faster than original - middle orbit
      size: 'sm',
      orbit: 'Plan and Sessions'
    },
    {
      id: 'participants',
      label: 'Users',
      icon: Users,
      radius: 200,
      speed: 0.72,
      size: 'sm',
      orbit: 'Plan and Sessions'
    },
    {
      id: 'questionnaire',
      label: 'Survey',
      icon: ClipboardList,
      radius: 200,
      speed: 0.72,
      size: 'sm',
      orbit: 'Plan and Sessions'
    },
    {
      id: 'sessions',
      label: 'Interviews',
      icon: MessageSquare,
      radius: 200,
      speed: 0.72,
      size: 'sm',
      orbit: 'Plan and Sessions'
    },

    // Orbit 3: Analysis - All on same radius for perfect alignment (slowest - outer orbit)
    {
      id: 'report',
      label: 'Report',
      icon: FileText,
      radius: 260,
      speed: 0.4, // Original speed maintained - outer orbit moves slowest
      size: 'sm',
      orbit: 'Analysis'
    },
    {
      id: 'actionables',
      label: 'Actions',
      icon: Send,
      radius: 260,
      speed: 0.4,
      size: 'sm',
      orbit: 'Analysis'
    },
    {
      id: 'communication',
      label: 'Share',
      icon: Users,
      radius: 260,
      speed: 0.4, // Same speed for perfect alignment within orbit
      size: 'sm',
      orbit: 'Analysis'
    },
  ];

  // Orbit definitions with labels (closer together)
  const orbits = [
    { name: 'Context Gathering', radius: isMobile ? 100 : 140, color: 'text-primary' },
    { name: 'Plan and Sessions', radius: isMobile ? 145 : 200, color: 'text-primary' },
    { name: 'Analysis', radius: isMobile ? 190 : 260, color: 'text-primary' },
  ];

  // Curved text component for orbit labels - positioned just above their orbits
  const CurvedOrbitLabel = ({ text, radius, id }: { text: string; radius: number; id: string }) => {
    // Use consistent arc length for all labels to ensure uniform positioning
    const arcLength = Math.min(120, radius * 0.6); // Fixed arc length for consistent positioning
    const labelRadius = radius + 5; // Consistent 5px distance - just above the orbit

    return (
      <div
        className="absolute pointer-events-none"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: (labelRadius + 30) * 2,
          height: (labelRadius + 30) * 2,
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox={`-${labelRadius + 30} -${labelRadius + 30} ${(labelRadius + 30) * 2} ${(labelRadius + 30) * 2}`}
          className="overflow-visible"
        >
          <defs>
            {/* Create a small arc at the top, positioned just above the orbit */}
            <path
              id={`orbit-top-${id}`}
              d={`M -${arcLength / 2} -${labelRadius} A ${labelRadius} ${labelRadius} 0 0 1 ${arcLength / 2} -${labelRadius}`}
            />
          </defs>
          <text
            className="text-[8px] font-semibold fill-primary"
            style={{ letterSpacing: '1.2px' }}
          >
            <textPath href={`#orbit-top-${id}`} startOffset="50%" textAnchor="middle">
              {text}
            </textPath>
          </text>
        </svg>
      </div>
    );
  };

  // Planet component with orbital motion - starts already in orbit
  const Planet = ({ planet, initialOffset }: { planet: typeof planets[0]; initialOffset: number; key?: string | number }) => {
    const Icon = planet.icon;
    const radius = isMobile ? (planet.radius * 0.72) : planet.radius; // Scale down radii for mobile
    const angle = time * planet.speed + initialOffset; // Add initial offset so planets start spread out
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    // Size mapping
    const sizeMap = {
      sm: { container: isMobile ? 'w-6 h-6' : 'w-8 h-8', icon: isMobile ? 'w-3 h-3' : 'w-4 h-4', text: isMobile ? 'text-[6px]' : 'text-[8px]' },
      md: { container: isMobile ? 'w-8 h-8' : 'w-10 h-10', icon: isMobile ? 'w-4 h-4' : 'w-5 h-5', text: isMobile ? 'text-[7px]' : 'text-[9px]' },
      lg: { container: isMobile ? 'w-10 h-10' : 'w-12 h-12', icon: isMobile ? 'w-5 h-5' : 'w-6 h-6', text: isMobile ? 'text-[8px]' : 'text-[10px]' },
      xl: { container: isMobile ? 'w-12 h-12' : 'w-14 h-14', icon: isMobile ? 'w-6 h-6' : 'w-7 h-7', text: isMobile ? 'text-[9px]' : 'text-[11px]' },
    } as const;

    const size = sizeMap[planet.size as keyof typeof sizeMap];

    const handleMouseEnter = (e: React.MouseEvent) => {
      setIsPaused(true);
      setHoveredPlanet(planet.id);

      // Calculate tooltip position relative to container
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const targetRect = e.currentTarget.getBoundingClientRect();

        // Position relative to container
        const relativeX = targetRect.left - containerRect.left + targetRect.width / 2;
        const relativeY = targetRect.top - containerRect.top;

        // Determine alignment based on position in viewport
        const tooltipWidth = 320; // Approximate tooltip width
        const leftEdge = targetRect.left - tooltipWidth / 2;
        const rightEdge = targetRect.right + tooltipWidth / 2;

        let alignment: 'center' | 'left' | 'right' = 'center';

        // Check if tooltip would overflow left edge
        if (leftEdge < 20) {
          alignment = 'left';
        }
        // Check if tooltip would overflow right edge
        else if (rightEdge > window.innerWidth - 20) {
          alignment = 'right';
        }

        setTooltipAlignment(alignment);
        setTooltipPosition({ x: relativeX, y: relativeY });
      }
    };

    const handleMouseLeave = () => {
      setIsPaused(false);
      setHoveredPlanet(null);
    };

    return (
      <motion.div
        className="absolute cursor-pointer"
        style={{
          left: '50%',
          top: '50%',
          transform: `translate3d(${x}px, ${y}px, 0)`,
          willChange: "transform",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-col items-center gap-2 -translate-x-1/2 -translate-y-1/2">
          {/* Planet */}
          <motion.div
            className={`${size.container} rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center backdrop-blur-sm transition-all duration-200`}
            whileHover={{
              scale: 1.15,
              backgroundColor: 'rgba(var(--primary-rgb), 0.2)',
              borderColor: 'rgba(var(--primary-rgb), 0.4)',
            }}
          >
            <Icon className={`${size.icon} text-primary`} />
          </motion.div>

          {/* Label */}
          <span className={`${size.text} font-medium text-primary whitespace-nowrap bg-background/80 backdrop-blur-sm px-2 py-0.5 rounded-full border border-primary/10`}>
            {planet.label}
          </span>
        </div>
      </motion.div>
    );
  };

  // Orbital rings (visible guides)
  const OrbitalRing = ({ radius, opacity = 0.2 }: { radius: number; opacity?: number }) => (
    <div
      className="absolute border border-primary/30 rounded-full pointer-events-none"
      style={{
        width: radius * 2,
        height: radius * 2,
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: opacity
      }}
    />
  );

  // No energy particles needed

  return (
    <div ref={containerRef} className={`relative w-full h-full ${isMobile ? 'min-h-[400px]' : 'min-h-[600px]'}`} style={{ willChange: "transform", transform: "translateZ(0)" }}>
      {/* Tooltip */}
      <AnimatePresence>
        {hoveredPlanet && (() => {
          const planet = planets.find(p => p.id === hoveredPlanet);
          if (!planet) return null;
          const Icon = planet.icon;

          // Calculate transform based on alignment
          const getTransform = () => {
            switch (tooltipAlignment) {
              case 'left':
                return 'translate(0, -100%)'; // Align to left edge
              case 'right':
                return 'translate(-100%, -100%)'; // Align to right edge
              default:
                return 'translate(-50%, -100%)'; // Center align
            }
          };

          return (
            <motion.div
              ref={tooltipRef}
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute z-[100] pointer-events-none"
              style={{
                left: tooltipPosition.x,
                top: tooltipPosition.y - 20,
                transform: getTransform(),
              }}
            >
              {/* Tooltip content - redesigned */}
              <div className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground rounded-xl shadow-2xl border border-primary-foreground/10 backdrop-blur-md overflow-hidden min-w-[280px] max-w-[320px]">
                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

                {/* Content */}
                <div className="relative px-4 py-3 flex items-start gap-3">
                  {/* Icon container */}
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary-foreground/15 border border-primary-foreground/20 flex items-center justify-center mt-0.5">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>

                  {/* Text content */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold mb-1 text-primary-foreground">
                      {planet.label}
                    </h4>
                    <p className="text-xs leading-relaxed text-primary-foreground/90">
                      {iconDescriptions[hoveredPlanet]}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })()}
      </AnimatePresence>

      {/* Background with subtle grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-5" />
      </div>

      {/* Solar system - full space */}
      <div className="absolute inset-0 flex items-center justify-center">

        {/* Named orbital rings */}
        {orbits.map((orbit, index) => (
          <div key={orbit.name}>
            <OrbitalRing radius={orbit.radius} opacity={0.2} />
            {/* Curved orbit label positioned just above orbit */}
            <CurvedOrbitLabel
              text={orbit.name}
              radius={orbit.radius}
              id={`${index}`}
            />
          </div>
        ))}

        {/* No energy particles - clean sun */}

        {/* All planets orbiting - grouped by orbit with proper spacing */}
        {planets.map((planet, index) => {
          // Group planets by orbit for proper spacing
          const contextPlanets = planets.filter(p => p.orbit === 'Context Gathering');
          const planPlanets = planets.filter(p => p.orbit === 'Plan and Sessions');
          const analysisPlanets = planets.filter(p => p.orbit === 'Analysis');

          let initialOffset = 0;
          if (planet.orbit === 'Context Gathering') {
            const contextIndex = contextPlanets.findIndex(p => p.id === planet.id);
            initialOffset = contextIndex * (Math.PI * 2 / contextPlanets.length);
          } else if (planet.orbit === 'Plan and Sessions') {
            const planIndex = planPlanets.findIndex(p => p.id === planet.id);
            initialOffset = planIndex * (Math.PI * 2 / planPlanets.length);
          } else if (planet.orbit === 'Analysis') {
            const analysisIndex = analysisPlanets.findIndex(p => p.id === planet.id);
            initialOffset = analysisIndex * (Math.PI * 2 / analysisPlanets.length);
          }

          return (
            <Planet
              key={planet.id}
              planet={planet}
              initialOffset={initialOffset}
            />
          );
        })}

        {/* Central Sun (Agent) */}
        <div className="relative z-10">
          {/* Multiple layered sun glow effects */}
          <motion.div
            className="absolute inset-0 rounded-full blur-3xl bg-primary/20"
            style={{
              willChange: "transform, opacity",
              transform: "translateZ(0)",
            }}
            animate={
              isMobile
                ? {
                  opacity: 0.5, // Static opacity on mobile
                }
                : {
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.7, 0.4],
                }
            }
            transition={
              isMobile
                ? {}
                : {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
            }
          />
          <motion.div
            className="absolute inset-0 rounded-full blur-2xl bg-primary/15"
            style={{
              willChange: "transform, opacity",
              transform: "translateZ(0)",
            }}
            animate={
              isMobile
                ? {
                  opacity: 0.45, // Static opacity on mobile
                }
                : {
                  scale: [1.1, 1.4, 1.1],
                  opacity: [0.3, 0.6, 0.3],
                }
            }
            transition={
              isMobile
                ? {}
                : {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }
            }
          />
          <motion.div
            className="absolute inset-0 rounded-full blur-xl bg-primary/10"
            style={{
              willChange: "transform, opacity",
              transform: "translateZ(0)",
            }}
            animate={
              isMobile
                ? {
                  opacity: 0.35, // Static opacity on mobile
                }
                : {
                  scale: [1.2, 1.5, 1.2],
                  opacity: [0.2, 0.5, 0.2],
                }
            }
            transition={
              isMobile
                ? {}
                : {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }
            }
          />

          {/* Clean agent - no background circle */}
          <motion.div
            className={`relative ${isMobile ? 'p-4' : 'p-8'}`}
            style={{
              willChange: "transform",
              transform: "translateZ(0)",
            }}
            animate={
              isMobile
                ? {} // Disable scale animation on mobile
                : {
                  scale: [1, 1.02, 1],
                }
            }
            transition={
              isMobile
                ? {}
                : {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
            }
          >
            <div className={`${isMobile ? 'scale-[1.1]' : 'scale-[1.5]'}`}>
              <ForesightMascot
                isVisible={true}
                isSpeaking={true}
                size="lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
