import useTargetView from "../hooks/useTargetView";
import { useEffect } from "react";

export default function Cart() {
  useEffect(() => {
    document.title = "Cart";
  }, []);

  useTargetView("cart");

  return (
    <div className="page">
      <h1>Cart</h1>
      <div id="cart-message" className="card target-slot">
        Your cart is empty
      </div>
    </div>
  );
}
