import { useNavigate } from "react-router-dom";


const navigate = useNavigate();

<button
  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
  onClick={() => {
    setIsDrawerOpen(false);
    navigate("/cart"); 
  }}
>
  Checkout
</button>
