
/* Laboratorium 11.2 */
/* wykorzystanie geolokalizacji */

function showLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var output = document.getElementById("geo");
    output.innerHTML = "<p>Twoja szerokość geograficzna: " + latitude +
            "</p> <p>Twoja długość geograficzna: " + longitude + "</p>";
}

function errorHandler(error) {
    var output = document.getElementById("geo");
    switch (error.code) {
        case error.PERMISSION_DENIED:
            output.innerHTML = "Użytkownik nie udostępnił danych.";
            break;
        case error.POSITION_UNAVAILABLE:
            output.innerHTML = "Dane lokalizacyjne niedostępne.";
            break;
        case error.TIMEOUT:
            output.innerHTML = "Przekroczono czas żądania.";
            break;
        case error.UNKNOWN_ERROR:
            output.innerHTML = "Wystąpił nieznany błąd.";
            break;
    }
}

function getLocation() {
    if (navigator.geolocation) {
        var options = {timeout: 60000};
        navigator.geolocation.getCurrentPosition(
                showLocation,
                errorHandler,
                options);
    } else {
        alert("Twoja przeglądarka nie wspiera geolokalizacji!");
    }

    var wspolrzedne = new google.maps.LatLng(53.419, 14.581);
    var opcjeMapy = {
        zoom: 10,
        center: wspolrzedne,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var mapa = new google.maps.Map(document.getElementById("mapka"), opcjeMapy);
}

