function calcularMedia() {

    let soma = 0;

    for (let i = 1; i <= 5; i++) {

        let numero = Number(prompt("Digite o número " + i));

        soma += numero;
    }

    let media = soma / 5;

    document.getElementById("resultado").innerHTML =
        "Média: " + media.toFixed(2);
}