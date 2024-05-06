let homeCount = document.getElementById("home-pts");
let awayCount = document.getElementById("away-pts");
countHome = 0;
countAway = 0;

function homeAddPoints(i) {
    countHome += i;
    homeCount.textContent = countHome;
}

function awayAddPoints(i) {
    countAway += i;
    awayCount.textContent = countAway;
}