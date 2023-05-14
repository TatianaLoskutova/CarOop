function carStartListener() {
    let randomNumber = Math.random();

    if (randomNumber > 0.5) {
        console.log('Car has started');

        startButton.classList.add('hide');

        function engineCrashed() {
            console.log('engine crashed')
            startButton.classList.remove('hide');
        }
        setTimeout(engineCrashed, 2000);

        console.log('we are waiting crash');

    } else {
        console.log('Something wrong');
    }
}

let startButton = document.querySelector('#start-car');
startButton.addEventListener('click', carStartListener);

