const callback = evento => alert("Aconteceu um evento" + evento.type);

window.addEventListener('click', callback);