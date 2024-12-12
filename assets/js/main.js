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
              "image1": "assets/img/2.jpg",
              "image2":"assets/img/21.jpg",
              "description": "The Technology & Innovation Office supports academic projects and provides IT infrastructure for students and staff.",
              "More":`<div>
      <h5>Key Facts</h5>
      <p>
        <li>Offers help with technology-related issues.</li>
        <li>Provides digital resources and tools for academic success.</li>
        <li>Located near the Chambers Building.</li>
      </p>
      <h5>Best known for</h5>
      <p>
        <li>Reliable tech support for students and faculty.</li>
        <li>Resources for innovative academic projects.</li>
        <li>Digital tools for classroom and research use.</li>
      </p>
      <a href="#" type="button"
    </div>`
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
              "image1": "assets/img/3.jpg",
              "image2":"assets/img/31.jpg",
              "description": "This office handles applications, admissions counseling, and financial aid inquiries.",
              "More":`<div>
              <h5>Key Facts</h5>
              <p>
                <li>First stop for prospective students.</li>
                <li>Offers personalized admissions counseling sessions.</li>
                <li>Provides guidance on scholarships and grants</li>
              </p>
              <h5>Best known for</h5>
              <p>
                <li>Warm and welcoming experience for prospective students.</li>
                <li>Expert guidance on financial aid and scholarships.</li>
                <li>Organizing campus tours and information sessions.</li>
              </p>
              <a href="#" type="button"
            </div>`
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
              "image1": "assets/img/6.jpg",
              "image2":"assets/img/61.jpg",
              "description": "A venue for performances, lectures, and campus-wide events.",
              "More":`<div>
              <h5>Key Facts</h5>
              <p>
                <li>Hosts cultural and artistic events throughout the year.</li>
                <li>Equipped with modern audiovisual technology.</li>
                <li>Popular among students for its engaging atmosphere.</li>
              </p>
              <h5>Best known for</h5>
              <p>
                <li>Hosting high-profile guest speakers and performers.</li>
                <li>A hub for artistic and cultural expression.</li>
                <li>State-of-the-art stage and seating arrangements.</li>
              </p>
              <a href="#" type="button"
            </div>`
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
              "image1": "assets/img/7.jpg",
              "image2":"assets/img/71.jpg",
              "description": "A cozy cafe offering a variety of snacks and beverages for students.",
              "More":`<div>
              <h5>Key Facts</h5>
              <p>
                <li>Known for its coffee and quick bites.</li>
                <li>Offers vegetarian and vegan options.</li>
                <li>A popular study and hangout spot</li>
              </p>
              <h5>Best known for</h5>
              <p>
                <li>Delicious coffee and pastries.</li>
                <li>Relaxed ambiance perfect for informal meetings or studying.</li>
                <li>Seasonal specials and locally sourced ingredients</li>
              </p>
              <a href="#" type="button"
            </div>`
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
              "image1": "assets/img/8.jpg",
              "image2":"assets/img/81.webp",
              "description": "The home of Davidson College Wildcats' football and track & field teams.",
              "More":`<div>
              <h5>Key Facts</h5>
              <p>
                <li>Hosts major sports events and alumni gatherings.</li>
                <li>Features a well-maintained track for training and competitions.</li>
                <li>Open to students for casual fitness activities.</li>
              </p>
              <h5>Best known for</h5>
              <p>
                <li>Electrifying game-day atmosphere.</li>
                <li>Iconic setting for the annual Homecoming events.</li>
                <li>A centerpiece for Wildcat athletics pride</li>
              </p>
              <a href="#" type="button"
            </div>`
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
                "image1": "assets/img/5.jpg",
                "image2":"assets/img/51.jpg",
                "description": "Building that serves as a dormitory for mostly freshmen",
                "More":`<div>
                <h5>Key Facts</h5>
                <p>
                  <li>Offers single and double room options.</li>
                  <li>Close proximity to dining and academic buildings.</li>
                  <li>Includes common areas for group activities and relaxation.</li>
                </p>
                <h5>Best known for</h5>
                <p>
                  <liCreating lifelong friendships and connections.</li>
                  <li>Proximity to campus facilities, making it convenient for freshmen.</li>
                  <li>Vibrant common areas for socializing and group study sessions</li>
                </p>
                <a href="#" type="button"
              </div>`
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
                "image1": "assets/img/4.jpg",
                "image2":"assets/img/41.jpg",
                "description": "Student designed medical center incase of medical requirement",
                "More":`<div>
                <h5>Key Facts</h5>
                <p>
                  <li>Staffed with professional medical personnel.</li>
                  <li>Offers mental health counseling services.</li>
                  <li>Open weekdays with 24-hour emergency assistance.</li>
                </p>
                <h5>Best known for</h5>
                <p>
                  <li>Immediate medical assistance and health education.</li>
                  <li>A welcoming environment for mental health counseling.</li>
                  <li>Reliable vaccination and health checkup services</li>
                </p>
                <a href="#" type="button"
              </div>`
                
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
                "image1": "assets/img/1.jpg",
                "image2":"assets/img/11.jpg",
                "description": "College store with college merch for most sports for students and other outsiders",
                "More":`<div>
                <h5>Key Facts</h5>
                <p>
                  <li>Carries college-branded apparel and accessories.</li>
                  <li>Offers school supplies and gifts.</li>
                  <li>Frequently updated stock to match seasons and events.</li>
                </p>
                <h5>Best known for</h5>
                <p>
                  <li>Reliable tech support for students and faculty.</li>
                  <li>Resources for innovative academic projects.</li>
                  <li>Digital tools for classroom and research use.</li>
                </p>
                <a href="#" type="button"
              </div>`
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
        `<img src="${feature.properties.image1}" alt="${feature.properties.name}" style="width:100%; height:auto; margin-bottom:8px;"><br>` +
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
      <p>${feature.properties.description}</p>
      <div class="d-flex flex-wrap gap-2">
          <img src="${feature.properties.image1}" alt="${feature.properties.name}" class="img-fluid" style="width:48%; border-radius: 5px;">
          <img src="${feature.properties.image2}" alt="${feature.properties.name}" class="img-fluid" style="width:48%; border-radius: 5px;">
      </div>
      <div>
      ${feature.properties.More}
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
