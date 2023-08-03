const apiKey = 'pk.eyJ1IjoiYXBvbGxvbGFycmFnb2l0aWEiLCJhIjoiY2xraTZwYXF0MDc5bDNnbzdjcmg3OW5jbSJ9.zibN6I73Uo9jZjownjcHrA';
var map = L.map('map').setView([19.622657, -155.528763], 8);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 12,
    id: 'mapbox/outdoors-v9',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(map);

// Adding Marker
var marker = L.marker([19.029687, -155.723953]).addTo(map);
var marker2 = L.marker([19.817880, -155.472562]).addTo(map);

var sidebar = L.control.sidebar('sidebar', {
    position: 'left'
});

map.addControl(sidebar);

marker.on('click', function () {
    // Toggle the sidebar
    sidebar.toggle();
});

setTimeout(function () {
    sidebar.show();
}, 500);
