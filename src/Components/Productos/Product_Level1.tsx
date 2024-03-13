import imagen from "../../images/descanso.png"

function Product_Level1() {


    return (
        <div className="container text-center p-4 " data-aos="zoom-in-down" data-aos-duration="3000">
            <div className="row d-flex justify-content-center">
                <h1>Soy F°RT</h1>
                <h4>Confort. Descanso. Paz</h4>
                <img src={imagen} className="img-fluid" alt="Colchon" style={{ height: "90vh" }} />
            </div>
        </div>
    );

}

export default Product_Level1;