// Initialize map
const map = L.map("map").setView([20, 0], 2);

// Map tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors"
}).addTo(map);

// Marker
let marker;

// Simple AI logic
function aiSearch() {
  const text = document.getElementById("query").value.toLowerCase();

  let lat, lng, place;

  if (text.includes("new york")) {
    lat = 40.7128;
    lng = -74.0060;
    place = "New York";
  } else if (text.includes("london")) {
    lat = 51.5074;
    lng = -0.1278;
    place = "London";
  } else if (text.includes("india")) {
    lat = 20.5937;
    lng = 78.9629;
    place = "India";
  } else if (text.includes("hospital")) {
    lat = 40.7306;
    lng = -73.9352;
    place = "Nearby Hospital";
  } else {
    alert("AI couldn't understand. Try another place.");
    return;
  }

  // Move map
  map.setView([lat, lng], 13);

  // Add marker
  if (marker) {
    map.removeLayer(marker);
  }

  marker = L.marker([lat, lng])
    .addTo(map)
    .bindPopup(place)
    .openPopup();
}
