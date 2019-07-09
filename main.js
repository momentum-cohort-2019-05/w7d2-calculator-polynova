const clearAll = document.querySelector('#num-clear')
const result = document.querySelector('#answer')


clearAll.addEventListener('click', function () {
    result.value = ""
})



const numZero = document.querySelector('#num-0')

numZero.addEventListener('click', function () {
    result.value += numZero.value
})



const numOne = document.querySelector('#num-1')

numOne.addEventListener('click', function () {
    result.value += numOne.value
})



const numTwo = document.querySelector('#num-2')

numTwo.addEventListener('click', function () {
    result.value += numTwo.value
})


const numThree = document.querySelector('#num-3')

numThree.addEventListener('click', function () {
    result.value += numThree.value
})


const numFour = document.querySelector('#num-4')

numFour.addEventListener('click', function () {
    result.value += numFour.value
})


const numFive = document.querySelector('#num-5')

numFive.addEventListener('click', function () {
    result.value += numFive.value
})


const numSix = document.querySelector('#num-6')

numSix.addEventListener('click', function () {
    result.value += numSix.value
})


const numSeven = document.querySelector('#num-7')

numSeven.addEventListener('click', function () {
    result.value += numSeven.value
})


const numEight = document.querySelector('#num-8')

numEight.addEventListener('click', function () {
    result.value += numEight.value
})


const numNine = document.querySelector('#num-9')

numNine.addEventListener('click', function () {
    result.value += numNine.value
})


const multi = document.querySelector('#num-multipy')

multi.addEventListener('click', function () {
    result.value += multi.value
})


const subtr = document.querySelector('#num-subtract')

subtr.addEventListener('click', function () {
    result.value += subtr.value
})


const divi = document.querySelector('#num-divide')

divi.addEventListener('click', function () {
    result.value += divi.value
})


const dec = document.querySelector('#num-decimal')

dec.addEventListener('click', function () {
    result.value += dec.value
})

const equalsign = document.querySelector('#num-equal')

equalsign.addEventListener('click', function () {
    const currentValue = result.value
    result.value = eval(currentValue)
})




const plussign = document.querySelector('#num-plus')

plussign.addEventListener('click', function () {
    result.value += plussign.value
})



// function button() {
//     let button = 
// }

