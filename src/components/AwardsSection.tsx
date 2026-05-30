/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, Award, MapPin, Calendar, FileCheck } from 'lucide-react';

// @ts-ignore
import certVideoEdit from '../assets/images/certs/6.jpg';
// @ts-ignore
import certLayoutGraphic from '../assets/images/certs/7.jpg';
// @ts-ignore
import certStudioPhoto from '../assets/images/certs/3.jpg';
// @ts-ignore
import certSocialMedia from '../assets/images/certs/9.jpg';
// @ts-ignore
import certLiveStream from '../assets/images/certs/8.jpg';
// @ts-ignore
import certAppreciationFilm from '../assets/images/certs/4.jpg';
// @ts-ignore
import certDarCinematography from '../assets/images/certs/10.jpg';
// @ts-ignore
import certDarGrandFestival from '../assets/images/certs/5.jpg';
// @ts-ignore
import certGmaEleksyon from '../assets/images/certs/12.jpg';
// @ts-ignore
import certMostReliable from '../assets/images/certs/1.jpg';
// @ts-ignore
import certCmmaFinalist from '../assets/images/certs/11.jpg';

interface CertificateItem {
  id: string;
  title: string;
  workshop: string;
  date: string;
  issuer: string;
  image: string;
}

export default function AwardsSection() {
  const [activeLightbox, setActiveLightbox] = useState<string | null>(null);

  const certs: CertificateItem[] = [
    {
      id: "cert_1",
      title: "Video Editing & Animation",
      workshop: "Video Editing and Animation Workshop",
      date: "November 21, 2022",
      issuer: "Holy Cross of Davao College",
      image: certVideoEdit
    },
    {
      id: "cert_2",
      title: "Layout & Graphics Design",
      workshop: "Layout and Graphics Design Workshop",
      date: "November 12, 2022",
      issuer: "Holy Cross of Davao College",
      image: certLayoutGraphic
    },
    {
      id: "cert_3",
      title: "Studio Photography",
      workshop: "Studio Photography Workshop",
      date: "October 22, 2022",
      issuer: "Holy Cross of Davao College",
      image: certStudioPhoto
    },
    {
      id: "cert_4",
      title: "Social Media Management",
      workshop: "Social Media Content Management Workshop",
      date: "October 15, 2022",
      issuer: "Holy Cross of Davao College",
      image: certSocialMedia
    },
    {
      id: "cert_5",
      title: "Streaming Live Productions",
      workshop: "Streaming Live Productions Workshop",
      date: "November 26, 2022",
      issuer: "Holy Cross of Davao College",
      image: certLiveStream
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
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
      className="space-y-12 text-neutral-300 font-sans"
    >
      {/* Segment 1: CERTIFICATE OF PARTICIPATION with subtexts */}
      <div className="space-y-6">
        <motion.div variants={itemVariants} className="space-y-2 pb-4 border-b border-neutral-900/40">
          <h2 className="text-2xl md:text-3xl font-display font-medium text-white tracking-widest uppercase">
            CERTIFICATE OF PARTICIPATION
          </h2>
          <p className="text-xs md:text-sm text-neutral-400 font-normal leading-relaxed">
            Video Editing and Animation Workshop, Studio Photography Workshop, Social Media Content Management Workshop, Streaming Live Productions Workshop, Layout and Graphics Design Workshop
          </p>
        </motion.div>

        {/* Grid containing Rows of certificates as requested in the mockup */}
        <div className="space-y-8">

          {/* Row 1: Three Certificates Side-by-Side */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certs.slice(0, 3).map((cert) => (
              <div key={cert.id} className="space-y-3 group">
                <div
                  onClick={() => setActiveLightbox(cert.image)}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-950 border border-neutral-900 shadow-lg cursor-zoom-in group-hover:border-neutral-700/60 transition-colors duration-300"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />

                  <div className="absolute bottom-3 right-3 p-1.5 rounded-full bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 size={12} className="text-white" />
                  </div>
                </div>

                <div className="px-1 space-y-1">
                  <h4 className="text-xs font-mono font-bold text-neutral-400 tracking-wider uppercase flex items-center gap-1.5">
                    <Award size={12} className="text-purple-neon" />
                    {cert.title}
                  </h4>
                  <p className="text-sm font-semibold text-white tracking-tight leading-snug">
                    {cert.workshop}
                  </p>
                  <p className="text-[11px] text-neutral-500 font-light flex items-center gap-1">
                    <Calendar size={10} />
                    {cert.date} • {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Row 2: Two Certificates Centered Side-by-Side (Matching mockup asymmetry) */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-[70%] mx-auto"
          >
            {certs.slice(3, 5).map((cert) => (
              <div key={cert.id} className="space-y-3 group">
                <div
                  onClick={() => setActiveLightbox(cert.image)}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-950 border border-neutral-900 shadow-lg cursor-zoom-in group-hover:border-neutral-700/60 transition-colors duration-300"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />

                  <div className="absolute bottom-3 right-3 p-1.5 rounded-full bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 size={12} className="text-white" />
                  </div>
                </div>

                <div className="px-1 space-y-1">
                  <h4 className="text-xs font-mono font-bold text-neutral-400 tracking-wider uppercase flex items-center gap-1.5">
                    <Award size={12} className="text-purple-neon" />
                    {cert.title}
                  </h4>
                  <p className="text-sm font-semibold text-white tracking-tight leading-snug">
                    {cert.workshop}
                  </p>
                  <p className="text-[11px] text-neutral-500 font-light flex items-center gap-1">
                    <Calendar size={10} />
                    {cert.date} • {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Decorative separator line */}
      <motion.div variants={itemVariants} className="w-full h-[1px] bg-neutral-800/80 my-4" />

      {/* Segment 2: CERTIFICATE OF APPRECIATION with large featured mockup */}
      <div className="space-y-6 pt-4">
        <motion.div variants={itemVariants} className="space-y-2 pb-4 border-b border-neutral-900/40">
          <h2 className="text-2xl md:text-3xl font-display font-medium text-white tracking-widest uppercase">
            CERTIFICATE OF APPRECIATION
          </h2>
          <p className="text-xs md:text-sm text-neutral-400 font-normal leading-relaxed">
            Seminar Workshop entitled “Basics of Film and Script Writing of BACOMM”
          </p>
        </motion.div>

        {/* Featured Card matching mockup size */}
        <motion.div variants={itemVariants} className="max-w-[85%] mx-auto group">
          <div className="space-y-4">
            <div
              onClick={() => setActiveLightbox(certAppreciationFilm)}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-950 border border-neutral-900 shadow-2xl cursor-zoom-in group-hover:border-neutral-700 transition-colors duration-500"
            >
              <img
                src={certAppreciationFilm}
                alt="Certificate of Appreciation - Basics of Film and Script Writing"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />

              <div className="absolute bottom-4 right-4 p-2 rounded-full bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                <Maximize2 size={14} className="text-white" />
              </div>
            </div>

            <div className="px-2 text-center md:text-left space-y-1">
              <h4 className="text-xs font-mono font-bold text-[#f59e0b] tracking-widest uppercase flex items-center justify-center md:justify-start gap-1.5">
                <Award size={12} className="text-[#f59e0b]" />
                Featured Academic Appreciation
              </h4>
              <p className="text-base font-bold text-white tracking-wide">
                Seminar Workshop on Basics of Film & Script Writing
              </p>
              <p className="text-xs text-neutral-400 font-light">
                March 22, 2025 • Holy Cross of Davao College (BACOMM Practicum Program)
              </p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Decorative separator line */}
      <motion.div variants={itemVariants} className="w-full h-[1px] bg-neutral-800/80 my-4" />

      {/* Segment 3: CERTIFICATE OF PARTICIPATION — DAR CENTRAL & REGIONAL FILM FESTIVAL 2025 */}
      <div className="space-y-6 pt-4">
        <motion.div variants={itemVariants} className="space-y-2 pb-4 border-b border-neutral-900/40">
          <h2 className="text-2xl md:text-3xl font-display font-medium text-white tracking-widest uppercase">
            CERTIFICATE OF PARTICIPATION
          </h2>
          <p className="text-xs md:text-sm text-neutral-400 font-normal leading-relaxed">
            Best in Cinematography, Best in Film, Best in Production Design and Best in Sound during the DAR Central and Regional Film Festival 2025
          </p>
        </motion.div>

        {/* Two certificates Side-By-Side */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Certificate 1: Regional (Cinematography) */}
          <div className="space-y-4 group">
            <div
              onClick={() => setActiveLightbox(certDarCinematography)}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-950 border border-neutral-900 shadow-2xl cursor-zoom-in group-hover:border-neutral-700 transition-colors duration-500"
            >
              <img
                src={certDarCinematography}
                alt="DAR Film Festival Regional Certificate - Best Cinematography"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />

              <div className="absolute bottom-4 right-4 p-2 rounded-full bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                <Maximize2 size={14} className="text-white" />
              </div>
            </div>

            <div className="px-2 space-y-1">
              <h4 className="text-xs font-mono font-bold text-purple-neon tracking-widest uppercase flex items-center gap-1.5">
                <Award size={12} className="text-purple-neon" />
                Regional Award
              </h4>
              <p className="text-base font-bold text-white tracking-wide">
                Best Cinematography (PelikulAgraryo)
              </p>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                DAR Central and Regional Film Festival • July 17, 2025 <br />
                <span className="text-neutral-500 italic">Held at the Grand Regal Hotel, Davao City (Awarded August 8, 2025)</span>
              </p>
            </div>
          </div>

          {/* Certificate 2: National Grand Ceremony */}
          <div className="space-y-4 group">
            <div
              onClick={() => setActiveLightbox(certDarGrandFestival)}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-950 border border-neutral-900 shadow-2xl cursor-zoom-in group-hover:border-neutral-700 transition-colors duration-500"
            >
              <img
                src={certDarGrandFestival}
                alt="DAR National Film Festival Grand Certificate - Best Film, Cinematography, Production Design, & Sound"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />

              <div className="absolute bottom-4 right-4 p-2 rounded-full bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                <Maximize2 size={14} className="text-white" />
              </div>
            </div>

            <div className="px-2 space-y-1">
              <h4 className="text-xs font-mono font-bold text-[#38bdf8] tracking-widest uppercase flex items-center gap-1.5">
                <Award size={12} className="text-[#38bdf8]" />
                National/Central Grand Winners
              </h4>
              <p className="text-base font-bold text-white tracking-wide">
                Best Film, Cinematography, Production Design, & Sound
              </p>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                DAR Central Film Festival Awarding Ceremony • October 6, 2025 <br />
                <span className="text-neutral-500 italic">Held at the Novotel Manila Araneta City (Awarded November 11, 2025)</span>
              </p>
            </div>
          </div>

        </motion.div>
      </div>

      {/* Decorative separator line */}
      <motion.div variants={itemVariants} className="w-full h-[1px] bg-neutral-800/80 my-4" />

      {/* Segment 4: CERTIFICATE OF PARTICIPATION — ELEKSYON 2025 GMA DIGITAL ACTION CENTER */}
      <div className="space-y-6 pt-4">
        <motion.div variants={itemVariants} className="space-y-2 pb-4 border-b border-neutral-900/40">
          <h2 className="text-2xl md:text-3xl font-display font-medium text-white tracking-widest uppercase">
            CERTIFICATE OF PARTICIPATION
          </h2>
          <p className="text-xs md:text-sm text-neutral-400 font-normal leading-relaxed">
            Student Volunteer for the Eleksyon 2025 GMA Integrated News Digital Action Center
          </p>
        </motion.div>

        {/* Elegant Centered Portrait Document Card */}
        <motion.div variants={itemVariants} className="max-w-[70%] sm:max-w-[55%] md:max-w-[45%] mx-auto group">
          <div className="space-y-4">
            <div
              onClick={() => setActiveLightbox(certGmaEleksyon)}
              className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-950 border border-neutral-900 shadow-2xl cursor-zoom-in group-hover:border-neutral-700 transition-colors duration-500"
            >
              <img
                src={certGmaEleksyon}
                alt="GMA Integrated News Eleksyon 2025 Certificate of Participation"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />

              <div className="absolute bottom-4 right-4 p-2 rounded-full bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                <Maximize2 size={14} className="text-white" />
              </div>
            </div>

            <div className="px-2 text-center space-y-1">
              <h4 className="text-xs font-mono font-bold text-[#38bdf8] tracking-widest uppercase flex items-center justify-center gap-1.5">
                <Award size={12} className="text-[#38bdf8]" />
                GMA Network Civic Volunteerism
              </h4>
              <p className="text-base font-bold text-white tracking-wide">
                ELEKSYON 2025 Student Volunteer
              </p>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                GMA Network, Inc. Regional TV Davao • May 12, 2025<br />
                <span className="text-neutral-500 italic">GMA Integrated News, Regional TV & Synergy Digital Action Center</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative separator line */}
      <motion.div variants={itemVariants} className="w-full h-[1px] bg-neutral-800/80 my-4" />

      {/* Segment 5 & 6: CSCAA MOST RELIABLE & CMMA RECOGNITION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">

        {/* CSCAA Most Reliable Award */}
        <div className="space-y-6">
          <motion.div variants={itemVariants} className="space-y-2 pb-4 border-b border-neutral-900/40">
            <h2 className="text-2xl md:text-3xl font-display font-medium text-white tracking-widest uppercase">
              MOST RELIABLE AWARD
            </h2>
            <p className="text-xs md:text-sm text-neutral-400 font-normal leading-relaxed h-[40px] md:h-[60px] overflow-hidden">
              Recognition for consistent reliability and dependability at the Center for Social Communications and Alumni Affairs (CSCAA)
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="group">
            <div className="space-y-4">
              <div
                onClick={() => setActiveLightbox(certMostReliable)}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-950 border border-neutral-900 shadow-2xl cursor-zoom-in group-hover:border-neutral-700 transition-colors duration-500"
              >
                <img
                  src={certMostReliable}
                  alt="CSCAA Most Reliable Award Certificate"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />

                <div className="absolute bottom-4 right-4 p-2 rounded-full bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <Maximize2 size={14} className="text-white" />
                </div>
              </div>

              <div className="px-2 space-y-1">
                <h4 className="text-xs font-mono font-bold text-amber-500 tracking-widest uppercase flex items-center gap-1.5">
                  <Award size={12} className="text-amber-500" />
                  Dependability Honors
                </h4>
                <p className="text-base font-bold text-white tracking-wide">
                  Most Reliable Scholar Award
                </p>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  Center for Social Communications and Alumni Affairs (CSCAA) • December 18, 2025<br />
                  <span className="text-neutral-500 italic">HCDC Maritime Training Center (MTC), Samal</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CMMA Finalist Certificate of Recognition */}
        <div className="space-y-6">
          <motion.div variants={itemVariants} className="space-y-2 pb-4 border-b border-neutral-900/40">
            <h2 className="text-2xl md:text-3xl font-display font-medium text-white tracking-widest uppercase">
              CERTIFICATE OF RECOGNITION
            </h2>
            <p className="text-xs md:text-sm text-neutral-400 font-normal leading-relaxed h-[40px] md:h-[60px] overflow-hidden">
              Finalist in the 47th Catholic Mass Media Awards (CMMA) for Outstanding Student work
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="group">
            <div className="space-y-4">
              <div
                onClick={() => setActiveLightbox(certCmmaFinalist)}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-950 border border-neutral-900 shadow-2xl cursor-zoom-in group-hover:border-neutral-700 transition-colors duration-500"
              >
                <img
                  src={certCmmaFinalist}
                  alt="Catholic Mass Media Awards Recognition Certificate"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />

                <div className="absolute bottom-4 right-4 p-2 rounded-full bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <Maximize2 size={14} className="text-white" />
                </div>
              </div>

              <div className="px-2 space-y-1">
                <h4 className="text-xs font-mono font-bold text-[#ec4899] tracking-widest uppercase flex items-center gap-1.5">
                  <Award size={12} className="text-[#ec4899]" />
                  Prestigious Finalist Selection
                </h4>
                <p className="text-base font-bold text-white tracking-wide">
                  "We Stand for Truth" Public Service TV Ad
                </p>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  47th Catholic Mass Media Awards • November 11, 2025<br />
                  <span className="text-neutral-500 italic">Presented by the Holy Cross of Davao College and CMMA committees</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Decorative separator line */}
      <motion.div variants={itemVariants} className="w-full h-[1px] bg-neutral-800/80 my-4" />

      {/* Extra Academic / Verification Footer */}
      <motion.div
        variants={itemVariants}
        className="p-5 border border-neutral-900/60 bg-neutral-950/40 rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div className="flex items-center gap-3">
          <FileCheck size={18} className="text-purple-neon shrink-0" />
          <div className="space-y-0.5">
            <h5 className="text-xs font-semibold text-white uppercase tracking-wider font-display">
              HCDC Center for Social Communications Verification
            </h5>
            <p className="text-[11px] text-neutral-400 font-light leading-relaxed">
              All credentials authenticated by the Center for Social Communications and alumni affairs.
            </p>
          </div>
        </div>
        <span className="text-[10px] font-mono text-neutral-500 uppercase shrink-0 bg-neutral-900 px-2 py-1 rounded">
          Status: Verified Academic Record
        </span>
      </motion.div>

      {/* Lightbox / Enlarged View modal wrapper */}
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
                alt="Enlarged Certificate of Participation credentials"
                referrerPolicy="no-referrer"
                className="max-h-[80vh] object-contain mx-auto"
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
