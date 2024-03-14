
function MensajeInicialAdmin() {
    return (
        <div className="jumbotron jumbotron-fluid pt-3">
            <div className="container">
                <h1 className="display-4">
                    <input type="text" className="form-control form-control-lg border-0" defaultValue="Nuestros Productos" />
                </h1>
                <p className="lead">
                    <input type="text" className="form-control border-0" defaultValue="Todos nuestros colchones son fabricados bajo el mayor estándar de calidad" />
                </p>
            </div>
        </div>
    )
}

export default MensajeInicialAdmin
