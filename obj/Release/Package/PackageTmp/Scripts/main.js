

var outputTemp = document.getElementById("omvT");
var inputTemperature = document.getElementById("T").value;

function CelsiusToFarenheit(inputTemperature) {

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://tempcfconverter20170105013605.azurewebsites.net/api/Converter/');
    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);
        outputTemp.innerHTML = ourData[0];

    };
    ourRequest.send();

}
function FarenheitToCelsius(stringTemperature) {

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://tempcfconverter20170105013605.azurewebsites.net/api/Converter/');
    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);
        outputTemp.innerHTML = ourData[1];
    };
    ourRequest.send();

}