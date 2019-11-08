var Main = /** @class */ (function () {
    function Main() {
    }
    Main.Login = function () {
        var xmlh = new XMLHttpRequest();
        var correo = document.getElementById("correo").value;
        var clave = document.getElementById("clave").value;
        xmlh.onreadystatechange = function () {
            if (xmlh.readyState == 4 && xmlh.status == 200) {
                // var variable = JSON.parse(xmlh.responseText);
                if (xmlh.responseText) {
                    alert("Esta entrando a la pagina");
                    window.location.href = "principal.php";
                }
                else {
                    alert("No se encuentra el usuario");
                }
            }
            if (xmlh.readyState == 4 && xmlh.status == 403) {
                console.log(xmlh.responseText);
            }
        };
        xmlh.open("POST", "http://localhost/loginPersonal/BACKEND/test_usuario.php/validarQueExista/", true);
        //xmlh.open("POST","localhost/login/test_usuario.php/validarQueExista",true);
        xmlh.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xmlh.send('usuario={"correo":"' + correo + '", "clave": "' + clave + '"}');
    };
    Main.Registro = function () {
        var xmlh = new XMLHttpRequest();
        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var correo = document.getElementById("correo").value;
        var clave = document.getElementById("clave").value;
        var perfil = document.getElementById("perfil").value;
        var estado = 1;
        var foto = document.getElementById("foto");
        var form = new FormData();
        form.append('foto', foto.files[0]);
        form.append('user', '{"nombre":"' + nombre + '", "apellido":"' + apellido + '","perfil":' + perfil + ', "correo":"' + correo + '","estado":' + estado + ' ,"clave": "' + clave + '"}');
        xmlh.open("POST", "http://localhost/loginPersonal/BACKEND/test_registro.php/registrarUsuario/", true);
        xmlh.setRequestHeader("enctype", "multipart/form-data");
        //xmlh.send('user={"nombre":"' + nombre +'", "apellido":"' + apellido +'","perfil":'+ perfil +', "correo":"' + correo +'","estado":'+estado+' ,"clave": "'+clave+'"}');
        xmlh.send(form);
        xmlh.onreadystatechange = function () {
            if (xmlh.readyState == 4 && xmlh.status == 200) {
                console.log(xmlh.responseText);
            }
        };
    };
    return Main;
}());
