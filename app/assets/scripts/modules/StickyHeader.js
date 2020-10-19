import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'

class StickyHeader {
    constructor() {
        this.siteHeader = document.querySelector('.site-header')
        this.headerTriggerElement = document.querySelector('.large-hero__title')
        this.createHeaderWaypoint()
        this.pageSections = document.querySelectorAll('.page-section') // get all the divs
        this.headerLinks = document.querySelectorAll('.primary-nav a') // get all the a elements
        this.createPageSectionWaypoints()
    }

    // Methods
    createHeaderWaypoint() {
        new Waypoint({
            element: this.headerTriggerElement,
            handler: (direction) => {
                if (direction == "down") {
                    this.siteHeader.classList.add("site-header--dark")
                } else {
                    this.siteHeader.classList.remove("site-header--dark")
                }
            }
        })
    }

    createPageSectionWaypoints() {
        this.pageSections.forEach(elem => {
            new Waypoint({
                element: elem, //div element
                // no if statement handler
                // handler: () => {
                //     let matchingHeaderLink = elem.getAttribute("data-matching-link") // get the 'data-matching-link' Attribute value stored in div
                //     this.headerLinks.forEach(elem => elem.classList.remove("is-current-link")) // remove is-current-link before highlighting next section
                //     document.querySelector(matchingHeaderLink).classList.add("is-current-link")
                // }
                handler: (direction) => {
                    if (direction == "down") {
                        let matchingHeaderLink = elem.getAttribute("data-matching-link") // get the 'data-matching-link' Attribute value stored in div
                        this.headerLinks.forEach(elem => elem.classList.remove("is-current-link")) // remove is-current-link before highlighting next section
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
                        document.querySelector(matchingHeaderLink).classList.add("is-current-link")
                    }
                },
                offset: "-40%"
            })
        })
    }

}

export default StickyHeader