const celsiusElem = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const degreeValue = document.getElementById("degree").value;
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
    degree.value = "";
    celsiusElem.innerHTML = "";
});

convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    converToCelcius();
});

function converToCelcius(){
    let inputValue = degree.value;
    if(tempType.value === "fahrenheit"){
        const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
        celsiusElem.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;c`;
    }
    else if(tempType.value === "kelvin"){
        const KelvinToCelsius = inputValue - 273.15;
        celsiusElem.innerHTML = `${KelvinToCelsius.toFixed(3)} &deg;c`;
    }
}

var ondegree = document.querySelector("#degree");
ondegree.oninput = function num(){
    
    var degreeValue = document.getElementById("degree").value;
    isNaN(degreeValue) ? window.alert("please enter number only") : k; 
}
