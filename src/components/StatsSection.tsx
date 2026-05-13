"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp, Building2, Clock } from "lucide-react";

interface StatConfig {
  icon: React.ReactNode;
  prefix: string;
  target: number;
  label: string;
}

const STATS: StatConfig[] = [
  {
    icon: <TrendingUp size={32} color="white" />,
    prefix: "+",
    target: 599,
    label: "Automatizaciones realizadas",
  },
  {
    icon: <Building2 size={32} color="white" />,
    prefix: "",
    target: 56,
    label: "Clientes satisfechos",
  },
  {
    icon: <Clock size={32} color="white" />,
    prefix: "%",
    target: 80,
    label: "Tiempo ahorrado para nuestros clientes",
  },
];

function useCountUp(target: number, duration: number, active: boolean): number {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;

    startTimeRef.current = null;

    const step = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [active, target, duration]);

  return count;
}

interface StatItemProps {
  stat: StatConfig;
  active: boolean;
}

function StatItem({ stat, active }: StatItemProps) {
  const count = useCountUp(stat.target, 2000, active);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        textAlign: "center",
      }}
    >
      <div style={{ marginBottom: "8px" }}>{stat.icon}</div>
      <span
        style={{
          fontSize: "52px",
          fontWeight: 600,
          color: "#ff1414",
          fontFamily: "Poppins, sans-serif",
          lineHeight: 1,
        }}
      >
        {stat.prefix}
        {count}
      </span>
      <span
        style={{
          fontSize: "16px",
          fontWeight: 600,
          color: "#ced4e0",
          fontFamily: "Poppins, sans-serif",
          maxWidth: "180px",
        }}
      >
        {stat.label}
      </span>
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: "#000",
        borderTop: "2px solid #ff1414",
        paddingTop: "64px",
        paddingBottom: "64px",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "0 32px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0",
        }}
        className="stats-inner"
      >
        {STATS.map((stat) => (
          <StatItem key={stat.label} stat={stat} active={visible} />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-inner {
            flex-direction: column !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
