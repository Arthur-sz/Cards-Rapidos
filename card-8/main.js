function contarVogais() {

    let palavra = document.getElementById("palavra").value.toLowerCase();

    let quantidade = 0;

    for (let i = 0; i < palavra.length; i++) {

        if (
            palavra[i] == "a" ||
            palavra[i] == "e" ||
            palavra[i] == "i" ||
            palavra[i] == "o" ||
            palavra[i] == "u"
        ) {
            quantidade++;
        }
    }

    document.getElementById("resultado").innerHTML =
        "Quantidade de vogais: " + quantidade;
}