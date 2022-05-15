const clock = document.getElementById('time_clock');

const getTimeClock = () => {
    const objectDate = new Date();

    const elements = {
        hora: objectDate.getHours(),
        minutos: objectDate.getMinutes(),
        segundos: objectDate.getSeconds()
    }
    clock.innerHTML = `${elements.hora}:${elements.minutos}:${elements.segundos}`;

}

setInterval(getTimeClock, 1000);
