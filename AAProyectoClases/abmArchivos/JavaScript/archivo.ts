function MostrarTodaLaGrilla() : void
{
var xhttp = new XMLHttpRequest();

var diveo = (<HTMLDivElement> document.getElementById("divGrilla"));


xhttp.open("POST", "./administracion.php", true);

xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");

xhttp.send("queHago=mostrarGrilla");

xhttp.onreadystatechange = () => {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        diveo.innerHTML = xhttp.responseText;
    }
}

}

function EliminarArchivo() : void
{
var xhttp = new XMLHttpRequest();

var diveo = (<HTMLDivElement> document.getElementById("divGrilla"));


xhttp.open("POST", "./administracion.php", true);

xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");

xhttp.send("queHago=eliminar");

xhttp.onreadystatechange = () => {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        diveo.innerHTML = xhttp.responseText;
    }
}

}
window.onload = function()
{
    MostrarTodaLaGrilla();
}

