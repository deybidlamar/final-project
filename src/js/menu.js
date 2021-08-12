const btnToggle = document.getElementById('nav-toggle')
const mainMenu = document.getElementById('nav-dropdown')

btnToggle.addEventListener('click', () => {
    if (mainMenu.classList.contains('nav__dropdown--show'))
        mainMenu.classList.remove('nav__dropdown--show')
    else
        mainMenu.classList.add('nav__dropdown--show')
})