import React from "react";
import MemoryFoamImg from "../../images/material1_memoryfoam.jpg"

function Material() {
  return (
    <div className="container mt-4 mb-4 grid shadow p-3 mb-5 bg-body-tertiary rounded text-center">
      <div className="row">
        <div className="col p-4">
          <img className="card-img-top" src={MemoryFoamImg} alt="Imagen del material"/>
        </div>
        <div className="row">
          <div className="col p-4">
            <h4>Nombre del material</h4>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              architecto quod? Recusandae voluptates tempore architecto impedit
              minima omnis earum eligendi consequuntur mollitia voluptate
              quibusdam explicabo ea inventore, reiciendis consequatur? Nemo.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
              consequatur deleniti consequuntur aperiam ipsa, modi officia
              placeat exercitationem voluptatum quasi. Suscipit cupiditate
              consectetur accusantium, sint quaerat modi quia quis atque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Material;
