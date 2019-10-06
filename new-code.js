function computerPlay(){
            let myArr = ['Rock', 'Paper', 'Scissors']
            let computerPlay= myArr[Math.floor(Math.random()* myArr.length)]
            return computerPlay
            
        } 

        const rock = document.querySelector('.rock')
        const paper = document.querySelector('.paper')
        const scissors = document.querySelector('.scissors')
        const reset = document.querySelector('#reset')

        rock.addEventListener('click', function(e){
            playRound('Rock', computerPlay())
            
        })
        paper.addEventListener('click', function(e){
            playRound('Paper', computerPlay())
        })
        scissors.addEventListener('click', function(e){
            playRound('Scissors', computerPlay())
        })
        reset.addEventListener('click', function(e){
            resetGame()
        })
        
        let playerScore = 0;
        let computerScore = 0;
        
        const result = document.querySelector('.result')

        const compSpan = document.querySelector('#computer')
        const playerSpan = document.querySelector('#player')
        playerSpan.textContent = `Player: ${playerScore}`
        compSpan.textContent = `Computer: ${computerScore}`

        const playRound = function oneRound(playerSelection,computerSelection){
            
            if (playerSelection === 'Rock' && computerSelection === 'Paper'){
                result.textContent = `Computer chose ${computerSelection}. You lose! Paper beats rock.`
                computerScore++
                compSpan.textContent = `Computer: ${computerScore}`
    

            } else if (playerSelection === 'Paper' && computerSelection === 'Rock'){
                result.textContent =`Computer chose ${computerSelection}. You win! Rock beats paper.`
                playerScore++
                playerSpan.textContent = `Player: ${playerScore}`
                

            } else if (playerSelection === 'Scissors' && computerSelection === 'Rock'){
                result.textContent = `Computer chose ${computerSelection}. You lose! Rock beats scissors.`
                computerScore++
                compSpan.textContent = `Computer: ${computerScore}`
                

            } else if (playerSelection === 'Rock' && computerSelection === 'Scissors'){
                result.textContent =`Computer chose ${computerSelection}. You win! Rock beats scissors.`
                playerScore++
                playerSpan.textContent = `Player: ${playerScore}`
                
                
            } else if (playerSelection === 'Scissors' && computerSelection === 'Paper'){
                result.textContent = `Computer chose ${computerSelection}. You win! Scissors beats paper.`
                playerScore++
                playerSpan.textContent = `Player: ${playerScore}`
                

            } else if (playerSelection === 'Paper' && computerSelection === 'Scissors'){
                result.textContent = `Computer chose ${computerSelection}. You lose! Scissors beats paper`
                computerScore++
                compSpan.textContent = `Computer: ${computerScore}`
                

            } else { 

               result.textContent = `Computer chose ${computerSelection}. 
               Tie! ${playerSelection} is the same as ${computerSelection}`
            }

            endGame(playerScore,computerScore)
        }

        
        function endGame(playerScore,computerScore){
            if (playerScore === 5 || computerScore === 5){
                rock.disabled = true
                paper.disabled = true
                scissors.disabled = true
                if (playerScore > computerScore){
                    result.textContent ='Game over! You won!'
                } else {
                    result.textContent = 'Game over! You lost!'
                }
               
            }
                
        }

        function resetGame(){
            result.textContent = ''
            computerScore = 0
            playerScore = 0
            compSpan.textContent = 'Computer: 0'
            playerSpan.textContent = 'Player: 0'
            rock.disabled = false
            paper.disabled = false
            scissors.disabled = false
        }