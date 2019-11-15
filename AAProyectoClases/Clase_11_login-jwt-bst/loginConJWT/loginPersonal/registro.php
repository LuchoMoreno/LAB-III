<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    <title>REGISTRO</title>
    
     <!-- INCLUYO EL AJAX-->
     <script type="text/javaScript" src="FRONTEND/ajax.js"> </script>

    <!-- INCLUYO LOS ESTILOS-->
    <link type="text/css" rel="stylesheet" href="CSS/Estilos.css" />

</head>


<body>


<form class="login-form">

  <input type="text" class="registro-llenarDatos" required="true" placeholder="Nombre" id="nombre" /> <!-- ID: NOMBRE -->

  <input type="text" class="registro-llenarDatos" required="true" placeholder="Apellido" id="apellido" /> <!-- ID: APELLIDO -->

  <input type="text" class="registro-llenarDatos" required="true" placeholder="Correo" id="correo" /> <!-- ID: CORREO -->

  <input type="text" class="registro-llenarDatos" required="true" placeholder="Clave" id="clave" /> <!-- ID: CLAVE -->

  <input type="text" class="registro-llenarDatos" required="true" placeholder="Perfil (1-2)" id="perfil" /> <!-- ID: PERFIL / SI ACA PONGO UNA LETRA SE ROMPE TODO-->

  <input type="file" name="foto" id="foto"> <!-- ID: FOTO -->

  <td> <input type="button" value="Aceptar" onclick="Main.Registro()">

</form>


<tr>
<a href="index.php" class="irHaciaInferior">¿Volver al login?</a>
</tr>

</body>
</html>