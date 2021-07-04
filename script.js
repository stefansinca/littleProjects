let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10)
}

const getAbsoluteDistance = (a, b) => {
  return Math.abs(a-b);
}

const compareGuesses = (human, computer, targer) => {
  let humanDif = getAbsoluteDistance(human, targer);
  let computerDif = getAbsoluteDistance(computer, targer);
  alertWindow(human);
  return humanDif <= computerDif ? true : false;
}
const updateScore = winner => {
  if (winner === 'human') {
    humanScore += 1;
  }
  else if (winner === 'computer') {
    computerScore += 1;
  }
}

const advanceRound = () => {
  currentRoundNumber += 1;
}

// optional

const alertWindow = human => {
  if (human < 0 || human > 9) {
    window.alert('You are out of range. Please chose a number between 0 and 9.')
  };
}
