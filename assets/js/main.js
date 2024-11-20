var map = L.map('map').setView([35.5041, -80.8497], 16);

var streetLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
});


var satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri'
});


// Layer control to toggle between street and satellite views
var baseMaps = {
    "Street Map": streetLayer,
    "Satellite": satelliteLayer
};
streetLayer.addTo(map);
L.control.layers(baseMaps).addTo(map);

//Geojson data
var geojsonData = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-80.8488, 35.5039]
            },
            "properties": {
                "name": "John M. Belk Arena",
                "category": "Athletic Venue",
                "description": "The main athletic arena hosting basketball and volleyball games.",
                "resources": "Fitness facilities, locker rooms, seating for 5,000.",
                "image":  "/assets/img/bakers.jpeg"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-80.8492, 35.5015]
            },
            "properties": {
                "name": "Chambers Building",
                "category": "Administration",
                "description": "Houses administrative offices, including the Registrar and Financial Aid.",
                "resources": "Administrative staff, meeting rooms, student services.",
                 "image":  "/assets/img/Chambers.jpg"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-80.8490, 35.5030]
            },
            "properties": {
                "name": "Vail Commons",
                "category": "Dining Facility",
                "description": "A dining facility offering a variety of meal options.",
                "resources": "Buffet-style dining, vegetarian and vegan options.",
                 "image":  "/assets/img/commons.jpg"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-80.8493, 35.5050]
            },
            "properties": {
                "name": "Duke Family Performance Hall",
                "category": "Performance and Event",
                "description": "A state-of-the-art performance venue for concerts and events.",
                "resources": "Performance stage, seating for 700, acoustically designed.",
                 "image":  "/assets/img/union.jpeg"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-80.8485, 35.5045]
            },
            "properties": {
                "name": "Belk Residence Hall",
                "category": "Residence Hall",
                "description": "A residential building for first-year students.",
                "resources": "Dormitory rooms, common areas, lounges.",
                 "image":  "/assets/img/Belk.jpeg"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-80.8480, 35.5060]
            },
            "properties": {
                "name": "The Union",
                "category": "Student Life",
                "description": "A social and activity hub for students.",
                "resources": "Student meeting rooms, lounges, event space.",
                 "image":  "/assets/img/union.jpeg"
            }
        }
    ]
};
var markersLayer = L.layerGroup().addTo(map);
function addMarkers(data) {
    data.features.forEach(function (feature) {
      var marker = L.marker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]])
        .bindPopup(
          "<strong>" + feature.properties.name + "</strong><br>" +
          "Category: " + feature.properties.category + "<br>" +
          "Description: " + feature.properties.description + "<br>" +
          "Resources: " + feature.properties.resources + "<br>" +
          "<img src='" + feature.properties.image + "' alt='" + feature.properties.name + "' style='width:100%; max-width:300px;'>"
        );
      markersLayer.addLayer(marker);
    });
  }

addMarkers(geojsonData);
function filterMarkers(category) {
    markersLayer.clearLayers();  // Remove all current markers
    var filteredData = geojsonData.features.filter(function (feature) {
      return category === "all" || feature.properties.category === category;
    });
    addMarkers({ type: "FeatureCollection", features: filteredData });
  }

  var dropdownItems = document.querySelectorAll('.dropdown-item');
  dropdownItems.forEach(function (item) {
    item.addEventListener('click', function (event) {
      var selectedCategory = event.target.getAttribute('data-category');
      filterMarkers(selectedCategory);
    });
  });