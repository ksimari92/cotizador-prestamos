import React, {useState} from 'react';
import { calcularTotal } from '../helpers';

const Formulario = ({ cantidad, setCantidad, plazo, setPlazo, total, setTotal, setLoad  }) => {
    const [error, setError] = useState(false);

    const handleChangeCantidad = (e) => {
        setCantidad(parseInt(e.target.value));
    }

    const handleChangePlazo = (e) => {
        setPlazo(parseInt(e.target.value));
    }

    const calcularPrestamo = (e) => {
        e.preventDefault();
        //Validar
        if (cantidad === 0 || plazo === ""){
            setError(true);
        }

        //Eliminar error previo
        setError(false);
        setLoad(true) ;
        setTimeout(() => {
            const total = calcularTotal(cantidad,plazo);
            setTotal(total); 
            setLoad(false);
        }, 3000);       

      


    }
    return (
        <div className="formulario">
            <form onSubmit={calcularPrestamo}>
                <div className="row">
                    <div>
                        <input className="u-full-width"
                            type="number"
                            placeholder="Indique la cantidad de dinero..."
                            onChange={handleChangeCantidad} />
                    </div>
                    <div>
                        <select
                            className="u-full-width"
                            onChange={handleChangePlazo} >

                            <option value="">Indique el plazo</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                    <div>
                        <input type="submit" value="Cotizar" className="button-primary boton" />
                    </div>

                </div>
            </form>
        
           {(error) ? <p className="error">TODOS LOS CAMPOS SON MANDATORIOS</p>  : ""}
           
        </div>
    );
}

export default Formulario;