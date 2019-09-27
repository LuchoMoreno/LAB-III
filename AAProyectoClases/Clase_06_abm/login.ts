function Verificar(): void {

  var clave : string = (<HTMLInputElement> document.getElementById("txtClave")).value;
  var correo : string = (<HTMLInputElement> document.getElementById("txtCorreo")).value;

  
  var json = '{' + '"' + "clave" + '"' + ':' + '"' + clave + '"' + ',' + '"' + "correo" + '"' + ':' + '"' + correo + '"' + '}';

  console.log(json);


}


