const clock = document.getElementById('reloj');

const reloj = () => {
    const tiempo = new Date();

    const elementos = {
        hora: tiempo.getHours(),
        minutos: tiempo.getMinutes(),
        segundos: tiempo.getSeconds()
    }
    if (elementos.hora < 10) {
        elementos.hora = '0' + elementos.hora;
    }
    if (elementos.minutos < 10){
        elementos.minutos = '0' + elementos.minutos;
    }
    if (elementos.segundos < 10){
        elementos.segundos = '0' + elementos.segundos;
    }

    clock.innerHTML = `${elementos.hora}:${elementos.minutos}:${elementos.segundos}`;

}

setInterval(reloj, 1000);
