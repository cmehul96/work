"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

interface ForesightMascotProps {
  isVisible: boolean;
  isThinking?: boolean;
  isSpeaking?: boolean;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg";
  brandColor?: string | null;
}

// Helper function to generate gradient colors from hex
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function rgbToHsl(
  r: number,
  g: number,
  b: number,
): { h: number; s: number; l: number } {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h = 0,
    s = 0;
  const l = (max + min) / 2;
  const d = max - min;
  if (d !== 0) {
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return { h: h * 360, s: s * 100, l: l * 100 };
}

function hslToHex(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0,
    g = 0,
    b = 0;
  if (h >= 0 && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (h >= 60 && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (h >= 180 && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (h >= 240 && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (h >= 300 && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  const toHex = (n: number) => {
    const hex = Math.round((n + m) * 255).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function generateGradientColors(brandColor: string): {
  light: string;
  dark: string;
} {
  const rgb = hexToRgb(brandColor);
  if (!rgb) return { light: "#D9C5FF", dark: "#55407D" }; // Fallback to default purple

  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

  // Create a very light version for the top of the gradient
  // Set lightness to 85-88% for a soft, light appearance
  // Boost saturation slightly for vibrancy (but cap at 100%)
  const lightColor = hslToHex(hsl.h, Math.min(hsl.s * 1.1, 100), 87);

  // Create a medium-toned darker version for the bottom
  // Set lightness to 45-50% for depth without being too dark
  // Keep saturation similar to maintain color consistency
  const darkColor = hslToHex(hsl.h, Math.max(hsl.s * 0.9, 30), 48);

  return { light: lightColor, dark: darkColor };
}

export function ForesightMascot({
  isVisible,
  isThinking = false,
  isSpeaking = false,
  className,
  size = "sm",
  brandColor = null,
}: ForesightMascotProps) {
  const dimensions = {
    xs: { width: 34, height: 29 },
    sm: { width: 60, height: 52 },
    md: { width: 64, height: 56 },
    lg: { width: 100, height: 87 },
  };

  const { width, height } = dimensions[size];

  // Generate gradient colors from brand color
  const gradientColors = brandColor
    ? generateGradientColors(brandColor)
    : { light: "#D9C5FF", dark: "#55407D" };

  // Simple voice-responsive animation with smooth waveform movement
  const getVoiceAnimation = (baseValue: number) => {
    return {
      values: [
        baseValue,
        baseValue * 1.8, // Higher range
        baseValue * 0.3, // Lower range
        baseValue * 1.5,
        baseValue * 0.6,
        baseValue * 1.2,
        baseValue * 0.8,
        baseValue * 1.6,
        baseValue,
      ],
      duration: 1.5, // Smoother timing
      ease: "easeInOut",
    };
  };

  // Thinking dots pattern using waveform bars - only specific bars animate like dots
  const getThinkingDotsAnimation = (barIndex: number, baseValue: number) => {
    // Only animate bars 1, 3, and 5 (0-indexed) to create a "dots" pattern
    const thinkingBars = [1, 3, 5];
    const isThinkingBar = thinkingBars.includes(barIndex);

    if (!isThinkingBar) {
      return {
        values: [baseValue * 0.3], // Keep non-thinking bars very small
        duration: 0.1,
        ease: "easeInOut",
      };
    }

    return {
      values: [
        baseValue * 0.3, // Start small
        baseValue * 1.5, // Grow like a dot appearing
        baseValue * 0.3, // Shrink back
        baseValue * 0.3, // Stay small
        baseValue * 0.3, // Stay small
        baseValue * 0.3, // Stay small
      ],
      duration: 2.0, // Slower, contemplative timing
      ease: "easeInOut",
    };
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: isSpeaking || isThinking ? [0, -2, 0] : 0,
          }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
            y: {
              duration: isSpeaking || isThinking ? 2 : 0.4,
              repeat: isSpeaking || isThinking ? Infinity : 0,
              ease: "easeInOut",
            },
          }}
          className={cn("flex items-center justify-center", className)}
        >
          <div className="relative">
            {/* Main SVG Mascot - Using exact SVG from your logo */}
            <svg width={width} height={height} viewBox="0 0 52 45">
              {/* Definitions for gradients */}
              <defs>
                {/* Dynamic gradient based on brand color */}
                <linearGradient
                  id="paint0_linear_126_596"
                  x1="26"
                  y1="0"
                  x2="26"
                  y2="45"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor={gradientColors.light} />
                  <stop offset="1" stopColor={gradientColors.dark} />
                </linearGradient>
              </defs>

              {/* Main blob body - exact SVG path from your logo */}
              <path
                d="M52 25.5682C52 37.9946 41.301 45 26 45C10.699 45 0 37.9946 0 25.5682C0 13.1418 10.699 0 26 0C41.301 0 52 13.1418 52 25.5682Z"
                fill="url(#paint0_linear_126_596)"
              />

              {/* Black visor - exact from your SVG */}
              <rect
                x="4"
                y="15"
                width="44"
                height="18"
                rx="9"
                fill="black"
                fillOpacity="0.75"
              />

              {/* Left waveform group - voice-responsive and thinking dots animation */}
              <g>
                <motion.ellipse
                  cx="12.2255"
                  cy="24"
                  rx="0.2255"
                  ry="0.9524"
                  fill="white"
                  animate={
                    isSpeaking
                      ? {
                          ry: getVoiceAnimation(0.9524).values,
                        }
                      : isThinking
                        ? {
                            ry: getThinkingDotsAnimation(0, 0.9524).values,
                          }
                        : { ry: 0.9524 }
                  }
                  transition={{
                    duration: isSpeaking
                      ? getVoiceAnimation(0.9524).duration
                      : isThinking
                        ? getThinkingDotsAnimation(0, 0.9524).duration
                        : 0.3,
                    repeat: isSpeaking || isThinking ? Infinity : 0,
                    ease: isSpeaking
                      ? getVoiceAnimation(0.9524).ease
                      : getThinkingDotsAnimation(0, 0.9524).ease,
                    delay: isThinking ? 0 : 0,
                    repeatType: "loop",
                  }}
                />
                <motion.ellipse
                  cx="13.5944"
                  cy="24"
                  rx="0.3189"
                  ry="2.2857"
                  fill="white"
                  animate={
                    isSpeaking
                      ? {
                          ry: getVoiceAnimation(2.2857).values,
                        }
                      : isThinking
                        ? {
                            ry: getThinkingDotsAnimation(1, 2.2857).values,
                          }
                        : { ry: 2.2857 }
                  }
                  transition={{
                    duration: isSpeaking
                      ? getVoiceAnimation(2.2857).duration
                      : isThinking
                        ? getThinkingDotsAnimation(1, 2.2857).duration
                        : 0.3,
                    repeat: isSpeaking || isThinking ? Infinity : 0,
                    ease: isSpeaking
                      ? getVoiceAnimation(2.2857).ease
                      : getThinkingDotsAnimation(1, 2.2857).ease,
                    delay: isThinking ? 0.3 : 0.1,
                    repeatType: "loop",
                  }}
                />
                <motion.ellipse
                  cx="15.1888"
                  cy="24"
                  rx="0.3377"
                  ry="3.4286"
                  fill="white"
                  animate={
                    isSpeaking
                      ? {
                          ry: getVoiceAnimation(3.4286).values,
                        }
                      : isThinking
                        ? {
                            ry: getThinkingDotsAnimation(2, 3.4286).values,
                          }
                        : { ry: 3.4286 }
                  }
                  transition={{
                    duration: isSpeaking
                      ? getVoiceAnimation(3.4286).duration
                      : isThinking
                        ? getThinkingDotsAnimation(2, 3.4286).duration
                        : 0.3,
                    repeat: isSpeaking || isThinking ? Infinity : 0,
                    ease: isSpeaking
                      ? getVoiceAnimation(3.4286).ease
                      : getThinkingDotsAnimation(2, 3.4286).ease,
                    delay: isThinking ? 0 : 0.2,
                    repeatType: "loop",
                  }}
                />
                <motion.ellipse
                  cx="17.102"
                  cy="24"
                  rx="0.3377"
                  ry="4"
                  fill="white"
                  animate={
                    isSpeaking
                      ? {
                          ry: getVoiceAnimation(4).values,
                        }
                      : isThinking
                        ? {
                            ry: getThinkingDotsAnimation(3, 4).values,
                          }
                        : { ry: 4 }
                  }
                  transition={{
                    duration: isSpeaking
                      ? getVoiceAnimation(4).duration
                      : isThinking
                        ? getThinkingDotsAnimation(3, 4).duration
                        : 0.3,
                    repeat: isSpeaking || isThinking ? Infinity : 0,
                    ease: isSpeaking
                      ? getVoiceAnimation(4).ease
                      : getThinkingDotsAnimation(3, 4).ease,
                    delay: isThinking ? 0.6 : 0.3,
                    repeatType: "loop",
                  }}
                />
                <motion.ellipse
                  cx="19.0153"
                  cy="24"
                  rx="0.3377"
                  ry="3.4286"
                  fill="white"
                  animate={
                    isSpeaking
                      ? {
                          ry: getVoiceAnimation(3.4286).values || [3.4286],
                        }
                      : isThinking
                        ? {
                            ry: getThinkingDotsAnimation(4, 3.4286).values || [
                              3.4286,
                            ],
                          }
                        : { ry: 3.4286 }
                  }
                  transition={{
                    duration: isSpeaking
                      ? getVoiceAnimation(3.4286).duration
                      : isThinking
                        ? getThinkingDotsAnimation(4, 3.4286).duration
                        : 0.3,
                    repeat: isSpeaking || isThinking ? Infinity : 0,
                    ease: isSpeaking
                      ? getVoiceAnimation(3.4286).ease
                      : getThinkingDotsAnimation(4, 3.4286).ease,
                    delay: isThinking ? 0 : 0.4,
                    repeatType: "loop",
                  }}
                />
                <motion.ellipse
                  cx="20.6097"
                  cy="24"
                  rx="0.3189"
                  ry="2.2857"
                  fill="white"
                  animate={
                    isSpeaking
                      ? {
                          ry: getVoiceAnimation(2.2857).values || [2.2857],
                        }
                      : isThinking
                        ? {
                            ry: getThinkingDotsAnimation(5, 2.2857).values || [
                              2.2857,
                            ],
                          }
                        : { ry: 2.2857 }
                  }
                  transition={{
                    duration: isSpeaking
                      ? getVoiceAnimation(2.2857).duration
                      : isThinking
                        ? getThinkingDotsAnimation(5, 2.2857).duration
                        : 0.3,
                    repeat: isSpeaking || isThinking ? Infinity : 0,
                    ease: isSpeaking
                      ? getVoiceAnimation(2.2857).ease
                      : getThinkingDotsAnimation(5, 2.2857).ease,
                    delay: isThinking ? 0.9 : 0.5,
                    repeatType: "loop",
                  }}
                />
                <motion.ellipse
                  cx="21.7745"
                  cy="24"
                  rx="0.2255"
                  ry="0.9524"
                  fill="white"
                  animate={
                    isSpeaking
                      ? {
                          ry: getVoiceAnimation(0.9524).values || [0.9524],
                        }
                      : isThinking
                        ? {
                            ry: getThinkingDotsAnimation(6, 0.9524).values || [
                              0.9524,
                            ],
                          }
                        : { ry: 0.9524 }
                  }
                  transition={{
                    duration: isSpeaking
                      ? getVoiceAnimation(0.9524).duration
                      : isThinking
                        ? getThinkingDotsAnimation(6, 0.9524).duration
                        : 0.3,
                    repeat: isSpeaking || isThinking ? Infinity : 0,
                    ease: isSpeaking
                      ? getVoiceAnimation(0.9524).ease
                      : getThinkingDotsAnimation(6, 0.9524).ease,
                    delay: isThinking ? 0 : 0.6,
                    repeatType: "loop",
                  }}
                />
              </g>

              {/* Right waveform group - voice-responsive and thinking dots animation */}
              <g>
                <motion.ellipse
                  cx="30.2255"
                  cy="24"
                  rx="0.2255"
                  ry="0.9524"
                  fill="white"
                  animate={
                    isSpeaking
                      ? {
                          ry: getVoiceAnimation(0.9524).values || [0.9524],
                        }
                      : isThinking
                        ? {
                            ry: getThinkingDotsAnimation(0, 0.9524).values || [
                              0.9524,
                            ],
                          }
                        : { ry: 0.9524 }
                  }
                  transition={{
                    duration: isSpeaking
                      ? getVoiceAnimation(0.9524).duration
                      : isThinking
                        ? getThinkingDotsAnimation(0, 0.9524).duration
                        : 0.3,
                    repeat: isSpeaking || isThinking ? Infinity : 0,
                    ease: isSpeaking
                      ? getVoiceAnimation(0.9524).ease
                      : getThinkingDotsAnimation(0, 0.9524).ease,
                    delay: isThinking ? 0 : 0,
                    repeatType: "loop",
                  }}
                />
                <motion.ellipse
                  cx="31.5944"
                  cy="24"
                  rx="0.3189"
                  ry="2.2857"
                  fill="white"
                  animate={
                    isSpeaking
                      ? {
                          ry: getVoiceAnimation(2.2857).values || [2.2857],
                        }
                      : isThinking
                        ? {
                            ry: getThinkingDotsAnimation(1, 2.2857).values || [
                              2.2857,
                            ],
                          }
                        : { ry: 2.2857 }
                  }
                  transition={{
                    duration: isSpeaking
                      ? getVoiceAnimation(2.2857).duration
                      : isThinking
                        ? getThinkingDotsAnimation(1, 2.2857).duration
                        : 0.3,
                    repeat: isSpeaking || isThinking ? Infinity : 0,
                    ease: isSpeaking
                      ? getVoiceAnimation(2.2857).ease
                      : getThinkingDotsAnimation(1, 2.2857).ease,
                    delay: isThinking ? 0.3 : 0.1,
                    repeatType: "loop",
                  }}
                />
                <motion.ellipse
                  cx="33.1888"
                  cy="24"
                  rx="0.3377"
                  ry="3.4286"
                  fill="white"
                  animate={
                    isSpeaking
                      ? {
                          ry: getVoiceAnimation(3.4286).values || [3.4286],
                        }
                      : isThinking
                        ? {
                            ry: getThinkingDotsAnimation(2, 3.4286).values || [
                              3.4286,
                            ],
                          }
                        : { ry: 3.4286 }
                  }
                  transition={{
                    duration: isSpeaking
                      ? getVoiceAnimation(3.4286).duration
                      : isThinking
                        ? getThinkingDotsAnimation(2, 3.4286).duration
                        : 0.3,
                    repeat: isSpeaking || isThinking ? Infinity : 0,
                    ease: isSpeaking
                      ? getVoiceAnimation(3.4286).ease
                      : getThinkingDotsAnimation(2, 3.4286).ease,
                    delay: isThinking ? 0 : 0.2,
                    repeatType: "loop",
                  }}
                />
                <motion.ellipse
                  cx="35.102"
                  cy="24"
                  rx="0.3377"
                  ry="4"
                  fill="white"
                  animate={
                    isSpeaking
                      ? {
                          ry: getVoiceAnimation(4).values || [4],
                        }
                      : isThinking
                        ? {
                            ry: getThinkingDotsAnimation(3, 4).values || [4],
                          }
                        : { ry: 4 }
                  }
                  transition={{
                    duration: isSpeaking
                      ? getVoiceAnimation(4).duration
                      : isThinking
                        ? getThinkingDotsAnimation(3, 4).duration
                        : 0.3,
                    repeat: isSpeaking || isThinking ? Infinity : 0,
                    ease: isSpeaking
                      ? getVoiceAnimation(4).ease
                      : getThinkingDotsAnimation(3, 4).ease,
                    delay: isSpeaking ? 0.6 : 0.3,
                    repeatType: "loop",
                  }}
                />
                <motion.ellipse
                  cx="37.0153"
                  cy="24"
                  rx="0.3377"
                  ry="3.4286"
                  fill="white"
                  animate={
                    isSpeaking
                      ? {
                          ry: getVoiceAnimation(3.4286).values || [3.4286],
                        }
                      : isThinking
                        ? {
                            ry: getThinkingDotsAnimation(4, 3.4286).values || [
                              3.4286,
                            ],
                          }
                        : { ry: 3.4286 }
                  }
                  transition={{
                    duration: isSpeaking
                      ? getVoiceAnimation(3.4286).duration
                      : isThinking
                        ? getThinkingDotsAnimation(4, 3.4286).duration
                        : 0.3,
                    repeat: isSpeaking || isThinking ? Infinity : 0,
                    ease: isSpeaking
                      ? getVoiceAnimation(3.4286).ease
                      : getThinkingDotsAnimation(4, 3.4286).ease,
                    delay: isThinking ? 0 : 0.4,
                    repeatType: "loop",
                  }}
                />
                <motion.ellipse
                  cx="38.6097"
                  cy="24"
                  rx="0.3189"
                  ry="2.2857"
                  fill="white"
                  animate={
                    isSpeaking
                      ? {
                          ry: getVoiceAnimation(2.2857).values || [2.2857],
                        }
                      : isThinking
                        ? {
                            ry: getThinkingDotsAnimation(5, 2.2857).values || [
                              2.2857,
                            ],
                          }
                        : { ry: 2.2857 }
                  }
                  transition={{
                    duration: isSpeaking
                      ? getVoiceAnimation(2.2857).duration
                      : isThinking
                        ? getThinkingDotsAnimation(5, 2.2857).duration
                        : 0.3,
                    repeat: isSpeaking || isThinking ? Infinity : 0,
                    ease: isSpeaking
                      ? getVoiceAnimation(2.2857).ease
                      : getThinkingDotsAnimation(5, 2.2857).ease,
                    delay: isThinking ? 0.9 : 0.5,
                    repeatType: "loop",
                  }}
                />
                <motion.ellipse
                  cx="39.7745"
                  cy="24"
                  rx="0.2255"
                  ry="0.9524"
                  fill="white"
                  animate={
                    isSpeaking
                      ? {
                          ry: getVoiceAnimation(0.9524).values || [0.9524],
                        }
                      : isThinking
                        ? {
                            ry: getThinkingDotsAnimation(6, 0.9524).values || [
                              0.9524,
                            ],
                          }
                        : { ry: 0.9524 }
                  }
                  transition={{
                    duration: isSpeaking
                      ? getVoiceAnimation(0.9524).duration
                      : isThinking
                        ? getThinkingDotsAnimation(6, 0.9524).duration
                        : 0.3,
                    repeat: isSpeaking || isThinking ? Infinity : 0,
                    ease: isSpeaking
                      ? getVoiceAnimation(0.9524).ease
                      : getThinkingDotsAnimation(6, 0.9524).ease,
                    delay: isThinking ? 0 : 0.6,
                    repeatType: "loop",
                  }}
                />
              </g>
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
