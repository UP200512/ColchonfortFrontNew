

export default function ContactFormPlus() {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
           <h6>¿Algo en lo que podamos ayudarte?</h6>
          </label>
          <textarea
            className="form-control shadow-sm rounded"
            id="exampleFormControlTextarea1"
            rows={12}
            placeholder="Escribe aqui..."
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary btn-dark" style={{float: "right"}}>Enviar</button>
      </form>
    </div>
  );
}
