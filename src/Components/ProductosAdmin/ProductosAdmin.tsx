import CardProducto from "../Productos/CardProducto";
// import MensajeInicial from "../ComponentesCompartidos/MensajeInicial"
import MensajeInicialAdmin from "../ComponentesCompartidos/MensajeInicialAdmin";
import AsideFiltros from "../Productos/AsideFiltros";
import Acciones from "./Acciones";
import { getProductos } from "../../axios/http";
import { useState, useEffect } from "react";

const productos = await getProductos();

export default function ProductosAdmin() {
  const [palabra, setPalabra] = useState<string>("");
  const [productosFiltrados, setProductosFiltrados] = useState(productos);

  useEffect(() => {
    // Filtrar productos por nombre según la palabra de búsqueda
    const resultados = productos.filter((producto: any) =>
      producto.nombre.toLowerCase().includes(palabra.toLowerCase())
    );
    setProductosFiltrados(resultados);
  }, [palabra]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 mt-3">
          <Acciones />
          <AsideFiltros />
        </div>
        <div className="col">
          {/* <MensajeInicial /> */}

          <MensajeInicialAdmin />
          <div className="jumbotron jumbotron-fluid pt-3">
            <div className="container">
              <p className="lead">
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="Buscar..."
                  onChange={(e) => setPalabra(e.target.value)}
                />
              </p>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-3">
            {productosFiltrados.map((item: any, index: number) => (
              <div className="col mb-4" key={index}>
                <CardProducto item={item} index={index} admin={true} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
