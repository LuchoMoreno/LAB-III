/* 4. Realizar una función que reciba un número y que muestre (por consola) un mensaje como el siguiente: 
El número 5 es impar , siendo 5 el número recibido como parámetro. */

function FuncionEjercicio04(numero :any):void
{
    if(numero)
    {
            if (numero %2 == 0)
            {
               console.log("El numero " + numero + " es par. Siendo el numero recibido como parametro"); 
            }
            else
            {
                console.log("El numero " + numero + " es impar. Siendo el numero recibido como parametro");  
            }
    }
    else
    {
        console.log("No se ha ingresado numero");
    }
}

FuncionEjercicio04(4);
FuncionEjercicio04(10);
FuncionEjercicio04(11);