function converter() {

    let reais = Number(document.getElementById("reais").value);

    let cotacao = 5.50;

    let dolar = reais / cotacao;

    document.getElementById("resultado").innerHTML =
        "US$ " + dolar.toFixed(2);
}