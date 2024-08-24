let btnCopy = document.querySelector('.btn-copy');

btnCopy.onclick = function() {
    resultado.select();
    document.execCommand("copy");

    // Limpa os campos
    areaTexto.value = "";
    areaTexto.focus();
    resultado.textContent = "";

    // Esconde o conteúdo 
    btnCopy.classList.add("invisivel");

    // Recarrega a página
    location.reload();
}
