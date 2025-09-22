
import { useCart } from "../CartContext";
import AnimatedBox from "../AnimatedBox";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

export default function Xbox() {
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: "Assassin's Creed Shadows", price: 40000, img: "/images/assassins-creed-shadows-standard-edition-xbox.webp" },
    { id: 2, name: "EA SPORTS College Football 26", price: 70000, img: "/images/EA SPORTS College Football 26 - Xbox Series X_.jpg" },
    { id: 3, name: "Dead Rising Deluxe Remaster", price: 65000, img: "/images/dead rising deluxe remaster.jpg" },
    { id: 4, name: "Fallout", price: 35000, img: "/images/fallout xbox.jpg" },
  ];

  return (
    <div className="bg-white min-h-screen px-6 md:px-12 py-12">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#150433]">Xbox Games</h1>
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
