function inverter() {

    let palavra = document.getElementById("palavra").value;

    let invertida = palavra.split("").reverse().join("");

    document.getElementById("resultado").innerHTML = invertida;
}