const boton = document.querySelector(".scroll-top-btn");

window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 600) {
        boton.classList.remove("oculto");
    }else{
        boton.classList.add("oculto");
    }

    console.log(window.pageYOffset, document.documentElement.scrollTop);
});

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("scroll-top-btn")) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
});