// JavaScript code for conversion
function convertTemperature() {
    const celsius = parseFloat(document.getElementById("celsius").value);
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("temperatureResult").textContent = `${celsius} Celsius is equal to ${fahrenheit.toFixed(2)} Fahrenheit.`;
}

function convertMarla() {
    const marla = parseFloat(document.getElementById("marla").value);
    const squareFeet = marla * 272.25; // 1 Marla = 272.25 Square Feet
    document.getElementById("marlaResult").textContent = `${marla} Marla is equal to ${squareFeet.toFixed(2)} Square Feet.`;
}

function convertYards() {
    const yards = parseFloat(document.getElementById("yards").value);
    const squareFeet = yards * 9; // 1 Yard = 9 Square Feet
    document.getElementById("yardsResult").textContent = `${yards} Yards is equal to ${squareFeet.toFixed(2)} Square Feet.`;
}