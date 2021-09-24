import React from 'react';

const Resultado = ({total, plazo, cantidad}) =>  ( 

       <div className="u-full-width resultado"> 
         <h2>Resumen: </h2>
         <p>El monto pedido es: ${cantidad}</p>
         <p>El plazo de pago es: {plazo} cuotas</p>
         <p>Su pago mensual es de: $ { (total / plazo).toFixed(2) }</p>
         <p>EL total a pagar es: ${ total}</p>
       </div>
        );

 
export default Resultado;