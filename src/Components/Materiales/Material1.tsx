import React from "react";
import PropTypes from "prop-types"; // Importa PropTypes para validar las props
import MemoryFoamImg from "../../images/material1_memoryfoam.jpg";

function Material1(props) {
  const { materialName, materialDescription, imageUrl } = props;

  return (
    <div>
      <div className="container mt-4 mb-4 grid shadow p-3 mb-5 bg-body-tertiary rounded text-center">
        <div className="row">
          <div className="col-md-5">
            <img
              className="card-img-top"
              src={imageUrl}
              alt="Imagen del material"
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
          <div className="col-md-7">
            <div className="row">
              <div className="col p-4">
                <h4>{materialName}</h4>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>{materialDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Define las propiedades esperadas y sus tipos utilizando PropTypes
Material.propTypes = {
  materialName: PropTypes.string.isRequired,
  materialDescription: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
};

export default Material1;
