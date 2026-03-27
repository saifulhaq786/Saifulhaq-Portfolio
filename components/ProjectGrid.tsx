"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "ShopNest System",
    description: "Full-stack E-commerce architecture built with Next.js 16 and Spring Boot microservices.",
    tag: "Engineering",
    color: "from-orange-500/20",
  },
  {
    title: "Cinematic Road",
    description: "A long-form riding storytelling series focusing on high-end production and narrative.",
    tag: "Content",
    color: "from-blue-500/20",
  },
  {
    title: "SaaS Dashboard",
    description: "High-fidelity glassmorphism components designed for enterprise-level data visualization.",
    tag: "Design",
    color: "from-purple-500/20",
  },
  {
    title: "CloudFlow",
    description: "Automated deployment pipeline using AWS Lambda and Docker for elastic scaling.",
    tag: "Cloud",
    color: "from-emerald-500/20",
  },
];

export default function ProjectGrid() {
  return (
    <section className="py-40 px-8 z-20 relative bg-[#020202]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-none">
            The <br /> Projects.
          </h2>
          <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-[10px] max-w-[200px] mb-4">
            Selected works spanning engineering & visual arts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 0.98 }}
              className="group relative h-[500px] md:h-[600px] rounded-[4rem] md:rounded-[5rem] overflow-hidden bg-zinc-900/50 border border-white/5 shadow-2xl transition-all duration-700 hover:shadow-orange-500/10"
            >
              {/* Liquid Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${proj.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
              
              {/* Animated Glass Pattern */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              </div>

              <div className="absolute bottom-12 left-12 right-12 z-20">
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  className="flex items-center gap-3 mb-4"
                >
                  <span className="h-[2px] w-8 bg-orange-500" />
                  <p className="text-orange-500 font-mono text-[10px] font-black uppercase tracking-[0.4em]">
                    {proj.tag}
                  </p>
                </motion.div>

                <h4 className="text-4xl md:text-5xl font-black uppercase mb-6 leading-tight group-hover:italic transition-all duration-500">
                  {proj.title}
                </h4>
                
                <p className="text-zinc-400 mb-8 max-w-sm text-sm leading-relaxed group-hover:text-white transition-colors duration-500">
                  {proj.description}
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                    <ExternalLink size={20} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    View Case Study
                  </span>
                </div>
              </div>

              {/* Decorative Corner Icon */}
              <div className="absolute top-12 right-12 text-white/10 group-hover:text-orange-500 transition-colors">
                <ArrowUpRight size={40} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}