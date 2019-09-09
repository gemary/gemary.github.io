function conVertUnixTime(unixTime) {
    var date = new Date(unixTime * 1000);
    return date;
}




function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(GetCurrentposition, showError);

    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}


function GetCurrentposition(position) {
    var latitudes = position.coords.latitude;
    var longitudes = position.coords.longitude;
    WheatherData(latitudes, longitudes);
    console.log(latitudes);


}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            console.log("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.");
            break;
    }
}



function SetValue(Clouds, WinSpeeds, SrcIcons, sunrises, sunsets, temps, CityName, CurrentCountry) {

    let NameOfCity = document.getElementById("NameOfCity");
    let CurrentCtry = document.getElementById("CountryCurrent");
    let Cloud = document.getElementById("StatusWheather");
    let WinSpeed = document.getElementById("WindSpeed");
    let SrcIcon = document.getElementById("iconwether");
    let Sunrise = document.getElementById("sunriseTime");
    let SunsetTime = document.getElementById("sunsetTime");
    let Temperature = document.getElementById("temperature");

    Cloud.innerHTML = Clouds;
    WinSpeed.innerHTML = WinSpeeds;

    SrcIcon.src = SrcIcons;
    Sunrise.innerHTML = conVertUnixTime(sunrises) + "";
    SunsetTime.innerHTML = conVertUnixTime(sunsets);
    Temperature.innerHTML = Math.floor(temps - 273.1);
    NameOfCity.innerHTML = CityName;
    CurrentCtry.innerHTML = CurrentCountry;


}

function WheatherData(latitude, longitude) {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=f63835c9b846724a61eafb874e7cd15f', true);

    request.onload = function() {
        var data = JSON.parse(this.response)
        console.log(data);
        if (request.status >= 200 && request.status < 400) {
            SetValue(data.weather[0].main, data.wind.speed + " m/s", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png", data.sys.sunrise, data.sys.sunset, data.main.temp, data.name, data.sys.country);
        } else {
            console.log('error')
        }
    }
    request.send();
}