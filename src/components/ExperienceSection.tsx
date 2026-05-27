/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { Maximize2, X } from 'lucide-react';

// @ts-ignore
import thanksgivingGrp from '../assets/images/1.jpg';
// @ts-ignore
import eventTeamSelfie from '../assets/images/2.jpg';
// @ts-ignore
import cameraworkTall from '../assets/images/3.jpg';
// @ts-ignore
import graduationGroup from '../assets/images/4.jpg';
// @ts-ignore
import fiestaProductionTall from '../assets/images/5.jpg';
// @ts-ignore
import fiestaStageCrew from '../assets/images/6.jpg';
// @ts-ignore
import fiestaGroupLandscape from '../assets/images/7.jpg';
// @ts-ignore
import ptvStudioTall from '../assets/images/8.jpg';
// @ts-ignore
import ptvOnstageTall from '../assets/images/9.jpg';
// @ts-ignore
import ptvBroadcastLandscape from '../assets/images/10.jpg';
// @ts-ignore
import radyoPlaybackStation from '../assets/images/11.jpg';
// @ts-ignore
import radyoStudioDesk from '../assets/images/11.jpg';
// @ts-ignore
import eccpBoothInteraction from '../assets/images/12.jpg';
// @ts-ignore
import eccpBoothStaff from '../assets/images/13.jpg';
// @ts-ignore
import eccpTallRep from '../assets/images/14.jpg';
// @ts-ignore
import pasidungogStageTrophies from '../assets/images/16.jpg';
// @ts-ignore
import filmCommunityGroup from '../assets/images/17.jpg';
// @ts-ignore
import filmAwardsBwFlatlay from '../assets/images/18.jpg';
// @ts-ignore
import independentFilmShoot from '../assets/images/19.jpg';

