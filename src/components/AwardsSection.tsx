/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Grid, Layers } from 'lucide-react';
import { AWARDS_LIST } from '../data';

export default function AwardsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8 text-neutral-300 font-sans"
    >
      <div className="space-y-4">
        <span className="text-xs uppercase tracking-widest text-neutral-500 font-display font-medium">
          [ Distinctive Accolades ]
        </span>
        <p className="text-sm font-light text-neutral-400">
          Recognitions awarded by fine arts academies, design panels, and luxury photography circles worldwide.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {AWARDS_LIST.map((aw, idx) => (
          <motion.div 
            key={aw.id} 
            variants={itemVariants} 
            className="flex items-start gap-4 p-5 rounded-lg bg-neutral-950/40 border border-neutral-900 group hover:border-purple-neon/50 hover:bg-neutral-950/80 transition-all duration-300"
          >
            <div className="p-3 bg-neutral-900 rounded-lg text-purple-neon group-hover:text-purple-glow group-hover:bg-purple-neon/10 transition-colors shrink-0">
              <Award size={20} />
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-purple-glow px-1.5 py-0.5 rounded bg-purple-neon/10">
                  {aw.year}
                </span>
                <span className="text-xs text-neutral-500 font-light">
                  {aw.category}
                </span>
              </div>
              <h4 className="text-base font-semibold text-white group-hover:text-purple-glow font-display transition-colors leading-snug">
                {aw.title}
              </h4>
              <p className="text-xs text-neutral-400 font-light font-display">
                Issued by: {aw.issuer}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Verification footer / Technical Craft */}
      <div className="p-4 border border-neutral-900 bg-black/40 rounded-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <ShieldCheck size={18} className="text-neutral-500 uppercase shrink-0" />
          <div className="space-y-0.5">
            <h5 className="text-xs font-semibold text-white uppercase tracking-wider font-display">
              Archival Standards Verification
            </h5>
            <p className="text-[11px] text-neutral-400 font-light leading-relaxed">
              All analog formats processed using custom silver-gelatin methodologies to DIN standards.
            </p>
          </div>
        </div>
        <span className="text-[10px] font-mono text-neutral-500 uppercase shrink-0 bg-neutral-900/60 px-2 py-1 rounded">
          Status: Certified 2026
        </span>
      </div>
    </motion.div>
  );
}
