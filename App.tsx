
import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, Cpu, BookOpen, Globe, Award, Mail, Linkedin, ExternalLink, 
  GraduationCap, ChevronRight, User, Zap, Microscope, MapPin, MessageSquare, 
  ShieldCheck, Rocket, Search, Users, Newspaper, PlayCircle, Layout, Building, Archive,
  Trophy, Share2, Calendar, Link as LinkIcon, Briefcase, Code, Hash, ArrowUpRight,
  Bot
} from 'lucide-react';
import { PROFILE_DATA, TABS, RESEARCH_PAPERS } from './constants';
import AIChat from './components/AIChat';
import { getAIInsights } from './services/geminiService';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [scrolled, setScrolled] = useState(false);
  const [aiInsight, setAiInsight] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Generate an insight when the tab changes to relevant sections
    if (activeTab === 'research' || activeTab === 'profile') {
      const fetchInsight = async () => {
        const insight = await getAIInsights("Global AI Policy in Higher Education 2025");
        setAiInsight(insight);
      };
      fetchInsight();
    }
  }, [activeTab]);

  const NavItem: React.FC<{ id: string, icon: any, label: string }> = ({ id, icon: Icon, label }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center space-x-2 px-5 py-2.5 rounded-full transition-all duration-300 whitespace-nowrap border shrink-0 ${
        activeTab === id 
        ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.2)]' 
        : 'text-slate-400 hover:text-white border-transparent hover:bg-slate-800/50'
      }`}
    >
      <Icon size={16} />
      <span className="font-bold text-[10px] uppercase tracking-wider">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-[#040609] text-slate-200 selection:bg-cyan-500/30 font-sans overflow-x-hidden">
      {/* Background Layer */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e293b_1px,transparent_1px)] bg-[size:32px_32px] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-cyan-500/5 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-subtle-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] animate-subtle-pulse"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#040609]/90 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl shadow-black' : 'bg-transparent py-10'}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20 group hover:rotate-12 transition-transform cursor-pointer">
                <span className="text-white font-black text-lg">D</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold tracking-tighter text-white uppercase">{PROFILE_DATA.profile.name}</h1>
                <p className="text-[9px] text-cyan-500 font-mono tracking-[0.3em] uppercase opacity-70">R_SAPUTRA_PHD_CANDIDATE</p>
              </div>
            </div>
            
            <div className="flex space-x-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
              {TABS.map(tab => (
                <NavItem key={tab.id} {...tab} />
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="relative pt-44 lg:pt-52 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-[90vh]">
        
        {/* PROFILE SECTION */}
        {activeTab === 'profile' && (
          <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-8 space-y-12">
                <div className="space-y-6">
                  <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mono">
                    <Hash size={12} />
                    <span>Age: {PROFILE_DATA.profile.age} // Loc: {PROFILE_DATA.profile.location}</span>
                  </div>
                  <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter">
                    AI <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 italic underline decoration-white/10 decoration-2">POLICY.</span>
                  </h2>
                  <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl font-light">
                    {PROFILE_DATA.profile.summary} Focused on interdisciplinary research and sustainable education (SDG 4).
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                   <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all group">
                      <p className="text-slate-500 text-[10px] uppercase font-bold mb-2 flex items-center gap-2">
                        <Mail size={12} className="text-cyan-500" /> Primary Uplink
                      </p>
                      <p className="text-white font-mono text-sm break-all">{PROFILE_DATA.profile.emails.business}</p>
                   </div>
                   <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-blue-500/30 transition-all group">
                      <p className="text-slate-500 text-[10px] uppercase font-bold mb-2 flex items-center gap-2">
                        <GraduationCap size={12} className="text-blue-500" /> Academic Node
                      </p>
                      <p className="text-white font-mono text-sm break-all">{PROFILE_DATA.profile.emails.academic}</p>
                   </div>
                </div>

                <div className="space-y-6 pt-6">
                  <h3 className="text-2xl font-black text-white uppercase italic tracking-widest flex items-center gap-3">
                    <GraduationCap className="text-cyan-500" />
                    Educational Path
                  </h3>
                  <div className="grid gap-4">
                    {PROFILE_DATA.education.map((edu, idx) => (
                      <div key={idx} className="p-8 rounded-[2rem] bg-white/[0.01] border border-white/5 flex flex-col md:flex-row justify-between gap-6 group hover:bg-white/[0.03] transition-all relative overflow-hidden">
                        <div className="space-y-1 relative z-10">
                          <h4 className="text-white font-bold text-xl group-hover:text-cyan-400 transition-colors">{edu.degree}</h4>
                          <p className="text-slate-500 text-sm flex items-center gap-2">
                            <Building size={14} /> {edu.school} • <span className="text-cyan-600 font-bold">{edu.period}</span>
                          </p>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {edu.courses.map((c, i) => (
                              <span key={i} className="text-[10px] px-3 py-1 bg-slate-900 text-slate-400 rounded-full border border-white/5 mono">{c}</span>
                            ))}
                          </div>
                        </div>
                        <div className="md:text-right relative z-10">
                          <span className="text-xs font-mono text-cyan-400 font-bold bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20">{edu.gpa}</span>
                        </div>
                        <div className="absolute right-0 bottom-0 opacity-5 group-hover:opacity-10 transition-opacity">
                          <GraduationCap size={100} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 sticky top-44 hidden lg:block">
                <div className="p-10 rounded-[3rem] bg-slate-900/80 backdrop-blur-md border border-white/10 space-y-8 relative overflow-hidden group shadow-2xl">
                   <div className="text-center relative z-10">
                     <div className="w-40 h-40 bg-cyan-500/10 rounded-[2.5rem] mx-auto mb-8 flex items-center justify-center border border-cyan-500/20 rotate-3 group-hover:rotate-0 transition-transform">
                        <User size={80} className="text-cyan-400 opacity-50" />
                     </div>
                     <h3 className="text-white font-black text-5xl italic tracking-tighter mb-1">{PROFILE_DATA.profile.chineseName}</h3>
                     <p className="text-cyan-500 font-mono text-[10px] uppercase tracking-[0.5em] mb-10">System_Architect</p>
                     
                     <div className="space-y-4 text-left">
                        <p className="text-[10px] text-slate-500 uppercase font-bold mb-6 border-b border-white/10 pb-2">Core Competencies</p>
                        {PROFILE_DATA.profile.skills.map((skill, i) => (
                          <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                             <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_#22d3ee]"></div>
                             {skill}
                          </div>
                        ))}
                     </div>
                   </div>
                   <div className="absolute -inset-10 bg-cyan-500/5 blur-[80px] group-hover:bg-cyan-500/10 transition-all"></div>
                </div>

                {aiInsight && (
                  <div className="mt-8 p-6 rounded-3xl bg-indigo-500/10 border border-indigo-500/20 animate-in fade-in duration-700">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap size={16} className="text-indigo-400" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400">AI Policy Insight</span>
                    </div>
                    <p className="text-xs text-slate-400 italic leading-relaxed">"{aiInsight}"</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* RESEARCH SECTION */}
        {activeTab === 'research' && (
          <div className="animate-in fade-in duration-700 space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
              <div>
                <h2 className="text-5xl font-black text-white italic">Research Dossier</h2>
                <p className="text-slate-400 mt-2 max-w-xl">A collection of academic contributions focusing on Generative AI integration, digital learning, and language educational policies.</p>
              </div>
              <div className="flex gap-4">
                 <a href="https://scholar.google.com/citations?user=z32E4jAAAAAJ" target="_blank" className="p-3 bg-white/5 rounded-2xl text-cyan-400 hover:bg-cyan-400/10 transition-colors border border-white/5"><Search size={24} /></a>
                 <a href="#" className="p-3 bg-white/5 rounded-2xl text-indigo-400 hover:bg-indigo-400/10 transition-colors border border-white/5"><LinkIcon size={24} /></a>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {RESEARCH_PAPERS.map((paper, i) => (
                <div key={i} className="group p-8 rounded-[2.5rem] bg-white/[0.01] border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.03] transition-all flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
                        <Microscope size={24} />
                      </div>
                      <span className="text-[10px] mono text-slate-500 font-bold px-3 py-1 border border-white/10 rounded-full">{paper.year}</span>
                    </div>
                    <h4 className="text-xl font-bold text-white leading-tight group-hover:text-cyan-400 transition-colors">{paper.title}</h4>
                    <p className="text-sm text-slate-500 italic flex items-center gap-2">
                       <MapPin size={14} className="text-indigo-400" /> {paper.venue}
                    </p>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {paper.tags.map((tag, idx) => (
                      <span key={idx} className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 bg-slate-900 rounded-lg text-slate-400 border border-white/5">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* AI Insight for Research */}
            {aiInsight && (
              <div className="p-12 rounded-[3rem] bg-gradient-to-br from-indigo-900/20 to-cyan-900/10 border border-white/10 text-center space-y-6">
                <Bot className="mx-auto text-cyan-400 animate-bounce" size={48} />
                <h3 className="text-2xl font-black text-white italic tracking-widest">NEURAL PERSPECTIVE</h3>
                <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed italic">"{aiInsight}"</p>
                <div className="pt-4 flex justify-center gap-2">
                   <div className="w-1 h-1 rounded-full bg-cyan-500"></div>
                   <div className="w-1 h-1 rounded-full bg-cyan-500 opacity-50"></div>
                   <div className="w-1 h-1 rounded-full bg-cyan-500 opacity-20"></div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* INSTITUTE SECTION */}
        {activeTab === 'institute' && (
          <div className="animate-in fade-in duration-1000 space-y-16">
            <div className="max-w-4xl space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1 bg-indigo-500/10 rounded-full border border-indigo-500/20 text-indigo-400 font-bold text-[10px] tracking-widest uppercase">
                <Rocket size={14} /> Established 2021
              </div>
              <h2 className="text-7xl lg:text-8xl font-black text-white italic leading-none">Darisky <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">Institute.</span></h2>
              <p className="text-2xl text-slate-400 font-light italic border-l-4 border-indigo-500 pl-8 leading-relaxed">
                "Enhance Your Knowledge." Bridging global pedagogical innovation with Indonesian localized educational needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { title: "AI Literacy", desc: "Interactive workshops (2023-2024) empowering primary and secondary teachers with Generative AI tools.", icon: Cpu, color: "text-cyan-400" },
                 { title: "IELTS Mastery", desc: "Batch 1 completion in 2021. Intensive coaching for Indonesian scholars aiming for global top-tier universities.", icon: Globe, color: "text-blue-400" },
                 { title: "SEL & GCED", desc: "Integrating Social-Emotional Learning with Global Citizenship Education to foster holistic student growth.", icon: ShieldCheck, color: "text-indigo-400" }
               ].map((card, i) => (
                 <div key={i} className="group p-10 rounded-[3rem] bg-indigo-500/5 border border-white/5 hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all flex flex-col h-full">
                    <card.icon className={`${card.color} mb-8 group-hover:scale-110 transition-transform`} size={48} />
                    <h4 className="text-white font-black text-2xl mb-4 uppercase italic tracking-tighter">{card.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed flex-grow">{card.desc}</p>
                    <div className="mt-8 flex items-center text-indigo-400 text-[10px] font-bold tracking-[0.2em] uppercase cursor-pointer hover:gap-4 transition-all gap-2">
                       Learn More <ArrowUpRight size={14} />
                    </div>
                 </div>
               ))}
            </div>
          </div>
        )}

        {/* NEWS SECTION */}
        {activeTab === 'news' && (
          <div className="animate-in slide-in-from-right-12 duration-700 space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
              <h2 className="text-5xl font-black text-white italic">Media & Broadcast</h2>
              <p className="text-slate-500 text-sm font-mono uppercase tracking-widest px-4 py-1 bg-white/5 rounded-full border border-white/5">Global Mentions Tracker</p>
            </div>
            <div className="grid gap-6">
              {PROFILE_DATA.media.map((item, i) => (
                <a key={i} href={item.url} target="_blank" className="p-8 md:p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-cyan-500/40 hover:bg-white/[0.04] transition-all flex items-center justify-between group">
                   <div className="space-y-3">
                     <p className="text-[10px] font-mono text-cyan-500 uppercase flex items-center gap-2">
                        <Newspaper size={12} /> {item.source}
                     </p>
                     <h4 className="text-white font-bold text-xl md:text-2xl group-hover:translate-x-3 transition-transform">{item.title}</h4>
                   </div>
                   <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-600 group-hover:text-cyan-400 group-hover:border-cyan-400/30 transition-all">
                      <ExternalLink size={20} />
                   </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* AWARDS SECTION */}
        {activeTab === 'awards' && (
          <div className="animate-in zoom-in-95 duration-700 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROFILE_DATA.awards.map((award, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-slate-900/50 border border-white/5 hover:border-yellow-500/40 transition-all flex flex-col justify-center text-center space-y-6 group hover:-translate-y-2">
                <div className="w-20 h-20 mx-auto bg-yellow-500/5 rounded-[1.5rem] flex items-center justify-center border border-yellow-500/10 group-hover:bg-yellow-500/10 transition-colors">
                  <Trophy className="text-slate-700 group-hover:text-yellow-500 transition-colors" size={40} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg leading-tight group-hover:text-yellow-400 transition-colors">{award.title}</h4>
                  <p className="text-[9px] text-slate-500 uppercase font-mono tracking-widest">{award.org}</p>
                </div>
                <span className="text-xl font-black text-yellow-500/30 group-hover:text-yellow-500/80 transition-colors mono">{award.year}</span>
              </div>
            ))}
          </div>
        )}

        {/* ORGANIZATION SECTION */}
        {activeTab === 'org' && (
          <div className="animate-in slide-in-from-left-12 duration-700 space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              {PROFILE_DATA.orgHistory.map((org, i) => (
                <div key={i} className="p-10 rounded-[3rem] bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] transition-all flex items-start gap-8 group">
                   <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center text-indigo-400 border border-white/5 group-hover:border-indigo-500/30 transition-all flex-shrink-0">
                      <Building size={36} />
                   </div>
                   <div className="space-y-3">
                      <p className="text-[10px] font-mono text-indigo-500 font-bold uppercase tracking-[0.2em]">{org.period}</p>
                      <h4 className="text-2xl font-black text-white italic tracking-tighter uppercase leading-tight">{org.role}</h4>
                      <p className="text-slate-400 font-bold text-sm">{org.org}</p>
                   </div>
                </div>
              ))}
            </div>
            
            <div className="p-16 rounded-[4rem] border-2 border-dashed border-white/10 text-center space-y-8 bg-white/[0.01]">
               <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto text-slate-700">
                  <Users size={50} />
               </div>
               <div className="max-w-3xl mx-auto space-y-4">
                 <h3 className="text-3xl font-black text-white uppercase italic tracking-widest">Extensive Service Record</h3>
                 <p className="text-slate-500 text-lg leading-relaxed">
                   From Scout Leader (2007) to APSCE Student Wing (2024). A continuous 17-year history of leadership in Marching Bands, Student Councils (DEMA/BEM), and Overseas Student Alliances (PPI Taiwan/Dunia).
                 </p>
               </div>
               <div className="flex justify-center gap-4 text-[10px] font-mono uppercase tracking-[0.3em] text-slate-700">
                  <span>Community_First</span>
                  <span>//</span>
                  <span>Global_Engagement</span>
               </div>
            </div>
          </div>
        )}

        {/* PLACEHOLDERS */}
        {(activeTab === 'video' || activeTab === 'blog' || activeTab === 'portfolio') && (
          <div className="animate-in fade-in zoom-in-95 duration-1000 flex flex-col items-center justify-center min-h-[60vh] text-center space-y-12 relative">
             <div className="w-32 h-32 bg-white/5 rounded-[2.5rem] flex items-center justify-center animate-pulse border border-white/10 shadow-2xl shadow-cyan-500/10 rotate-12">
                {activeTab === 'video' ? <PlayCircle size={60} className="text-red-500" /> : 
                 activeTab === 'blog' ? <Layout size={60} className="text-purple-500" /> :
                 <Archive size={60} className="text-cyan-500" />}
             </div>
             <div className="space-y-4">
               <h3 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-widest underline decoration-white/10 underline-offset-8 decoration-4">
                 Accessing {activeTab === 'video' ? 'Media_Stream' : activeTab === 'blog' ? 'Article_Hub' : 'Sharing_Vault'}
               </h3>
               <p className="text-slate-500 max-w-lg mx-auto text-lg font-light leading-relaxed">
                 Remote data retrieval initialized. Fetching high-bandwidth content from {activeTab === 'video' ? 'Taiwan Tourism Ambassador' : 'Darisky v3.0'} neural nodes.
               </p>
             </div>
             <div className="flex gap-6">
                <button className="px-10 py-4 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-cyan-500 transition-colors shadow-xl">Manual Linkup</button>
                <button className="px-10 py-4 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-colors mono">Bypass_Cache</button>
             </div>
             <div className="absolute top-0 right-0 mono text-[8px] text-slate-800 tracking-widest uppercase">Buffer_State: Overflow</div>
          </div>
        )}

      </main>

      <AIChat />

      {/* Futuristic Footer */}
      <footer className="border-t border-white/5 pt-32 pb-16 px-6 md:px-12 bg-[#020406]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
               <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></div>
               <span className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.5em]">Network_Status: Active_Zhongli_Node</span>
            </div>
            <p className="text-slate-400 font-black italic tracking-tighter uppercase text-4xl md:text-5xl lg:text-6xl leading-none">RISKA SAPUTRA <br/><span className="text-slate-800">/ 高少奇</span></p>
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-slate-600 text-[9px] font-mono uppercase tracking-widest border-t border-white/5 pt-4">
               <span>Founder @ Darisky Institute</span>
               <span>PhD @ NTUST Taiwan</span>
               <span>M.S. @ NCU Taiwan</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
             <div className="space-y-4">
                <p className="text-[10px] text-slate-700 font-mono uppercase tracking-widest font-bold">Global Protocol</p>
                <p className="text-lg text-slate-400 font-black italic underline decoration-cyan-500/50 underline-offset-4">Darisky_v4.2.0_Stable</p>
             </div>
             <div className="space-y-4">
                <p className="text-[10px] text-slate-700 font-mono uppercase tracking-widest font-bold">Neural Link</p>
                <div className="flex space-x-6">
                  <a href="#" className="text-slate-500 hover:text-blue-500 transition-colors"><Linkedin size={24} /></a>
                  <a href="#" className="text-slate-500 hover:text-cyan-500 transition-colors"><Mail size={24} /></a>
                  <a href="#" className="text-slate-500 hover:text-indigo-500 transition-colors"><Share2 size={24} /></a>
                </div>
             </div>
          </div>
        </div>
        <div className="mt-24 pt-8 border-t border-white/5 text-center text-[8px] text-slate-800 font-mono uppercase tracking-[1.5em] leading-relaxed">
          End of Transmission // {new Date().getFullYear()} // Specialized for AI Policy and Digital Learning Research
        </div>
      </footer>
    </div>
  );
};

export default App;
