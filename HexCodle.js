const osmMain = document.querySelector('.osm-main');
const osmMainIcon = document.querySelector('.osm-main-icon');

const osmRules = document.querySelector('.osm-rules');
const osmRulesIcon = document.querySelector('.osm-rules-icon');

const osmStats = document.querySelector('.osm-stats');
const osmStatsIcon = document.querySelector('.osm-stats-icon');

const osmSettings = document.querySelector('.osm-settings');
const osmSettingsIcon = document.querySelector('.osm-settings-icon');

osmMainIcon.addEventListener('click', () => {
    osmMain.classList.toggle('active');
    console.log("active!");
})