




function Formulario( categorias:any) {
    return (
        <div>
            <form action="">
                <div className="mt-2">
                    <b><label htmlFor="nombre">Nombre del Producto</label></b>
                    <input type="text" value={'nombre'} id="nombre" />
                </div>
                <div className="mt-2">
                    <b><label htmlFor="desc_corta">Descripción corta</label></b>
                    <input type="text" value={'desc'}  id="desc_corta"/>
                </div>
                <div className="mt-2">
                    <b><label htmlFor="desc_larga">Descripción larga</label></b>
                    <input type="text" value={'desc'} id="desc_larga"/>
                </div>
                <div className="mt-2">
                    <b><label htmlFor="cat">Categoria</label></b>
                    <select name="cat" id="cat" >
                        {
                            categorias.forEach(cat => {
                                (
                                    <option value="cat">{cat}</option>
                                )
                            })
                        }
                        
                         
                    </select>
                </div>
                
            </form>
        </div>
    )
}
export default Formulario;