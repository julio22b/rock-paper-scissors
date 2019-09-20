
        function computerPlay(){
            let myArr = ['Rock', 'Paper', 'Scissors']
            let computerPlay= myArr[Math.floor(Math.random()* myArr.length)]
            return computerPlay
            
        } 
        
        
        
        /*const playerSelection = 'rock'*/
        let playerScore = 0;
        let computerScore = 0;
        

        function oneRound(playerSelection,computerSelection){
            
            if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Paper'){
                computerScore++
                return 'You lose! Paper beats rock.'
            } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Rock'){
                playerScore++
                return 'You win! Rock beats paper.'
            } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Rock'){
                computerScore++
                return 'You lose! Rock beats scissors.'
            } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Scissors'){
                playerScore++
                return 'You win! Rock beats scissors.'
            } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Paper'){
                playerScore++
                return 'You win! Scissors beat paper.'
            } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Scissors'){
                computerScore++
                return 'You lose! Scissors beat paper'
            } else { 
                return `Tie! ${playerSelection} is the same as ${computerSelection}`
            }
        }
       
        
        function game(){   

            for(let i = 0; i < 5; i++){
            playerSelection = prompt('Rock, paper or scissors?')
            const computerSelection = computerPlay()
            console.log(oneRound(playerSelection,computerSelection))
            console.log(`Your score: ${playerScore}. Computer score: ${computerScore}`)
            }

            if (computerScore > playerScore){
                return console.log('You lost! Computer wins')
            } else if (playerScore > computerScore){
                return console.log('You won!')
            } else {
                return console.log('It\s a draw')
            }
        }

        
        
        /*console.log('computer: ',computerSelection)
        console.log('player: ', playerSelection)*/
        game()