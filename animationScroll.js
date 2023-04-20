const boxes = document.querySelectorAll(".box")

window.addEventListener('scroll', checkBoxes)
checkBoxes();

function checkBoxes() {
    const triggerBottom = (window.innerHeight / 4 * 3.3);

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });

}

const indicator = document.querySelector("#indicator");


const maxHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener("scroll", () => {

    const porcentage = (window.scrollY / maxHeight) * 100;
    indicator.style.width = `${porcentage}%`
})