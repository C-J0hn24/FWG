let currentIndex = 1;
const totalCards = document.querySelectorAll('.card').length;
const countdownElement = document.getElementById('countdown');
let countdown = 5;

function switchCard() {
    document.getElementById(`card${currentIndex}`).checked = true;
    currentIndex = (currentIndex % totalCards) + 1;
    countdown = 5;
}

function updateCountdown() {
    countdownElement.textContent = countdown;
    countdown--;

    if (countdown < 0) {
        switchCard();
    }
}

setInterval(updateCountdown, 1000); // Update every second
