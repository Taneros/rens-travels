import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'

class StickyHeader {
    constructor() {
        this.lazyImages = document.querySelectorAll('.lazyload')
        this.refreshWaypoints()
        this.siteHeader = document.querySelector('.site-header')
        this.headerTriggerElement = document.querySelector('.large-hero__title')
        this.createHeaderWaypoint()
        this.pageSections = document.querySelectorAll('.page-section') // get all the divs
        this.headerLinks = document.querySelectorAll('nav a') // get all the a elements
        this.createPageSectionWaypoints()
    }

    //Events //TODO work on these events to add return
    // events() {
    //     //click the open modal button
    //     this.headerLinks.forEach((elem) => {
    //         elem.addEventListener('click', () => {
    // event.preventDefault()            
    // smoothScroll(document.getElementById('our-beginning'))
    //         })
    //     })
    //     //click the x close modal button on modal overlay
    //     this.closeModalButton.addEventListener('click', () => {
    //         this.closeModal
    //     })
    //     //pushes escape key on the keyboard
    // }

    // Methods

    refreshWaypoints() {
        this.lazyImages.forEach(elem => {
            elem.addEventListener('load', () => {
                Waypoint.refreshAll()
            })
        })
    }

    createHeaderWaypoint() {
        new Waypoint({
            element: this.headerTriggerElement,
            handler: (direction) => {
                if (direction == "down") {
                    this.siteHeader.classList.add("site-header--dark")
                    // console.log('header links inside waypoint 0-d', this.siteHeader)
                    this.headerLinks.forEach(elem => elem.classList.remove("is-current-link")) // remove is-current-link before highlighting next section
                } else {
                    this.siteHeader.classList.remove("site-header--dark")
                    // console.log('header links inside waypoint 0-u', this.siteHeader)
                    this.headerLinks.forEach(elem => elem.classList.remove("is-current-link")) // remove is-current-link before highlighting next section
                }
            }
        })
    }

    createPageSectionWaypoints() {
        this.pageSections.forEach(elem => {
            new Waypoint({
                element: elem, //div element
                handler: (direction) => {
                    if (direction == "down") {
                        let matchingHeaderLink = elem.getAttribute("data-matching-link") // get the 'data-matching-link' Attribute value stored in div
                        this.headerLinks.forEach(elem => elem.classList.remove("is-current-link")) // remove is-current-link before highlighting next section
                        // console.log('header links inside waypoint 1-d', this.headerLinks)
                        document.querySelector(matchingHeaderLink).classList.add("is-current-link")
                    }
                },
                offset: "18%"
            })
            new Waypoint({
                element: elem, //div element
                handler: (direction) => {
                    if (direction == "up") {
                        let matchingHeaderLink = elem.getAttribute("data-matching-link") // get the 'data-matching-link' Attribute value stored in div
                        this.headerLinks.forEach(elem => elem.classList.remove("is-current-link")) // remove is-current-link before highlighting next section
                        // console.log('header links inside waypoint 1-u', this.headerLinks)
                        document.querySelector(matchingHeaderLink).classList.add("is-current-link")
                    }
                },
                offset: "-40%"
            })
        })
    }
}

export default StickyHeader