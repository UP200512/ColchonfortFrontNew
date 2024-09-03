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
import Login from "../Components/Login/Login";
import Register from "../Components/Register/RegisterForm";
import RequireAuth from "./PrivateRoute";
import Materiales from "../Components/Materiales/Materiales";

import ImagesView from "../Components/ProductosAdmin/ImagesView";
function AuthoRoot() {



  // const token = localStorage.getItem('token');
  const tipo = localStorage.getItem('tipo');
  const isUserLoggedIn = localStorage.getItem("token"); // Cambia esto según cómo verificas si el usuario ha iniciado sesión

  return (
    <BrowserRouter >
      <div className="bg-image">
        {/* <Header /> */}
        <Header2 />

        <Routes >
          {/* <Route path="/carta" element={<Carta />}></Route> */}

          <Route path="/login" element={<Login />}></Route>
          <Route path="/registrate" element={<Register />}></Route>
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
              <RequireAuth isLogged={isUserLoggedIn} tipo={tipo}> <AgregarProducto /></RequireAuth>

            }
          />
          <Route
            path="/productos/administrar/images/:idproducto"
            element={
              <RequireAuth isLogged={isUserLoggedIn} tipo={tipo}><ImagesView /></RequireAuth>

            }
          />
          <Route
            path="/productos/edit/:id"
            element={
              <RequireAuth isLogged={isUserLoggedIn} tipo={tipo}><EditarProducto /></RequireAuth>

            }
          />
          <Route
            path="/productos/administrar"
            element={
              <RequireAuth isLogged={isUserLoggedIn} tipo={tipo}><ProductosAdmin /></RequireAuth>

            }
          />


          <Route
            path="/materiales"
            element={
              <Materiales />
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default AuthoRoot;