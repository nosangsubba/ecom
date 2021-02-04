//menu show
const showMenu = (navId, toggleId) => {
    const nav = document.getElementById(navId),
        toggle = document.getElementById(toggleId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-menu', 'nav-toggle')
//active menu

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', (linkAction)))