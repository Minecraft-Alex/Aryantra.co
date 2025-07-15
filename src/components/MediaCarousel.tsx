import React, { useState, useRef, useEffect, ReactNode } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import ReactDOM from 'react-dom';
import AudioWaveformPlayer from './AudioWaveformPlayer';

interface MediaCarouselItem {
  type: 'image' | 'audio' | 'custom';
  src?: string;
  node?: ReactNode;
}

interface MediaCarouselProps {
  items: MediaCarouselItem[];
  interval?: number;
}

const MediaCarousel: React.FC<MediaCarouselProps> = ({ items, interval = 3000 }) => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [paused, setPaused] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (paused || modalOpen) return;
    intervalRef.current = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, interval);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [items.length, interval, paused, modalOpen]);

  const handlePlayPauseChange = (isPlaying: boolean) => {
    setPaused(isPlaying);
  };

  // Only render the current item
  const renderCurrentItem = () => {
    const item = items[current];
    if (item.type === 'custom' && item.node) {
      // If the custom node is PhotoAudioOverlay, clone it and pass onPlayPauseChange
      if (React.isValidElement(item.node) && item.node.type && (item.node.type as any).name === 'PhotoAudioOverlay') {
        return <div className="absolute inset-0 w-full h-full">{React.cloneElement(item.node as React.ReactElement<any>, { onPlayPauseChange: handlePlayPauseChange })}</div>;
      }
      return <div className="absolute inset-0 w-full h-full">{item.node}</div>;
    }
    if (item.type === 'image') {
      return (
        <img
          src={item.src}
          alt={`slide ${current + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-100"
          onClick={() => { setModalOpen(true); setModalImage(item.src!); }}
          style={{ cursor: 'pointer' }}
        />
      );
    } else if (item.type === 'audio') {
      return (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-white">
          <AudioWaveformPlayer
            audioUrl={item.src!}
            onPlayPauseChange={handlePlayPauseChange}
          />
        </div>
      );
    }
    return null;
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-2xl group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {renderCurrentItem()}
      {/* Previous Button */}
      <button
        type="button"
        aria-label="Previous"
        onClick={() => { if (!modalOpen) setCurrent((current - 1 + items.length) % items.length); }}
        className={`absolute top-1/2 left-4 -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-gray-800 rounded-full p-2 shadow transition-opacity duration-300 ${isHovered && !modalOpen ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100`}
        style={{ pointerEvents: isHovered && !modalOpen ? 'auto' : 'none' }}
        disabled={modalOpen}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      {/* Next Button */}
      <button
        type="button"
        aria-label="Next"
        onClick={() => { if (!modalOpen) setCurrent((current + 1) % items.length); }}
        className={`absolute top-1/2 right-4 -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-gray-800 rounded-full p-2 shadow transition-opacity duration-300 ${isHovered && !modalOpen ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100`}
        style={{ pointerEvents: isHovered && !modalOpen ? 'auto' : 'none' }}
        disabled={modalOpen}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      {/* Modal for image preview */}
      {modalOpen && modalImage && ReactDOM.createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative max-w-3xl w-full p-4 flex items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow"
              onClick={() => setModalOpen(false)}
              aria-label="Close preview"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={modalImage}
              alt="Preview"
              className="max-h-[80vh] max-w-full rounded-2xl shadow-2xl border-4 border-white"
            />
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default MediaCarousel; 