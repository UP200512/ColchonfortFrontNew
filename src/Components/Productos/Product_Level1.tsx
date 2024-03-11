import imagen from "../../images/Fotografia Editorial/8.4.jpg"

function Product_Level1() {
    

    return (
        <div className="container text-center p-4" >
            <div className="row d-flex justify-content-center">
                <h1>Noche estrellada</h1>
                <h4>Confort. Descanso. Paz</h4>
                <img src={imagen} className="img-fluid " alt="Colchon"   style={{maxWidth: "90vh",maxHeight: "90vh"}}/>
            </div>
        </div>
    );
}

export default Product_Level1;