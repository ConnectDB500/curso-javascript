const numeroIncrementa = document.querySelector("#numero");

const numeroDecrementa = document.querySelector("#numero")

const incrementar = () => {
const num = parseInt(numeroIncrementa.textContent);
numeroIncrementa.textContent = num + 1;
}

const decrementar = () => {
const num1 = parseInt(numeroDecrementa.textContent);
numeroDecrementa.textContent = num1 - 1;
}