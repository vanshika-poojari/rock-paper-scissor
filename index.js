
const game = () => {
    let score = 0;

    //start playing 
    const playMatch = () => {
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");

        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissors');
        const options = [rockBtn, paperBtn, scissorBtn];

       
        // randomly generating computer options 

        const computerOptions = ["rock", "paper", "scissor"];


       options.forEach(option => {
            option.addEventListener("click", function () {
                const randomvalue = Math.floor(Math.random() * 3);

                const computerchoice = computerOptions[randomvalue];

                console.log(computerchoice);

                let playerone = this.textContent.trim();

                whowins(playerone, computerchoice);

            
                
                // images 

                playerHand.src = `./images/${playerone}.png`

                console.log(playerHand.src);

                computerHand.src = `./images/${computerchoice}.png`

            });

        });

    };

    //updating score 

    function updateScore(){
       var playerscore = document.querySelector('.score')
       playerscore.textContent = score; 
    }

//a win or a loss

    const whowins = (playerchoice, computerchoice) => {
        const comparehands = document.querySelector('.winLose')


        if(playerchoice === computerchoice){
            comparehands.innerHTML = "IT'S A TIE";
                return;
        }


        // for rock 
       if(playerchoice === "rock"){
        if(computerchoice === "scissor"){
            comparehands.innerHTML = "YOU WON :D"

            score++; 
            updateScore(); 
                return;
        }
            else{
            comparehands.innerHTML = "YOU LOST :("
                return;
            }
          
       }

        // for paper

        if(playerchoice === "paper"){
          if(computerchoice === "rock"){
            comparehands.innerHTML = "YOU WON :D"
            score++; 
            updateScore(); 
                return;
        }
    
            else{
            comparehands.innerHTML = "YOU LOST :("
                return;
            }
        }
    
        // for scissors 
        if(playerchoice === "scissor"){
             if(computerchoice === "paper"){
            comparehands.innerHTML = "YOU WON :D"
            score++; 
            updateScore(); 
                return;
            }
                else{
                    comparehands.innerHTML = "YOU LOST :("
                    return;
                }
            }

         
            



        }



    playMatch();
    }
game(); 