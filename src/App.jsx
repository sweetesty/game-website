import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { CartProvider } from "./component/CartContext";
import Home from "./component/pages/Home";
import Store from "./component/pages/Store";
import PlayStation from "./component/pages/PlayStation";
import Xbox from "./component/pages/Xbox";
import Login from "./component/pages/Login";
import Cart from "./component/pages/Cart";


function Layout() {
  const location = useLocation();

  
  const hideNavbar = location.pathname === "/" || location.pathname === "/login";

  
  const bgColor = location.pathname === "/" ? "bg-white" : "bg-[#0B021A]";

  return (
    <div className={`flex flex-col min-h-screen ${bgColor}`}>
      {!hideNavbar && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/playstation" element={<PlayStation />} />
          <Route path="/xbox" element={<Xbox />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Layout />
      </Router>
    </CartProvider>
  );
}
