let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll ( ".choice");
const msg =document.querySelector("#msg");

const userScorePara = document.querySelector ("#user-score");
const compScorePara =document.querySelector("#comp-score");

const gencompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
} 
 const drawGame = () => {
   console.log("the game is draw");
    msg.innerText = "Its a Draw!"
    msg.style.backgroundColor = " #081b31";
    
 };

 const showWinner = (userWin, userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
       
        msg.innerText = `You Win! cuz you picked ${userChoice} and AI picked  ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! cuz you picked ${userChoice} and Ai picked ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
 };
const playGame = (userChoice) => {
    console.log("user choice=", userChoice);
    //generate computer choice --> modular 
    const compChoice = gencompChoice();
    console.log("comp choice = ", compChoice);

    if (userChoice === compChoice) {
        //Draw Game
        drawGame();
     } else {
         let userwin = true;
         if (userChoice === "Rock") {
            //scissors, paper
            userWin = compChoice ==="Paper" ? false : true;
        } else if (userChoice === "Paper") {
            //rock,scissors
        userWin = compChoice === "Scissor" ? false : true;
         } else {
             //rock, paper
             userWin = compChoice === "Rock" ? false: true;
        }
        showWinner (userWin, userChoice, compChoice);
         };
        };

choices.forEach ((choice) => {
choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute ("id");
    console.log("choice was clicked",userChoice );
    playGame(userChoice);
 });
});