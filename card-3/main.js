function verificarIdade() {

    let idade = Number(document.getElementById("idade").value);

    let resultado = "";

    if (idade <= 12) {
        resultado = "Criança";
    }

    else if (idade <= 17) {
        resultado = "Adolescente";
    }

    else if (idade <= 59) {
        resultado = "Adulta";
    }

    else {
        resultado = "Idosa";
    }

    document.getElementById("resultado").innerHTML = resultado;
}