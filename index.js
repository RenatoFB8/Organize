const menu = document.querySelector("#menu")
const openButton = document.querySelector("#hamburguerIcon")
const closeButton = document.querySelector ("#close")
const opacidade = document.querySelector("#opacidade")

openButton.addEventListener ("click", function (){
    menu.classList.add("flex");
    openButton.classList.add ("none");
    closeButton.classList.add("flex");
    opacidade.classList.add("flex");
})

closeButton.addEventListener ("click", function (){
    menu.classList.remove("flex");
    openButton.classList.remove ("none");
    closeButton.classList.remove("flex");
    opacidade.classList.remove("flex");
})


