function validaTexto(texto) {
    let erros = [];

    if(texto.value == 0) erros.push(" digite algo!");

    if(/[A-Z-À-Ú-à-ú]/.test(texto.value)) erros.push("Apenas letras minúsculas e sem acento");

    return erros;
}

function mostraErros(erros) {
    let ul = document.querySelector(".error-msg");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}