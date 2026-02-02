import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RotatingText = ({
  texts,
  mainClassName,
  staggerFrom = "last",
  initial = { y: "100%" },
  animate = { y: 0 },
  exit = { y: "-120%" },
  staggerDuration = 0.025,
  splitLevelClassName,
  transition = { type: "spring", damping: 30, stiffness: 400 },
  rotationInterval = 2000
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, rotationInterval);
    return () => clearInterval(interval);
  }, [texts.length, rotationInterval]);

  return (
    <span className={`flex ${mainClassName}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          className="flex flex-wrap"
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {texts[index].split("").map((char, i) => (
            <motion.span
              key={i}
              className={`inline-block ${splitLevelClassName}`}
              variants={{
                initial: initial,
                animate: {
                  ...animate,
                  transition: {
                    ...transition,
                    delay: staggerDuration * (staggerFrom === "last" ? texts[index].length - 1 - i : i)
                  }
                },
                exit: {
                  ...exit,
                  transition: {
                    ...transition,
                    delay: staggerDuration * (staggerFrom === "last" ? texts[index].length - 1 - i : i)
                  }
                }
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default RotatingText;