export default function ExperienceSection() {
  const [activeLightbox, setActiveLightbox] = useState<string | null>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "0px 0px -200px 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut"
      } 
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="space-y-8 text-neutral-300 font-sans"
    >
      {/* Header precisely as shown in work experience screenshot */}
      <motion.div variants={itemVariants} className="relative pb-4">
        <h2 className="text-3xl md:text-4xl font-display font-medium text-white tracking-widest uppercase">
          WORK EXPERIENCE
        </h2>
        <div className="absolute bottom-0 left-0 w-32 h-[2px] bg-white" />
      </motion.div>

      {/* SCHOLARSHIP Segment */}
      <motion.div variants={itemVariants} className="text-center py-2">
        <h3 className="inline-block text-[#38bdf8] font-semibold text-lg md:text-xl tracking-widest uppercase relative px-4 py-1 border border-[#38bdf8]/20 bg-[#38bdf8]/5 rounded shadow-[0_0_15px_rgba(56,189,248,0.15)]">
          SCHOLARSHIP
        </h3>
      </motion.div>

      {/* First Row of Cards: Archdiocese & Event Selfie */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Left Item: Thanksgiving Celebration */}
        <div className="md:col-span-7 space-y-3">
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            onClick={() => setActiveLightbox(thanksgivingGrp)}
            className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-neutral-950 border border-neutral-900 group cursor-zoom-in shadow-lg hover:shadow-purple-neon/20 transition-all duration-300"
          >
            <img
              src={thanksgivingGrp}
              alt="Archdiocese 75th Thanksgiving Celebration Floor D"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Soft dark overlay */}
            <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-300" />
            
            <div className="absolute bottom-3 right-3 p-1.5 rounded-full bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Maximize2 size={12} className="text-white" />
            </div>
          </motion.div>
          
          <div className="px-1 space-y-1">
            <h4 className="text-sm md:text-base font-bold text-white font-sans tracking-wide leading-snug uppercase">
              Archdiocese 75th Thanksgiving Celebration
            </h4>
            <p className="text-xs md:text-sm text-neutral-400 font-light font-sans">
              Floor D - SMX Lanang, Davao City
            </p>
          </div>
        </div>

        {/* Right Item: Event Selfie */}
        <div className="md:col-span-5 flex flex-col justify-end">
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            onClick={() => setActiveLightbox(eventTeamSelfie)}
            className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-neutral-950 border border-neutral-900 group cursor-zoom-in shadow-lg hover:shadow-purple-neon/20 transition-all duration-300"
          >
            <img
              src={eventTeamSelfie}
              alt="Scholarship event coordinating team selfie"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-300" />
            
            <div className="absolute bottom-3 right-3 p-1.5 rounded-full bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Maximize2 size={12} className="text-white" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Divider */}
      <motion.div variants={itemVariants} className="w-full h-[1px] bg-neutral-800/80 my-4" />

      {/* Second Row of Cards: Tall Camerawork & Graduation ceremony */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        
        {/* Left Item: Tall Camerawork */}
        <div className="md:col-span-12 lg:col-span-5">
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            onClick={() => setActiveLightbox(cameraworkTall)}
            className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-neutral-950 border border-neutral-900 group cursor-zoom-in shadow-lg hover:shadow-purple-neon/20 transition-all duration-300"
          >
            <img
              src={cameraworkTall}
              alt="Videographer cameraman work SMX Lanang empty hall"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-300" />
            
            <div className="absolute bottom-3 right-3 p-1.5 rounded-full bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Maximize2 size={12} className="text-white" />
            </div>
          </motion.div>
        </div>

        {/* Right Item: Graduation Ceremony + Caption */}
        <div className="md:col-span-12 lg:col-span-7 space-y-3">
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            onClick={() => setActiveLightbox(graduationGroup)}
            className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-neutral-950 border border-neutral-900 group cursor-zoom-in shadow-lg hover:shadow-purple-neon/20 transition-all duration-300"
          >
            <img
              src={graduationGroup}
              alt="HCDC Graduation commencement exercises group photo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-300" />
            
            <div className="absolute bottom-3 right-3 p-1.5 rounded-full bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Maximize2 size={12} className="text-white" />
            </div>
          </motion.div>
          
          <div className="px-1 space-y-1">
            <h4 className="text-sm md:text-base font-bold text-white font-sans tracking-wide leading-snug uppercase">
              HCDC GRADUATION 2023-2025
            </h4>
            <p className="text-xs md:text-sm text-neutral-400 font-light font-sans">
              Cameraman - SMX Lanang, Davao City
            </p>
          </div>
        </div>

      </motion.div>

      {/* Divider */}
      <motion.div variants={itemVariants} className="w-full h-[1px] bg-neutral-800/80 my-4" />

      {/* Third Segment: HCDC School Fiesta side-by-side images */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        
        {/* Left Item: Switcher monitor tall camera view */}
        <div className="md:col-span-5">
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            onClick={() => setActiveLightbox(fiestaProductionTall)}
            className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-neutral-950 border border-neutral-900 group cursor-zoom-in shadow-lg hover:shadow-purple-neon/20 transition-all duration-300"
          >
            <img
              src={fiestaProductionTall}
              alt="HCDC School Fiesta multimedia production view"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-300" />
            
            <div className="absolute bottom-3 right-3 p-1.5 rounded-full bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Maximize2 size={12} className="text-white" />
            </div>
          </motion.div>
        </div>

        {/* Right Item: Stage crew photo */}
        <div className="md:col-span-7">
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            onClick={() => setActiveLightbox(fiestaStageCrew)}
            className="relative aspect-[16/11] overflow-hidden rounded-[1.5rem] bg-neutral-950 border border-neutral-900 group cursor-zoom-in shadow-lg hover:shadow-purple-neon/20 transition-all duration-300"
          >
            <img
              src={fiestaStageCrew}
              alt="HCDC School Fiesta stage crew on stage"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-300" />
            
            <div className="absolute bottom-3 right-3 p-1.5 rounded-full bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Maximize2 size={12} className="text-white" />
            </div>
          </motion.div>
        </div>

      </motion.div>

      {/* Divider */}
      <motion.div variants={itemVariants} className="w-full h-[1px] bg-neutral-800/80 my-4" />

      {/* Fourth Segment: Large HCDC School Fiesta Wide landscape image */}
      <motion.div variants={itemVariants} className="space-y-3">
        <motion.div
          variants={imageVariants}
          whileHover="hover"
          onClick={() => setActiveLightbox(fiestaGroupLandscape)}
          className="relative aspect-[16/8] sm:aspect-[16/7] overflow-hidden rounded-[1.5rem] bg-neutral-950 border border-neutral-900 group cursor-zoom-in shadow-lg hover:shadow-purple-neon/20 transition-all duration-300"
        >
          <img
            src={fiestaGroupLandscape}
            alt="HCDC School Fiesta group cast team photo"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-300" />
          
          <div className="absolute bottom-3 right-3 p-1.5 rounded-full bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Maximize2 size={12} className="text-white" />
          </div>
        </motion.div>
        
        <div className="px-1 space-y-1">
          <h4 className="text-sm md:text-base font-bold text-white font-sans tracking-wide leading-snug uppercase">
            HCDC SCHOOL FIESTA | Switcher, Cameraman & Floor Director
          </h4>
          <p className="text-xs md:text-sm text-neutral-400 font-light font-sans">
            2021 - 2025
          </p>
        </div>
      </motion.div>

      {/* Divider */}
      <motion.div variants={itemVariants} className="w-full h-[1px] bg-neutral-800/80 my-4" />

      {/* ACADEMIC Segment */}
      <motion.div variants={itemVariants} className="text-center py-2">
        <h3 className="inline-block text-[#38bdf8] font-semibold text-lg md:text-xl tracking-widest uppercase relative px-4 py-1 border border-[#38bdf8]/20 bg-[#38bdf8]/5 rounded shadow-[0_0_15px_rgba(56,189,248,0.15)]">
          ACADEMIC
        </h3>
      </motion.div>

      {/* Fifth Segment: Academic (PTV) */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Left tall */}
        <div className="md:col-span-4">
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            onClick={() => setActiveLightbox(ptvStudioTall)}
            className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-neutral-950 border border-neutral-900 group cursor-zoom-in shadow-lg hover:shadow-purple-neon/20 transition-all duration-300"
          >
            <img
              src={ptvStudioTall}
              alt="PTV Studio Floor director work"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-300" />
            
            <div className="absolute bottom-3 right-3 p-1.5 rounded-full bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Maximize2 size={12} className="text-white" />
            </div>
          </motion.div>
        </div>

        {/* Center tall */}
        <div className="md:col-span-3">
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            onClick={() => setActiveLightbox(ptvOnstageTall)}
            className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-neutral-950 border border-neutral-900 group cursor-zoom-in shadow-lg hover:shadow-purple-neon/20 transition-all duration-300"
          >
            <img
              src={ptvOnstageTall}
              alt="PTV stage presenter action"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-300" />
            
            <div className="absolute bottom-3 right-3 p-1.5 rounded-full bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Maximize2 size={12} className="text-white" />
            </div>
          </motion.div>
        </div>

        {/* Right landscape + caption */}
        <div className="md:col-span-5 space-y-3">
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            onClick={() => setActiveLightbox(ptvBroadcastLandscape)}
            className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-neutral-950 border border-neutral-900 group cursor-zoom-in shadow-lg hover:shadow-purple-neon/20 transition-all duration-300"
          >
            <img
              src={ptvBroadcastLandscape}
              alt="PTV Broadcast anchor weather forecast"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-300" />
            
            <div className="absolute bottom-3 right-3 p-1.5 rounded-full bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Maximize2 size={12} className="text-white" />
            </div>
          </motion.div>

          <div className="px-1 space-y-1">
            <h4 className="text-sm md:text-base font-bold text-white font-sans tracking-wide leading-snug uppercase">
              Philippine Television Network (PTV)
            </h4>
            <p className="text-xs md:text-sm text-neutral-400 font-light font-sans">
              Floor Director & Campus Journalist
            </p>
          </div>
        </div>
      </motion.div>

      {/* Divider */}
      <motion.div variants={itemVariants} className="w-full h-[1px] bg-neutral-800/80 my-4" />

      {/* Sixth Segment: Radyo Pilipinas */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Left Side: Playback image + Caption beneath it */}
        <div className="md:col-span-6 space-y-3">
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            onClick={() => setActiveLightbox(radyoPlaybackStation)}
            className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-neutral-950 border border-neutral-900 group cursor-zoom-in shadow-lg hover:shadow-purple-neon/20 transition-all duration-300"
          >
            <img
              src={radyoPlaybackStation}
              alt="Radyo Pilipinas Playback live control"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-300" />
            
            <div className="absolute bottom-3 right-3 p-1.5 rounded-full bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Maximize2 size={12} className="text-white" />
            </div>
          </motion.div>

          <div className="px-1 space-y-1">
            <h4 className="text-sm md:text-base font-bold text-white font-sans tracking-wide leading-snug uppercase">
              RADYO PILIPINAS
            </h4>
            <p className="text-xs md:text-sm text-neutral-400 font-light font-sans">
              Playback, Live Streamer & Campus Journalist
            </p>
          </div>
        </div>

        {/* Right Side: Studio Desk image */}
        <div className="md:col-span-6">
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            onClick={() => setActiveLightbox(radyoStudioDesk)}
            className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-neutral-950 border border-neutral-900 group cursor-zoom-in shadow-lg hover:shadow-purple-neon/20 transition-all duration-300"
          >
            <img
              src={radyoStudioDesk}
              alt="Radyo Pilipinas Studio anchor desk"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-300" />
            
            <div className="absolute bottom-3 right-3 p-1.5 rounded-full bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Maximize2 size={12} className="text-white" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Divider */}
      <motion.div variants={itemVariants} className="w-full h-[1px] bg-neutral-800/80 my-4" />

      {/* Seventh Segment: ECCP */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Left Side: Staggered double smaller images */}
        <div className="md:col-span-6 flex flex-col gap-6">
          {/* Top Booth Interaction */}
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            onClick={() => setActiveLightbox(eccpBoothInteraction)}
            className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-neutral-950 border border-neutral-900 group cursor-zoom-in shadow-lg hover:shadow-purple-neon/20 transition-all duration-300"
          >
            <img
              src={eccpBoothInteraction}
              alt="ECCP Finland Trade Hall exhibition booth discussion"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-300" />
            
            <div className="absolute bottom-3 right-3 p-1.5 rounded-full bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Maximize2 size={12} className="text-white" />
            </div>
          </motion.div>

          {/* Bottom Booth Staff posing */}
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            onClick={() => setActiveLightbox(eccpBoothStaff)}
            className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-neutral-950 border border-neutral-900 group cursor-zoom-in shadow-lg hover:shadow-purple-neon/20 transition-all duration-300"
          >
            <img
              src={eccpBoothStaff}
              alt="ECCP Associates posing inside design booth"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-300" />
            
            <div className="absolute bottom-3 right-3 p-1.5 rounded-full bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Maximize2 size={12} className="text-white" />
            </div>
          </motion.div>
        </div>

        {/* Right Side: Tall Finland Global banner illustration + Caption beneath it */}
        <div className="md:col-span-6 space-y-3">
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            onClick={() => setActiveLightbox(eccpTallRep)}
            className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-neutral-950 border border-neutral-900 group cursor-zoom-in shadow-lg hover:shadow-purple-neon/20 transition-all duration-300"
          >
            <img
              src={eccpTallRep}
              alt="ECCP Finland excels in Global rankings banner display"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-300" />
            
            <div className="absolute bottom-3 right-3 p-1.5 rounded-full bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Maximize2 size={12} className="text-white" />
            </div>
          </motion.div>

          <div className="px-1 space-y-1">
            <h4 className="text-sm md:text-base font-bold text-white font-sans tracking-wide leading-snug uppercase">
              EUROPEAN CHAMBER OF COMMERCE OF THE PHILIPPINE (DAVAO)
            </h4>
            <p className="text-xs md:text-sm text-neutral-400 font-light font-sans">
              ECCP Davao Associate
            </p>
          </div>
        </div>
      </motion.div>

      {/* Divider */}
      <motion.div variants={itemVariants} className="w-full h-[1px] bg-neutral-800/80 my-4" />

      {/* Eighth Segment: Department of Agrarian Reform Film Festival */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Side: Big Pasidungog/Trophy Stage Photo */}
        <div className="md:col-span-6 flex flex-col justify-between">
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            onClick={() => setActiveLightbox(pasidungogStageTrophies)}
            className="relative aspect-square md:aspect-[3/4.2] lg:aspect-[3/3.8] overflow-hidden rounded-[1.5rem] bg-neutral-950 border border-neutral-900 group cursor-zoom-in shadow-lg hover:shadow-purple-neon/20 transition-all duration-300 h-full"
          >
            <img
              src={pasidungogStageTrophies}
              alt="PASIDUNGOG stage photo and trophies presentation"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-300" />
            
            <div className="absolute bottom-3 right-3 p-1.5 rounded-full bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Maximize2 size={12} className="text-white" />
            </div>
          </motion.div>
        </div>

        {/* Right Side: Triple Collage Stack */}
        <div className="md:col-span-6 flex flex-col gap-6 justify-between">
          {/* Top: filmCommunityGroup landscape */}
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            onClick={() => setActiveLightbox(filmCommunityGroup)}
            className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-neutral-950 border border-neutral-900 group cursor-zoom-in shadow-lg hover:shadow-purple-neon/20 transition-all duration-300"
          >
            <img
              src={filmCommunityGroup}
              alt="PelikulAgraryo team community filming interaction"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-300" />
            
            <div className="absolute bottom-3 right-3 p-1.5 rounded-full bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Maximize2 size={12} className="text-white" />
            </div>
          </motion.div>

          {/* Bottom Side-by-Side: filmAwardsBwFlatlay (left) and independentFilmShoot (right) */}
          <div className="grid grid-cols-12 gap-6 items-stretch">
            {/* Lower Left: Black & White awards flat-lay */}
            <div className="col-span-5">
              <motion.div
                variants={imageVariants}
                whileHover="hover"
                onClick={() => setActiveLightbox(filmAwardsBwFlatlay)}
                className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-neutral-950 border border-neutral-900 group cursor-zoom-in shadow-lg hover:shadow-purple-neon/20 transition-all duration-300 h-full"
              >
                <img
                  src={filmAwardsBwFlatlay}
                  alt="PelikulAgraryo team award film trophies clappers"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-300" />
                
                <div className="absolute bottom-3 right-3 p-1.5 rounded-full bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 size={12} className="text-white" />
                </div>
              </motion.div>
            </div>

            {/* Lower Right: Shoot at night film crew */}
            <div className="col-span-7">
              <motion.div
                variants={imageVariants}
                whileHover="hover"
                onClick={() => setActiveLightbox(independentFilmShoot)}
                className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-neutral-950 border border-neutral-900 group cursor-zoom-in shadow-lg hover:shadow-purple-neon/20 transition-all duration-300 h-full"
              >
                <img
                  src={independentFilmShoot}
                  alt="Independent night shoot filming crew at work"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-300" />
                
                <div className="absolute bottom-3 right-3 p-1.5 rounded-full bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 size={12} className="text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

      </motion.div>

      {/* Caption under eighth segment */}
      <motion.div variants={itemVariants} className="px-1 space-y-1">
        <h4 className="text-sm md:text-base font-bold text-white font-sans tracking-wide leading-snug uppercase">
          Department of Agrarian Reform Central and Regional Film Festival 2025: PelikulAgraryo | REGIONAL & NATIONAL CHAMPION | Assistant Cameraman & Production Staff
        </h4>
      </motion.div>

      {/* Divider */}
      <motion.div variants={itemVariants} className="w-full h-[1px] bg-neutral-800/80 my-4" />

      {/* Local lightbox modal context */}
      <AnimatePresence>
        {activeLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setActiveLightbox(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ ease: "easeOut", duration: 0.3 }}
              className="relative max-w-full max-h-[85vh] rounded-lg overflow-hidden border border-neutral-800 bg-neutral-950"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeLightbox}
                alt="Enlarged workspace action photography"
                referrerPolicy="no-referrer"
                className="max-h-[80vh] object-contain"
              />
              <button 
                onClick={() => setActiveLightbox(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/70 text-neutral-300 hover:text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
