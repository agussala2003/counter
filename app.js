let increase = document.getElementById('btn1')
let reset = document.getElementById('btn2')
let decrease = document.getElementById('btn3')
let add = document.getElementById('btn4')
let remove = document.getElementById('btn5')
let input1 = document.querySelector('.input1')
let input2 = document.querySelector('.input2')
let number = 0
let shower = document.querySelector('.numberContainer p')

increase.addEventListener('click', function () {
    number++;
    shower.innerText = number

})
decrease.addEventListener('click', function () {
    number--;
    shower.innerText = number
})
reset.addEventListener('click', function () {
    number = 0;
    shower.innerText = number
})
add.addEventListener('click', function () {
    number += parseInt(input1.value) 
    shower.innerText = number
    input1.value = ''
})
remove.addEventListener('click', function () {
    number -= parseInt(input2.value) 
    shower.innerText = number
    input2.value = ''
})