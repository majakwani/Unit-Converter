const userInput = document.querySelector("input")
const actionBtn = document.querySelector("#convert-btn")
const lengthAnswer = document.querySelector(".length")
const volumeAnswer = document.querySelector(".volume")
const massAnswer = document.querySelector(".mass")

actionBtn.addEventListener('click', function convert(){
    let answerInFeet = meterToFeet(userInput.value)
    let answerInGallon = literToGallon(userInput.value)
    let answerInPound = kiloToPound(userInput.value)
    renderAnswers(answerInFeet, answerInGallon, answerInPound)
})

function meterToFeet(input){
    input = parseInt(input)
    let feet = input * 3.281
    feet = feet.toFixed(3)
    let meter = input / 3.281
    meter = meter.toFixed(3)
    return [feet, meter]
}

function literToGallon(input){
    input = parseInt(input)
    let gallon = input * 0.264
    gallon = gallon.toFixed(3)
    let liter = input / 0.264
    liter = liter.toFixed(3)
    return [gallon, liter]
}

function kiloToPound(input){
    input = parseInt(input)
    let pound = input * 2.204
    pound = pound.toFixed(3)
    let kilo = input / 2.204
    kilo = kilo.toFixed(3)
    return [pound, kilo]
}

function renderAnswers(answerInFeet, answerInGallon, answerInPound){
    lengthAnswer.innerHTML += `<p class = "output">
    ${userInput.value} meters = ${answerInFeet[0]} feet | ${userInput.value} feet = ${answerInFeet[1]} meters
    </p>`

    volumeAnswer.innerHTML += `<p class = "output">
    ${userInput.value} liters = ${answerInGallon[0]} gallon | ${userInput.value} gallons = ${answerInGallon[1]} liters
    </p>`

    massAnswer.innerHTML += `<p class = "output">
    ${userInput.value} kilos = ${answerInPound[0]} pounds | ${userInput.value} = ${answerInPound[1]} kilos
    </p>`
}