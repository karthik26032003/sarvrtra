import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

export type AnimationType =
  | "fadeUp"
  | "fadeDown"
  | "fadeLeft"
  | "fadeRight"
  | "scale"
  | "rotate"
  | "blur"
  | "stagger"
  | "parallax"
  | "reveal"
  | "splitText";

interface UseGSAPScrollOptions {
  type?: AnimationType;
  duration?: number;
  delay?: number;
  ease?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  staggerAmount?: number;
  staggerFrom?: "start" | "center" | "end" | "edges" | "random";
  parallaxSpeed?: number;
  once?: boolean;
}

export function useGSAPScroll<T extends HTMLElement>(
  options: UseGSAPScrollOptions = {}
) {
  const ref = useRef<T>(null);
  const {
    type = "fadeUp",
    duration = 1,
    delay = 0,
    ease = "power3.out",
    start = "top 85%",
    end = "bottom 20%",
    scrub = false,
    markers = false,
    staggerAmount = 0.15,
    staggerFrom = "start",
    parallaxSpeed = 0.5,
    once = true,
  } = options;

  useGSAP(() => {
    if (!ref.current) return;

    const element = ref.current;
    let animation: gsap.core.Tween | gsap.core.Timeline;

    // Initial states based on animation type
    const initialStates: Record<AnimationType, gsap.TweenVars> = {
      fadeUp: { opacity: 0, y: 60 },
      fadeDown: { opacity: 0, y: -60 },
      fadeLeft: { opacity: 0, x: -60 },
      fadeRight: { opacity: 0, x: 60 },
      scale: { opacity: 0, scale: 0.8 },
      rotate: { opacity: 0, rotation: -15, transformOrigin: "center center" },
      blur: { opacity: 0, filter: "blur(10px)" },
      stagger: { opacity: 0, y: 40 },
      parallax: {},
      reveal: { clipPath: "inset(100% 0% 0% 0%)" },
      splitText: { opacity: 0, y: 30 },
    };

    // Animation targets based on type
    const animationTargets: Record<AnimationType, gsap.TweenVars> = {
      fadeUp: { opacity: 1, y: 0 },
      fadeDown: { opacity: 1, y: 0 },
      fadeLeft: { opacity: 1, x: 0 },
      fadeRight: { opacity: 1, x: 0 },
      scale: { opacity: 1, scale: 1 },
      rotate: { opacity: 1, rotation: 0 },
      blur: { opacity: 1, filter: "blur(0px)" },
      stagger: { opacity: 1, y: 0 },
      parallax: { y: `${parallaxSpeed * 100}%` },
      reveal: { clipPath: "inset(0% 0% 0% 0%)" },
      splitText: { opacity: 1, y: 0 },
    };

    if (type === "stagger") {
      // Handle stagger animations for children
      const children = element.children;
      gsap.set(children, initialStates[type]);

      animation = gsap.to(children, {
        ...animationTargets[type],
        duration,
        delay,
        ease,
        stagger: {
          amount: staggerAmount,
          from: staggerFrom,
        },
        scrollTrigger: {
          trigger: element,
          start,
          end,
          scrub,
          markers,
          toggleActions: once ? "play none none none" : "play reverse play reverse",
        },
      });
    } else if (type === "parallax") {
      // Handle parallax effect
      animation = gsap.to(element, {
        ...animationTargets[type],
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          markers,
        },
      });
    } else {
      // Standard animations
      gsap.set(element, initialStates[type]);

      animation = gsap.to(element, {
        ...animationTargets[type],
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: element,
          start,
          end,
          scrub,
          markers,
          toggleActions: once ? "play none none none" : "play reverse play reverse",
        },
      });
    }

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, { scope: ref, dependencies: [type, duration, delay, ease, start, end, scrub, once] });

  return ref;
}

// Utility hook for creating timeline-based scroll animations
export function useGSAPTimeline<T extends HTMLElement>(
  timelineCreator: (tl: gsap.core.Timeline, element: T) => void,
  options: {
    start?: string;
    end?: string;
    scrub?: boolean | number;
    pin?: boolean;
    markers?: boolean;
  } = {}
) {
  const ref = useRef<T>(null);
  const {
    start = "top center",
    end = "bottom center",
    scrub = 1,
    pin = false,
    markers = false,
  } = options;

  useGSAP(() => {
    if (!ref.current) return;

    const element = ref.current;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start,
        end,
        scrub,
        pin,
        markers,
      },
    });

    timelineCreator(tl, element);

    return () => {
      tl.kill();
    };
  }, { scope: ref });

  return ref;
}

// Hook for batch animations (multiple elements)
export function useGSAPBatch(
  selector: string,
  options: UseGSAPScrollOptions = {}
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    type = "fadeUp",
    duration = 0.8,
    ease = "power3.out",
    start = "top 85%",
    staggerAmount = 0.1,
    once = true,
  } = options;

  useGSAP(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll(selector);
    if (elements.length === 0) return;

    const initialState = type === "fadeUp" ? { opacity: 0, y: 50 } :
                        type === "fadeLeft" ? { opacity: 0, x: -50 } :
                        type === "fadeRight" ? { opacity: 0, x: 50 } :
                        type === "scale" ? { opacity: 0, scale: 0.9 } :
                        { opacity: 0, y: 50 };

    const targetState = type === "fadeUp" ? { opacity: 1, y: 0 } :
                       type === "fadeLeft" ? { opacity: 1, x: 0 } :
                       type === "fadeRight" ? { opacity: 1, x: 0 } :
                       type === "scale" ? { opacity: 1, scale: 1 } :
                       { opacity: 1, y: 0 };

    gsap.set(elements, initialState);

    ScrollTrigger.batch(elements, {
      start,
      onEnter: (batch) => {
        gsap.to(batch, {
          ...targetState,
          duration,
          ease,
          stagger: staggerAmount,
        });
      },
      onLeaveBack: once ? undefined : (batch) => {
        gsap.to(batch, {
          ...initialState,
          duration: duration * 0.5,
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, { scope: containerRef });

  return containerRef;
}

// Export GSAP and ScrollTrigger for direct use
export { gsap, ScrollTrigger };
