/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Instagram, MapPin, Video, Phone } from 'lucide-react';
import { PERSONAL_INFO, EXTRAS } from '../data';

export default function AboutSection() {
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
      {/* Header precisely as shown in about me request */}
      <motion.div variants={itemVariants} className="relative pb-4">
        <h2 className="text-3xl md:text-4xl font-display font-medium text-white tracking-widest uppercase">
          ABOUT ME
        </h2>
        <div className="absolute bottom-0 left-0 w-32 h-[2px] bg-white" />
      </motion.div>

      {/* Main Bio content exactly styled like the image */}
      <motion.div variants={itemVariants} className="space-y-6 max-w-2xl text-left">
        <h3 className="text-xl md:text-2xl font-display font-medium text-white tracking-wide">
          {PERSONAL_INFO.greeting || "Hi, I am Marwen Escobar!"}
        </h3>
        <p className="text-sm md:text-base text-neutral-300 font-sans font-normal leading-relaxed tracking-wide text-justify">
          {PERSONAL_INFO.bio}
        </p>
      </motion.div>

      {/* Philosophy Cut & Channels in Minimalist Format */}
      <motion.div variants={itemVariants} className="border-t border-neutral-900 pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-neutral-500 font-display font-medium block mb-2">
            [ Core Philosophy ]
          </span>
          <p className="text-xs text-neutral-400 font-light leading-relaxed italic">
            "{PERSONAL_INFO.philosophy}"
          </p>
        </div>

        <div>
          <span className="text-xs uppercase tracking-widest text-neutral-500 font-display font-medium block mb-2">
            [ Channels & Inquiries ]
          </span>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-neutral-400">
            <span className="flex items-center gap-1.5">
              <MapPin size={12} className="text-purple-neon" />
              {PERSONAL_INFO.location}
            </span>
            <a href={`mailto:${PERSONAL_INFO.contact.email}`} className="hover:text-purple-glow transition-colors flex items-center gap-1.5">
              <Mail size={12} className="text-purple-neon" />
              {PERSONAL_INFO.contact.email}
            </a>
            <a href="https://instagram.com/marwen_escobar" target="_blank" rel="noopener noreferrer" className="hover:text-purple-glow transition-colors flex items-center gap-1.5">
              <Instagram size={12} className="text-purple-neon" />
              {PERSONAL_INFO.contact.instagram}
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
