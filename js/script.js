const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    console.log(marioPosition);

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '100px'
        mario.style.marginLeft = '35px'
        
        clearInterval(loop);
    }

    const gameoverrestart = document.querySelector('.gameoverrestart');
    if (gameoverrestart.style.display === 'none' && mario.src.includes('game-over.png')) {
        gameoverrestart.style.display = 'block';
    } else if (gameoverrestart.style.display === 'block' && !mario.src.includes('game-over.png')) {
        gameoverrestart.style.display = 'none';
    }

}, 10);

const restart = () => {
    window.location.reload();
}

document.addEventListener('click', restart);
document.addEventListener('keydown', jump);
