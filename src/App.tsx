// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import AuthoRoot from './routes/AuthoRoot'
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// import moduleName from './Components/'


function App() {
  // const [count, setCount] = useState(0)
  useEffect(() => {
    AOS.init({
      // duration: 1000, // Duración de la animación en milisegundos
      // easing: 'ease-in-out', // Tipo de animación
      // // once: true // Hace que las animaciones solo se ejecuten una vez
    });
  }, []); 

  return (
    <AuthoRoot />
    
  )
}

export default App
