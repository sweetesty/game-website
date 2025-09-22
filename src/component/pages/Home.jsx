import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Home() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

   
    const geometry = new THREE.BufferGeometry();
    const count = 1000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({ color: 0x6c63ff, size: 0.03 });
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    camera.position.z = 2;

    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.y += 0.0008;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      renderer.dispose();
      if (mountRef.current && renderer.domElement) {
        try {
          mountRef.current.removeChild(renderer.domElement);
        } catch (e) {}
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-gray-900 overflow-hidden">
      
      <div
        ref={mountRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

     
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold mb-6"
        >
          Welcome to{" "}
          <span className="text-[#6C63FF]">Game</span>
          <span className="text-[#150433]">Nova</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl"
        >
          Discover the best PlayStation and Xbox games — all in one place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Link
            to="/store"
            className="px-8 py-4 bg-[#150433] text-white font-semibold rounded-full shadow-lg hover:bg-[#4a3ce0] transition"
          >
            Shop Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
