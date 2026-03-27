"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Code2, Zap, Cloud, Database, Layers, Smartphone, Palette, Video, PenTool, Scissors, Award, Terminal } from "lucide-react";

const skillData = [
  { name: "Next.js 16", icon: <Code2 />, cat: "Engineering", color: "text-blue-500" },
  { name: "AWS Cloud", icon: <Cloud />, cat: "Engineering", color: "text-orange-500" },
  { name: "Spring Boot", icon: <Zap />, cat: "Engineering", color: "text-green-500" },
  { name: "PostgreSQL", icon: <Database />, cat: "Engineering", color: "text-indigo-500" },
  { name: "Docker", icon: <Layers />, cat: "Engineering", color: "text-cyan-500" },
  { name: "UI/UX Figma", icon: <Smartphone />, cat: "Design", color: "text-pink-500" },
  { name: "Poster Design", icon: <Palette />, cat: "Design", color: "text-purple-500" },
  { name: "Video Editing", icon: <Video />, cat: "Media", color: "text-red-500" },
  { name: "Storytelling", icon: <PenTool />, cat: "Media", color: "text-amber-500" },
  { name: "Color Grading", icon: <Scissors />, cat: "Media", color: "text-emerald-500" },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function SkillArsenal({ isOpen, onClose }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z- cursor-pointer"
          />

          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 120 }}
            className="fixed inset-x-0 bottom-0 z- bg-white text-black rounded-t-[4rem] md:rounded-t-[6rem] h-[90vh] overflow-hidden flex flex-col shadow-[0_-20px_80px_rgba(0,0,0,0.4)]"
          >
            {/* Header */}
            <div className="p-8 md:p-16 flex justify-between items-start border-b border-zinc-100">
              <div>
                <h3 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
                  The <br /> Arsenal.
                </h3>
                <div className="mt-6 flex items-center gap-3">
                  <span className="px-3 py-1 bg-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-widest rounded-full">
                    Multidisciplinary Stack 2026
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                    <Terminal size={12} /> System Active
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="group p-6 md:p-8 bg-zinc-100 rounded-full hover:bg-black hover:text-white transition-all duration-500"
              >
                <X size={32} className="group-hover:rotate-90 transition-transform duration-500" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-8 md:p-16 custom-scrollbar">
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-8">
                {skillData.map((s, i) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 + 0.2 }}
                    className="flex flex-col items-center justify-center aspect-square rounded-[2.5rem] bg-zinc-50 border border-zinc-100 hover:border-orange-500 hover:bg-white transition-all group relative overflow-hidden"
                  >
                    <div className={`${s.color} group-hover:scale-125 transition-all duration-700 mb-4 z-10`}>
                      {s.icon}
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-center z-10 px-2">
                      {s.name}
                    </p>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-100 group-hover:bg-orange-500 transition-colors" />
                  </motion.div>
                ))}
              </div>

              {/* Bottom Certs Section */}
              <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-zinc-100 pt-16 pb-20">
                <div className="space-y-6">
                   <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 italic flex items-center gap-2">
                    <Award size={14} className="text-orange-500" /> Key Certifications
                   </p>
                   <div className="space-y-8">
                      <div>
                        <h4 className="text-2xl font-black italic leading-tight">BTECH COMPUTER SCIENCE</h4>
                        <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Business Systems Specialization</p>
                      </div>
                      <div>
                        <h4 className="text-2xl font-black italic leading-tight">AWS SOLUTIONS ARCHITECT</h4>
                        <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Certified Associate Level</p>
                      </div>
                   </div>
                </div>

                <div className="bg-black text-white p-10 rounded-[3rem] flex flex-col justify-between">
                  <p className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-500">Global Rank</p>
                  <h4 className="text-5xl font-black italic tracking-tighter mt-4">LEETCODE <br /> SPECIALIST.</h4>
  <div className="mt-8 flex gap-2">
  {Array.from({ length: 5 }, (_, i) => i).map((dot: number) => ( 
    <div key={dot} className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }} 
        whileInView={{ width: "100%" }} 
        className="h-full bg-orange-500" 
        transition={{ delay: dot * 0.1, duration: 1 }}
      />
    </div>
  ))}
</div>          </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}