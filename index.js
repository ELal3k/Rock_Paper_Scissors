const options = ["rock", "paper", "scissors"]
let playerScore = 0
let computerScore = 0

console.log("RRRRRRRRR", "    ", "PPPPPPPPP", "    ", "SSSSSS")
console.log("RR       RR", "  ", "PP", "    ", "PP", "  ", "SS")
console.log("RRRRRRRRR", "    ", "PPPPPPPPP", "    ", "SSSSSS")
console.log("RR     RR", "    ", "PP", "                ", "SS")
console.log("RR       RR", "  ", "PP", "           ", "SSSSSS")
console.log("----------------------------------------")
console.log("     ", "ROCK PAPER AND SCISSORS")
console.log("----------------------------------------")
console.log("")

//Chooses a random weapon for the computer
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * options.length)
  const computerChoice = options[randomIndex]

  return computerChoice
}

//prompt input for player to choose weapon
function getPlayerChoice() {
  const playerChoice = prompt(
    "Choose your weapon! Rock🪨, Paper📜, or Scissors✂️?"
  )

  //converts input string to lower case
  const playerChoiceLowerCase = playerChoice.toLowerCase()

  //filtering wrong inputs
  if (playerChoice === "") {
    return "empty"
  } else if (!options.includes(playerChoiceLowerCase)) {
    return "wrongString"
  } else {
    return playerChoiceLowerCase
  }
}

//Winner algorithm
function winnerCheck(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie"
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return "Player"
  } else {
    return "Computer"
  }
}

// Round function
function roundPlay(playerSelection, computerSelection) {
  //call winner algo
  const result = winnerCheck(playerSelection, computerSelection)
  if (result === "Tie") {
    return "It's a Tie!"
  } else if (result === "Player") {
    playerScore++
    return `You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
  } else {
    computerScore++
    return `You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`
  }
}

//game function
function game() {
  console.log("Let's Play!")

  //game loop
  for (let i = 0; i < 5; i++) {
    let round = i + 1
    const playerSelection = getPlayerChoice()
    const computerSelection = getComputerChoice()
    if (playerSelection === "empty") {
      console.log(
        "Please type Rock, Paper, or Scissors in the prompt input!Let's start from round 0"
      )
      i--
    } else if (playerSelection === "wrongString") {
      console.log("Please type Rock, Paper, or Scissors in the prompt input!")
      i--
    } else {
      console.log(
        `Round ${round}: ${roundPlay(playerSelection, computerSelection)}`
      )
    }
  }
  // game ending and results
  console.log("-----------------")
  console.log("Game Over")

  if (playerScore > computerScore) {
    console.log("You win the game!")
  } else if (playerScore < computerScore) {
    console.log("You lose the game!")
  } else {
    console.log("We Have a Tie!")
  }

  console.log(`-> Score:  YOU:${playerScore}   COMPUTER:${computerScore}`)

  return "Type another game() to start a new game."
}

alert("Please open the console to start the game.")
console.log("Please type game() in the console.")