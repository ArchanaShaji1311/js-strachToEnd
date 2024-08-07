let randomNumber=parseInt(Math.random()*100+1);
const submit=document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')
let prevGuessArray = [];
let numGuess = 1;

let playGame = true;
if(playGame){
    submit.addEventListener('click',function(evnt){
    evnt.preventDefault();
    const guess = parseInt(userInput.value)
    validateGuess(guess);

    });
}
function validateGuess(guess)
{
    if(isNaN(guess))
    {
        alert('Please enter a valid number!')
    }else if(guess<1 || guess>100)
    {
        alert('Please enter a number between 1-100')
    }
    else{
        prevGuessArray.push(guess)
        if(numGuess>=10)
        {
            displayGuess(guess)
            displayMsg(`Game Over, Random Number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess)
{
    if(guess===randomNumber)
    {
        displayMsg(`You guessed it right`)
        endGame()
    }else if(guess<randomNumber)
    {
        displayMsg(`Number is TOO LOW`)
    }
    else if(guess>randomNumber){
        displayMsg(`Number is TOO HIGH`)
    }

}

function displayGuess(guess)
{
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML=`${10-numGuess}`

}

function displayMsg(message)
{
    lowOrHigh.innerHTML = `<h2>${message}</h2>`

}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled' , '')
    p.classList.add('button')
    p.innerHTML = `<h2 id ="newGame">Start New Game</h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame()
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click' , function(evnt)
{
   randomNumber=parseInt(Math.random()*100+1);
   prevGuessArray = []
   numGuess = 1
   guessSlot.innerHTML = ''
   remaining.innerHTML = `${10-numGuess}`
   userInput.removeAttribute('disabled')
   startOver.removeChild(p)
    playGame = true;
})

}
