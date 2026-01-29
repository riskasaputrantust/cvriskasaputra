
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User as UserIcon, Loader2 } from 'lucide-react';
import { askRiskaAI } from '../services/geminiService';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const response = await askRiskaAI(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: response || '' }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-cyan-500 hover:bg-cyan-400 text-black p-4 rounded-full shadow-2xl shadow-cyan-500/30 transition-all hover:scale-110 flex items-center gap-2 group"
        >
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold whitespace-nowrap">Ask Riska AI</span>
          <MessageSquare size={24} />
        </button>
      ) : (
        <div className="w-80 md:w-96 bg-[#0f172a] border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-8">
          <div className="p-4 bg-gradient-to-r from-cyan-600 to-blue-700 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot size={20} className="text-white" />
              <span className="text-white font-bold text-sm italic">Digital Persona v1.0</span>
            </div>
            <button onClick={() => setIsOpen(false)}><X size={20} className="text-white/80 hover:text-white" /></button>
          </div>
          
          <div ref={scrollRef} className="flex-1 h-96 overflow-y-auto p-4 space-y-4 no-scrollbar bg-slate-900/50">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <Bot size={40} className="mx-auto text-cyan-500/30 mb-2" />
                <p className="text-slate-500 text-xs px-4 mono">Initialized session... Ask me about AI Policy, Educational Research, or Riska's work at NCU/NTUST.</p>
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-xs font-medium leading-relaxed ${
                  msg.role === 'user' ? 'bg-cyan-500 text-black rounded-tr-none' : 'bg-white/5 text-slate-200 rounded-tl-none border border-white/10'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/5 text-slate-400 p-3 rounded-2xl rounded-tl-none border border-white/10 flex items-center gap-2">
                  <Loader2 size={12} className="animate-spin" />
                  <span className="text-[10px] mono">Processing...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/5 bg-slate-900 flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your query..."
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs focus:outline-none focus:border-cyan-500 text-white"
            />
            <button onClick={handleSend} className="p-2 bg-cyan-500 rounded-full text-black hover:bg-cyan-400 transition-colors">
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChat;
