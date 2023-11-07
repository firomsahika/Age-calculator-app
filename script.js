
const calculateBtn = document.querySelector(".svg-btn");
const dayInput = document.querySelector(".day-input");
const monthInput = document.querySelector(".month-input");
const yearInput = document.querySelector(".year-input");
const monthSpan = document.querySelector(".month-span");
const yearSpan = document.querySelector(".year-span");
const daySpan = document.querySelector(".day-span");
const dayError = document.querySelector(".day-error");
const monthError = document.querySelector(".month-error");
const yearError = document.querySelector(".year-error");
const titleText = document.querySelector(".titletext");



let  date = new Date();
let currentDay = date.getDate();
let currentMonth = 1 + date.getMonth();
let  currentYear = date.getFullYear();
const months = [31,28,31,30,31,30,31,31,30,31,30,31];


function validate(){

    const inputs = document.querySelectorAll("input");
    let validator = true;
    inputs.forEach((input)=>{
        // const parent = input.parentElement;
        if(!input.value){
            dayError.textContent = "This field is required";
            titleText.style.color = "Red";
            dayInput.style.borderColor = "Red";
            validator= false;
        }
        else if(dayInput.value > 31){
            dayError.textContent = "Must be a valid day⚠️";
            titleText.style.color = "Red";
            dayInput.style.borderColor = "Red";
            validator= false;
        }
        else if(monthInput.value > 12){
            monthError.textContent = "Must be a valid month⚠️";
            titleText.style.color = "Red";
            monthInput.style.borderColor = "Red";
            validator= false;
        }
        else{
            input.style.borderColor = "black";
            validator= true;
        }
    })
    return validator;
}

function calculator(){
   
    if (validate()){
        if(dayInput.value > currentDay){
            currentDay = currentDay + months[currentMonth - 1];
            currentMonth = currentMonth - 1;
        }
        else if(monthInput.value > currentMonth){
        currentMonth = currentMonth + 12;
        currentYear = currentYear - 1;
        }
        
        const d =  currentDay - dayInput.value;
        const m  =  currentMonth - monthInput.value;
        const y =  currentYear - yearInput.value;
    
        yearSpan.innerHTML = y;
        monthSpan.innerHTML = m;
        daySpan.innerHTML = d;
      
    }
}

calculateBtn.addEventListener("click",calculator);






