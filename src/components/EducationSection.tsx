/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { EDUCATION_LIST } from '../data';

export default function EducationSection() {
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
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-10 text-neutral-300 font-sans"
    >
      {/* Header precisely as shown in education screenshot */}
      <motion.div variants={itemVariants} className="relative pb-4">
        <h2 className="text-3xl md:text-4xl font-display font-medium text-white tracking-widest uppercase">
          EDUCATION
        </h2>
        <div className="absolute bottom-0 left-0 w-32 h-[2px] bg-white" />
      </motion.div>

      {/* Structured list layout matching exact alignments of screenshot */}
      <div className="space-y-10 pt-4">
        {EDUCATION_LIST.map((edu) => (
          <motion.div
            key={edu.id}
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-start gap-4 pb-6 border-b border-neutral-900/60 last:border-b-0"
          >
            {/* Left Column: Level, School & Major/Details */}
            <div className="space-y-3 max-w-xl">
              <span className="text-xs uppercase tracking-widest text-[#a855f7] font-display font-bold block">
                {edu.level}
              </span>
              
              <div className="space-y-1">
                <h3 className="text-sm md:text-base font-bold text-white uppercase tracking-wide font-sans leading-snug">
                  {edu.school}
                </h3>
                
                {edu.degree && (
                  <p className="text-xs md:text-sm text-neutral-300 font-normal leading-relaxed">
                    {edu.degree}
                  </p>
                )}
                
                {edu.details && (
                  <p className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed">
                    {edu.details}
                  </p>
                )}
              </div>
            </div>

            {/* Right Column: Location & Year Period */}
            <div className="md:text-right shrink-0 space-y-1 font-sans">
              <span className="text-xs md:text-sm text-white font-normal block">
                {edu.location}
              </span>
              <span className="text-xs md:text-sm text-neutral-400 font-light block">
                {edu.period}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
