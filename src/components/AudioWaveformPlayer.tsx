import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

interface AudioWaveformPlayerProps {
  audioUrl: string;
  onPlayPauseChange?: (isPlaying: boolean) => void;
}

const AudioWaveformPlayer: React.FC<AudioWaveformPlayerProps> = ({ audioUrl, onPlayPauseChange }) => {
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (waveformRef.current && !wavesurfer.current) {
      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: '#fff', // temporary, will set gradient after ready
        progressColor: '#2563eb',
        height: 120, // increase height for more detail
        cursorColor: '#fff',
      });
      wavesurfer.current.load(audioUrl);
      wavesurfer.current.on('ready', () => setIsReady(true));
      wavesurfer.current.on('finish', () => {
        setIsPlaying(false);
        onPlayPauseChange && onPlayPauseChange(false);
      });
    }
    return () => {
      wavesurfer.current && wavesurfer.current.destroy();
      wavesurfer.current = null;
    };
  }, [audioUrl]);

  // Set gradient colors after waveform is ready
  useEffect(() => {
    if (isReady && wavesurfer.current && waveformRef.current) {
      const canvas = waveformRef.current.querySelector('canvas');
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
          gradient.addColorStop(0, '#B3E5FC'); // light blue
          gradient.addColorStop(0.25, '#81D4FA'); // lighter blue
          gradient.addColorStop(0.5, '#4FC3F7'); // pastel blue
          gradient.addColorStop(0.75, '#80DEEA'); // cyan
          gradient.addColorStop(1, '#B2EBF2'); // very light cyan
          wavesurfer.current.setOptions({
            waveColor: gradient,
            progressColor: gradient,
          });
        }
      }
    }
  }, [isReady, audioUrl]);

  const handlePlayPause = () => {
    if (wavesurfer.current) {
      wavesurfer.current.playPause();
      setIsPlaying(wavesurfer.current.isPlaying());
      onPlayPauseChange && onPlayPauseChange(!isPlaying);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div
        className="relative w-full h-28 mb-4 rounded-3xl shadow-xl overflow-hidden"
        style={{
          minWidth: 200,
          maxWidth: 600,
          background: '#fff', // simple solid background
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
        }}
      >
        {/* Decorative SVG wave background */}
        <svg
          className="absolute top-0 left-0 w-full h-full z-0"
          viewBox="0 0 600 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ opacity: 0.25, filter: 'blur(2px)' }}
        >
          <defs>
            <linearGradient id="futuristic-gradient" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#B3E5FC" /> {/* light blue */}
              <stop offset="0.25" stopColor="#81D4FA" /> {/* lighter blue */}
              <stop offset="0.5" stopColor="#4FC3F7" /> {/* pastel blue */}
              <stop offset="0.75" stopColor="#80DEEA" /> {/* cyan */}
              <stop offset="1" stopColor="#B2EBF2" /> {/* very light cyan */}
            </linearGradient>
          </defs>
          <path
            d="M0,60 Q100,10 200,60 T400,60 T600,60"
            stroke="url(#futuristic-gradient)"
            strokeWidth="6"
            fill="none"
            opacity="1"
            filter="url(#glow)"
          />
          <defs>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
        {/* Real audio waveform */}
        <div
          ref={waveformRef}
          className="w-full h-full absolute top-0 left-0 z-10"
          style={{
            filter: 'drop-shadow(0 0 8px #fff) drop-shadow(0 0 16px #3B82F6)',
          }}
        />
        {/* Gradient overlay for waveform */}
        <div
          className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, #B3E5FC 0%, #81D4FA 25%, #4FC3F7 50%, #80DEEA 75%, #B2EBF2 100%)',
            mixBlendMode: 'multiply',
            borderRadius: 'inherit',
          }}
        />
      </div>
      <button
        onClick={handlePlayPause}
        disabled={!isReady}
        className="px-6 py-3 bg-white text-blue-600 font-bold rounded-xl shadow hover:bg-blue-50 transition disabled:opacity-50"
      >
        {isPlaying ? 'Pause' : 'Play'} Audio
      </button>
    </div>
  );
};

export default AudioWaveformPlayer; 