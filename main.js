'use strict';
//Element Variable
const input = document.querySelector('.number-input');
const check = document.querySelector('.check');
const gameCorrectAns = document.querySelector('.game-correct-ans');
const guessingText = document.querySelector('.guessing-text');
const score = document.querySelector('.score');
const highScore = document.querySelector('.high-score');
const playAgain = document.querySelector('.play-again');
const playAgainBtn = document.querySelector('.play-again-btn');
const gameOverModal = document.querySelector('.game-over-modal');
//Spcial Variable
let SECRET_NUMBER = Math.trunc(Math.random() * 20 + 1);
console.log(SECRET_NUMBER);
let SCORE = 20;
let HIGH_SCORE = 0;
//Display Text
function displayGuessingText(text) {
	guessingText.textContent = text;
}
//Cheking
check.addEventListener('click', function () {
	//When there is no input
	const numberInput = Number(input.value);
	if (!numberInput) displayGuessingText('Please enter e Valid number!😥');
	//When Player wins
	else if (numberInput === SECRET_NUMBER) {
		displayGuessingText('Correct Answer!😍');
		gameCorrectAns.textContent = SECRET_NUMBER;
		gameCorrectAns.style.backgroundColor = '#222';
		gameCorrectAns.style.border = '2px dotted #39d553';
		document.body.style.backgroundColor = 'teal';
		check.style.backgroundColor = '#222';
		if (SCORE > HIGH_SCORE) {
			HIGH_SCORE = SCORE;
			highScore.textContent = HIGH_SCORE;
		}
	}
	//When Player is Wrong
	else if (numberInput !== SECRET_NUMBER) {
		if (SCORE > 1) {
			displayGuessingText(
				numberInput > SECRET_NUMBER
					? 'Your Number is To High 😱'
					: 'Your Number Is To Low 😤'
			);
			SCORE--;
			score.textContent = SCORE;
			gameCorrectAns.style.border = '2px dotted rgba(235, 28, 69, 0.753)';
		} else {
			gameCorrectAns.style.border = '2px dotted rgba(235, 28, 69, 0.753)';
			displayGuessingText('Game Over!😭');
			score.textContent = 0;
			gameOverModal.style.visibility = 'visible';
			gameOverModal.style.opacity = '1';
			input.value = '';
		}
	}
});
//Play Again Button
playAgain.addEventListener('click', function () {
	SCORE = 20;
	SECRET_NUMBER = Math.trunc(Math.random() * 20 + 1);
	console.log(SECRET_NUMBER);
	score.textContent = SCORE;
	displayGuessingText('Start guessing...');
	gameCorrectAns.textContent = '?';
	document.body.style.backgroundColor = '#222';
	gameCorrectAns.style.border = '2px dotted #eaeaea';
	gameCorrectAns.style.backgroundColor = 'teal';
	check.style.backgroundColor = 'teal';
	input.value = '';
});
//Modal Play Again Button
playAgainBtn.addEventListener('click', function () {
	gameOverModal.style.visibility = 'hidden';
	gameOverModal.style.opacity = '0';
	gameCorrectAns.style.border = '2px dotted #eaeaea';
	SCORE = 20;
	SECRET_NUMBER = Math.trunc(Math.random() * 20 + 1);
	console.log(SECRET_NUMBER);
	score.textContent = SCORE;
	displayGuessingText('Start guessing...');
	gameCorrectAns.textContent = '?';
	document.body.style.backgroundColor = '#222';
	gameCorrectAns.style.backgroundColor = 'teal';
	check.style.backgroundColor = 'teal';
	numberInput.value = '';
});
