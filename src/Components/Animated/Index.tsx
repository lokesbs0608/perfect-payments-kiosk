import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedDiv = ({ children }: any) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [heroRef, heroInView] = useInView({
    threshold: 0.5,
    rootMargin: "10px 0px", // Only the top offset matters for HeroSection
  });

  return (
    <motion.div
      ref={heroRef}
      initial={{ opacity: 0.5, scale: 0.5, y: 0, x: 0 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6}}
      style={{originY:1}}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
