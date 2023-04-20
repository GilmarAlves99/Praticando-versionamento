const darkButton = document.getElementById("darkInput");

const branco = document.documentElement;
const preto = document.documentElement;

function padraocores() {
    branco.style.setProperty('--branco', '#fff')
    preto.style.setProperty('--preto', "#000");
}



darkButton.addEventListener("click", ativadoounao)

function ativadoounao() {


    if (darkButton.checked == true) {
        console.log("ativado")
        branco.style.setProperty('--branco', '#000')
        preto.style.setProperty('--preto', '#fff')

    } else if (darkButton.checked == false) {
        console.log("desativado")
        padraocores()
    }
}