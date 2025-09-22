import { Link } from "react-router-dom";
import { ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearch } from "./pages/SearchContext";
import { useCart } from "./CartContext";




export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 
  const [cartOpen, setCartOpen] = useState(false); 
  const { query, setQuery } = useSearch();
  const { cart = [], increment, decrement } = useCart() || {};

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-[#150433] text-white shadow-md sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center md:justify-between gap-2 md:gap-4">
          
        
          <Link to="/" className="text-2xl font-extrabold flex">
            <span className="text-[#6C63FF]">Game</span>
            <span className="text-white">Nova</span>
          </Link>

          
          <ul className="hidden md:flex gap-6 text-lg flex-1 justify-center">
            {["Home", "Store", "PlayStation", "Xbox", "Login"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                  className="relative group"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#6C63FF] transition-all group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          
          <div className="flex w-full md:w-auto gap-2 md:gap-4 items-center mt-2 md:mt-0">
            <input
              type="text"
              placeholder="Search games..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-[#0B021A] text-white placeholder-gray-400 outline-none px-3 py-1 rounded-full w-full md:w-64"
            />

            <button
              onClick={() => setCartOpen(true)}
              className="relative flex items-center gap-2 text-white hover:text-[#6C63FF] px-2 py-1 rounded-md"
            >
              <ShoppingCart size={20} />
              <span>Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            
            <button
              className="md:hidden text-[#C7B8FF] text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden flex flex-col gap-4 px-4 py-3 bg-[#0B021A]"
            >
              {["Home", "Store", "PlayStation", "Xbox", "Login"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>

      
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-80 bg-[#150433] text-white shadow-lg z-50 flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
                <h2 className="text-xl font-bold text-[#6C63FF]">Your Cart</h2>
                <button onClick={() => setCartOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.length === 0 ? (
                  <p className="text-gray-400">Your cart is empty.</p>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-2 bg-[#0B021A] p-2 rounded-lg"
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-14 h-14 object-contain"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-semibold">{item.name}</p>
                        <p className="text-sm font-bold">
                          ₦{item.price.toLocaleString()}
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <button
                          onClick={() => decrement(item.id)}
                          className="bg-red-600 text-white px-2 rounded-full"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => increment(item.id)}
                          className="bg-[#6C63FF] text-white px-2 rounded-full"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="p-6 border-t border-gray-700">
                <Link
                  to="/cart"
                  className="w-full block text-center bg-[#6C63FF] text-white py-3 rounded-lg hover:bg-[#5848d9] transition"
                  onClick={() => setCartOpen(false)}
                >
                  Checkout
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}