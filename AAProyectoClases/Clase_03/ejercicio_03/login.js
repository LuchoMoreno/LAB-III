"use strict";
if (localStorage.getItem("Empleados") == null) {
    localStorage.setItem("Empleados", "Juan - 123, Rosa - 456, Carlos - 789");
}
function Verificar() {
    var nombre = document.getElementById("txtNombre").value;
    var legajo = document.getElementById("txtLegajo").value;
    var data = localStorage.getItem("Empleados");
    var arrayData;
    if (data != null) {
        arrayData = data.split(",");
        arrayData.forEach(function (value) {
            alert(value);
        });
    }
}
//# sourceMappingURL=login.js.map