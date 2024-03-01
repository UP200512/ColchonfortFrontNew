import AboutHistory from "./AboutHistory";
import AboutAside from "./AboutAside";
import "./about.css";

export default function About() {
  return (
    <div>
      <div className="about-page-container">
        <div className="row">
          <div className="col">
            <AboutHistory />
            <AboutHistory />
          </div>
          <div className="col-3">
            <AboutAside />
          </div>
        </div>
      </div>
    </div>
  );
}
