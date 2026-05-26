/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Mail, ArrowUpRight, Maximize2, X, Plus } from 'lucide-react';
import { SectionType } from './types';
import { PERSONAL_INFO } from './data';

// Sub-sections
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import AwardsSection from './components/AwardsSection';

// @ts-ignore
import marwenPortrait from './assets/images/mars.jpg';

interface MenuOption {
  id: SectionType;
  label: string;
}

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionType>('about');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const menuOptions: MenuOption[] = [
    { id: 'about', label: 'ABOUT ME' },
    { id: 'education', label: 'EDUCATION' },
    { id: 'experience', label: 'WORK EXPERIENCE' },
    { id: 'awards', label: 'CERTIFICATES | AWARDS' }
  ];

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'about':
        return <AboutSection />;
      case 'education':
        return <EducationSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'awards':
        return <AwardsSection />;
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-purple-neon selection:text-white flex flex-col justify-between overflow-hidden">
      
      {/* Ambient background accent subtle light glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-neon/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-neon/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <main className="w-full max-w-[1300px] mx-auto px-6 py-8 md:py-16 flex-grow flex flex-col justify-center">
        
        {/* TOP PANEL: Name & Portrait Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-10">
          
          {/* Column 1: Big Editorial Name Text with Sparkle star design */}
          <div className="md:col-span-6 lg:col-span-7 flex flex-col justify-center relative py-8">
            
            {/* The elegant hand-drawn style star swirl decoration above name */}
            <div className="absolute -top-6 left-[10px] w-64 h-24 pointer-events-none select-none z-0">
              <svg className="w-full h-full text-white" viewBox="0 0 250 100" fill="none">
                {/* 4-pointed sparkle star */}
                <path d="M 30,40 Q 30,22 30,22 Q 30,40 48,40 Q 30,40 30,58 Q 30,40 12,40 Q 30,40 30,40 Z" fill="white" className="animate-pulse" />
                {/* Upper curve */}
                <path d="M 30,40 Q 75,25 150,32" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                {/* Lower dashed curve helper */}
                <path d="M 30,40 Q 65,58 135,55" stroke="white" strokeWidth="0.8" strokeDasharray="3,3" strokeLinecap="round" opacity="0.6" />
              </svg>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-4 relative z-10"
            >
              <div className="text-neutral-500 uppercase tracking-widest text-[10px] font-mono font-bold flex items-center gap-2">
                <Camera size={12} className="text-purple-neon shrink-0 animate-pulse" />
                <span>MULTIMEDIA PORTFOLIO • BA COMMUNICATION</span>
              </div>
              
              <h1 className="text-white font-display text-[12vw] sm:text-[9vw] md:text-[6.5vw] lg:text-[6vw] font-bold leading-[0.85] tracking-tight uppercase select-none">
                <span className="block font-medium">Marwen</span>
                <span className="block text-white">Escobar</span>
              </h1>

              {/* Precise horizontal decorative line under name */}
              <div className="w-[85%] h-[1.5px] bg-neutral-800" />
            </motion.div>
          </div>

          {/* Column 2: Single Portrait styled with rotated dashed boxes */}
          <div className="md:col-span-6 lg:col-span-5 flex justify-center items-center py-6">
            <div className="relative w-72 sm:w-80 md:w-80 max-w-full aspect-[3/4]">
              
              {/* Decorative Dashed Frame 1 - rotated counter-clockwise */}
              <div 
                className="absolute inset-0 border-2 border-dashed border-white/60 pointer-events-none rounded-sm"
                style={{ transform: 'rotate(-5deg) scale(1.02)' }}
              />

              {/* Decorative Dashed Frame 2 - rotated clockwise */}
              <div 
                className="absolute inset-x-[-12px] inset-y-[-18px] border-2 border-dashed border-white/40 pointer-events-none rounded-sm"
                style={{ transform: 'rotate(4deg)' }}
              />

              {/* The Star background sticker detail from requested sketch */}
              <div 
                className="absolute -bottom-8 -left-6 w-12 h-12 text-white/25 select-none pointer-events-none"
                style={{ transform: 'rotate(-15deg)' }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0l3.086 8.914 8.914 3.086-8.914 3.086-3.086 8.914-3.086-8.914-8.914-3.086 8.914-3.086z" />
                </svg>
              </div>

              {/* Pro Photo with clean card style and hover effects */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative w-full h-full bg-neutral-900 border-[6px] border-white shadow-xl overflow-hidden cursor-zoom-in group rounded-sm"
                onClick={() => setLightboxImage(marwenPortrait)}
              >
                <img
                  src={marwenPortrait}
                  alt="Marwen Escobar professional portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                />
                
                {/* Soft overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-300" />
                
                <div className="absolute bottom-3 right-3 p-1.5 rounded bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <Maximize2 size={12} className="text-neutral-300" />
                </div>
              </motion.div>

            </div>
          </div>

        </div>

        {/* THIN HORIZONTAL DIVIDER - exactly as layout request */}
        <div className="w-full h-[1px] bg-neutral-800" />

        {/* BOTTOM PANEL: Navigation & Detail Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8">
          
          {/* Left Column (5 Cols): Vertical List Section Titles with Glowing Indicators */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <nav className="flex flex-col space-y-2 select-none relative z-10">
              {menuOptions.map((opt) => {
                const isActive = activeSection === opt.id;
                return (
                  <div key={opt.id} className="relative group">
                    <button
                      onClick={() => setActiveSection(opt.id)}
                      className={`w-full text-left py-4 text-xl sm:text-2xl md:text-3xl font-display font-medium tracking-widest transition-all duration-300 relative ${
                        isActive ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'
                      }`}
                    >
                      {opt.label}
                    </button>
                    
                    {/* Glowing Purple Horizontal Divider directly under/above the active menu label, or replacing dividers */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTabUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-purple-neon shadow-[0_0_12px_rgba(168,85,247,0.8)] z-20"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Quick Digital Card Signature */}
            <div className="hidden lg:block mt-16 text-neutral-600 space-y-4 max-w-sm">
              <p className="text-xs font-mono tracking-widest leading-relaxed uppercase">
                [ Marwen Escobar Studio © 2026 ] <br />
                Available for selective editorial assignments, lookbooks, and artistic advisory.
              </p>
              <div className="flex gap-4 items-center">
                <a 
                  href="mailto:marwen.escobar@studio.com"
                  className="text-xs font-mono text-neutral-400 hover:text-white transition-colors flex items-center gap-1 group border-b border-neutral-800 pb-0.5"
                >
                  Book Campaign
                  <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Dynamic Tab Contents with Smooth Sliding Entrances */}
          <div className="lg:col-span-7 bg-neutral-950/20 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl border border-neutral-900/60 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                {renderSectionContent()}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </main>

      {/* FOOTER */}
      <footer className="w-full border-t border-neutral-900/80 bg-neutral-950/50 py-6 px-6 font-mono text-[10px] text-neutral-500">
        <div className="max-w-[1300px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <span>Paris Studio: 40 Rue de l'Ancien Canal</span>
            <span className="hidden sm:inline text-neutral-800">|</span>
            <span>Milan Studio: Via Solferino 11</span>
          </div>
          <div>
            <span>Format: Monochromatic Digital Resume v2.4</span>
          </div>
        </div>
      </footer>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ ease: "easeOut", duration: 0.3 }}
              className="relative max-w-full max-h-[90vh] aspect-[3/4] overflow-hidden rounded-md border border-neutral-800 bg-neutral-950"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage}
                alt="Full resolution high-fashion portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
              <button 
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-neutral-300 hover:text-white hover:bg-neutral-900 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
