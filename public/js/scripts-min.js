"use strict";var btnToggle=document.getElementById("nav-toggle"),mainMenu=document.getElementById("nav-dropdown");btnToggle.addEventListener("click",(function(){mainMenu.classList.contains("nav__dropdown--show")?mainMenu.classList.remove("nav__dropdown--show"):mainMenu.classList.add("nav__dropdown--show")}));