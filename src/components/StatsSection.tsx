"use client";

import { useEffect, useRef, useState } from "react";
import { Zap, Calendar, Sun, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatItem {
  end: number;
  suffix: string;
  label: string;
  icon: React.ElementType;
}

const stats: StatItem[] = [
  { end: 55,   suffix: "+",    label: "Instalaciones realizadas", icon: Zap      },
  { end: 4,    suffix: " años", label: "En el mercado",           icon: Calendar  },
  { end: 1000, suffix: "+",    label: "kW instalados",            icon: Sun       },
  { end: 100,  suffix: "%",    label: "Clientes satisfechos",     icon: Star      },
];

function useCountUp(end: number, duration: number, triggered: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    let startTime: number | null = null;
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.round(easeOut(progress) * end));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [triggered, end, duration]);

  return count;
}

function StatCard({
  stat,
  triggered,
}: {
  stat: StatItem;
  triggered: boolean;
}) {
  const count = useCountUp(stat.end, 2000, triggered);
  const Icon = stat.icon;

  return (
    <div
      className={cn(
        "flex flex-col items-center text-center transition-all duration-300",
      )}
      style={{
        padding: "32px 16px",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "12px",
        background: "rgba(255,255,255,0.05)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.background = "rgba(255,255,255,0.08)";
        el.style.borderColor = "rgba(245,158,11,0.4)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.background = "rgba(255,255,255,0.05)";
        el.style.borderColor = "rgba(255,255,255,0.1)";
      }}
    >
      <Icon size={32} style={{ color: "#f59e0b", marginBottom: "16px" }} />
      <span
        style={{
          fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
          fontWeight: 900,
          color: "white",
          lineHeight: 1,
        }}
      >
        {count}
        {stat.suffix}
      </span>
      <p
        style={{
          fontSize: "14px",
          color: "rgba(255,255,255,0.65)",
          fontWeight: 500,
          marginTop: "8px",
          letterSpacing: "0.5px",
        }}
      >
        {stat.label}
      </p>
    </div>
  );
}

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="acerca-de"
      ref={sectionRef}
      style={{
        background: "rgb(22, 24, 83)",
        padding: "80px 24px",
        textAlign: "center",
      }}
    >
      {/* Section header */}
      <p
        style={{
          color: "#f59e0b",
          fontSize: "13px",
          fontWeight: 700,
          letterSpacing: "3px",
          textTransform: "uppercase",
        }}
      >
        QUIÉNES SOMOS
      </p>

      <h2
        style={{
          color: "white",
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          fontWeight: 800,
          marginTop: "12px",
        }}
      >
        La empresa solar de confianza en Brandsen
      </h2>

      <div className="section-divider" style={{ margin: "16px auto 24px" }} />

      <p
        style={{
          color: "rgba(255,255,255,0.75)",
          fontSize: "16px",
          maxWidth: "650px",
          margin: "0 auto 64px",
          lineHeight: 1.75,
        }}
      >
        Más de 4 años trabajando junto a hogares, comercios e industrias de la
        región. Somos especialistas en dimensionamiento, instalación llave en
        mano y mantenimiento de sistemas fotovoltaicos.
      </p>

      {/* Stats grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "24px",
          maxWidth: "960px",
          margin: "0 auto",
        }}
        className="sm:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map((stat) => (
          <StatCard key={stat.label} stat={stat} triggered={triggered} />
        ))}
      </div>
    </section>
  );
}
