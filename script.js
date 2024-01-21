
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button")

const special_chars = ["%", "*", "/", "-", "+", "="];
let output = "";

// Define function to calculate based on button clicked
const calculate = (btnValue) => {
    // console.log(btnValue);
    if(btnValue === "=" && btnValue !== ""){
        // if output has '%', replace with '/100' before evaluating.
        output = eval(output.replace("%", "/100"));
    }else if(btnValue === "AC"){
        output = "";
    }else if(btnValue === "DEL"){
        output = output.toString().slice(0, -1);
    }else{
        // If output empty and button is specialchars then return
        if(output === "" & special_chars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
}
// Add Event Listeners to buttons, call calculate() on Click!
buttons.forEach((button) => {
    // Button Click listener calls calculate() with latest value as argument
    // button.addEventListener("click", (e) => console.log(e.target.dataset.value));
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
})