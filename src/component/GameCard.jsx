import { motion } from "framer-motion";
import Velocity from "velocity-animate";
import { ShoppingCart } from "lucide-react";
import { useCart } from "./CartContext";

export default function GameCard({ game }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    Velocity(e.currentTarget, { scale: 0.9 }, { duration: 100 });
    Velocity(e.currentTarget, { scale: 1 }, { duration: 100 });
    addToCart(game);
    alert(`${game.name} added to cart 🛒`);
  };

  return (
    <motion.div
      className="bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer flex flex-col items-center p-4 transition-transform"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <img
        src={game.img}
        alt={game.name}
        className="w-full h-32 sm:h-36 md:h-40 object-contain mb-3"
      />
      <p className="font-semibold text-center text-sm sm:text-base">{game.name}</p>
      <p className="font-bold text-center text-sm sm:text-base">
        ₦{game.price.toLocaleString()}
      </p>

      <motion.button
        onClick={handleAddToCart}
        className="mt-3 flex items-center justify-center gap-2 bg-[#150433] text-white px-3 sm:px-4 py-2 rounded-full font-medium shadow-md hover:bg-[#4c1d95] transition-colors text-xs sm:text-sm"
      >
        <ShoppingCart size={16} /> Add to Cart
      </motion.button>
    </motion.div>
  );
}