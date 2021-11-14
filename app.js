let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById('user-score');
let computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
let result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
let resetBtn = document.getElementById('resetBtn');
let resetToZero = document.querySelector('.resetToZero');
function getComputerChoice() {
    const choices = ['p', 'r', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function converToWord (letter) {
if(letter === 'r') {
    return 'Rock';
}
if (letter === 'p') {
    return 'Paper';
}
if (letter === 's') {
    return 'Scissors';
}
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${converToWord(userChoice)} beats ${converToWord(computerChoice)}. You win!`;
    if (userChoice === 'p') {
        paper_div.style.border = '4px solid green';
        setTimeout(() => {
            paper_div.style.border = '4px solid white';
        }, 300);
    }
    else if (userChoice === 'r') {
        rock_div.style.border = '4px solid green'
        setTimeout(() => {
            rock_div.style.border = '4px solid white';
        }, 300);
    }
    else if (userChoice === 's') {
        scissors_div.style.border = '4px solid green'
        setTimeout(() => {
            scissors_div.style.border = '4px solid white';
        }, 300);
    }
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${converToWord(computerChoice)} beats ${converToWord(userChoice)}. You lose!`
    if (userChoice === 'p') {
        paper_div.style.border = '4px solid #ff471a';
        setTimeout(() => {
            paper_div.style.border = '4px solid white';
        }, 300);
    }
    else if (userChoice === 'r') {
        rock_div.style.border = '4px solid #ff471a'
        setTimeout(() => {
            rock_div.style.border = '4px solid white';
        }, 300);
    }
    else if (userChoice === 's') {
        scissors_div.style.border = '4px solid #ff471a'
        setTimeout(() => {
            scissors_div.style.border = '4px solid white';
        }, 300);
    }
}

function draw(userChoice) {
result_p.innerHTML = `Computer picked ${converToWord(userChoice)}. IT'S A DRAW!`
if (userChoice === 'p') {
    paper_div.style.border = '4px solid gray';
    setTimeout(() => {
        paper_div.style.border = '4px solid white';
    }, 300);
}
else if (userChoice === 'r') {
    rock_div.style.border = '4px solid gray'
    setTimeout(() => {
        rock_div.style.border = '4px solid white';
    }, 300);
}
else if (userChoice === 's') {
    scissors_div.style.border = '4px solid gray'
    setTimeout(() => {
        scissors_div.style.border = '4px solid white';
    }, 300);
}
}

function game (userChoice) {
const computerChoice = getComputerChoice();
switch (userChoice + computerChoice) {
    case 'rs':
        case 'pr':
            case 'sp':
                win(userChoice, computerChoice);
                break;
                case 'sr':
                    case 'rp':
                        case 'ps':
                            lose(userChoice, computerChoice);
                            break;
                            case 'rr':
                                case 'pp':
                                    case 'ss':
                                        draw(userChoice);
                                        break;
                                    }
setTimeout(() => {
    if(userScore !== 0 || computerScore !== 0){
        resetToZero.setAttribute('src', 'images/onicon.svg');
    console.log('hello')
}

}, 300);
                                };

function main () {
    rock_div.addEventListener('click', function(){
game('r');   
})
paper_div.addEventListener('click', function(){
game('p');
})
scissors_div.addEventListener('click', function(){
game('s');
})
}
 
main();


//reset button
resetBtn.addEventListener('click', () => {
    if (userScore_span.innerHTML !== 0 || computerScore_span.innerHTML !== 0) {
        setTimeout(() => {
            resetToZero.setAttribute('src', 'images/officon.svg');
            userScore = 0;
            computerScore = 0;
            userScore_span.innerHTML = userScore;
            computerScore_span.innerHTML = computerScore;
        }, 200);  
        
        
        
    }
}
);
