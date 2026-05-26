/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type SectionType = 'about' | 'education' | 'experience' | 'awards';

export interface EducationEntry {
  id: string;
  level: string;
  degree: string;
  school: string;
  period: string;
  location: string;
  details: string;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
}

export interface AwardEntry {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: string;
}
