var map = L.map('map').setView([35.687160, -80.112373], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([35.687160, -80.112373]).addTo(map);
var popup = L.popup();

function onMapClick(e) {
    marker.setLatLng(e.latlng);
    marker.bindPopup("Hello This is Davidson College").openPopup();
}

map.on('click', onMapClick);
