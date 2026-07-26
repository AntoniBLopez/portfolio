"use client";

import { Children, isValidElement } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { useHasMounted } from "@/hooks/use-has-mounted";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const hasMounted = useHasMounted();
  const reduceMotion = useReducedMotion();

  // Keep SSR and the first client render identical: plain markup, no Motion styles.
  // Animate only after mount so hydration cannot disagree with the server HTML.
  if (!hasMounted || reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: itemVariants.hidden,
        show: {
          ...(itemVariants.show as object),
          transition: { duration: 0.55, ease: EASE, delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

type AnimatedGroupProps = {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
  delay?: number;
  stagger?: number;
};

export function AnimatedGroup({
  children,
  className,
  itemClassName,
  delay = 0,
  stagger = 0.08,
}: AnimatedGroupProps) {
  const hasMounted = useHasMounted();
  const reduceMotion = useReducedMotion();
  const items = Children.toArray(children).filter(isValidElement);

  if (!hasMounted || reduceMotion) {
    return (
      <div className={className}>
        {items.map((child, index) => (
          <div key={index} className={itemClassName}>
            {child}
          </div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {items.map((child, index) => (
        <motion.div key={index} className={cn(itemClassName)} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
