const osmMainIcon = document.querySelector('.osm-main-icon');
const osmMain = document.querySelector('.osm-main');

osmMainIcon.addEventListener('click', () => {
    osmMainIcon.classList.toggle('active');
    osmMain.classList.toggle('active');
})