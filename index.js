var counter = 21493;
var counter2 = 12502;
var counter3 = 15137;
var counterElement = document.getElementById('counter');
var counterElement2 = document.getElementById('counter2');
var counterElement3 = document.getElementById('counter3');

var imageButton = document.getElementById('imageButton');
var imageButton2 = document.getElementById('imageButton2');
var imageButton3 = document.getElementById('imageButton3');

var isDecreased1 = false;
var isDecreased2 = false;
var isDecreased3 = false;

var handleClickButton1 = function() {
    if (isDecreased1) {
        counter--;
        imageButton.src = 'images/button.png';
    } else {
        counter++;
        imageButton.src = imageButton.dataset.altSrc;
    }
    isDecreased1 = !isDecreased1;
    counterElement.textContent = counter.toLocaleString() + ' likes';
};

var handleClickButton2 = function() {
    if (isDecreased2) {
        counter2--;
        imageButton2.src = 'images/button.png';
    } else {
        counter2++;
        imageButton2.src = 'images/button2.png';
    }
    isDecreased2 = !isDecreased2;
    counterElement2.textContent = counter2.toLocaleString() + ' likes';
};

var handleClickButton3 = function() {
    if (isDecreased3) {
        counter3--;
        imageButton3.src = 'images/button.png';
    } else {
        counter3++;
        imageButton3.src = 'images/button2.png';
    }
    isDecreased3 = !isDecreased3;
    counterElement3.textContent = counter3.toLocaleString() + ' likes';
};

imageButton.addEventListener('click', handleClickButton1);
imageButton2.addEventListener('click', handleClickButton2);
imageButton3.addEventListener('click', handleClickButton3);
