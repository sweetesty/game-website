
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AnimatedBox({ children, delay = 0, direction = "up" }) {
  const [hasAnimated, setHasAnimated] = useState(false);

  const variants = {
    hidden: { opacity: 0, y: direction === "up" ? 50 : -50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: direction === "up" ? -50 : 50 },
  };

  useEffect(() => {
    
    setHasAnimated(true);
  }, []);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      exit="exit"
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
