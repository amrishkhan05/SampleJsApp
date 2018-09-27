var score, roundScore, activePlayer;
init();

function init() {
    score = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
}
// dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice)
// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('.dice').style.display = 'none';
document.querySelector('.btn-roll').addEventListener('click', function() {
    var dice = Math.floor(Math.random() * 6) + 1;
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = "images/dice-" + dice + ".png"
    if (dice !== 1) {
        roundScore = roundScore + dice;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    } else {
        nextPlayer();
    }
})
document.querySelector('.btn-hold').addEventListener('click', function() {
    //add the current score to the global score
    score[activePlayer] += roundScore;
    //update score in ui
    document.getElementById('score-' + activePlayer).textContent = score[activePlayer];
    if (score[activePlayer] >= 20) {
        document.getElementById('name-' + activePlayer).textContent = 'WINNER!';
        document.querySelector('.dice').style.display = 'none';
    } else {
        nextPlayer();
    }
})

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active')
}
document.querySelector('.btn-new').addEventListener('click', function() {
    init();
})
