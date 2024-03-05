import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Components/Home/HomePage";
import About from "../Components/Information/About";
// import Header from "../Components/header/Header";
import Header2 from "../Components/header/Header2";
import Productos from "../Components/Productos/Productos";
import ProductosAdmin from "../Components/ProductosAdmin/ProductosAdmin";
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
          path="/productos/administrar"
          element={
            <ProductosAdmin/>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AuthoRoot;