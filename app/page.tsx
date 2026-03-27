"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Cloud,
  Server,
  Code2,
  Cpu,
  Bike,
  Dumbbell,
  Palette,
  PenTool,
  ExternalLink,
  Instagram,
  Award,
  CheckCircle2,
  TrendingUp,
  Video,
  Smartphone,
  Layers,
  Scissors,
  X,
  Zap,
  Database,
} from "lucide-react";

import SocialReachSection from "@/components/SocialReach";
import SkillArsenal from "@/components/SkillArsenal";
import ProjectGrid from "@/components/ProjectGrid";
import Multiverse from "@/components/Multiverse";
import AudioEngine from "@/components/AudioEngine";
// --- 1. iOS 26 LIQUID CURSOR ---
function LiquidCursor() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouse = (e: MouseEvent) =>
      setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);
  return (
    <motion.div
      className="fixed top-0 left-0 w-12 h-12 rounded-full border border-orange-500/50 backdrop-blur-3xl pointer-events-none z-[9999] shadow-[0_0_30px_rgba(249,115,22,0.3)]"
      animate={{ x: mouse.x - 24, y: mouse.y - 24 }}
      transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.1 }}
    />
  );
}

{
  /* GLOBAL AUDIO CONTROLLER */
}

// --- 2. THE DYNAMIC SKILL ARSENAL (ICON BASED) ---
const skillData = [
  { name: "Next.js 16", icon: <Code2 />, cat: "Eng" },
  { name: "AWS Cloud", icon: <Cloud />, cat: "Eng" },
  { name: "Spring Boot", icon: <Zap />, cat: "Eng" },
  { name: "PostgreSQL", icon: <Database />, cat: "Eng" },
  { name: "Docker", icon: <Layers />, cat: "Eng" },
  { name: "UI/UX Figma", icon: <Smartphone />, cat: "Des" },
  { name: "Poster Design", icon: <Palette />, cat: "Des" },
  { name: "Video Editing", icon: <Video />, cat: "Med" },
  { name: "Storytelling", icon: <PenTool />, cat: "Med" },
  { name: "Color Grading", icon: <Scissors />, cat: "Med" },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const [showSkills, setShowSkills] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleOpenSkills = () => {
    setShowSkills(true);
    setHasInteracted(true); // This "unlocks" the audio
  };

  return (
    <div className="relative bg-[#020202] text-white selection:bg-orange-500 overflow-x-hidden cursor-none">
      <LiquidCursor />

      {/* 3D STARFIELD BACKGROUND */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Points
              positions={new Float32Array(3000 * 3).map(
                () => (Math.random() - 0.5) * 10,
              )}
              stride={3}
            >
              <PointMaterial
                transparent
                color="#f97316"
                size={0.012}
                sizeAttenuation
                depthWrite={false}
              />
            </Points>
          </Float>
        </Canvas>
      </div>

      {/* SECTION 1: HERO */}
      <section className="relative h-screen flex items-center justify-center z-10 px-6">
        <motion.div
          style={{ scale: heroScale }}
          className="flex flex-col md:flex-row items-center gap-16 max-w-7xl"
        >
          <div className="relative group">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 border border-orange-500/20 rounded-full border-dashed"
            />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-[2px] bg-gradient-to-tr from-orange-600 via-transparent to-white/20 shadow-[0_0_80px_rgba(249,115,22,0.2)]">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#020202]">
                <img
                  src="/saifulhaq.jpg"
                  alt="Saifulhaq"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>

              {/* Add a "Pulse" ring */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 rounded-full border border-orange-500/50"
              />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-[clamp(3rem,11vw,9rem)] font-black leading-[0.8] uppercase tracking-tighter">
              SAIFULHAQ
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-500 to-orange-600">
                SADIQ
              </span>
            </h1>
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <button
                onClick={() => setShowSkills(true)}
                className="px-12 py-5 bg-white text-black text-[10px] font-black uppercase tracking-[0.4em] rounded-full hover:bg-orange-500 hover:text-white transition-all shadow-xl"
              >
                Open Skill Arsenal
              </button>
            </div>
          </div>
        </motion.div>
      </section>
      <AudioEngine unlockAudio={hasInteracted} />
      {/* SECTION 2: LIQUID GLASS PROJECTS */}
      <ProjectGrid />

      {/* SOCIAL REACH SECTION */}
      <SocialReachSection />

      {/* SECTION 4: THE PASSION MULTIVERSE (RIDING & DESIGN) */}
      <Multiverse />
      {/* SECTION 5: THE LIQUID CONTACT ENGINE */}
      <section className="min-h-screen py-40 px-8 bg-orange-600 text-black z-30 relative rounded-t-[10vw] shadow-[0_-50px_100px_rgba(249,115,22,0.5)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div className="space-y-20">
            <h2 className="text-[12vw] font-black uppercase tracking-tighter leading-[0.75]">
              SYNC <br /> WITH <br /> THE ARCH.
            </h2>

            <div className="grid grid-cols-1 gap-8 text-4xl md:text-5xl font-black uppercase">
              {["Instagram", "LinkedIn", "LeetCode", "GitHub"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="hover:text-white transition-all flex items-center justify-between border-b-8 border-black group pb-4"
                >
                  {link}{" "}
                  <ExternalLink className="group-hover:translate-x-6 transition-transform w-12 h-12" />
                </a>
              ))}
            </div>
          </div>

          {/* SKILLS DRAWER (ICON ANIMATED) */}
          <SkillArsenal
            isOpen={showSkills}
            onClose={() => setShowSkills(false)}
          />

          <form className="bg-white/10 p-16 md:p-24 rounded-[6rem] backdrop-blur-3xl border border-white/40 space-y-16 shadow-2xl">
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40">
                Identity
              </label>
              <input
                type="text"
                placeholder="NAME / BRAND"
                className="w-full bg-transparent border-b-4 border-black/20 py-6 outline-none text-4xl font-black focus:border-black placeholder:text-black/5 transition-all uppercase italic"
              />
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40">
                The Vision
              </label>
              <textarea
                placeholder="WHAT ARE WE BUILDING?"
                className="w-full bg-transparent border-b-4 border-black/20 py-6 outline-none text-3xl font-black focus:border-black placeholder:text-black/5 resize-none transition-all uppercase italic"
                rows={3}
              />
            </div>

            <button className="w-full bg-black text-white py-12 rounded-full text-2xl font-black uppercase tracking-[0.6em] hover:bg-zinc-900 hover:scale-[0.98] transition-all shadow-2xl">
              Initialize Project
            </button>

            <p className="text-[10px] text-center font-black uppercase tracking-widest opacity-30 italic pt-10 border-t border-black/5">
              EST. 2026 • SAIFULHAQ SIDDIQ • ALL SYSTEMS GO
            </p>
          </form>
        </div>
      </section>

      <style jsx global>{`
        body::-webkit-scrollbar {
          display: none;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #eee;
          border-radius: 10px;
        }
        * {
          cursor: none !important;
        }
      `}</style>
    </div>
  );
}
