/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { EducationEntry, ExperienceEntry, AwardEntry } from './types';

export const PERSONAL_INFO = {
  name: {
    first: "Marwen",
    last: "Escobar"
  },
  title: "Communication Student & Multimedia Practitioner",
  location: "Davao City, Philippines",
  contact: {
    email: "marwen.escobar@studio.com",
    instagram: "@marwen_escobar",
    vimeo: "marwenescobar",
    phone: "+63 (900) 123 4567"
  },
  greeting: "Hi, I am Marwen Escobar!",
  bio: "A Communication student and aspiring multimedia practitioner passionate about storytelling, digital content creation, and media production. I specialize in video editing, graphic design, news writing, social media management, and broadcast production, with a strong interest in camera work, live production, and multimedia storytelling. I aim to transform ideas into creative and impactful visual stories that effectively connect with audiences.",
  philosophy: "Storytelling is the bridge that turns abstract ideas into impactful visual narratives that connect, move, and inspire."
};

export const EDUCATION_LIST: EducationEntry[] = [
  {
    id: "edu_1",
    level: "TERTIARY",
    school: "HOLY CROSS OF DAVAO COLLEGE",
    degree: "Bachelor of Arts in Communication major in New Media Studies",
    period: "2022-2026",
    location: "Davao City, Philippines",
    details: ""
  },
  {
    id: "edu_2",
    level: "SENIOR HIGH SCHOOL",
    school: "BERNARDO D. CARPIO NATIONAL HIGH SCHOOL",
    degree: "",
    period: "2020-2022",
    location: "Davao City, Philippines",
    details: "Graduated in Senior High School with academic distinction of With High Honors"
  },
  {
    id: "edu_3",
    level: "JUNIOR HIGH SCHOOL",
    school: "BERNARDO D. CARPIO NATIONAL HIGH SCHOOL",
    degree: "",
    period: "2016-2020",
    location: "Davao City, Philippines",
    details: "Graduated in Senior High School with academic distinction of With Honors"
  }
];

export const EXPERIENCE_LIST: ExperienceEntry[] = [
  {
    id: "exp_1",
    role: "Freelance Video Editor & Graphic Designer",
    company: "Independent Practice",
    period: "2023 - Present",
    location: "Remote / On-Set",
    description: "Produce engaging video sequences and social graphics for high-impact commercial clients and creators, managing timeline post-production, sound engineering, and styling guides.",
    skills: ["Video Editing", "Graphic Design", "Social Media Management", "Narrative Delivery"]
  },
  {
    id: "exp_2",
    role: "Chief Layout Artist & News Writer",
    company: "University Chronicle Publication",
    period: "2022 - 2024",
    location: "Davao City, PH",
    description: "Spearheaded quarterly newspaper grid architectural design and authored long-form investigational and campus life reports.",
    skills: ["News Writing", "Pre-press Lithography", "Grid System Design", "Editorial Focus"]
  },
  {
    id: "exp_3",
    role: "Broadcast Production Intern",
    company: "Metropolitan News Network",
    period: "2023",
    location: "Davao City, PH",
    description: "Assisted director of photography with multi-camera live switching setups, teleprompter timing, and direct studio sound engineering.",
    skills: ["Live Production", "Camera Angles", "Script Supervision", "Audio Mixing"]
  }
];

export const AWARDS_LIST: AwardEntry[] = [
  {
    id: "aw_1",
    title: "Best Editor & Narrative Designer",
    issuer: "Inter-University Student Film Festival",
    year: "2025",
    category: "Short Documentary"
  },
  {
    id: "aw_2",
    title: "Outstanding Writer in News Reporting",
    issuer: "State Journalism Excellence Awards",
    year: "2024",
    category: "Investigative Journalism"
  },
  {
    id: "aw_3",
    title: "Dean's Honor List for Academic Excellence",
    issuer: "College of Communication",
    year: "2023",
    category: "Academic Distinction"
  }
];

export const EXTRAS = {
  exhibitions: [
    { name: "Visual Stories: A Reflection", location: "City Culture Hall", year: "2025" },
    { name: "Skins & Modern Architecture", location: "Art Centre Expo", year: "2024" }
  ]
};
