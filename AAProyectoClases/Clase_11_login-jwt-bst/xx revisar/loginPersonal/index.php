<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>LOGIN</title>

        <!-- INCLUYO LOS ESTILOS-->
        <link type="text/css" rel="stylesheet" href="CSS/Estilos.css" />

        <!-- INCLUYO EL AJAX-->
        <script type="text/javaScript" src="FRONTEND/ajax.js"> </script>

        <!-- INCLUYO VALIDADOR -->
        
        <link rel="stylesheet" href="./librerias/bootstrap/css/bootstrap.css"/>
        <link rel="stylesheet" href="./librerias/css/bootstrapValidator.css"/>

        <script type="text/javascript" src="./librerias/jquery/jquery.min.js"></script>
        <script type="text/javascript" src="./librerias/bootstrap/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="./librerias/js/bootstrapValidator.js"></script>

        <!-- FUNCIONES PROPIAS DEL VALIDADOR -->
         <script type="text/javascript" src="app.js"></script>

</head>
<body>
    

<form class="login-form" id="loginID">


<tr>
                <td>

                <div id="imagenPropia"> <img src=".\CSS\icon.png"> </div>

                </td>
</tr>

  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
  <input type="email" name="nombreEmail" class="login-username" autofocus="true" required="true" placeholder="Email" id="correo" /> <!-- ID: CORREO -->

  <span class="input-group-addon"><i class="glyphicon glyphicon-asterisk"></i></span>
  <input type="password" name="nombrePassword" class="login-password" required="true" placeholder="Password" id="clave" /> <!-- ID: CLAVE -->

  <input type="button" name="Login" value="Login" class="login-submit" onclick="Main.Login()">

<!-- SI HAY UN ERROR <input type="button" name="Login" value="Login" class="login-submit" onclick="Main.Login(event)"> -->
</form>


<tr>
<a href="registro.php" class="irHaciaInferior">¿Desea registrarse?</a>
</tr>


<div class="underlay-photo"></div>
<div class="underlay-black"></div> 

</body>
</html>











