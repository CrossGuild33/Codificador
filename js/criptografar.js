function criptografa(texto){
    let caracteres = texto.split(""); 

    caracteres.forEach(function(item, i){
        if(item == "a") {
            caracteres[i] = "ai";
        }
        else if(item == "e") {
            caracteres[i] = "enter";
        }
        else if(item == "i") {
            caracteres[i] = "imes";
        }
        else if(item == "o") {
            caracteres[i] = "ober";
        }
        else if(item == "u") {
            caracteres[i] = "ufat";
        }
    });
    return caracteres.join("");
}

function descriptografa(texto){
    let codigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];

    for(let i = 0; i < codigo.length; i++) {
        texto = texto.replaceAll(codigo[i][1], codigo[i][0]);  
    }
    return texto;
}

// Escreve o texto criptografado
function escreveCriptografado() {
    let btnCopy = document.querySelector(".btn-copy");
    btnCopy.classList.remove("invisivel");

    resultado.value = criptografa(areaTexto.value);
    hideElementos();
}

//Descriptografa o texto
function escreveDescriptografado() {
    let btnCopy = document.querySelector(".btn-copy");
    btnCopy.classList.remove("invisivel");

    resultado.value = descriptografa(areaTexto.value);
    hideElementos();
}

// Função que esconde a class Elementos
function hideElementos() {
    const elementos = document.querySelector('.elementos');
    if (elementos) {
        elementos.style.display = 'none';
    }
}

let areaTexto = document.querySelector(".area-texto");
let resultado = document.querySelector(".resultado");
let errorMsg = document.querySelector(".error-msg")


// Função que faz uma ação com os buttons ao clicar
document.addEventListener("DOMContentLoaded", function() {
    let btnCriptografa = document.querySelector(".btn-criptografa");
    let btnDescriptografa = document.querySelector(".btn-descriptografa");

    btnCriptografa.onclick = function() {
        let erros = validaTexto(areaTexto);

        if(erros.length > 0) {
            mostraErros(erros);
            resultado.textContent = "";
            return;
        }

        escreveCriptografado();
        errorMsg.innerHTML = "";   
    }

    btnDescriptografa.onclick = function() {
        let erros = validaTexto(areaTexto);

        if(erros.length > 0) {
            mostraErros(erros);
            resultado.textContent = "";
            return;
        }

        escreveDescriptografado();
        errorMsg.innerHTML = "";
    }
});
