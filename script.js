const burguerMenu = document.getElementById('toggle-menu')
const navMenu = document.querySelector('.nav-menu')

document.addEventListener('load', function(event) {
    if(event) {
        navMenu.classList.remove('hidden')
    }
})

burguerMenu.addEventListener('click', function(e) {
    e.preventDefault()
    if(e) {
        navMenu.classList.toggle('hidden')
    }
})