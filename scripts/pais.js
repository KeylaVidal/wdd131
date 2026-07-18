document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);

function calcularSensacaoTermica(t, v) {
    return 13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16);
}

if (temp <= 10 && wind > 4.8) {
    document.getElementById("windchill").textContent = calcularSensacaoTermica(temp, wind).toFixed(1) + " °C";
} else {
    document.getElementById("windchill").textContent = "N/A";
}