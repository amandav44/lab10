
function greetUser(name){
    outDiv = document.getElementById('output');
    outDiv.textContent = 'Hello, '+name+'! Welcome';
}

function helloButton(){
    outputP = document.getElementById('message');
    outputP.innerText = "Hello, World!";
}

function retrieve(){
    outDiv = document.getElementById('result');
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let sum = num1+num2;
    outDiv.textContent = sum;
}

function getTitle(){
    outH1 = document.getElementById('title');
    title = document.getElementById('newTitle').value;
    outH1.textContent = title;
}

function concatenate(){
    outP = document.getElementById('combinedText');
    string1 = document.getElementById('string1').value;
    string2 = document.getElementById('string2').value;
    string3 = string1+string2;
    outP.textContent=string3;
}

function changeColor(){
    document.body.style.backgroundColor = 'blue';
}


const button = document.getElementById('bgcolor');
button.addEventListener('click', changeColor);