const menu = document.querySelector("#menu")
const openButton = document.querySelector("#hamburguerIcon")
const closeButton = document.querySelector("#close")
const opacidade = document.querySelector("#opacidade")

const bolinhas = document.querySelectorAll(".bolinha")
const pessoas = document.querySelectorAll(".pessoas")


//Abrir menu hambuguer

openButton.addEventListener("click", function () {
    menu.classList.add("flex");
    openButton.classList.add("none");
    closeButton.classList.add("flex");
    opacidade.classList.add("flex");
})

//Fechar menu hambuguer

closeButton.addEventListener("click", function () {
    menu.classList.remove("flex");
    openButton.classList.remove("none");
    closeButton.classList.remove("flex");
    opacidade.classList.remove("flex");
})


//Evento de trocar slider

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

// Reseta o estilo do slider aplicado pelo JS quando a tela tiver mais que 992px de largura

window.addEventListener("resize", function () {
    if (window.innerWidth > 992) {
        pessoas.forEach(pessoa => pessoa.removeAttribute("style")) 
    }
}
)

