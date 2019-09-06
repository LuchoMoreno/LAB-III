if (localStorage.getItem("Empleados") == null)
{
    localStorage.setItem("Empleados", "Juan - 123, Rosa - 456, Carlos - 789");
}


function Verificar():void {

  var nombre : string = (<HTMLInputElement> document.getElementById("txtNombre")).value;
  var legajo : string = (<HTMLInputElement> document.getElementById("txtLegajo")).value;


  let data : string | null = localStorage.getItem("Empleados");
  var arrayData : string[];
  var arrayDataDos : string[];

  if (data != null)
  {
    arrayData = data.split(",")

    arrayData.forEach(function (value)
    {
      alert(value);

      arrayDataDos = value.split("-");

      if (arrayDataDos[0] == nombre && arrayDataDos[1] == legajo)
      {
        alert("Lo encontre");
      }

    });
  }


}

