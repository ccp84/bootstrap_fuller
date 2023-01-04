function initMap() {
    // The location 
    const home = {
        lat: 52.131827,
        lng: -2.316607
    };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: home,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: home,
        map: map,
    });
}