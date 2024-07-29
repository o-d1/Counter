const decrease = document.getElementById('decrease');
decrease.addEventListener('click', decreaseFunction);

const reset = document.getElementById('reset');
reset.addEventListener('click', resetFunction);

const increase = document.getElementById('increase');
increase.addEventListener('click', increaseFunction);

let userInput = document.getElementById('input');


function decreaseFunction () {
    userInput.value = parseFloat(userInput.value) - 1;
}

function increaseFunction () {
    userInput.value = parseFloat(userInput.value) + 1;
}

function resetFunction () {
    userInput.value = "";
} 
/*                                Was trying to make it into one function
function buttonClciked () {
    let userInput = document.getElementById('input');

    if (increase.addEventListener('click')) {
        userInput.value = parseFloat(userInput.value) + 1;
    }
}
*/