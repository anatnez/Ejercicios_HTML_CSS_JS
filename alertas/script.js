document.getElementById("miBoton").addEventListener("click", displayMessage);
function displayMessage() {
    alert("Se ha guardado correctamente");
}
document.getElementById("foco").addEventListener("focus", focusFunction);

function focusFunction() {
    document.getElementById("foco").style.background = "pink";
}

document.getElementById("foco").addEventListener("blur", blurFunction);
function blurFunction() {
    document.getElementById("foco").style.background = "blue";
}

const secondInput = document.getElementById("letra");
secondInput.addEventListener("input", controlCharacter);
function controlCharacter() {
    //if (secondInput.value.length > 1 ) secondInput.value = secondInput.value[0];  Así controlaríamos escribir solo una letra
    const val = secondInput.value.toLowerCase();
    const vowels = "aeiou";
    const cons = "bcdfghjklmñnpqrstvxyz";
    if (vowels.indexOf(val[0]) > -1) {
        secondInput.style.color = "green";
    } else if  (cons.indexOf(val[0]) > -1) {
        secondInput.style.color = "purple";
    } else {
        secondInput.style.color = "black";

    }
}
