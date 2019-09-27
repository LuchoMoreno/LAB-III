"use strict";
function Verificar() {
    var clave = document.getElementById("txtClave").value;
    var correo = document.getElementById("txtCorreo").value;
    var json = '{' + '"' + "clave" + '"' + ':' + '"' + clave + '"' + ',' + '"' + "correo" + '"' + ':' + '"' + correo + '"' + '}';
    console.log(json);
}
//# sourceMappingURL=login.js.map