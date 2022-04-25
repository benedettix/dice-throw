var pocni = document.getElementById('pocni');
var timering = document.getElementById('time');
var showGame = document.getElementById('showGame');
var showClick = document.getElementById('showClick');
var name1 = document.getElementById('name1');
var name2 = document.getElementById('name2');
var plusOne1 = document.getElementById('plusOne1');
var plusOne2 = document.getElementById('plusOne2');
var baci1 = document.getElementById('baci1');
var baci2 = document.getElementById('baci2');
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var winner1 = document.getElementById('winner1');
var winner2 = document.getElementById('winner2');
var playAgain = document.getElementById('playAgain');
var number = 0;
var number2 = 0;
var player1TotalScore = 0;
var player2TotalScore = 0;
var rollingCounter = 1;

pocni.addEventListener('click', iskok);

function iskok() {
    let osoba1 = prompt("Unesite ime prvog igraca");
    let osoba2 = prompt("Unesite ime drugog igraca");
    name1.innerHTML = osoba1;
    name2.innerHTML = osoba2;
    timer();
}


pocni.addEventListener('click', timer);

function timer() {
    var time = 1;
    timering.innerHTML = time;
    var loop = setInterval(function() {
        time++;
        timering.innerHTML = time;
        if (time === 10) {
            clearInterval(loop);
            finishGame();
        }
    }, 1000)


}
pocni.addEventListener('click', clickGame);

function clickGame() {
    showClick.style.display = "none";
    showGame.style.display = "block";
}

baci1.addEventListener('click', getRandom1);



function getRandom1() {
    rollingCounter += 0.5;
    this.setAttribute('disabled', 'disabled');
    baci2.removeAttribute('disabled');
    num = Math.floor(Math.random() * 6) + 1
    player1TotalScore += num;
    num1.textContent = player1TotalScore.toString();
    plusOne1.textContent = num.toString();
    num1.innerHTML = player1TotalScore;
    baci1.style.background = "orange"
    baci2.style.background = "green"

}

function getRandom2() {
    rollingCounter += 0.5;
    this.setAttribute('disabled', 'disabled');
    baci1.removeAttribute('disabled');
    num = Math.floor(Math.random() * 6) + 1
    player2TotalScore += num;
    num2.textContent = player2TotalScore.toString();
    plusOne2.textContent = num.toString();
    num2.innerHTML = player2TotalScore;
    baci2.style.background = "orange"
    baci1.style.background = "green"


}


baci2.addEventListener('click', getRandom2);




function finishGame() {
    baci1.setAttribute('disabled', 'disabled');
    baci2.setAttribute('disabled', 'disabled');
    baci1.style.background = "orange"
    baci2.style.background = "orange"
    playAgain.style.display = "block";

    if (player1TotalScore > player2TotalScore) {
        winner1.style.background = "green";
    } else if (player1TotalScore < player2TotalScore) {
        winner2.style.background = "green";
    } else {
        winner1.style.background = "green";
        winner2.style.background = "green";
    }

}

playAgain.addEventListener('click', restart);

function restart(e) {
    location.reload();
}