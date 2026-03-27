"use client";

import { motion } from "framer-motion";
import { Bike, Dumbbell, Layers, Video } from "lucide-react";

const passionData = [
  {
    title: "Long Riding",
    desc: "Endurance driving & cinematic road content.",
    icon: <Bike size={32} />,
    img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc",
  },
  {
    title: "Aesthetic Fitness",
    desc: "Discipline-first bodybuilding & nutrition.",
    icon: <Dumbbell size={32} />,
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
  },
  {
    title: "Poster Design",
    desc: "Visualizing ideas through geometry & typography.",
    icon: <Layers size={32} />,
    img: "https://images.unsplash.com/photo-1626785774573-4b799315345d",
  },
  {
    title: "Digital Storytelling",
    desc: "High-end video production & narrative edits.",
    icon: <Video size={32} />,
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
  },
];

export default function Multiverse() {
  return (
    <section className="py-60 px-8 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-32">
          <h2 className="text-[15vw] font-black uppercase tracking-tighter leading-none opacity-5 italic absolute -top-24 left-0 select-none">
            Multiverse
          </h2>
          <motion.h3 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="text-6xl md:text-7xl font-black uppercase tracking-tighter relative z-10"
          >
            Beyond the <br /> <span className="text-orange-500">Code.</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {passionData.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -20 }}
              className="group relative h-[500px] md:h-[600px] rounded-[4rem] md:rounded-[5rem] overflow-hidden border border-white/5"
            >
              {/* Background Image with Grayscale to Color transition */}
              <div
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                style={{ backgroundImage: `url(${p.img})` }}
              />
              
              {/* Overlay Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
              <div className="absolute inset-0 backdrop-blur-2xl group-hover:backdrop-blur-none transition-all duration-1000" />

              <div className="absolute bottom-12 left-12 right-12 p-8 md:p-10 bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <div className="text-orange-500 mb-6 group-hover:scale-110 origin-left transition-transform duration-500">
                  {p.icon}
                </div>
                <h4 className="text-3xl md:text-4xl font-black uppercase italic mb-3 leading-none">
                  {p.title}
                </h4>
                <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-[0.2em] leading-relaxed group-hover:text-white transition-colors">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}