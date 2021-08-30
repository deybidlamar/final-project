const btnToggle = document.getElementById('nav-toggle')
const mainMenu = document.getElementById('nav-dropdown')

const menuItems = document.querySelectorAll('.nav__item')
const home = document.getElementById('home1')
const about = document.getElementById('about')
const products = document.getElementById('products')
const contact = document.getElementById('contact')
const newsletter = document.getElementById('newsletter')

btnToggle.addEventListener('click', () => {
    if (mainMenu.classList.contains('nav__dropdown--show')) {
        btnToggle.innerHTML = `<svg class="nav__hamburguer" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="inherit" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
      </svg>`
        mainMenu.classList.remove('nav__dropdown--show')
    } else {
        btnToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="inherit" class="bi bi-x-lg" viewBox="0 0 16 16">
        <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
      </svg>`
        mainMenu.classList.add('nav__dropdown--show')
    }

})

const addActiveMenuItem = index => {
    menuItems.forEach(item => item.classList.remove('nav__item--active'))
    menuItems[index - 1].classList.add('nav__item--active')
}

const checkElement = element => element.getBoundingClientRect().top > 0 && element.getBoundingClientRect().top < 150

window.addEventListener('scroll', () => {
    if (checkElement(home))
        addActiveMenuItem(home.dataset.index)
    else if (checkElement(about))
        addActiveMenuItem(about.dataset.index)
    else if (checkElement(products))
        addActiveMenuItem(products.dataset.index)
    else if (checkElement(contact))
        addActiveMenuItem(contact.dataset.index)
    else if (checkElement(newsletter))
        addActiveMenuItem(newsletter.dataset.index)
})