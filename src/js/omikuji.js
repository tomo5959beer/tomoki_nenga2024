const elem = document.getElementById('draw');
const element = document.getElementById('start');
const rotateItem = document.getElementById('rotate');

const mylink = new Array(
    "daikichi.html",
    "kichi_love.html",
    "kichi_work.html",
    "kichi_money.html",
    "chukichi.html",
    "suekichi.html",
    "kyou.html",
    "daikyou.html",
);
function random_jump() {
    let i = Math.floor(Math.random() * mylink.length);
    location.href = mylink[i];
}

elem.addEventListener('click', function () {
    const audio = new Audio('./omikuji.mp3');
    audio.play();
    tatefuri();
});

function tatefuri() {
    element.animate(
        [{
            transform: 'translateY(0)'
        }, {
            transform: 'translateY(-30px)'
        }, {
            transform: 'translateY(0)'
        }], {
        duration: 700,
        iterations: 3
    });
    setTimeout(function () {
        kaiten();
    }, 3000);
}

function kaiten() {
    element.animate(
        [{
            transform: 'rotate(0deg)'
        }, {
            transform: 'rotate(180deg)'
        }], {
        duration: 700,
        easing: 'linear',
        fill: 'forwards'
    });
    setTimeout(function () {
        random_jump();
    }, 1500);
}