import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'

class RevealOnScroll {
    constructor(elem, offset) {
        this.itemsToReveal = elem
        this.offsetPersentage = offset
        this.hideInitially()
        this.createWaypoints()
    }

    //Events


    //Methods
    hideInitially() {
        this.itemsToReveal.forEach(elem => {
            elem.classList.add("reveal-item")
        })
    }

    createWaypoints() {
        this.itemsToReveal.forEach(elem => {
            // console.log(elem)
            new Waypoint({
                element: elem,
                handler: () => elem.classList.add('reveal-item--is-visible'),
                offset: this.offsetPersentage
            })
        })
    }
}

export default RevealOnScroll