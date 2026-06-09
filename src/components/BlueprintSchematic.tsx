"use client";

import React from "react";
import { motion, useReducedMotion, type Transition } from "framer-motion";

/* An engineering schematic of the kind of system Phaibun ships end to end.
   Lines "plot" themselves on load like a drafting machine; labels settle in
   after their node is drawn. Honors prefers-reduced-motion (renders final). */

type NodeDef = {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  sub: string;
  accent?: boolean;
};

const NODES: NodeDef[] = [
  { id: "client", x: 16, y: 86, w: 148, h: 58, title: "CLIENT", sub: "React · Flutter" },
  { id: "erp", x: 316, y: 86, w: 148, h: 58, title: "ERP", sub: "NetSuite · D365" },
  { id: "api", x: 150, y: 222, w: 180, h: 76, title: "API · RBAC", sub: "Flask · RESTlet", accent: true },
  { id: "workers", x: 348, y: 232, w: 124, h: 56, title: "WORKERS", sub: "Celery · Redis" },
  { id: "data", x: 150, y: 374, w: 180, h: 60, title: "DATA", sub: "PostgreSQL" },
];

// Orthogonal connectors (drafting elbows), drawn in sequence. No line crosses a node.
const LINKS: { id: string; d: string; arrow: string }[] = [
  // CLIENT -> API (down, elbow into top face)
  { id: "c-api", d: "M 90 144 V 184 H 205 V 222", arrow: "M 199 214 L 205 222 L 211 214" },
  // ERP -> API
  { id: "e-api", d: "M 390 144 V 184 H 275 V 222", arrow: "M 269 214 L 275 222 L 281 214" },
  // API -> WORKERS (clean horizontal off the accent port)
  { id: "api-w", d: "M 330 260 H 348", arrow: "M 342 254 L 348 260 L 342 266" },
  // API -> DATA (vertical into top face)
  { id: "api-d", d: "M 240 298 V 374", arrow: "M 234 366 L 240 374 L 246 366" },
];

export default function BlueprintSchematic() {
  const reduce = useReducedMotion();

  // Choreography: dimension line, then nodes, then connectors, then labels.
  const base = reduce ? 0 : 0.35;
  const draw = (delay: number): Transition =>
    reduce
      ? { duration: 0 }
      : { pathLength: { duration: 0.62, ease: [0.16, 1, 0.3, 1], delay }, opacity: { duration: 0.2, delay } };
  const fade = (delay: number): Transition =>
    reduce ? { duration: 0 } : { duration: 0.45, ease: [0.16, 1, 0.3, 1], delay };

  const drawn = { pathLength: reduce ? 1 : [0, 1], opacity: 1 } as const;

  return (
    <svg
      viewBox="0 0 480 470"
      className="h-auto w-full max-w-[480px]"
      role="img"
      aria-label="System architecture diagram: client and ERP feed a role-secured API, which writes to a PostgreSQL data store and dispatches background workers."
      fill="none"
    >
      {/* corner registration mark */}
      <g stroke="var(--color-rule-2)" strokeWidth="1" aria-hidden="true">
        <motion.line
          x1="2" y1="14" x2="2" y2="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={fade(0)} />
        <motion.line
          x1="2" y1="2" x2="14" y2="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={fade(0)} />
      </g>

      {/* top dimension line: END-TO-END */}
      <g aria-hidden="true">
        <motion.path
          d="M 16 44 H 464"
          stroke="var(--color-accent)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={drawn}
          transition={draw(base)}
        />
        {[16, 464].map((x) => (
          <line key={x} x1={x} y1="38" x2={x} y2="50" stroke="var(--color-accent)" strokeWidth="1" />
        ))}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={fade(base + 0.4)}>
          <rect x="178" y="36" width="124" height="16" fill="var(--color-ground)" />
          <text x="240" y="48" textAnchor="middle" className="tech-label" fontSize="11" fill="var(--color-accent-ink)">
            END·TO·END
          </text>
        </motion.g>
      </g>

      {/* nodes */}
      {NODES.map((n, i) => {
        const nodeDelay = base + 0.15 + i * 0.12;
        const stroke = n.accent ? "var(--color-accent)" : "var(--color-rule-2)";
        return (
          <g key={n.id}>
            {/* fill */}
            <motion.rect
              x={n.x}
              y={n.y}
              width={n.w}
              height={n.h}
              rx="3"
              fill={n.accent ? "var(--color-accent-wash)" : "var(--color-paper)"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={fade(nodeDelay)}
            />
            {/* drawn outline */}
            <motion.rect
              x={n.x}
              y={n.y}
              width={n.w}
              height={n.h}
              rx="3"
              stroke={stroke}
              strokeWidth={n.accent ? "1.6" : "1.2"}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={drawn}
              transition={draw(nodeDelay)}
            />
            {/* labels */}
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={fade(nodeDelay + 0.4)}>
              <text
                x={n.x + 14}
                y={n.y + 27}
                className="tech-label"
                fontSize="12"
                letterSpacing="0.12em"
                fill={n.accent ? "var(--color-accent-ink)" : "var(--color-ink)"}
              >
                {n.title}
              </text>
              <text
                x={n.x + 14}
                y={n.y + 45}
                fontSize="12.5"
                fontFamily="var(--font-mono)"
                fill="var(--color-ink-3)"
              >
                {n.sub}
              </text>
            </motion.g>
            {/* node port tick (accent) */}
            {n.accent && (
              <motion.circle
                cx={n.x + n.w}
                cy={n.y + n.h / 2}
                r="3"
                fill="var(--color-accent)"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={fade(nodeDelay + 0.5)}
              />
            )}
          </g>
        );
      })}

      {/* connectors (draw last) */}
      {LINKS.map((l, i) => {
        const d = base + 0.95 + i * 0.1;
        return (
          <g key={l.id} aria-hidden="true">
            <motion.path
              d={l.d}
              stroke="var(--color-rule-2)"
              strokeWidth="1.2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={drawn}
              transition={draw(d)}
            />
            <motion.path
              d={l.arrow}
              stroke="var(--color-ink-3)"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={fade(d + 0.45)}
            />
          </g>
        );
      })}

      {/* leader callout from DATA — audit trail */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={fade(base + 1.7)} aria-hidden="true">
        <path d="M 330 404 H 356" stroke="var(--color-accent)" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="330" cy="404" r="2" fill="var(--color-accent)" />
        <text x="360" y="408" className="tech-label" fontSize="10.5" fill="var(--color-ink-3)">
          Audit trail
        </text>
      </motion.g>
    </svg>
  );
}
