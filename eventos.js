const btn = document.querySelector('button');

const entrada = (element) => {
    element.style.backgroundColor = 'red'
}

const salida = (element) => {
    element.style.backgroundColor = 'green'
}

btn.addEventListener('mouseover', () => {
    entrada(btn)
})

btn.addEventListener('mouseout', () => {
    salida(btn)
})

const crearCaja = (message) => {
    const container = document.querySelector('.contenedor')
    const div = document.createElement('div');
    div.style.width = '200px';
    div.style.height = '200px';
    div.style.backgroundColor = 'red';
    div.style.margin = '20px';
    div.innerText = message;
    container.appendChild(div);
}

btn.addEventListener('click', () => {
    crearCaja('Hola soy una caja');
});