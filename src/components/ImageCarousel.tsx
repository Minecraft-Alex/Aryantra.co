import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import ReactDOM from 'react-dom';

interface ImageCarouselProps {
  images: string[]
  interval?: number
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  interval = 3000,
}) => {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [fade, setFade] = useState<'in' | 'out'>('in');
  const timerRef = React.useRef<number | null>(null);

  useEffect(() => {
    if (modalOpen) return;
    let isUnmounted = false;
    const run = () => {
      timerRef.current = window.setTimeout(() => {
        setFade('out');
        timerRef.current = window.setTimeout(() => {
          if (!isUnmounted) {
            setCurrent((c) => (c + 1) % images.length);
            setFade('in');
            run();
          }
        }, 300);
      }, interval);
    };
    run();
    return () => {
      isUnmounted = true;
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [images.length, interval, modalOpen]);

  // Manual navigation should also trigger fade
  const handlePrev = () => {
    if (modalOpen) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    setFade('out');
    timerRef.current = window.setTimeout(() => {
      setCurrent((current - 1 + images.length) % images.length);
      setFade('in');
    }, 300);
  };
  const handleNext = () => {
    if (modalOpen) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    setFade('out');
    timerRef.current = window.setTimeout(() => {
      setCurrent((current + 1) % images.length);
      setFade('in');
    }, 300);
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-2xl group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Only render the current image as clickable */}
      <img
        src={images[current]}
        alt={`slide ${current + 1}`}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${fade === 'in' ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => { setModalOpen(true); setModalImage(images[current]); }}
        style={{ cursor: 'pointer' }}
      />
      {/* Previous Button */}
      <button
        type="button"
        aria-label="Previous"
        onClick={handlePrev}
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
        onClick={handleNext}
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
  )
}

export default ImageCarousel
