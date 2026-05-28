function fibonacci() {

    let limite = Number(document.getElementById("numero").value);

    let n1 = 0;
    let n2 = 1;

    let resultado = "0 1 ";

    while (n2 <= limite) {

        let proximo = n1 + n2;

        resultado += proximo + " ";

        n1 = n2;
        n2 = proximo;
    }

    document.getElementById("resultado").innerHTML = resultado;
}