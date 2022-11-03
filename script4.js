function init(){
    document.querySelector('#bolag').innerHTML = ' ' + sessionStorage.getItem('bolag')
    document.querySelector('#location').innerHTML = ' ' + sessionStorage.getItem('location')
    document.querySelector('#destination').innerHTML = ' ' + sessionStorage.getItem('destination')
    document.querySelector('#name').innerHTML = ' ' + sessionStorage.getItem('name')
    document.querySelector('#price').innerHTML = ' ' + sessionStorage.getItem('price')
    document.querySelector('#paymethod').innerHTML = ' ' + sessionStorage.getItem('betalningsmetod')
    let addonsOutput = ''
    let baggage = sessionStorage.getItem('baggage')
    console.log(baggage)
    if (baggage === 'true'){
        
        
        addonsOutput += ' Baggage'
    }
    if (sessionStorage.getItem('djur') === 'true'){
        addonsOutput += ' Djur'
    }
    if (sessionStorage.getItem('bilbarnstol') === 'true'){
        addonsOutput += ' Bilbarnstol'
    }
    
    
    document.querySelector('#add-ons').innerHTML = addonsOutput
    let departure = document.querySelector('#depart')
    let waitingTime = sessionStorage.getItem('waitingTime')
    if (sessionStorage.getItem('time') === 'Res nu'){
        var d1 = new Date (),
        d2 = new Date ( d1 );
        if (waitingTime > 0){
            d2.setMinutes ( d1.getMinutes() + parseInt(waitingTime));
            
        }
        departure.innerHTML = ' ' + (d2.getHours()<10?'0':'') + d2.getHours() + ':' + (d2.getMinutes()<10?'0':'') + d2.getMinutes()
    }
    else {
        time = sessionStorage.getItem('time')
        hours = time.slice(0,2)
        minutes = time.slice(3,5)
        chosenTime = new Date()
        chosenTime.setHours(hours)
        chosenTime.setMinutes(minutes)
        timeNow = new Date()
        timeDiference = chosenTime.getTime() - timeNow.getTime() 
        timeDiferenceMinutes = timeDiference / 1000 / 60
        console.log(timeDiferenceMinutes)
        if (timeDiferenceMinutes < waitingTime) {
            var d1 = new Date (),
            d2 = new Date ( d1 );
             if (waitingTime > 0){
            d2.setMinutes ( d1.getMinutes() + parseInt(waitingTime));
            console.log(d2)
        }
        departure.innerHTML = ' ' + (d2.getHours()<10?'0':'') + d2.getHours() + ':' + (d2.getMinutes()<10?'0':'') + d2.getMinutes()
        }
        else {
            departure.innerHTML = ' ' + (chosenTime.getHours()<10?'0':'') + chosenTime.getHours() + ':' + (chosenTime.getMinutes()<10?'0':'') + chosenTime.getMinutes()
        }
    }
    
}

window.addEventListener('load', init)