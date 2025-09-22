import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Velocity from "velocity-animate";
import * as THREE from "three";
import { Twitter, Instagram, Facebook } from "lucide-react";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, ease: "easeOut", duration: 0.5 }
  }
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } }
};

export default function Footer() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, 250);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 250, 0.1, 1000);
    camera.position.z = 5;

    
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 400;
    const positions = [];

    for (let i = 0; i < starCount; i++) {
      positions.push((Math.random() - 0.5) * 10);
      positions.push((Math.random() - 0.5) * 10);
      positions.push((Math.random() - 0.5) * 10);
    }

    starGeometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    const starMaterial = new THREE.PointsMaterial({ color: 0x6C63FF, size: 0.02 });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.x += 0.0008;
      stars.rotation.y += 0.0008;
      renderer.render(scene, camera);
    };
    animate();

    window.addEventListener("resize", () => {
      renderer.setSize(window.innerWidth, 250);
      camera.aspect = window.innerWidth / 250;
      camera.updateProjectionMatrix();
    });
  }, []);

  
  const handleHover = (e, enter = true) => {
    if (enter) {
      Velocity(e.target, { translateX: 6 }, { duration: 200, easing: "spring" });
    } else {
      Velocity(e.target, { translateX: 0 }, { duration: 200, easing: "easeOut" });
    }
  };

  return (
    <motion.footer
      variants={container}
      initial="hidden"
      animate="show"
      className="relative text-[#C7B8FF] mt-10 overflow-hidden"
    >
      
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      
      <div className="relative z-10 bg-[#150433]/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
         
          <motion.div variants={item}>
            <h2 className="text-2xl font-extrabold flex mb-3">
              <span className="text-[#6C63FF]">Game</span>
              <span className="text-white">Nova</span>
            </h2>
            <p className="text-gray-400 text-sm">
              Your ultimate stop for PlayStation, Xbox and trending games.
            </p>
          </motion.div>

          
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold mb-3 text-[#6C63FF]">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/store", label: "Store" },
                { href: "/playstation", label: "PlayStation" },
                { href: "/xbox", label: "Xbox" },
                { href: "/login", label: "Login" }
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-block hover:text-[#6C63FF]"
                    onMouseEnter={(e) => handleHover(e, true)}
                    onMouseLeave={(e) => handleHover(e, false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold mb-3 text-[#6C63FF]">Follow Us</h3>
            <div className="flex space-x-4">
              {[Twitter, Instagram, Facebook].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ scale: 1.15, y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center gap-2 text-sm"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

      
        <motion.div
          variants={item}
          className="border-t border-gray-700 text-center py-4 text-sm text-gray-500"
        >
          © {new Date().getFullYear()} GameNova. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
}
