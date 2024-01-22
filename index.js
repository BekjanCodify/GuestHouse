const burger = document.querySelector('.burger')
const burger__btn = document.querySelector('.burger__btn')
let toggleBurger = () =>{
    burger.classList.toggle('active')
    burger__btn.classList.toggle('active')
}