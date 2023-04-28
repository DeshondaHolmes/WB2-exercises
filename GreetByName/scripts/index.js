
"use strict";


const greeting = document.getElementById("greeting");
const nameField = document.getElementById("nameField");
const greetBtn = document.getElementById("greetBtn");


function init(){
    console.log ("Hello Deshonda")
   
    greetBtn.onclick = onGreetUserBtnClicked;

}

window.onload = init;

function onGreetUserButtonClicked(){
    // code inside this function should execute when the button is pressed!
    console.log("Hello Deshonda");
    
    let username = nameField.value;

    greeting.innerHTML = `Hello to ${username} from inside the onPressMeButtonClicked function!`;
    

}

window.onload = init;

function onGreetUserBtnClicked(){
    // code inside this function should execute when the button is pressed!
    console.log("Hello Deshonda");
    
    let username = nameTextbox.value;

    greeting.innerHTML = `Hello to ${username}`;
    

}



const pressMeButton = document.getElementById("pressMeButton");


console.log("Hello Deshonda ");