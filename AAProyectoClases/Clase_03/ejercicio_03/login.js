"use strict";
if (localStorage.getItem("Empleados") == null) {
    localStorage.setItem("Empleados", "Juan-123, Rosa-456, Carlos-789");
}
function Verificar() {
    var nombre = document.getElementById("txtNombre").value;
    var legajo = document.getElementById("txtLegajo").value;
    var flag = 0;
    var data = localStorage.getItem("Empleados");
    var arrayData;
    var arrayDataDos;
    if (data != null) {
        arrayData = data.split(",");
        for (var _i = 0, arrayData_1 = arrayData; _i < arrayData_1.length; _i++) {
            var datos = arrayData_1[_i];
            alert(datos);
            arrayDataDos = datos.split("-");
            //alert(arrayDataDos[0]);
            //alert(arrayDataDos[1]);
            var c1 = arrayDataDos[0].localeCompare(nombre);
            var c2 = arrayDataDos[1].localeCompare(legajo);
            //alert(c1);
            //alert(c2);
            if (c1 == 0 && c2 == 0) {
                flag = 1;
            }
        }
        if (flag == 1) {
            alert("Lo encontre");
        }
    }
}
function LimpiarLocalStorage() {
    localStorage.clear();
}
//# sourceMappingURL=login.js.map