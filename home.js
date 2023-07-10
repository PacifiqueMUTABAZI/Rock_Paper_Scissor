const getComputerChoice =()=>{
const choice=['rock','paper','scissors'];
const computerChoice=choice[Math.floor(Math.random()*choice.length)];
return computerChoice;
};
getComputerChoice();
const userChoice=prompt('Please choose between rock,paper and scissor');
const playRound= (playSelection,computerSelection) =>{
 const playerSelection=playSelection.toLowerCase();
  if(playerSelection === computerSelection){
    return 'It is Tie';
  }
  else{
    if((playSelection ==='rock'&& computerSelection==='scissors')||
       (playSelection ==='paper'&& computerSelection==='rock')||
       (playSelection ==='scissors'&& computerSelection ==='paper'))

  return'you are the winner';
else {
  return 'you lose!computer wins';
}
}
};
const game =()=>{
  const playerSelection=userChoice;
  const computerSelection=getComputerChoice();
   let i;
   for( i=1;i<=5;i++){
    console.log(playRound(playerSelection,computerSelection));
  }
  /*console.log(playRound(playerSelection,computerSelection));
  console.log(playRound(playerSelection,computerSelection));
  console.log(playRound(playerSelection,computerSelection));
  console.log(playRound(playerSelection,computerSelection));
  console.log(playRound(playerSelection,computerSelection));
  */
};
game();


  
