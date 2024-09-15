let userScore = 0;
let computerScore = 0;

let choices = document.querySelectorAll(".choice");
let userScoreMsg = document.querySelector("#user-score");
let computerScoreMsg = document.querySelector("#computer-score");
let msg = document.querySelector("#msg");

const generateComputerChoice = () => {
    //to generate the computer's choice
    const options = ["rock", "paper", "scissor"];
    const index = Math.floor(Math.random() * 3);
    return options[index];
};

const drawGame = () => {
    console.log("game is draw! ");
    msg.innerText = "Game is draw! Play Again.";
    msg.style.backgroundColor = "#023047";
    msg.style.color = "#8ecae6";
};

const showWinner = (userWin, userChoice, computerChoice) => {
    //check the winner
    if (userWin)
        {
            //increament the user score
            userScore++;
            //update the user score
            userScoreMsg.innerText = userScore;
            console.log("You win!");
            msg.innerText = `You win! your ${userChoice} defeats ${computerChoice}`;
            msg.style.backgroundColor = "green";
            msg.style.color = "#023047";
        }
    else
        {
            //increament the computer score
            computerScore++;
            //update the computer's score
            computerScoreMsg.innerText = computerScore;
            console.log("You lose.");
            msg.innerText = `You lose. ${computerChoice} defeats your ${userChoice}`;
            msg.style.backgroundColor = "red";
           msg.style.color = "#023047";
        }
};

const playGame = (userChoice) => {
    console.log("user choice", userChoice);
    //generate the computer's choice
    const computerChoice = generateComputerChoice();
    console.log("computer choice",computerChoice);

    if (userChoice === computerChoice)
        {
            drawGame();
        }
    else
        {
            let userWin = true;
            if (userWin === "rock")
                {
                    //computer choice => paper, scissor
                    userWin = computerChoice === "paper" ? false : true; 
                }
            else if (userChoice === "paper")
                {
                    //computer choice => rock, scissor
                    userWin = computerChoice === "scissor" ? false : true; 
                }
            else 
            {
                //user choice = "scissor"
                //computer choice = rock, paper
                userWin = computerChoice === "rock" ? false : true;
            }

            showWinner(userWin, userChoice, computerChoice);
        }
};

choices.forEach(choice => {
    choice.addEventListener ("click", () => {
        const userChoice = choice.getAttribute("id");

        playGame(userChoice);
    });
});

