import MobileMenu from './modules/MobileMenu.js'
import RevealOnScroll from './modules/RevealOnScroll.js'

let mobileMenu = new MobileMenu()
// let revealOnScroll = new RevealOnScroll()
new RevealOnScroll(document.querySelectorAll('.feature-item'), '85%')
new RevealOnScroll(document.querySelectorAll('.testimonial'), '60%')