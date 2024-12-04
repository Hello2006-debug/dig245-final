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
              "name": "T&I OFFICE",
              "category": "Academic",
              "image": "assets/img/Chambers.jpg",
              "description": "The Technology & Innovation Office supports academic projects and provides IT infrastructure for students and staff."
          },
          "geometry": {
              "coordinates": [-80.84838955398988, 35.50051313982517],
              "type": "Point"
          }
      },
      {
          "type": "Feature",
          "properties": {
              "name": "Admission and Financial Aid",
              "category": "Administration",
              "image": "assets/img/pool.jpg",
              "description": "This office handles applications, admissions counseling, and financial aid inquiries."
          },
          "geometry": {
              "coordinates": [-80.84765020276677, 35.50223211745812],
              "type": "Point"
          }
      },
      {
          "type": "Feature",
          "properties": {
              "name": "Duke Hall Family Performance",
              "category": "Performance and Event",
              "image": "assets/img/union.jpeg",
              "description": "A venue for performances, lectures, and campus-wide events."
          },
          "geometry": {
              "coordinates": [-80.8423861512414, 35.50064181681957],
              "type": "Point"
          }
      },
      {
          "type": "Feature",
          "properties": {
              "name": "Davis Cafe",
              "category": "Dining Facility",
              "image": "assets/img/common.jpg",
              "description": "A cozy cafe offering a variety of snacks and beverages for students."
          },
          "geometry": {
              "coordinates": [-80.84213990933878, 35.50052632730852],
              "type": "Point"
          }
      },
      {
          "type": "Feature",
          "properties": {
              "name": "Richardson Stadium",
              "category": "Athletic Venue",
              "image": "assets/img/bakers.jpeg",
              "description": "The home of Davidson College Wildcats' football and track & field teams."
          },
          "geometry": {
              "coordinates": [-80.84296743312768, 35.499541750556574],
              "type": "Point"
          }
      },
      {
        "type": "Feature",
        "properties": {
                "name": "Belk Residence",
                "category": "Residence Hall",
                "image": "assets/img/bakers.jpeg",
                "description": "Building that serves as a dormitory for mostly freshmen"
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
                "name": "Student Health Center",
                "category": "Student Life",
                "image": "assets/img/bakers.jpeg",
                "description": "Student designed medical center incase of medical requirement"
                
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
                "name": "College Store",
                "category": "Student Insight",
                "image": "assets/img/bakers.jpeg",
                "description": "College store with college merch for most sports for students and other outsiders"
            },
        "geometry": {
          "coordinates": [
            -80.8484269203176,
            35.50007916192027
          ],
          "type": "Point"
        }
      }
  ]
};

var markersLayer = L.layerGroup().addTo(map);
const offcanvasTitle = document.querySelector('#offcanvasExample1 .offcanvas-title');
const offcanvasBody = document.querySelector('#offcanvasExample1 .offcanvas-body');

function addMarkers(data) {
  data.features.forEach(function (feature, i) {
    var marker = L.marker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]])
      .bindPopup(
        `<strong>${feature.properties.name}</strong><br>` +
        `Category: ${feature.properties.category}<br>` +
        `<img src="${feature.properties.image}" alt="${feature.properties.name}" style="width:100%; height:auto; margin-bottom:8px;"><br>` +
        `<button class="btn btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample1" onclick="showMoreInfo(${i})">More Info</button>`
      );
    markersLayer.addLayer(marker);
  });
}

function showMoreInfo(i) {
  const feature = geojsonData.features[i];
  if (!feature) {
      console.error("Feature not found for index:", i);
      return;
  }
  offcanvasTitle.textContent = feature.properties.name;
  offcanvasBody.innerHTML = `
      <p><strong>Category:</strong> ${feature.properties.category}</p>
      <p>${feature.properties.description}</p>
      <div class="d-flex flex-wrap gap-2">
          <img src="${feature.properties.image}" alt="${feature.properties.name}" class="img-fluid" style="width:48%; border-radius: 5px;">
      </div>
  `;
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
