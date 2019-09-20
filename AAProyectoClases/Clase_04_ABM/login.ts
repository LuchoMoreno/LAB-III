if (localStorage.getItem("Empleados") == null)
{
    localStorage.setItem("Empleados", "Juan-123");
}

function Verificar(): void {

  var nombre : string = (<HTMLInputElement> document.getElementById("txtNombre")).value;
  var password : string = (<HTMLInputElement> document.getElementById("txtPassword")).value;
  var flag : number = 0;


  let data : string | null = localStorage.getItem("Empleados");
  var arrayData : string[];
  var arrayDataDos : string[];

  if (data != null)
  {
    arrayData = data.split(",")


    for (let datos of arrayData){

      alert(datos);

      arrayDataDos = datos.split("-");

      //alert(arrayDataDos[0]);
      //alert(arrayDataDos[1]);

      let c1 = arrayDataDos[0].localeCompare(nombre);
      let c2 = arrayDataDos[1].localeCompare(password);

      //alert(c1);
      //alert(c2);

      if (c1 == 0 && c2 == 0){ flag = 1; }

    }

    if (flag == 1) { 
      alert("Usuario encontrado! ");
    window.location.href = 'index.php';
  }


  }
}

function LimpiarLocalStorage():void
{
    localStorage.clear();
}
