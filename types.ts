
import { LucideIcon } from 'lucide-react';

export interface Profile {
  name: string;
  chineseName: string;
  age: number;
  location: string;
  emails: {
    business: string;
    academic: string;
  };
  summary: string;
  skills: string[];
}

export interface Education {
  level: string;
  school: string;
  degree: string;
  period: string;
  gpa: string;
  courses: string[];
}

export interface Work {
  role: string;
  org: string;
  period: string;
  tasks: string[];
}

export interface Award {
  title: string;
  org: string;
  year: string;
}

export interface Media {
  title: string;
  source: string;
  url: string;
}

export interface OrgHistory {
  role: string;
  org: string;
  period: string;
}

export interface Tab {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface ResearchPaper {
  title: string;
  venue: string;
  year: number;
  tags: string[];
}
