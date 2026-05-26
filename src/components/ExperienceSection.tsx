/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, MapPin } from 'lucide-react';
import { EXPERIENCE_LIST } from '../data';

export default function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
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
          [ Professional Trajectory ]
        </span>
        <p className="text-sm font-light text-neutral-400">
          Directing artistic integrity and shadow-driven storytelling across luxury brands and prestigious printed volumes.
        </p>
      </div>

      <div className="space-y-8">
        {EXPERIENCE_LIST.map((exp, idx) => (
          <motion.div 
            key={exp.id} 
            variants={itemVariants} 
            className="group p-5 rounded-lg bg-neutral-950/40 border border-neutral-900 hover:border-neutral-800 hover:bg-neutral-950/80 transition-all duration-300 space-y-4"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
              <div className="space-y-1">
                <h3 className="text-xl font-medium text-white font-display tracking-wide group-hover:text-purple-glow transition-colors">
                  {exp.role}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-400 font-light">
                  <span className="font-medium text-neutral-300">{exp.company}</span>
                  <span className="text-neutral-700 font-mono">/</span>
                  <span className="flex items-center gap-1">
                    <MapPin size={13} className="text-neutral-500" />
                    {exp.location}
                  </span>
                </div>
              </div>
              <span className="text-xs font-mono text-neutral-400 bg-neutral-900 px-3 py-1 rounded inline-block w-fit relative after:absolute after:inset-y-0 after:left-0 after:w-0.5 after:bg-purple-neon">
                {exp.period}
              </span>
            </div>

            <p className="text-sm font-light text-neutral-400 leading-relaxed">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {exp.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  className="text-xs font-mono bg-neutral-900 text-neutral-300 px-2 py-1 rounded border border-neutral-800/40 hover:border-purple-neon/20 hover:text-purple-glow transition-colors cursor-default"
                >
                  #{skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
