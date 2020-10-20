class Modal {
    constructor() {
        this.openModalButton = document.querySelectorAll(".open-modal") // select header button Get in touch 
        this.modal = document.querySelector('.modal') // select modal div
        this.closeModalButton = document.querySelector('.modal__close') // select x letter in modal
        this.events()
    }

    //Events
    events() {
        //click the open modal button
        this.openModalButton.forEach(elem => {
            elem.addEventListener('click', (event) => {
                event.preventDefault()
                this.openModal()
            })
        })

        //click the x close modal button on modal overlay
        this.closeModalButton.addEventListener('click', (event) => {
            event.preventDefault()
            this.closeModal()
        })
        //pushes escape key on the keyboard
        document.addEventListener('keyup', (event) => this.keyPressHandler(event))
    }

    //Methods

    keyPressHandler(event) {
        if (event.key === "Escape") {
            this.closeModal()
        }
    }

    openModal() {
        this.modal.classList.add('modal--is-visible')
    }

    closeModal() {
        this.modal.classList.remove('modal--is-visible')
    }
}

export default Modal