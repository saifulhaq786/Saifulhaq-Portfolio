"use client";

import { useState, useEffect, useRef } from "react";
import YouTube, { YouTubeEvent, YouTubeProps } from "react-youtube";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  unlockAudio?: boolean;
}

export default function AudioEngine({ unlockAudio }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<any>(null);

  // Replace 'YOUR_VIDEO_ID' with the code after v= in your YT link
  // Example: youtube.com/watch?v=jfKfPfyJRdk -> ID is jfKfPfyJRdk
  const videoId = "jfKfPfyJRdk"; 

  useEffect(() => {
    if (unlockAudio && playerRef.current && !isPlaying) {
      playerRef.current.playVideo();
      setIsPlaying(true);
    }
  }, [unlockAudio]);

  const onReady = (event: YouTubeEvent) => { // Define 'event' as YouTubeEvent
  playerRef.current = event.target;
  playerRef.current.setVolume(40);
};

  const toggleAudio = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-10 left-10 z- flex items-center gap-4">
      {/* Hidden YouTube Player */}
      <div className="hidden">
        <YouTube videoId={videoId} opts={{ playerVars: { autoplay: 0, loop: 1 } }} onReady={onReady} />
      </div>

      <motion.button
        onClick={toggleAudio}
        className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 flex items-center justify-center text-white hover:bg-orange-600 transition-all shadow-2xl"
      >
        {isPlaying ? <Volume2 size={20} className="animate-pulse" /> : <VolumeX size={20} className="opacity-50" />}
      </motion.button>

      {/* Visualizer bars remain the same */}
      <div className="flex items-end gap-[3px] h-5">
        {Array.from({ length: 10 }).map((_, bar) => (
          <motion.div
            key={bar}
            animate={{ height: isPlaying ? Math.random() * 10 + 4 : 4 }}
            transition={{ repeat: Infinity, duration: 0.6 + bar * 0.1 }}
            className="w-[2px] bg-orange-500/80 rounded-full"
          />
        ))}
      </div>
    </div>
  );
}