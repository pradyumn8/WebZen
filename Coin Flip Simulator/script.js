const coin = document.querySelector("#coin");
const button = document.querySelector("#flip");
const statusLabel = document.querySelector("#status");
const heads = document.querySelector("#headsCount");
const tails = document.querySelector("#tailsCount");

let headsCount = 0;
let tailsCount = 0;
let isFlipping = false; // Flag to check if coin is flipping

function processResult(result) {
    if (result === 'heads') {
        headsCount++;
        heads.innerHTML = headsCount;
    } else {
        tailsCount++;
        tails.innerHTML = tailsCount;
    }

    statusLabel.innerText = result.toUpperCase();
}

function flipCoin() {
    // Prevent multiple flips while the coin is flipping
    if (isFlipping) return;
    isFlipping = true;

    const random = Math.random();
    const result = random < 0.5 ? 'heads' : 'tails';

    // Reset class for animation to start again
    coin.setAttribute('class', '');
    
    setTimeout(() => {
        coin.setAttribute('class', 'animate-' + result);
        
        setTimeout(() => {
            processResult(result);
            isFlipping = false; // Allow flipping again after animation
        }, 2900); // Same delay as the animation time
        
    }, 100);
}

button.addEventListener("click", flipCoin);
