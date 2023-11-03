function TempConverter(event) {
    event.preventDefault()
    let celsius = document.querySelector("#celsius").value
    const fahrenheit = (celsius * 9/5) + 32;
    let message = `the Fahrenheit for ${celsius} is ${fahrenheit}`
    document.querySelector("#resultTC").innerHTML = message
}

function MarlaConverter(event) {
    event.preventDefault()
    let Marla = document.querySelector("#marla").value
    const squareFeet = Marla * 272.25;
    let message =  `the square feet for ${Marla} Marlas is ${squareFeet}`
    document.querySelector("#resultMC").innerHTML = message
}

function yardConverter(event) {
    event.preventDefault()
    let Yard = document.querySelector("#yard").value
    const squareFeet = Yard * 9;
    let message = `the square feet for ${Yard} Yards is ${squareFeet}`
    document.querySelector("#resultYC").innerHTML = message
}