const osmMain = document.getElementsByClassName('.osm-main');
const osmMainIcon = document.getElementsByClassName('.osm-main-icon');

const osmRules = document.getElementsByClassName('.osm-rules');
const osmRulesIcon = document.getElementsByClassName('.osm-rules-icon');

const osmStats = document.getElementsByClassName('.osm-stats');
const osmStatsIcon = document.getElementsByClassName('.osm-stats-icon');

const osmSettings = document.getElementsByClassName('.osm-settings');
const osmSettingsIcon = document.getElementsByClassName('.osm-settings-icon');

osmMainIcon.addEventListener('click', () => {
    osmMain.classList.toggle('active');
})