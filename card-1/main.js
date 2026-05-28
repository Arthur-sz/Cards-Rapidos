function verificar() {

    let numero = Number(document.getElementById("numero").value);

    if (numero % 2 == 0) {
        document.getElementById("resultado").innerHTML = "Número par";
    }

    else {
        document.getElementById("resultado").innerHTML = "Número ímpar";
    }
}