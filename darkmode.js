const darkButton = document.getElementById("darkInput");

const branco = document.documentElement;
const preto = document.documentElement;
const verdeClaro = document.documentElement;
const verdeEscuro = document.documentElement;

function padraocores() {
    branco.style.setProperty('--branco', '#fff')
    preto.style.setProperty('--preto', "#000");
    verdeClaro.style.setProperty('--verdeClaro', "#8AA6A3");
    verdeEscuro.style.setProperty('--verdeEscuro', "#10403B");


}



darkButton.addEventListener("click", ativadoounao)

function ativadoounao() {


    if (darkButton.checked == true) {
        console.log("ativado")
        branco.style.setProperty('--branco', '#000')
        preto.style.setProperty('--preto', '#fff')
        verdeClaro.style.setProperty('--verdeClaro', '#10403B')
        verdeEscuro.style.setProperty('--verdeEscuro', '#8AA6A3')

    } else if (darkButton.checked == false) {
        console.log("desativado")
        padraocores()
    }
}