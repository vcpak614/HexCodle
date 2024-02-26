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
var toggleDict = new Map([
    [osmMain, mainToggle],
    [osmRules, rulesToggle],
    [osmStats, statsToggle],
    [osmSettings, settingsToggle]
])

//FUNCTIONALITY

osmMainIcon.addEventListener('click', function() {
    menuToggle(osmMain);
});

osmRulesIcon.addEventListener('click', function() {
    menuToggle(osmRules);
});

osmStatsIcon.addEventListener('click', function() {
    menuToggle(osmStats);
});

osmSettingsIcon.addEventListener('click', function() {
    menuToggle(osmSettings);
});

//FUNCTIONS

function menuToggle(toToggle) {
    for(var i = 0; i < toggleList.length; i++) {
        if(toToggle == toggleList[i]) {
            toToggle.classList.toggle('active');
            toggleDict.set(toToggle, !toggleDict.get(toToggle));
        } else {
            if(toggleDict.get(toggleList[i]) == true) {
                toggleList[i].classList.toggle('active');
                toggleDict.set(toggleList[i], !toggleDict.get(toggleList[i]));
            }
        }
    }
}