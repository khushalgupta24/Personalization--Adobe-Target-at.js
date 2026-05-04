import useTargetView from "../hooks/useTargetView";

export default function Products() {
  useTargetView({
    viewName: "products"
  });

  return (
    <div className="page">
      <h1>Products</h1>

      <div id="product-offer" className="card target-slot">
        Default Offer
      </div>

      <div className="card">
        <h3>Personalization-ready area</h3>
        <p>
          Use Adobe Target VEC on the <strong>products</strong> view to update this offer block.
        </p>
      </div>
    </div>
  );
}
