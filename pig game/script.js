'use strict';
const player1 = document.querySelector('.player--1');
const player0 = document.querySelector('.player--0');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const roll = document.querySelector('.btn--roll');
const again = document.querySelector('.btn--new');
const hold = document.querySelector('.btn--hold');

const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
let current, activePlayer, playing, scores;
// playing = true;
const init = function () {
  current = 0;
  activePlayer = 0;
  playing = true;
  scores = [0, 0];

  current0.textContent = 0;
  current1.textContent = 0;
  score0.textContent = 0;
  score1.textContent = 0;

  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  dice.classList.add('hidden');
};
init();
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  current = 0;
  activePlayer = activePlayer ? 0 : 1;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');
//random ricxvi
roll.addEventListener('click', function () {
  if (playing) {
    const random = Math.trunc(Math.random() * 6) + 1;
    //kamatlis gamochena
    dice.classList.remove('hidden');
    dice.src = `dice-${random}.png`;
    //mtavari saqme roca ar udris 1 s
    if (random != 1) {
      current += random;
      document.getElementById(`current--${activePlayer}`).textContent = current;
    } else {
      switchPlayer();
    }
  }
});
hold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += current;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});
again.addEventListener('click', init);
