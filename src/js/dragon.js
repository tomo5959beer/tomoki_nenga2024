const elem = document.getElementById('dragon');
const voice1 = new Audio('./dragon1.mp3');
const voice2 = new Audio('./dragon2.mp3');
const voice3 = new Audio('./dragon3.mp3');
elem.addEventListener('click', function () {
    let i = Math.random()
    console.log(i)
    if (i <= 0.33) {
        voice1.play();
    } else if (i > 0.33 && i <= 0.66) {
        voice2.play();
    } else {
        voice3.play();
    }
});