import useTargetView from "../hooks/useTargetView";
import { useEffect } from "react";

export default function Products() {
  useEffect(() => {
    document.title = "Products";
  }, []);

  useTargetView("products");

  return (
    <div className="page">
      <h1>Products</h1>

      <div id="product-offer" className="card target-slot">
        Default Offer
      </div>

    </div>
  );
}
