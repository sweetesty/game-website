
import AnimatedBox from "../AnimatedBox";
import { useCart } from "../CartContext";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import heroImage from "../../assets/codhero.jpg";

export default function Store() {
  const { addToCart } = useCart();

  const categories = [
    { name: "PlayStation 5", img: "/images/playstation.png", link: "/playstation" },
    { name: "Xbox", img: "/images/xboxw.png", link: "/xbox" },
    { name: "Nintendo", img: "/images/nintendo.png", link: "/nintendo" },
  ];

  const products = [
    { id: 1, name: "Call of Duty", price: 50000, img: "/images/Call-of-Duty-Infinite-Warfare-PS4-474x600-1.jpg" },
    { id: 2, name: "God of War", price: 30000, img: "/images/God-of-War-Ragnarok-PS5-468x600-1.jpg" },
    { id: 3, name: "Gran Turismo 7", price: 20000, img: "/images/Gran-Turismo-7-PS5-474x600-1.jpg" },
    { id: 4, name: "Mortal Kombat", price: 60000, img: "/images/Mortal-Kombat-1-PS5-472x600-1.jpg" },
    { id: 5, name: "Grand Auto Theft V", price: 45000, img: "/images/Grand-Theft-Auto-V-.jpg" },
    { id: 6, name: "Alan Wake II Deluxe Edition", price: 45000, img: "/images/alane wake II deluxe edition_.jpg" },
    { id: 7, name: "Resident Evil 4 - Ps5", price: 65000, img: "/images/Resident Evil 4 - PS5.jpg" },
    { id: 8, name: "Assassins Creed Shadows - Xbox", price: 40000, img: "/images/assassins-creed-shadows-standard-edition-xbox.webp" },
    { id: 9, name: "Silent Hill 2 - Ps5", price: 65000, img: "/images/silent hill 2 ps 50_.jpg" },
    { id: 10, name: "EA SPORTS College Football 26 - Xbox", price: 70000, img: "/images/EA SPORTS College Football 26 - Xbox Series X_.jpg" },
    { id: 11, name: "Dead Rising Deluxe Remaster - Xbox", price: 65000, img: "/images/dead rising deluxe remaster.jpg" },
    { id: 12, name: "Alone In The Dark - Ps5", price: 45000, img: "/images/alone in the dark ps5_.jpg" },
    { id: 13, name: "Alone In The Dark - Xbox", price: 45000, img: "/images/alone in the dark_.jpg" },
    { id: 14, name: "Fallout", price: 35000, img: "/images/fallout xbox.jpg" },
    { id: 15, name: "Red Redemption - Xbox", price: 30000, img: "/images/red redemption xboxjpeg.jpeg" },
    { id: 16, name: "Split Fiction - Ps5", price: 27500, img: "/images/split fiction ps5_.jpg" },
    { id: 17, name: "Star Wars Outlaws", price: 65000, img: "/images/star wars outlaws_.jpg" },
    { id: 18, name: "Resident Evil 7 - Ps5", price: 65000, img: "/images/Resident Evil 7- PS5_.jpg" },
    { id: 19, name: "Split Fiction - Xbox", price: 27500, img: "/images/split fiction xbox_.jpg" },
    { id: 20, name: "Madden NFL 26 - Ps5", price: 60000, img: "/images/Madden NFL 26 - PlayStation 5_.jpg" },
  
  ];

  return (
    <div className="bg-white min-h-screen">

      <div
        className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <motion.div
          className="relative z-10 text-center text-white px-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Welcome to GameNova</h1>
          <p className="text-lg mb-6">Discover the best PlayStation, Xbox & Nintendo games</p>
        </motion.div>
      </div>

      
      <div className="px-6 md:px-12 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">SHOP BY CATEGORY</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {categories.map((cat, idx) => (
            <AnimatedBox key={idx} delay={idx * 0.2}>
              <motion.a
                href={cat.link}
                className="bg-white shadow-md rounded-xl flex flex-col items-center justify-center h-[220px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.img
                  src={cat.img}
                  alt={cat.name}
                  className="w-28 h-28 object-contain"
                  whileHover={{ rotate: 3, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
                <span className="text-lg font-semibold mt-3 text-[#150433]">{cat.name}</span>
              </motion.a>
            </AnimatedBox>
          ))}
        </div>

    
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 auto-rows-fr">
          {products.map((p, idx) => (
            <AnimatedBox key={p.id} delay={idx * 0.1}>
              <motion.div
                className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer flex flex-col h-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-48 object-contain bg-gray-50"
                />
                <div className="p-3 text-center flex flex-col flex-grow">
                  <p className="text-sm font-semibold mb-2 text-[#150433] line-clamp-2">{p.name}</p>
                  <p className="text-black font-bold mt-auto">₦{p.price.toLocaleString()}</p>
                  <motion.button
                    onClick={() => { addToCart(p); alert(`${p.name} added to cart 🛒`); }}
                    className="mt-3 flex items-center justify-center gap-2 bg-[#150433] text-white px-4 py-2 rounded-full font-medium shadow-md hover:bg-[#4c1d95] transition"
                    whileTap={{ scale: 0.95 }}
                  >
                    <ShoppingCart size={18} /> Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            </AnimatedBox>
          ))}
        </div>
      </div>
    </div>
  );
}