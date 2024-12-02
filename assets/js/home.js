var map = L.map('map').setView([35.50002561357594,-80.84588408172834], 16);

var streetLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 20,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
});

var Stadia_AlidadeSatellite = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}', {
  minZoom: 0,
  maxZoom: 19,
  attribution: '&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  ext: 'jpg'
});

// Layer control to toggle between street and satellite views
var baseMaps = {
  "Street Map": streetLayer,
  "Satellite": Stadia_AlidadeSatellite,
};
streetLayer.addTo(map);
L.control.layers(baseMaps).addTo(map);

// GeoJSON data
var geojsonData = {
    "type": "FeatureCollection",
    "features": [
    ,
      {
        "type": "Feature",
        "properties": {
                "name": "John M. Belk Arena",
                "category": "Athletic Venue",
                "description": "The main athletic arena hosting basketball and volleyball games.",
                "resources": "Fitness facilities, locker rooms, seating for 5,000.",
            },
        "geometry": {
          "coordinates": [
            -80.84087440988775,
            35.50220685953613
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
                "name": "John M. Belk Arena",
                "category": "Athletic Venue",
                "description": "The main athletic arena hosting basketball and volleyball games.",
                "resources": "Fitness facilities, locker rooms, seating for 5,000.",
            },
        "geometry": {
          "coordinates": [
            -80.8407404293252,
            35.50273176998867
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
                "name": "John M. Belk Arena",
                "category": "Athletic Venue",
                "description": "The main athletic arena hosting basketball and volleyball games.",
                "resources": "Fitness facilities, locker rooms, seating for 5,000.",
            },
        "geometry": {
          "coordinates": [
            -80.84225608443766,
            35.50298399846662
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
                "name": "John M. Belk Arena",
                "category": "Athletic Venue",
                "description": "The main athletic arena hosting basketball and volleyball games.",
                "resources": "Fitness facilities, locker rooms, seating for 5,000.",
            },
        "geometry": {
          "coordinates": [
            -80.8422477101141,
            35.50331121071301
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
                "name": "John M. Belk Arena",
                "category": "Athletic Venue",
                "description": "The main athletic arena hosting basketball and volleyball games.",
                "resources": "Fitness facilities, locker rooms, seating for 5,000.",
            },
        "geometry": {
          "coordinates": [
            -80.84176203057523,
            35.50357025429679
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
                "name": "John M. Belk Arena",
                "category": "Athletic Venue",
                "description": "The main athletic arena hosting basketball and volleyball games.",
                "resources": "Fitness facilities, locker rooms, seating for 5,000.",
            },
        "geometry": {
          "coordinates": [
            -80.84235656932123,
            35.50409515583897
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
                "name": "John M. Belk Arena",
                "category": "Athletic Venue",
                "description": "The main athletic arena hosting basketball and volleyball games.",
                "resources": "Fitness facilities, locker rooms, seating for 5,000.",
            },
        "geometry": {
          "coordinates": [
            -80.84413357959146,
            35.503447371302116
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
                "name": "John M. Belk Arena",
                "category": "Athletic Venue",
                "description": "The main athletic arena hosting basketball and volleyball games.",
                "resources": "Fitness facilities, locker rooms, seating for 5,000.",
            },
        "geometry": {
          "coordinates": [
            -80.84466112805617,
            35.50366551295323
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
                "name": "John M. Belk Arena",
                "category": "Athletic Venue",
                "description": "The main athletic arena hosting basketball and volleyball games.",
                "resources": "Fitness facilities, locker rooms, seating for 5,000.",
            },
        "geometry": {
          "coordinates": [
            -80.84300326002213,
            35.504483516111705
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
                "name": "John M. Belk Arena",
                "category": "Athletic Venue",
                "description": "The main athletic arena hosting basketball and volleyball games.",
                "resources": "Fitness facilities, locker rooms, seating for 5,000.",
            },
        "geometry": {
          "coordinates": [
            -80.84814548522849,
            35.501637764130294
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
                "name": "John M. Belk Arena",
                "category": "Athletic Venue",
                "description": "The main athletic arena hosting basketball and volleyball games.",
                "resources": "Fitness facilities, locker rooms, seating for 5,000.",
            },
        "geometry": {
          "coordinates": [
            -80.84696428896862,
            35.50132437937728
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
                "name": "John M. Belk Arena",
                "category": "Athletic Venue",
                "description": "The main athletic arena hosting basketball and volleyball games.",
                "resources": "Fitness facilities, locker rooms, seating for 5,000.",
            },
        "geometry": {
          "coordinates": [
            -80.84837906573618,
            35.50419991501367
          ],
          "type": "Point"
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
          "Resources: " + feature.properties.resources + "<br>" 
        );
      markersLayer.addLayer(marker);
    }); 
  }

addMarkers(geojsonData);
function filterMarkers(category) {
    markersLayer.clearLayers();
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