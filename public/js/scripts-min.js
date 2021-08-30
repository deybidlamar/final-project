"use strict";var btnToggle=document.getElementById("nav-toggle"),mainMenu=document.getElementById("nav-dropdown"),menuItems=document.querySelectorAll(".nav__item"),home=document.getElementById("home1"),about=document.getElementById("about"),products=document.getElementById("products"),contact=document.getElementById("contact"),newsletter=document.getElementById("newsletter");btnToggle.addEventListener("click",(function(){mainMenu.classList.contains("nav__dropdown--show")?(btnToggle.innerHTML='<svg class="nav__hamburguer" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="inherit" viewBox="0 0 16 16">\n        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>\n      </svg>',mainMenu.classList.remove("nav__dropdown--show")):(btnToggle.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="inherit" class="bi bi-x-lg" viewBox="0 0 16 16">\n        <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>\n      </svg>',mainMenu.classList.add("nav__dropdown--show"))}));var addActiveMenuItem=function(e){menuItems.forEach((function(e){return e.classList.remove("nav__item--active")})),menuItems[e-1].classList.add("nav__item--active")},checkElement=function(e){return e.getBoundingClientRect().top>0&&e.getBoundingClientRect().top<150};window.addEventListener("scroll",(function(){checkElement(home)?addActiveMenuItem(home.dataset.index):checkElement(about)?addActiveMenuItem(about.dataset.index):checkElement(products)?addActiveMenuItem(products.dataset.index):checkElement(contact)?addActiveMenuItem(contact.dataset.index):checkElement(newsletter)&&addActiveMenuItem(newsletter.dataset.index)}));