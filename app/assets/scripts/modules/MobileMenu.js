import $ from 'jquery'

class MobileMenu {
    constructor() {
        // this.menuIcon = $('.site-header__menu-icon')
        this.menuIcon = document.querySelector(".site-header__menu-icon")
        // this.menuContent = $('.site-header__menu-content')
        this.menuContent = document.querySelector('.site-header__menu-content')
        this.siteHeader = document.querySelector('.site-header')
        this.events()
        this.menuPressed = "0"
    }

    //Events
    events() {
        // this.menuIcon.on("click", () => this.toggleMenu())
        this.menuIcon.addEventListener('click', () => this.toggleMenu())
        // console.log(this.menuPressed)
    }

    //Functions
    toggleMenu() {
        // this.menuContent.toggleClass("site-header__menu-content--is-visible")
        if (this.menuPressed === "0") {
            this.siteHeader.classList.add("site-header--is-expanded")
            this.menuContent.classList.add("site-header__menu-content--is-visible")
            console.log(this.menuPressed)
            this.menuIcon.classList.add("site-header__menu-icon--close-x")
            this.menuPressed = "1"
        } else if (this.menuPressed === "1") {
            this.menuContent.classList.remove("site-header__menu-content--is-visible")
            console.log(this.menuPressed)
            this.siteHeader.classList.remove("site-header--is-expanded")
            this.menuIcon.classList.remove("site-header__menu-icon--close-x")
            this.menuPressed = "0"
        }
    }
}

export default MobileMenu