
function MostrarDatos():void {

  let nombre : string = (<HTMLInputElement> document.getElementById("txtNombre")).value;
  let edad : string = (<HTMLInputElement> document.getElementById("txtEdad")).value;
  alert("Su nombre es: " + nombre + " su edad es: " + edad);
  console.log("Su nombre es: " + nombre + " su edad es: " + edad);
}
