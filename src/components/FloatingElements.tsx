import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  const elements = [
    { size: 'w-4 h-4', delay: 0, duration: 3, x: '10%', y: '20%' },
    { size: 'w-6 h-6', delay: 1, duration: 4, x: '80%', y: '10%' },
    { size: 'w-3 h-3', delay: 2, duration: 5, x: '70%', y: '60%' },
    { size: 'w-5 h-5', delay: 0.5, duration: 3.5, x: '20%', y: '70%' },
    { size: 'w-2 h-2', delay: 1.5, duration: 4.5, x: '90%', y: '40%' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20`}
          style={{ left: element.x, top: element.y }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;