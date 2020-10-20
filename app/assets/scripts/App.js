import MobileMenu from './modules/MobileMenu.js'
import RevealOnScroll from './modules/RevealOnScroll.js'
import StickyHeader from './modules/StickyHeader.js'
import SmoothScroll from './modules/SmoothScroll.js'
import Modal from './modules/Modal.js'

let mobileMenu = new MobileMenu()
// let revealOnScroll = new RevealOnScroll()
new RevealOnScroll(document.querySelectorAll('.feature-item'), '85%')
new RevealOnScroll(document.querySelectorAll('.testimonial'), '60%')
let stickyHeader = new StickyHeader()
let modal = new Modal()