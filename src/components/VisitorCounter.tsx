"use client";

import React, { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [stats, setStats] = useState({ today: 0, total: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/stats");
        if (res.ok) setStats(await res.json());
      } catch (error) {
        console.error("Failed to fetch visitor stats:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  const fmt = (n: number) => (loading ? "—" : n.toLocaleString());

  return (
    <div className="border-t border-rule bg-ground">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-10 px-6 py-6 sm:px-10">
        <div className="flex items-baseline gap-2.5">
          <span className="text-xl font-semibold tabular-nums text-ink">{fmt(stats.today)}</span>
          <span className="tech-label">visitors today</span>
        </div>
        <span className="h-6 w-px bg-rule-2" aria-hidden="true" />
        <div className="flex items-baseline gap-2.5">
          <span className="text-xl font-semibold tabular-nums text-ink">{fmt(stats.total)}</span>
          <span className="tech-label">total views</span>
        </div>
      </div>
    </div>
  );
};

export default VisitorCounter;
