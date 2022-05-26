console.log("It works");

const inputs = document.querySelectorAll(".inputs");
const div = document.querySelector("#ColorDiv");
const red = document.getElementById("Redvalue");
const green = document.getElementById("Greenvalue");
const blue = document.getElementById("Bluevalue");

const changeFunction = (event) =>{
    console.log(event);
    div.style.backgroundColor = `rgb(${inputs[0].value},${inputs[1].value},${inputs[2].value})`;
    red.innerText = inputs[0].value;
    green.innerText = inputs[1].value;
    blue.innerText = inputs[2].value;
};

// inputs[0].addEventListener('change',changeFunction);
// inputs[1].addEventListener('change',changeFunction);
// inputs[2].addEventListener('change',changeFunction);

inputs.forEach(element => {
    element.addEventListener("change",changeFunction);
});