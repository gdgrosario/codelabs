const elementoContador = document.getElementById('valor-contador');
let valorContador = document.getElementById('valor-contador').textContent;

calcular = (operacion) => {
    if (operacion == "decrementar") {
        decrementar();
    }
    if (operacion == "resetear") {
        resetear();
    }
    if (operacion == "incrementar") {
        incrementar();
    }
}

decrementar = () => {
    valorContador--;
    document.getElementById('valor-contador').textContent = valorContador;
    cambiarColor();
}

resetear = () => {
    valorContador = 0;
    document.getElementById('valor-contador').textContent = valorContador;
    cambiarColor();
}

incrementar = () => {
    valorContador++;
    document.getElementById('valor-contador').textContent = valorContador;
    cambiarColor();
}

cambiarColor = () => {
    if (valorContador == 0) {
        elementoContador.style.color = "#222222";
    } else if (valorContador < 0) {
        elementoContador.style.color = "red";
    } else {
        elementoContador.style.color = "green";
    }
}