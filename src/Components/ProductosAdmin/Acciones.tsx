import { IoMdAdd } from "react-icons/io";


function Acciones() {
  return (
    <aside className="bg-light mb-3 border p-3">
    <h2>Acciones</h2>
    <form>
        <button onClick={()=> window.location.href = `/productos/administrar/nuevo` } type="button" className="btn btn-outline-primary"><IoMdAdd /> || Agregar producto</button>
    </form>
</aside>
  )
}

export default Acciones
