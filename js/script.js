const number = document.querySelector("#number");
const bg = document.querySelector("#bg");
const corpo = document.querySelector("#corpo")
const cleber = document.querySelector("#cleber")

function Number() {
    const aleatorio = Math.floor(Math.random() * 100) + 1;
    const numeroEscolhido = parseInt(number.value);

    if (numeroEscolhido === aleatorio) {
        alert("Parabéns, você ganhou!");
    } else {
        alert("Puxa vida, não foi hoje que você conseguiu. Tente novamente mais tarde.");
        alert("O número sorteado era: " + aleatorio);
    }
}


    function BG() {
        const corAtual = cleber.style.backgroundColor;
        if (corAtual == 'blue') {
            cleber.style.backgroundColor = 'red'
        } else if (corAtual == "red") {
            cleber.style.backgroundColor = 'green '
        } else {
            cleber.style.backgroundColor = "red"
        }
        } 
    