
import './header.css';
import { TbLogout } from 'react-icons/tb'
import { ImFacebook2 } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";


function Header() {
  const token = localStorage.getItem('token');
  const logout = () => {
    if (token) {
      if (window.confirm("Cerrar sesión")) {
        localStorage.removeItem('token');
        window.location.href = '/login'
      }
    }


  }


  return (
    <header className="main-header" >
      <div className="header-wrap">
        <div className="wrap-logo-header">
          <a className="logo-header" href="/">
            <h4>Fort</h4>
          </a>
        </div>
        <div className="wrap-nav-header">
          <nav className="nav-header">
            <input type="checkbox" id="check" />

            <label htmlFor="check" className="checkbtn">
              <a className="toggle-menu">
              <h3><GiHamburgerMenu /></h3>
                
              </a>
            </label>
            {/* <input type="checkbox" id="check" /> */}


            <ul className="main-menu">


              <li className="menu-item"> {/**key para asigar un identificador unico que en este caso seria index */}

                <a href='/informacion'>Nosotros</a>

                <a href='/productos'>Productos</a>
                <a href='/materiales'>Materiales</a>
                <a href='/'> Remates</a>
                <a href='/'>Contáctanos</a>
                <a href='/'> </a>
                <a href="/"><h4><ImFacebook2 /></h4></a>
                <a href="/"><h4><FaInstagramSquare /></h4></a>
                <button className='btn btn-dark' onClick={() => logout()}>Salir <TbLogout /></button>


              </li>

            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
