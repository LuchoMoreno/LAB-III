<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    <title>Clase 06 Laboratorio</title>
    
    <script type="text/javaScript" src="ajax.js"> </script>

    <!-- INCLUYO LOS ESTILOS-->
    <link type="text/css" rel="stylesheet" href="CSS/Estilos.css" />

</head>


<body>

    <form action="">
    <table align="center">
    <tr>
    <td>
    Nombre:<br>
    <input type="text" name="nombre" id="nombre">
    </td>
    </tr>


    <tr>
    <td>
    Apellido:<br>
    <input type="text" name="apellido" id="apellido">
    </td>
    </tr>


    <tr>
    <td>
        Correo:<br>
        <input type="text" name="correo" id="correo">
    </td>
    </tr>


    <tr>
    <td>
        Clave:<br>
        <input type="text" name="clave" id="clave">
    </td>
    <br>
    </tr>

    <tr>
    <td>
    Perfil:<br>
    <input type="text" name="perfil" id="perfil">
    </td>
    </tr>

    <tr>
    <td>
    Foto:<br>
    <input type="file" name="foto" id="foto">
    </td>
    </tr>

    <tr>
    <td> <input type="button" value="Aceptar" onclick="Main.Crear()">
    </tr>

    <td>     ¿Desea cancelar? <a href="login.php"> Volver a LOGIN</a> </td>
    

    </table>
    
    </form>
</body>
</html>