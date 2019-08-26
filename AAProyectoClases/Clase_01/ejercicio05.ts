/* 5. Guardar su nombre y apellido en dos variables distintas. Dichas variables serán pasadas como parámetro de la función 
MostrarNombreApellido , que mostrará el apellido en mayúscula y el nombre solo con la primera letra en mayúsculas y el resto en minúsculas. 
El apellido y el nombre se mostrarán separados por una coma (,). 
Nota : Utilizar console.log() */


//toLocaleUpperCase y toLocaleLowerCase son metodos qu AFECTAN TODA LA CADENA
//toUpperCase y toLowerCase son metodos que afectan determinados espacios de la cadena(lo indicamos nosotros)



function MostrarNombreApellido(nombre : String, apellido : String) : void
{
    var nombreModificado : string = nombre.toLocaleLowerCase();
    var nombreModificado2 : string = nombreModificado.charAt(0).toUpperCase() + nombreModificado.slice(1);

    var apellidoModificado = apellido.toLocaleUpperCase();

    console.log(nombreModificado2 + ", " + apellidoModificado);
  }


  var variableNombre : String = "luciano";
  var variableApellido : String = "moreno";

  MostrarNombreApellido(variableNombre, variableApellido);



/* METODO MAS SIMPLE

function Cadena(nombre : string , apellido : string)
{
    console.log(`${apellido.toLocaleUpperCase()},${nombre.charAt(0).toUpperCase()+nombre.slice(1)}`);
}

Cadena(nombre,apellido);
*/