import useTargetView from "../hooks/useTargetView";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  useTargetView("home");

  return (
    <div className="page">
      <div id="hero-banner" className="hero target-slot">
        Default Hero Banner
      </div>
    </div>
  );
}
