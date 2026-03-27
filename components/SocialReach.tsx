"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Instagram,
  Users,
  TrendingUp,
  Eye,
  Heart,
  ExternalLink,
  Zap,
} from "lucide-react";
import { useState, useEffect } from "react";

// --- MOCK API DATA (Replace with your actual API endpoint) ---
const fetchIGData = () => ({
  followers: "171",
  reach: "250k",
  engagement: "52%",
  username: "@itsaifulhaq",
  profilePic: "profile.jpeg",
});

export default function SocialReachSection() {
  const [data, setData] = useState(fetchIGData());
  const [isHovered, setIsHovered] = useState(false);

  // Logic to simulate "Live" updates every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // You would fetch from /api/instagram here
      console.log("Syncing with Instagram Graph API...");
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-40 px-8 bg-[#050505] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* LEFT: THE INTERACTIVE PROFILE CARD */}
          <div className="relative w-full lg:w-1/2 flex justify-center">
            <motion.div
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileHover={{ y: -10 }}
              className="relative w-full max-w-md aspect-[4/5] rounded-[3rem] bg-zinc-900/50 border border-white/10 backdrop-blur-2xl p-8 flex flex-col justify-between overflow-hidden group"
            >
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10 flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-orange-500 to-purple-600">
                    <img
                      src={data.profilePic}
                      className="w-full h-full rounded-full border-2 border-black object-cover"
                      alt="profile"
                    />
                  </div>
                  <div>
                    <h4 className="font-black text-xl tracking-tight">
                      {data.username}
                    </h4>
                    <span className="flex items-center gap-2 text-[10px] text-green-500 font-bold uppercase tracking-widest">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />{" "}
                      Live Now
                    </span>
                  </div>
                </div>
                <Instagram
                  className="text-white/20 group-hover:text-orange-500 transition-colors"
                  size={32}
                />
              </div>

              <div className="relative z-10 space-y-2">
                <p className="text-4xl font-black italic tracking-tighter uppercase leading-none">
                  Fitness / <br></br>Visual <br /> Storyteller.
                </p>
                <p className="text-zinc-500 text-sm font-medium">
                  Lift || Learn || Ride || Draw || Drive || Edit <br />
                  19y/o🪬
                </p>
              </div>

              {/* ACTION POP-UP (Only visible on hover or mobile) */}
              <motion.div
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1 : 0.95,
                }}
                className="relative z-10 bg-white text-black p-6 rounded-[2rem] flex items-center justify-between"
              >
                <div>
                  <p className="text-[10px] font-black uppercase opacity-50">
                    Latest Growth
                  </p>
                  <p className="text-2xl font-black italic">
                    +90k <span className="text-xs">this week</span>
                  </p>
                </div>
                <button className="bg-black text-white p-4 rounded-full hover:scale-110 transition-transform">
                  <a
                    href="https://www.instagram.com/itsaifulhaq?igsh=MWZ0cHF0cWQzamlzcw%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                  </a>
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT: PROFESSIONAL DASHBOARD GRID */}
          <div className="w-full lg:w-1/2 space-y-12">
            <div className="space-y-4">
              <h2 className="text-7xl font-black uppercase tracking-tighter leading-[0.8]">
                Professional <br />{" "}
                <span className="text-orange-500">Insights.</span>
              </h2>
              <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-[10px]">
                Real-time Performance Metrics
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <InsightTile
                icon={<Users size={18} />}
                label="Followers"
                value={data.followers}
                trend="+12%"
              />
              <InsightTile
                icon={<Eye size={18} />}
                label="Reach"
                value={data.reach}
                trend="+24%"
              />
              <InsightTile
                icon={<TrendingUp size={18} />}
                label="Engagement"
                value={data.engagement}
                trend="+5.2%"
              />
              <InsightTile
                icon={<Heart size={18} />}
                label="Impressions"
                value="450K"
                trend="+18%"
              />
            </div>

            <div className="p-8 rounded-[2.5rem] bg-orange-600 flex items-center justify-between group cursor-pointer overflow-hidden relative">
              <div className="relative z-10">
                <p className="text-black font-black uppercase tracking-widest text-[10px]">
                  Collaboration Status
                </p>
                <p className="text-white text-2xl font-black italic">
                  OPEN FOR PROJECTS
                </p>
              </div>
              <Zap
                className="relative z-10 text-black group-hover:scale-150 transition-transform duration-500"
                fill="currentColor"
                size={40}
              />
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InsightTile({
  icon,
  label,
  value,
  trend,
}: {
  icon: any;
  label: string;
  value: string;
  trend: string;
}) {
  return (
    <div className="p-8 rounded-[3rem] bg-zinc-900/30 border border-white/5 hover:border-orange-500/50 transition-all group">
      <div className="text-orange-500 mb-6 bg-orange-500/10 w-fit p-3 rounded-2xl group-hover:rotate-12 transition-transform">
        {icon}
      </div>
      <p className="text-zinc-500 font-black uppercase tracking-widest text-[9px] mb-1">
        {label}
      </p>
      <div className="flex items-end gap-3">
        <p className="text-4xl font-black italic">{value}</p>
        <span className="text-green-500 text-[10px] font-bold mb-2">
          {trend}
        </span>
      </div>
    </div>
  );
}
