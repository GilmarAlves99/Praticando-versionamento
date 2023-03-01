const menuLinks = Array.from(document.querySelectorAll(".links"))
const input = document.getElementById("toggle")



menuLinks.forEach((box) => {
  
    box.addEventListener("click", clickLink)

});


function clickLink() {

   input.checked = false

}
