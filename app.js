var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
var result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function win(){
  userScore++;
  userScore_span.innerHTML = userScore;
  result_div.innerHTML = "YOU WIN";
}
function loss(){
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = "YOU LOSE :(";
}
function tie(){
  result_div.innerHTML = "YOU TIED!!!";
}
function getComputerChoice(){
  const choices = ['r','p','s'];
  const num =Math.floor(Math.random() *3);
  return choices[num];
}
function game(userChoice){
  const computerChoice = getComputerChoice();
  switch(userChoice + computerChoice){
    case "pr":
    case "sp":
    case "rs":
      win();
      return 1;
      break;
    case "pp":
    case "ss":
    case "rr":
      tie();
      return 0;
      break;
    default:
    loss();
    return -1;
    break;
  }
}
function main(){
  rock_div.addEventListener('click',function() {
    game("r");
  })
  paper_div.addEventListener('click',function() {
    game("r");
  })
  scissors_div.addEventListener('click',function() {
    game("r");
  })
}
main();
