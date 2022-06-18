const formateadorFecha = fecha => {
    const fechaNueva = new Date(fecha);
    const formatDate = {
      year:'numeric', 
      month: 'long',
      day: '2-digit'
    } 
    return fechaNueva.toLocaleDateString('es-ES', formatDate);
}

const randomDate = (inf, sup) => {
    return Math.round(Math.random() * (sup - inf) + inf);    
}

const date = (inf,sup) => {
    const dateStringInf = inf.toLocaleDateString()
    const dateStringSup = sup.toLocaleDateString()

    const añoInf = dateStringInf.split('/');
    const añoSup = dateStringSup.split('/');

    const dia = randomDate(1,31);
    const mes = randomDate(1,12);
    const año = Number(randomDate(añoInf[2],añoSup[2])) + Number(añoInf[2]);

    const fecha = new Date(año,mes,dia);
    
    if(fecha) {
        return formateadorFecha(fecha);
    } else {
        return date(inf,sup);
    }
}

module.exports = date;