var adressInput;
var goBtn;
var myMarkers = [];	

function init(){
adressInput = document.querySelector('#adressInput');
goBtn = document.querySelector('#textInput button')
goBtn.addEventListener('click', nextPage);
sessionStorage.setItem("location", 'Din postition');
initMap()
}

window.addEventListener('load', init)



function nextPage(){
    sessionStorage.setItem("destination", adressInput.value); 
    console.log(sessionStorage.getItem("destination"))
    console.log(sessionStorage.getItem("location"))
}

function initMap() {
	myMap = new google.maps.Map(
			document.getElementById("map"),
			{
				center: {lat:56.876000,lng: 14.796888},
				zoom: 14,
				/* mapTypeId: "satellite", */
				styles: [
					{
						featureType: "poi",
						stylers: [{visibility:"off"}]  // Turn off points of interest
					},
					{
						featureType: "transit.station",
						stylers: [{visibility:"off"}]  // Turn off bus stations, etc.
					}
				],
				fullscreenControl: false
			}
		);
        userMarker = null;
        google.maps.event.addListener(myMap,"click",newUserMarker);
} // End initMap


function newUserMarker(e) {
	hideMarkers();
	userMarker = new google.maps.Marker();
	//userMarker.setPosition({lat:e.latLng.lat(),lng:e.latLng.lng()});
	userMarker.setPosition({
		lat: e.latLng.lat(),
		lng: e.latLng.lng()
	});
    let lat = userMarker.position.lat()
    let lng = userMarker.position.lng()

	userMarker.setMap(myMap);
    getAdress(lat, lng)
} // End newUserMarker

// Dölj markeringar
function hideMarkers() {
	
	for (let i = 0; i < myMarkers.length; i++) {
		myMarkers[i].setMap(null);
	}
	if (userMarker) userMarker.setMap(null);
} // End hideMarkers

function getAdress(lat, lng) {

	let request = new XMLHttpRequest(); // Object för Ajax-anropet
	request.open("GET", "https://api.positionstack.com/v1/reverse?access_key=8d0c94662b432799b80e393e1b1de914&query="+lat+","+lng+"", true);
	request.send(null); // Skicka begäran till servern
	request.onreadystatechange = function () { // Funktion för att avläsa status i kommunikationen
		if (request.readyState == 4)
			if (request.status == 200) getAdressResponse(request.responseText);
			else {
				
				return
			}
	}
}

function getAdressResponse(response){
    response = JSON.parse(response);
	
    let adress = response.data[0].name
    adressInput.value = adress
    
}