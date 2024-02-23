const menuIcon = document.querySelector('.menu-icon');
const offScreenMenu = document.querySelector('.off-screen-menu');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})