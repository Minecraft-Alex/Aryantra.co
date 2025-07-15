import React, { useRef, useState } from 'react';

interface PhotoAudioOverlayProps {
  photoUrl?: string;
  audioUrl?: string;
  onPlayPauseChange?: (isPlaying: boolean) => void;
}

const PhotoAudioOverlay: React.FC<PhotoAudioOverlayProps> = ({ photoUrl, audioUrl, onPlayPauseChange }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setProgress(audioRef.current.currentTime / (audioRef.current.duration || 1));
  };

  const handlePlay = () => {
    setIsPlaying(true);
    onPlayPauseChange && onPlayPauseChange(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
    onPlayPauseChange && onPlayPauseChange(false);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
    onPlayPauseChange && onPlayPauseChange(false);
  };

  // Seek audio when clicking or dragging on the progress bar
  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!audioRef.current) return;
    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = Math.max(0, Math.min(1, x / rect.width));
    audioRef.current.currentTime = percent * (audioRef.current.duration || 0);
    setProgress(percent);
  };

  // Drag-to-seek support
  const [dragging, setDragging] = useState(false);

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setDragging(true);
    handleProgressBarClick(e);
    window.addEventListener('mousemove', handleDragMove);
    window.addEventListener('mouseup', handleDragEnd);
  };

  const handleDragMove = (e: MouseEvent) => {
    if (!dragging || !audioRef.current) return;
    const bar = document.getElementById('audio-progress-bar');
    if (!bar) return;
    const rect = bar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = Math.max(0, Math.min(1, x / rect.width));
    audioRef.current.currentTime = percent * (audioRef.current.duration || 0);
    setProgress(percent);
  };

  const handleDragEnd = () => {
    setDragging(false);
    window.removeEventListener('mousemove', handleDragMove);
    window.removeEventListener('mouseup', handleDragEnd);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <img
        src={photoUrl || '/lead/photo1.png'}
        alt="AI Sales Agent"
        className="w-full h-full object-cover rounded-2xl shadow-lg"
      />
      <audio
        ref={audioRef}
        src={audioUrl || '/lead/Aryantra.wav'}
        onPlay={handlePlay}
        onPause={handlePause}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        preload="auto"
      />
      {/* Overlay controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center w-3/4">
        <button
          onClick={handlePlayPause}
          className="mb-2 bg-white/80 hover:bg-white text-blue-600 rounded-full p-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
              <polygon points="6,4 20,12 6,20 6,4" />
            </svg>
          )}
        </button>
        <div
          id="audio-progress-bar"
          className="w-full h-2 bg-white/60 rounded-full overflow-hidden cursor-pointer"
          onClick={handleProgressBarClick}
          onMouseDown={handleDragStart}
          title="Seek audio"
        >
          <div
            className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transition-all duration-200"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoAudioOverlay; 