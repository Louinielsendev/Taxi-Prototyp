var adressInput;
var goBtn;

function init(){
adressInput = document.querySelector('#adressInput');
goBtn = document.querySelector('#textInput button')
goBtn.addEventListener('click', nextPage);
sessionStorage.setItem("location", 'Din postition');
}

window.addEventListener('load', init)

function nextPage(){
    sessionStorage.setItem("destination", adressInput.value); 
    console.log(sessionStorage.getItem("destination"))
    console.log(sessionStorage.getItem("location"))
}