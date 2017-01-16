var outputTemp = document.getElementById("omvT");
var buttonCTF = document.getElementById("CTF");
var buttonFTC = document.getElementById("FTC");

buttonCTF.addEventListener("click", function () {
    var inputTemperature = document.getElementById("T").value;
    var xhr = new XMLHttpRequest();
    if (!xhr) {
        alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
    }

    xhr.open('GET', '/api/Converter?temperature=' + inputTemperature, true);
    xhr.send(null);

    xhr.timeout = 2000;

    xhr.onload = function () {
        var temps = JSON.parse(xhr.responseText);
        outputTemp.innerHTML = temps[0];
    };

    xhr.ontimeout = function (e) {
        outputTemp.innerHTML = "Time exceded 2 seconds. Försök igen.";
    }
});

buttonFTC.addEventListener("click", function () {
    var inputTemperature = document.getElementById("T").value;
    var xhr = new XMLHttpRequest();
    if (!xhr) {
        alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
    }

    xhr.open('GET', '/api/Converter?temperature=' + inputTemperature, true);
    xhr.send(null);

    xhr.timeout = 2000;

    xhr.onload = function () {
        var temps = JSON.parse(xhr.responseText);
        outputTemp.innerHTML = temps[1];
    };

    xhr.ontimeout = function (e) {
        outputTemp.innerHTML = "Time exceded 2 seconds. Försök igen.";
    }
});

