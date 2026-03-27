'use client';

import './globals.css';
import { useState } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);

  // The "Embed" version of your link with specific parameters for background play
  const videoId = "1g4WUoRSivw";
  const audioUrl = `https://www.youtube.com/embed/${videoId}?autoplay=${isPlaying ? 1 : 0}&loop=1&playlist=${videoId}&controls=0`;

  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {/* HIDDEN AUDIO ENGINE */}
        <div className="fixed opacity-0 pointer-events-none">
          {isPlaying && (
            <iframe
              width="0"
              height="0"
              src={audioUrl}
              allow="autoplay"
            />
          )}
        </div>

        {/* CONTROLS */}
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="fixed top-8 right-8 z-[100] px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/20 transition-all text-[10px] uppercase tracking-[0.2em] font-bold text-white"
        >
          {isPlaying ? "Stop Vibe — 01" : "Play Vibe — 01"}
        </button>

        <main>{children}</main>
      </body>
    </html>
  );
}