// VARIABLES

const osmMain = document.querySelector('.osm-main');
const osmMainIcon = document.querySelector('.osm-main-icon');
var mainToggle = false;

const osmRules = document.querySelector('.osm-rules');
const osmRulesIcon = document.querySelector('.osm-rules-icon');
var rulesToggle = false;

const osmStats = document.querySelector('.osm-stats');
const osmStatsIcon = document.querySelector('.osm-stats-icon');
var statsToggle = false;

const osmSettings = document.querySelector('.osm-settings');
const osmSettingsIcon = document.querySelector('.osm-settings-icon');
var settingsToggle = false;

var toggleList = [osmMain, osmRules, osmStats, osmSettings];
var toggleDict = {};
toggleDict[osmMain] = mainToggle;
toggleDict[osmRules] = rulesToggle;
toggleDict[osmStats] = statsToggle;
toggleDict[osmSettings] = settingsToggle;

//FUNCTIONALITY

osmMainIcon.addEventListener('click', () => {
    osmMain.classList.toggle('active');
})

osmStatsIcon.addEventListener('click', () => {
    osmStats.classList.toggle('active');
})

osmSettingsIcon.addEventListener('click', () => {
    osmSettings.classList.toggle('active');
})

//FUNCTIONS

//currently unused/in progress
function menuToggle (toToggle) {
    for(var i = 0; i < toggleList.length; i++) {
        if(toToggle != toggleList[i]) {
            if(toggleDict[toggleList[i]] == true) {
                toggleList[i].classList.toggle('active');
                toggleDict[toggleList[i]] = !toggleDict[toggleList[i]];
            }
        }
    }
    toToggle.classList.toggle('active');
    toggleDict[toToggle] = !toggleDict[toToggle];
}
