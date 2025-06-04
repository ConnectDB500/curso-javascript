// Este codigo deve ser executado dentro do DevTools
const callback = evento => alert("Aconteceu um evento" + evento.type);

window.addEventListener('click', callback)