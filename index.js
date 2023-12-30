const menu = document.querySelector("#menu")
const openButton = document.querySelector("#hamburguerIcon")
const closeButton = document.querySelector("#close")
const opacidade = document.querySelector("#opacidade")

const bolinhas = document.querySelectorAll(".bolinha")
const pessoas = document.querySelectorAll(".pessoas")

console.log(bolinhas);

openButton.addEventListener("click", function () {
    menu.classList.add("flex");
    openButton.classList.add("none");
    closeButton.classList.add("flex");
    opacidade.classList.add("flex");
})

closeButton.addEventListener("click", function () {
    menu.classList.remove("flex");
    openButton.classList.remove("none");
    closeButton.classList.remove("flex");
    opacidade.classList.remove("flex");
})

bolinhas.forEach((bolinha, index) => {
    bolinha.addEventListener("click", function () {
        for (let i = 0; i < bolinhas.length; i++) {
            bolinhas[i].removeAttribute("id")
            pessoas[i].style.display = "none"
        }
        this.id = "bolinhaSelecionada"
        pessoas[index].style.display = "flex"
    })

})

window.addEventListener("resize", function () {
    if (window.innerWidth > 992) {
        pessoas.forEach(pessoa => pessoa.removeAttribute("style")) 
    }
}
)

