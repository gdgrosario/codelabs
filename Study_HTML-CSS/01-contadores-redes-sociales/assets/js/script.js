let contadores = document.querySelectorAll('.contador');

contadores.forEach((contador) => {

    contador.innerText = '0';

    const actualizarContador = () => {

        const limiteContador = +contador.getAttribute('data-limite-contador');
        const valorContador = +contador.innerText;

        const incrementarContador = limiteContador / 200;

        if (valorContador < limiteContador) {
            contador.innerText = `${Math.ceil(valorContador + incrementarContador)}`;
            setTimeout(actualizarContador, 1);
        } else {
            contador.innerText = limiteContador;
        }

    }

    actualizarContador();
    
});