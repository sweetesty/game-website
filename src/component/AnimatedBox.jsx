
import { useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";


export default function AnimatedBox({ children, delay = 0, direction = "up" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const variants = {
    hidden: { opacity: 0, y: direction === "up" ? 50 : -50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: direction === "up" ? -50 : 50 },
  };

  return (
    <div ref={ref}>
      <AnimatePresence>
        {isInView && (
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.6, delay }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
