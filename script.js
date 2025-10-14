const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const items = document.querySelectorAll('.item')
const dots = document.querySelectorAll('.dot')
const numberIndicator = document.querySelector('.numbers')
const list = document.querySelector('.list')

let active = 0;
const total = items.length
let timer;

function update(direction) {

    document.querySelector('.item.active').classList.remove('active')
    document.querySelector('.dot.active').classList.remove('active')


    if(direction > "0") {
        active = (active + 1) 

        if(active === total) {
            active = 0
        }
    }
   
    else if(direction < "0") {
        active = (active - 1) 

        if(active < 0) {
            active = total - 1
        }
    }



    items[active].classList.add('active')
    dots[active].classList.add('active')

    numberIndicator.textContent = String(active + 1).padStart(2, '0') 
}

clearInterval(timer)
timer = setInterval(() => {
    update(1)
}, 5000);

    

prevButton.addEventListener('click', () => { 
   update("-1")
})

nextButton.addEventListener('click', () => { 
    update("1")
})

/* MOBILE */

let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})


menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})