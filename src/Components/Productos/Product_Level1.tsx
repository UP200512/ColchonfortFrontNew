import imagen from "../../images/despertar.gif"

function Product_Level1() {


    return (
        <div className="container-fluid text-center p-4" data-aos="zoom-in-down" data-aos-duration="3000">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img src={imagen} style={{maxHeight: "100%"}} className="img-fluid" alt="Colchon" />
                </div>
                <div className="col-md-6">
                    <h1>Soy F°RT</h1>
                    <h4>Confort. Descanso. Paz</h4>
                </div>
            </div>
        </div>
    );

}

export default Product_Level1;