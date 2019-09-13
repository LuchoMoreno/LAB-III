"use strict";
function Test() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "BACKEND/test.php", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        console.log(xhttp.readyState);
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            alert(xhttp.responseText);
        }
    };
}
window.onload = function () {
    Test();
};
function EnviarParametro() {
    var recuperado = document.getElementById("txtNombre").value;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "BACKEND/test_params.php?txtNombre=" + recuperado, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        console.log(xhttp.readyState);
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            alert(xhttp.responseText);
        }
    };
}
//# sourceMappingURL=test_ajax.js.map