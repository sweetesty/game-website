
import { useCart } from "../CartContext";
import AnimatedBox from "../AnimatedBox";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

export default function PlayStation() {
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: "Call of Duty", price: 50000, img: "/images/Call-of-Duty-Infinite-Warfare-PS4-474x600-1.jpg" },
    { id: 2, name: "God of War", price: 30000, img: "/images/God-of-War-Ragnarok-PS5-468x600-1.jpg" },
    { id: 3, name: "Gran Turismo 7", price: 20000, img: "/images/Gran-Turismo-7-PS5-474x600-1.jpg" },
    { id: 4, name: "Mortal Kombat", price: 60000, img: "/images/Mortal-Kombat-1-PS5-472x600-1.jpg" },
  ];

  return (
    <div className="bg-white min-h-screen px-6 md:px-12 py-12">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#150433]">PlayStation 5 Games</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products.map((p, idx) => (
          <AnimatedBox key={p.id} delay={idx * 0.2}>
            <motion.div
              className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer flex flex-col"
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src={p.img}
                alt={p.name}
                className="w-full h-48 object-contain bg-gray-50"
              />
              <div className="p-3 flex flex-col flex-grow text-center">
                <p className="text-sm font-semibold mb-2 text-[#150433]">{p.name}</p>
                <p className="text-black font-bold">₦{p.price.toLocaleString()}</p>
                <motion.button
                  onClick={() => {
                    addToCart(p);
                    alert(`${p.name} added to cart 🛒`);
                  }}
                  className="mt-3 flex items-center justify-center gap-2 bg-[#150433] text-white px-4 py-2 rounded-full font-medium shadow-md hover:bg-[#4c1d95] transition"
                >
                  <ShoppingCart size={18} /> Add to Cart
                </motion.button>
              </div>
            </motion.div>
          </AnimatedBox>
        ))}
      </div>
    </div>
  );
}
