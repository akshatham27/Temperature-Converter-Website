let celsiusInput = document.querySelector('#celsius > input')
let fehrenheitInput = document.querySelector('#fehrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')
let btn = document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}

celsiusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celsiusInput.value) 
    let fTemp = (cTemp*(9/5)) + 32
    let kTemp = cTemp+273.15

    fehrenheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
})

fehrenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(fehrenheitInput.value) 
    let cTemp = (fTemp -32) *(5/9)
    let ktemp = (fTemp -32) *(5/9) +273.15

    celsiusInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)
})

kelvininput.addEventListener('input', function(){
    let kTemp = parseFloat(kelvinInput.value) 
    let cTemp = kTemp-273.15
    let ftemp = (kTemp-273.15) * (9/5) + 32

    celsiusInput.value = roundNumber(cTemp)
    fehrenheitInput.value = roundNumber(fTemp)
})

btn.addEventListener('click', () => {
    celsiusInput.value = ""
    fehrenheitInput.value = ""
    kelvinInput.value = ""
})