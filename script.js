let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


function generateTarget(){
  return (Math.floor(Math.random() * 10));
}

function compareGuesses(humanNum, computerNum, target){
	let computerGuess = Math.abs(target - computerNum)
	let humanGuess = Math.abs(target - humanNum)

	if (humanNum > 9 || humanNum < 0) {
		return 'Please input a number between 1 and 9'
	}
	if (humanGuess <= computerGuess) {
		return true;
	} else {
		return false;
	}

};

function updateScore(winner){
	if (winner === 'human') {
		humanScore++;
	} else if (winner === 'computer') {
		computerScore++;
	}
};

function advanceRound(){
	currentRoundNumber++;
};