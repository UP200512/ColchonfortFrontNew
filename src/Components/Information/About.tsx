import AboutHistory from "./AboutHistory";
import AboutAside from "./AboutAside";
import "./about.css";

export default function About() {
  return (
    <div>
      <div className="container mt-4 mb-4 grid">
        <div className="row">
          <div className="col-md-9">
            <AboutHistory />
          </div>
          <div className="col-md-3">
            <AboutAside />
          </div>
        </div>
      </div>
    </div>
  );
}
