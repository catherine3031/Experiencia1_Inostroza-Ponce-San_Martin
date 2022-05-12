const botonAceptar = document.getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoCookies = document.getElementById('fondo-aviso-cookies');

if(!localStorage.getItem('cookies-aceptadas')){
    avisoCookies.classList.add('visible');
    fondoCookies.classList.add('visible');
}



botonAceptar.addEventListener('click', () => {
    avisoCookies.classList.remove('visible');
    fondoCookies.classList.remove('visible');
    
    localStorage.setItem('cookies-aceptadas', 'true');
});