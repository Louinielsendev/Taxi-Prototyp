var taxibolag
var popup
var closePop
var closePopButton
var bokaBtn
function init(){
    bokaBtn = document.querySelector('#välj-taxi')
    bokaBtn.addEventListener('click', saveInformation)
    closePopButton = document.querySelector('#close-pop')
    taxibolag = document.querySelectorAll('.taxi-wrapper');
    closePop = document.querySelector('#exit');
    popup = document.querySelector('.wrapper3')
    closePopButton.addEventListener('click', closePopUp )
    closePop.addEventListener('click', closePopUp )
    for (let i = 0; i < taxibolag.length; i++){
        taxibolag[i].addEventListener('click', showPopUp)
    }    
}

window.addEventListener('load',init);



function showPopUp(){ 

let imgLink = this.querySelector('img').getAttribute('src')
let nameTag = this.querySelector('h2').innerHTML
let priceTag = this.querySelector('.price').innerHTML
let timeTag = this.querySelector('.time').innerHTML
console.log(timeTag)
let companyInformation = document.querySelector('#chosed-company')
companyInformation.querySelector('img').src = imgLink
companyInformation.querySelector('h1').innerHTML = nameTag
document.querySelector('#price').innerHTML = priceTag
document.querySelector('#location').innerHTML = sessionStorage.getItem('location')
document.querySelector('#destination').innerHTML = sessionStorage.getItem('destination')
document.querySelector('#time').innerHTML = sessionStorage.getItem('time')

sessionStorage.setItem('bolag', nameTag)
sessionStorage.setItem('price', priceTag)
sessionStorage.setItem('waitingTime',timeTag)


if (popup.style.height){
 
  } else {
    popup.style.height = "70%";
    closePop.style.display = 'block'
    closePop.style.opacity = '10%'
    
  }
}

function closePopUp(){
  if (popup.style.height){
    popup.style.height = null;
    closePop.style.display = 'none'
    closePop.style.opacity = '0%'
  } 
}

function saveInformation(){
  sessionStorage.setItem('betalningsmetod', document.querySelector('.radioBtn:checked').value) 
}