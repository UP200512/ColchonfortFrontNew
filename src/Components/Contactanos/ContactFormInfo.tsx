
export default function ContactFormInfo() {
  return (
    <div>
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputName" className="form-label">Nombre:</label>
        <input type="text" className="form-control shadow-sm rounded" id="exampleInputName" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Correo electronico:</label>
        <input type="email" className="form-control shadow-sm rounded" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <div id="emailHelp" className="form-text">No compartiremos tu correo con nadie mas...</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPhone" className="form-label">Numero de telefono:</label>
        <input type="tel" className="form-control shadow-sm rounded" id="exampleInputPhone" />
      </div>
    </form>
    </div>
  )
}
