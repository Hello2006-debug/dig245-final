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
        {
            "type": "Feature",
            "properties": {
                    "name": "Summit Cafe",
                    "category": "Student Insight",
                    "description": "The main athletic arena hosting basketball and volleyball games.",
                    "resources": "Fitness facilities, locker rooms, seating for 5,000.",
                },
            "geometry": {
              "coordinates": [
                -80.84904953713487,
                35.49839581269937
              ],
              "type": "Point"
            },
          },
          {
            "type": "Feature",
            "properties": {
                    "name": "Masala Mastee",
                    "category": "Student Insight",
                    "description": "The main athletic arena hosting basketball and volleyball games.",
                    "resources": "Fitness facilities, locker rooms, seating for 5,000.",
                },
            "geometry": {
              "coordinates": [
                -80.84876734685803,
                35.499267735502585
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
                    "name": "Ben's and Jerry",
                    "category": "Student Insight",
                    "description": "The main athletic arena hosting basketball and volleyball games.",
                    "resources": "Fitness facilities, locker rooms, seating for 5,000.",
                },
            "geometry": {
              "coordinates": [
                -80.84919586058734,
                35.49807148841873
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
                    "name": "Town Cinema",
                    "category": "Student Insight",
                    "description": "The main athletic arena hosting basketball and volleyball games.",
                    "resources": "Fitness facilities, locker rooms, seating for 5,000.",
                },
            "geometry": {
              "coordinates": [
                -80.84932184495105,
                35.50177537422101
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
          "properties": {
                    "name": "unknown",
                    "category": "Athletic Venue",
                    "description": "The main athletic arena hosting basketball and volleyball games.",
                    "resources": "Fitness facilities, locker rooms, seating for 5,000.",
                },
            "geometry": {
              "coordinates": [
                -80.84838955398988,
                35.50051313982517
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
          "properties": {
                    "name": "T&I OFFICE",
                    "category": "Academic",
                    "description": "The main athletic arena hosting basketball and volleyball games.",
                    "resources": "Fitness facilities, locker rooms, seating for 5,000.",
                },
            "geometry": {
              "coordinates": [
                -80.84838955398988,
                35.50051313982517
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
                    "name": "College Store",
                    "category": "Student Insight",
                    "description": "The main athletic arena hosting basketball and volleyball games.",
                    "resources": "Fitness facilities, locker rooms, seating for 5,000.",
                },
            "geometry": {
              "coordinates": [
                -80.8484269203176,
                35.50007916192027
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
                    "name": "Admission and Financial Aid",
                    "category": "Administration",
                    "description": "The main athletic arena hosting basketball and volleyball games.",
                    "resources": "Fitness facilities, locker rooms, seating for 5,000.",
                },
            "geometry": {
              "coordinates": [
                -80.84765020276677,
                35.50223211745812
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
                    "name": "Unknown",
                    "category": "Athletic Venue",
                    "description": "The main athletic arena hosting basketball and volleyball games.",
                    "resources": "Fitness facilities, locker rooms, seating for 5,000.",
                },
            "geometry": {
              "coordinates": [
                -80.83704807446932,
                35.50486229451275
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
                    "name": "Duke Hall family Performance",
                    "category": "Performance and Event",
                    "description": "The main athletic arena hosting basketball and volleyball games.",
                    "resources": "Fitness facilities, locker rooms, seating for 5,000.",
                },
            "geometry": {
              "coordinates": [
                -80.8423861512414,
                35.50064181681957
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
                    "name": "Dean Rusk and Education Abroud",
                    "category": "Administration",
                    "description": "The main athletic arena hosting basketball and volleyball games.",
                    "resources": "Fitness facilities, locker rooms, seating for 5,000.",
                },
            "geometry": {
              "coordinates": [
                -80.84346175888156,
                35.50070297259653
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
                    "name": "Davis Cafe",
                    "category": "Dining Facility",
                    "description": "The main athletic arena hosting basketball and volleyball games.",
                    "resources": "Fitness facilities, locker rooms, seating for 5,000.",
                },
            "geometry": {
              "coordinates": [
                -80.84213990933878,
                35.50052632730852
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
                    "name": "Wall center",
                    "category": "Academic",
                    "description": "The main athletic arena hosting basketball and volleyball games.",
                    "resources": "Fitness facilities, locker rooms, seating for 5,000.",
                },
            "geometry": {
              "coordinates": [
                -80.84482223107776,
                35.49884936070556
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
                    "name": "Libs",
                    "category": "Academic",
                    "description": "The main athletic arena hosting basketball and volleyball games.",
                    "resources": "Fitness facilities, locker rooms, seating for 5,000.",
                },
            "geometry": {
              "coordinates": [
                -80.84398674911898,
                35.49970011790094
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
                    "name": "Chambers",
                    "category": "Academic",
                    "description": "The main athletic arena hosting basketball and volleyball games.",
                    "resources": "Fitness facilities, locker rooms, seating for 5,000.",
                },
            "geometry": {
              "coordinates": [
                -80.84528618248194,
                35.499909162316385
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
                    "name": "Richardson Stadium",
                    "category": "Athletic Venue",
                    "description": "The main athletic arena hosting basketball and volleyball games.",
                    "resources": "Fitness facilities, locker rooms, seating for 5,000.",
                },
            "geometry": {
              "coordinates": [
                -80.84296743312768,
                35.499541750556574
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
                    "name": "Watts/Wattson",
                    "category": "Academic",
                    "description": "The main athletic arena hosting basketball and volleyball games.",
                    "resources": "Fitness facilities, locker rooms, seating for 5,000.",
                },
            "geometry": {
              "coordinates": [
                -80.84666771129346,
                35.49951515204636
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
                    "name": "Tyler Taliman Hall",
                    "category": "Academic",
                    "description": "The main athletic arena hosting basketball and volleyball games.",
                    "resources": "Fitness facilities, locker rooms, seating for 5,000.",
                },
            "geometry": {
              "coordinates": [
                -80.8460982939033,
                35.49926972996589
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
                    "name": "Bakers Sports Complex",
                    "category": "Athletic Venue",
                    "description": "The main athletic arena hosting basketball and volleyball games.",
                    "resources": "Fitness facilities, locker rooms, seating for 5,000.",
                },
            "geometry": {
              "coordinates": [
                -80.84047628642341,
                35.49928391494693
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
                    "name": "Canon Residence",
                    "category": "Residence Hall",
                    "description": "The main athletic arena hosting basketball and volleyball games.",
                    "resources": "Fitness facilities, locker rooms, seating for 5,000.",
                },
            "geometry": {
              "coordinates": [
                -80.84449743497913,
                35.50106250326961
              ],
              "type": "Point"
            }
          } ,
          {
            "type": "Feature",
            "properties": {
                    "name": "Watts residence",
                    "category": "Residence Hall",
                    "description": "The main athletic arena hosting basketball and volleyball games.",
                    "resources": "Fitness facilities, locker rooms, seating for 5,000.",
                },
            "geometry": {
              "coordinates": [
                -80.84535156106476,
                35.50132155410607
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
                    "name": "Belk Residence",
                    "category": "Residence Hall",
                    "description": "The main athletic arena hosting basketball and volleyball games.",
                    "resources": "Fitness facilities, locker rooms, seating for 5,000.",
                },
            "geometry": {
              "coordinates": [
                -80.8446900320375,
                35.50170331171036
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
                    "name": "Vail Commons",
                    "category": "Dining Facility",
                    "description": "The main athletic arena hosting basketball and volleyball games.",
                    "resources": "Fitness facilities, locker rooms, seating for 5,000.",
                },
            "geometry": {
              "coordinates": [
                -80.84397826048303,
                35.50249408612011
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
                    "name": "Richardson residence Hall",
                    "category": "Residence Hall",
                    "description": "The main athletic arena hosting basketball and volleyball games.",
                    "resources": "Fitness facilities, locker rooms, seating for 5,000.",
                },
            "geometry": {
              "coordinates": [
                -80.84472352736154,
                35.50250772015215
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
                    "name": "Tomlison Residence",
                    "category": "Residence Hall",
                    "description": "The main athletic arena hosting basketball and volleyball games.",
                    "resources": "Fitness facilities, locker rooms, seating for 5,000.",
                },
            "geometry": {
              "coordinates": [
                -80.84514221661915,
                35.502998543775945
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
                    "name": "Student Health Center",
                    "category": "Student Life",
                    "description": "The main athletic arena hosting basketball and volleyball games.",
                    "resources": "Fitness facilities, locker rooms, seating for 5,000.",
                },
            "geometry": {
              "coordinates": [
                -80.84612194612994,
                35.50333257414785
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
                    "name": "College Relations",
                    "category": "Administration",
                    "description": "The main athletic arena hosting basketball and volleyball games.",
                    "resources": "Fitness facilities, locker rooms, seating for 5,000.",
                },
            "geometry": {
              "coordinates": [
                -80.84653226160212,
                35.5027326806952
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
                    "name": "ArmField Residence",
                    "category": "Residence Hall",
                    "description": "The main athletic arena hosting basketball and volleyball games.",
                    "resources": "Fitness facilities, locker rooms, seating for 5,000.",
                },
            "geometry": {
              "coordinates": [
                -80.84002958569572,
                35.50161984772774
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
                    "name": "Jamieson Residence",
                    "category": "Residence Hall",
                    "description": "The main athletic arena hosting basketball and volleyball games.",
                    "resources": "Fitness facilities, locker rooms, seating for 5,000.",
                },
            "geometry": {
              "coordinates": [
                -80.84005377894294,
                35.50256134489355
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