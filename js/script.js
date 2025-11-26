function initMap() {
  const allianzArena = { lat: 48.2188, lng: 11.6247 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: allianzArena,
    mapTypeId: "terrain"
  });

  const marker = new google.maps.Marker({
    position: allianzArena,
    map: map,
    title: "Allianz Arena (Home of FC Bayern Munich)"
  });

  const infoWindow = new google.maps.InfoWindow({
    content: "Allianz Arena - Home stadium of FC Bayern Munich"
  });

  marker.addListener("click", function () {
    infoWindow.open(map, marker);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const questionsButton = document.getElementById("questions");
  if (questionsButton) {
    questionsButton.addEventListener("click", function () {
      alert("If you have questions, contact me at:analorenzo1@hawk.iit.edu");
    });
  }
});
