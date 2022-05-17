const hamburgerBtn = document.querySelector('.nav__btn--hamburger')
const closeBtn = document.querySelector('.nav__btn--cross')
const menu = document.querySelector('.nav__container ul')

hamburgerBtn.addEventListener('click', () => {
    menu.style.display = 'block'
    hamburgerBtn.style.display = 'none'
    closeBtn.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    menu.style.width = 'none'
    hamburgerBtn.style.display = 'block'
    closeBtn.style.display = 'none'
})

const navItems = menu.querySelectorAll('li')

navItems.forEach(item => {
    const link = item.querySelector('a')
    link.addEventListener('click', () => {
        changeActiveState()
        link.classList.add('active')
    })
});

const changeActiveState = () => {
    navItems.forEach(item => {
        const link = item.querySelector('a')
        link.classList.remove('active')
    });
}

menu.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: "smooth" })
    }
})