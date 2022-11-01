var addOnsButton
var addOns
var locationInput
var destinationInput
var timeOptions
var nextBtn
var timeValue
var people
var mes
var fullName
var number
var baggage
var djur
var bilbarnstol

function init() {
  bilbarnstol = document.querySelector('#Bilbarnstol')
  djur = document.querySelector('#Djur')
  baggage = document.querySelector('#baggage')
  number = document.querySelector('#number-input')
  fullName = document.querySelector('#name-input')
  mes = document.querySelector('#mes-input')
  people = document.querySelector('#personer')
  timeValue = document.querySelector('#time')
  timeOptions = document.querySelectorAll('#time option')
  addOnsButton = document.querySelector('#add-ons-button');
  addOns = document.querySelector('#add-ons-wrapper');
  addOnsButton.addEventListener('click', showAddOns);
  locationInput = document.querySelector('#start-input');
  destinationInput = document.querySelector('#destination-input')
  locationInput.value = sessionStorage.getItem("location")
  destinationInput.value = sessionStorage.getItem('destination')
  nextBtn = document.querySelector('#välj-taxi')
  nextBtn.addEventListener('click', saveData)
  var newDateObj = new Date();

  for (let i = 1; i < timeOptions.length; i++){
    newDateObj.setTime(newDateObj.getTime() + (15 * 60 * 1000));
    var time = 1000 * 60 * 5;
    newDateObj = new Date(Math.round(newDateObj.getTime() / time) * time);
    let roundedTime = newDateObj.getHours() + ':' + (newDateObj.getMinutes()<10?'0':'') + newDateObj.getMinutes() 

    timeOptions[i].value = roundedTime;
    timeOptions[i].innerHTML = roundedTime;
  }
}

window.addEventListener('load', init);

function showAddOns() {
  this.classList.toggle("active");
  let content = this.nextElementSibling;
  let img = document.querySelector('#button-img')
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    content.style.margin = '50px 0 0 0';
    img.src = 'img/plus.svg'
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    content.style.margin = '50px 0 50px 0';
    img.src = 'img/minus.svg'
  }
}

function saveData(){
  sessionStorage.setItem('location', locationInput.value)
  sessionStorage.setItem('destination', destinationInput.value)
  sessionStorage.setItem('time', timeValue.value)
  sessionStorage.setItem('people', people.value)
  sessionStorage.setItem('message', mes.value)
  sessionStorage.setItem('name', fullName.value)
  sessionStorage.setItem('number',number.value)
  sessionStorage.setItem('baggage', baggage.checked)
  sessionStorage.setItem('djur', djur.checked)
  sessionStorage.setItem('bilbarnstol', bilbarnstol.checked)
}


