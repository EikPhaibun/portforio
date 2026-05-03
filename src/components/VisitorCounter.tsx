'use client';

import React, { useEffect, useState } from 'react';
import { Users, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const VisitorCounter = () => {
  const [stats, setStats] = useState({
    today: 0,
    total: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/stats');
        if (res.ok) {
          const data = await res.json();
          setStats(data);
        }
      } catch (error) {
        console.error('Failed to fetch visitor stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="py-8 flex justify-center items-center gap-8 text-slate-400 border-t border-slate-900/50 bg-slate-950/50 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2"
      >
        <div className="p-2 bg-emerald-500/10 rounded-lg">
          <Users size={18} className="text-emerald-500" />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">Today</span>
          <span className="text-lg font-semibold text-white tabular-nums">
            {loading ? '...' : stats.today.toLocaleString()}
          </span>
        </div>
      </motion.div>

      <div className="h-8 w-px bg-slate-800"></div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex items-center gap-2"
      >
        <div className="p-2 bg-blue-500/10 rounded-lg">
          <Eye size={18} className="text-blue-500" />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">Total Views</span>
          <span className="text-lg font-semibold text-white tabular-nums">
            {loading ? '...' : stats.total.toLocaleString()}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default VisitorCounter;
