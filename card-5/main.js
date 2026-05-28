function verificarMaior() {

    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);

    if (numero1 > numero2) {
        document.getElementById("resultado").innerHTML = numero1 + " é maior";
    }

    else if (numero2 > numero1) {
        document.getElementById("resultado").innerHTML = numero2 + " é maior";
    }

    else {
        document.getElementById("resultado").innerHTML = "Os números são iguais";
    }
}