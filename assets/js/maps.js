var map;
var marker;

function initialize() {
  LatLng = new google.maps.LatLng(35.9590192, -83.9250825)
  var mapOptions = {
    center: LatLng,
    zoom: 4,
    mapTypeId: google.maps.MapTypeId.STYLED
  };

  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var marker = new google.maps.Marker({
    position: LatLng,
    map: map,
    title: 'Absolute Italy'
    });

  setMarkers(map, dealers);
}

/**
 * Data for the markers consisting of a name, a LatLng and a zIndex for
 * the order in which these markers should display on top of each
 * other.
 */
var dealers = [
  ['Absolute Yachts Mexico', 20.691057, -103.376631, 4],
  ['SeaNet', 33.854451, -117.9335024, 1],
  ['Strongs Marine', 40.982348, -72.527383, 3],
  ['Manly Beach', 25.7716426, -80.1397287, 5],
];

function setMarkers(map, locations) {
  // Add markers to the map

  // Marker sizes are expressed as a Size of X,Y
  // where the origin of the image (0,0) is located
  // in the top left of the image.

  // Origins, anchor positions and coordinates of the marker
  // increase in the X direction to the right and in
  // the Y direction down.
  var image = {
    url: '/static/images/symbol30.png',
    // This marker is 30 pixels wide by 31 pixels tall.
    size: new google.maps.Size(30, 31),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(0, 31)
  };
  // Shapes define the clickable region of the icon.
  // The type defines an HTML &lt;area&gt; element 'poly' which
  // traces out a polygon as a series of X,Y points. The final
  // coordinate closes the poly by connecting to the first
  // coordinate.
  var shape = {
      coords: [1, 1, 1, 30, 31, 30, 31, 1],
      type: 'poly'
  };
  for (var i = 0; i < locations.length; i++) {
    var dealer = locations[i];
    var myLatLng = new google.maps.LatLng(dealer[1], dealer[2]);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image,
        shape: shape,
        title: dealer[0],
        zIndex: dealer[3]
    });
  }
}

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
      '&signed_in=true&callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript;


