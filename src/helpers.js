export const calcularTotal = (cantidad, plazo) => {
    //Calcular interes de monto
    let totalCantidad;

    if (cantidad <= 1000) {
        totalCantidad = cantidad * 0.25;
    } else if (cantidad > 1000 && cantidad <= 5000) {
        totalCantidad = cantidad * 0.2;
    } else if (cantidad > 5000 && cantidad <= 10000) {
        totalCantidad = cantidad * .15;
    } else if (cantidad > 10000) {
        totalCantidad = cantidad * .1;
    }

    //Calcular interes de plazo
    let totalPlazo = 0;

    switch (plazo) {
        case 3:
            totalPlazo = cantidad * 0.05;
            break;
        case 6:
            totalPlazo = cantidad * 0.1;
            break;
        case 12:
            totalPlazo = cantidad * 0.15;
            break;
        case 24:
            totalPlazo = cantidad * 0.2;
            break;
        default:
            break;
    }

    return totalPlazo + totalCantidad + cantidad;
}