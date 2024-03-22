import React from "react";
import AboutHistory from "../Information/AboutHistory";
import Material from "./Material";
import Material1 from "./Material1";

function Materiales() {
  return (
    <div>
      <div className="container mt-4 mb-4 grid">
        <div className="row">
          <div className="col-md-12">
            <Material1 />
          </div>
          <div className="col-md-6">
            <Material1 />
          </div>
          <div className="col-md-6">
            <Material1 />
          </div>
        </div>
      </div>
      <div className="container mt-4 mb-4 grid">
        <div className="row">
          <div className="col-md-4">
            <Material />
          </div>
          <div className="col-md-4">
            <Material />
          </div>
          <div className="col-md-4">
            <Material />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Materiales;
