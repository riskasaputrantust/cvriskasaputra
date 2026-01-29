
import { 
  User, Newspaper, Rocket, Trophy, PlayCircle, 
  Layout, Microscope, Building, Archive 
} from 'lucide-react';
import { Tab, ResearchPaper } from './types';

export const PROFILE_DATA = {
  profile: {
    name: "Riska Saputra",
    chineseName: "高少奇",
    age: 28,
    location: "Zhongli, Taiwan | Bengkalis, Indonesia",
    emails: {
      business: "ceo@dariskyinstitute.com",
      academic: "110524601@cc.ncu.edu.tw"
    },
    summary: "Dedicated researcher specialized in AI Policy and interdisciplinary Educational Technology. Bridging the gap between cutting-edge AI regulations and practical classroom innovation.",
    skills: ["Digital Education", "Learning Science", "TESOL", "AI Ethics", "Web Dev (React/Laravel)", "Data Science", "UI/UX Researcher"]
  },
  education: [
    { level: "PhD", school: "NTUST", degree: "Digital Learning & Education", period: "2025-2028", gpa: "Full Scholarship", courses: ["Educational Research Methodology", "Psychology of E-learning", "Computational Thinking"] },
    { level: "Master", school: "National Central University", degree: "Network Learning Technology", period: "2021-2024", gpa: "4.23/4.30", courses: ["Digital Game-Based Learning", "Qualitative Research", "High Interaction Multimedia"] },
    { level: "Bachelor", school: "STAIN Bengkalis", degree: "TESOL", period: "2015-2019", gpa: "3.56/4.00", courses: ["TEFL", "Computer-Assisted Language Learning", "Educational Statistics"] }
  ],
  work: [
    { role: "Founder & CEO", org: "Darisky Institute", period: "2021-Present", tasks: ["Website Architecture", "Learning Content Design", "EduTech Collaboration"] },
    { role: "Research Assistant", org: "Chan Lab, NCU", period: "2022-2024", tasks: ["AI Discussion (2030-2050)", "Robot Design for English Learning", "STEM Robotics"] },
    { role: "Peer-Reviewer", org: "Script Journal & JEPEC", period: "2023-Present", tasks: ["Linguistics", "English Teaching Methodology"] }
  ],
  awards: [
    { title: "Graduation Speaker", org: "National Central University", year: "2023" },
    { title: "Riau Best Youth Award", org: "Riau Governor", year: "2017" },
    { title: "National Creative Youth Ambassador", org: "Kemenpora RI", year: "2017" },
    { title: "Taiwan Amusement Park International Ambassador", org: "MOTC Taiwan", year: "2023/2025" }
  ],
  media: [
    { title: "Riska Saputra Terpilih Sekolah Staf Presiden", source: "Prokopim Bengkalis", url: "#" },
    { title: "Mahasiswa Bengkalis Pidato Perwakilan Internasional di NCU", source: "Berita Riau", url: "#" },
    { title: "Pemuda Bengkalis Pidato Kebangsaan Bersama Kemenpora", source: "Diskominfotik", url: "#" }
  ],
  orgHistory: [
    { role: "Coordinator ILUNI Sumatera", org: "Sekolah Staf Presiden", period: "2024-2026" },
    { role: "DevOps Manager", org: "PPI Dunia", period: "2022-2023" },
    { role: "Secretary", org: "Masjid Al-Amin Zhongli", period: "2023-2025" },
    { role: "Student Wing Committee", org: "APSCE", period: "2024-Present" }
  ]
};

export const TABS: Tab[] = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'news', label: 'News', icon: Newspaper },
  { id: 'institute', label: 'Institute', icon: Rocket },
  { id: 'awards', label: 'Awards', icon: Trophy },
  { id: 'research', label: 'Research', icon: Microscope },
  { id: 'org', label: 'Organization', icon: Building },
  { id: 'video', label: 'Media', icon: PlayCircle },
  { id: 'blog', label: 'Blog', icon: Layout },
  { id: 'portfolio', label: 'Archive', icon: Archive },
];

export const RESEARCH_PAPERS: ResearchPaper[] = [
  { title: "Analysis and Comparative of the Academic Draft on Coding and AI Education in Indonesia", venue: "ICCE 2025", year: 2025, tags: ["AI Policy", "Indonesia"] },
  { title: "Unlocking Language Learning with AI: Performance and Computational Thinking", venue: "ICCE 2025", year: 2025, tags: ["LLM", "TESOL"] },
  { title: "Integrating Generative AI into Escape Room-Based Learning for Nursing", venue: "ICCE 2025", year: 2025, tags: ["Gamification", "Nursing"] },
  { title: "AI-Assisted Writing: Impact of ChatGPT on Student Autonomy", venue: "TELIC 2024", year: 2024, tags: ["Generative AI", "Autonomy"] },
  { title: "TTPR: Design of Tech-Enhanced Total Physical Response", venue: "NCU Master Thesis", year: 2024, tags: ["Robotics", "Language Learning"] }
];
