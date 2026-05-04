import useTargetView from "../hooks/useTargetView";

export default function Home() {
  useTargetView({
    viewName: "home"
  });

  return (
    <div className="page">
      <div id="hero-banner" className="hero target-slot">
        Default Hero Banner
      </div>

      <div className="card">
        <h3>SPA View</h3>
        <p>This route triggers the Adobe Target SPA view named <strong>home</strong>.</p>
      </div>
    </div>
  );
}
