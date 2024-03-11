import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Components/Home/HomePage";
import About from "../Components/Information/About";
// import Header from "../Components/header/Header";
import Header2 from "../Components/header/Header2";
import Productos from "../Components/Productos/Productos";
import Footer from "../Components/footer/Footer";
import Contactanos from "../Components/Contactanos/Contactanos";
import ProductosAdmin from "../Components/ProductosAdmin/ProductosAdmin";
import AgregarProducto from "../Components/ProductosAdmin/AgregarProducto";
import EditarProducto from "../Components/ProductosAdmin/EditarProducto";
function AuthoRoot() {

  return (
    <BrowserRouter >
      {/* <Header /> */}
      <Header2 />
      
      <Routes >
        {/* <Route path="/carta" element={<Carta />}></Route> */}
        <Route
          path="/"
          element={
            <HomePage />
          }
        />

        <Route
          path="/informacion"
          element={
            <About />
          }
        />
        <Route
          path="/productos"
          element={
            <Productos />
          }
        />
        <Route
          path="/contacto"
          element={
            <Contactanos />
          }
        />
        <Route
          path="/productos/administrar/nuevo"
          element={
            <AgregarProducto />
          }
        />
        <Route
          path="/productos/:id"
          element={
            <EditarProducto />
          }
        />
        <Route
          path="/productos/administrar"
          element={
            <ProductosAdmin/>
          }
        />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default AuthoRoot;