console.log('JS - OK!');

const elements = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];

const imageContainer = document.querySelector('.images');

console.log(imageContainer);

let iActive = 0;

imageContainer.innerHTML = '';

for (let i = 0; i < elements.length; i++) {
    console.log(elements[i]);
    console.log('indice ciclo for', i, 'indice variabile', iActive);
    let imageActive = '';

    if (i === iActive) {
        imageActive = ' active';
    }

    imageContainer.innerHTML += `<img class="carousel-element${imageActive}" src="img/${elements[i]}" alt="${elements[i]}">`;

}

const upButton = document.getElementById('scroll-up');
const downButton = document.getElementById('scroll-down');

upButton.addEventListener('click',
    function () {
        console.log('click rilevato Up');

        if (iActive < elements.length - 1) {
            iActive++;
        } else {
            iActive = 0;
        }

        imageContainer.innerHTML = '';

        for (let i = 0; i < elements.length; i++) {
            console.log(elements[i]);
            console.log('indice ciclo for', i, 'indice variabile', iActive);
            let imageActive = '';

            if (i === iActive) {
                imageActive = ' active';
            }

            imageContainer.innerHTML += `<img class="carousel-element${imageActive}" src="img/${elements[i]}" alt="${elements[i]}">`;
        }
    }
);

downButton.addEventListener('click',
    function () {
        console.log('click rilevato Down');

        if (iActive > 0) {
            iActive--;
        } else {
            iActive = elements.length - 1;
        }

        imageContainer.innerHTML = '';

        for (let i = 0; i < elements.length; i++) {
            console.log(elements[i]);
            console.log('indice ciclo for', i, 'indice variabile', iActive);
            let imageActive = '';

            if (i === iActive) {
                imageActive = ' active';
            }

            imageContainer.innerHTML += `<img class="carousel-element${imageActive}" src="img/${elements[i]}" alt="${elements[i]}">`;
        }
    }
);