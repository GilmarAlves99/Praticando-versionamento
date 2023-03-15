const darkButton = document.getElementById("darkInput");


const branco = document.documentElement;
const verdeEscuro = getComputedStyle(document.documentElement).getPropertyValue('--verdeEScuro');
const verdeClaro = getComputedStyle(document.documentElement).getPropertyValue('--verdeClaro');
const verde = getComputedStyle(document.documentElement).getPropertyValue('--verde');
const cinzaEscuro = getComputedStyle(document.documentElement).getPropertyValue('--cinzaEscuro');
const cinzaClaro = getComputedStyle(document.documentElement).getPropertyValue('--cinzaClaro');

function padraocores() {
    branco.style.setProperty('--branco', "#fff");
}



darkButton.addEventListener("click", ativadoounao)

function ativadoounao() {


    if (darkButton.checked == true) {
        console.log("ativado")
        branco.style.setProperty('--branco', 'black')


    } else if (darkButton.checked == false) {
        console.log("desativado")
        padraocores()
    }
}