function verificarNota() {

    let nota = Number(document.getElementById("nota").value);

    let resultado = "";

    if (nota >= 7) {
        resultado = "Aprovado";
    }

    else if (nota >= 5) {
        resultado = "Recuperação";
    }

    else {
        resultado = "Reprovado";
    }

    document.getElementById("resultado").innerHTML = resultado;
}