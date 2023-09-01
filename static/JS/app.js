let barras = [document.getElementById("hr1"), document.getElementById("hr2"), document.getElementById("hr3")]

let girar = true
let menu = document.getElementById("nav")

let ver = true
let juegos_pc = document.getElementById("PCJuegos")
let app_android = document.getElementById("Androi")
let actuali = document.getElementById("Actualizaciones")

for (let i = 0; i < barras.length; i++){
    barras[i].addEventListener("click", () =>{
        menu.style.transition = "0.5s"
        barras[i].style.transition = "0.5s"
        barras[i].style.position = "relative"
        if (girar) {
            barras[i].style.transition = "0.5s"
            barras[1].style.opacity = "0"
            barras[0].style.transform = "rotate(45deg)"
            barras[0].style.top = "8px"
            barras[2].style.transform = "rotate(-45deg)"
            barras[2].style.bottom = "15px"
            barras[2].style.left = "-1px"
            girar = false
            menu.style.zIndex = 2000
            menu.style.opacity = 1
        }
        else{
            barras[i].style.transition = "0.5s"
            barras[1].style.opacity = "1"
            barras[0].style.transform = "rotate(0deg)"
            barras[0].style.top = "0px"
            barras[2].style.transform = "rotate(0deg)"
            barras[2].style.bottom = "0px"
            barras[2].style.left = "0px"
            girar = true
            menu.style.zIndex = -100
            menu.style.opacity = 1
            }

        juegos_pc.addEventListener("click", () => {
            if (ver){
                window.scroll(0,780)
                barras[i].style.transition = "0.5s"
                barras[1].style.opacity = "1"
                barras[0].style.transform = "rotate(0deg)"
                barras[0].style.top = "0px"
                barras[2].style.transform = "rotate(0deg)"
                barras[2].style.bottom = "0px"
                barras[2].style.left = "0px"
                girar = true
                menu.style.zIndex = -100
                menu.style.opacity = 1
                }})  

        app_android.addEventListener("click", () => {
            if (ver){
                window.scroll(0,3000)
                barras[i].style.transition = "0.5s"
                barras[1].style.opacity = "1"
                barras[0].style.transform = "rotate(0deg)"
                barras[0].style.top = "0px"
                barras[2].style.transform = "rotate(0deg)"
                barras[2].style.bottom = "0px"
                barras[2].style.left = "0px"
                girar = true
                menu.style.zIndex = -100
                menu.style.opacity = 1
                }})  
        actuali.addEventListener("click", () => {
            if (ver){
                window.scroll(0,5000)
                barras[i].style.transition = "0.5s"
                barras[1].style.opacity = "1"
                barras[0].style.transform = "rotate(0deg)"
                barras[0].style.top = "0px"
                barras[2].style.transform = "rotate(0deg)"
                barras[2].style.bottom = "0px"
                barras[2].style.left = "0px"
                girar = true
                menu.style.zIndex = -100
                menu.style.opacity = 1
            }})  
            
    })
}