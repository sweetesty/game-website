

import { useCart } from "../CartContext";

import { motion, AnimatePresence } from "framer-motion";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, total } = useCart();

  const handlePayment = () => {
    if (!cart || cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert("Proceeding to payment...");
    
  };

  return (
    <div className="bg-white min-h-screen px-6 md:px-12 py-12">
      <h1 className="text-3xl font-bold text-[#150433] mb-8">Your Cart</h1>

      {(!cart || cart.length === 0) ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            <AnimatePresence>
              {cart?.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  className="flex items-center gap-4 p-4 bg-[#f8f8f8] rounded-lg shadow"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-24 h-24 object-contain"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-[#150433]">{item.name}</p>
                    <p className="font-bold">₦{item.price.toLocaleString()}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      className="bg-[#150433] text-white px-3 py-1 rounded hover:bg-[#4c1d95]"
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      className="bg-[#150433] text-white px-3 py-1 rounded hover:bg-[#4c1d95]"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-2 text-red-600 font-bold"
                    >
                      X
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="text-right mt-6">
            <p className="text-xl font-bold text-[#150433] mb-4">
              Total: ₦{total.toLocaleString()}
            </p>
            <button
              onClick={handlePayment}
              className="bg-[#6C63FF] hover:bg-[#5848d9] text-white px-6 py-3 rounded-lg font-semibold shadow"
            >
              Proceed to Payment
            </button>
          </div>
        </>
      )}
    </div>
  );
}
