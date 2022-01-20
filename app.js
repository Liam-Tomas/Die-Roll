
const dice1 = document.querySelector('#dice1')
const dice2 = document.querySelector('#dice2')
const shakeBtn = document.querySelector('.shakeDice')
const winner = document.querySelector('#winner')
const die1 = document.querySelector('.dieAdd1')
const die2 = document.querySelector('.dieAdd2')


function shakeDie() {
    let randoNum1 = Math.floor(Math.random() * 6) + 1
    let randoNum2 = Math.floor(Math.random() * 6) + 1
    let dieAdd = randoNum1 + randoNum2;
    let die1Num = randoNum1;
    let die2Num = randoNum2;
    dice1.innerHTML = `<p>Player 1</p>
                       <p class="dieAdd1 fade-in">${die1Num}</p>
                       <img class="img2 fade-in" src="images/dice${randoNum1}.png">`
    dice2.innerHTML = `<p>Player 2</p>
                       <p class="dieAdd2 fade-in">${die2Num}</p>
                       <img class="img2 fade-in" src="images/dice${randoNum2}.png">`
    if (randoNum1 > randoNum2) {
        winner.innerText = `Player 1 Wins! Score: ${dieAdd}`;
    } else if (randoNum2 > randoNum1) {
        winner.innerText = `Player 2 Wins! Score: ${dieAdd}`;
    } else if (randoNum1 === 1 && randoNum2 === 1) {
        winner.innerText = `Snake Eyes! Score: ${dieAdd}`;
    } else if (randoNum1 === randoNum2) {
        winner.innerText = `Its a tie! Score: ${dieAdd}`;
    }
}

shakeBtn.addEventListener('click', shakeDie)

// Winner logic

