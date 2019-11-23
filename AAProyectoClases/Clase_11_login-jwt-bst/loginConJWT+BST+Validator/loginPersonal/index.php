<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>LOGIN</title>

     
        <!-- RECORDATORIO: BOWER INSTALL - COMPOSER INSTALL // PARA QUE FUNCIONE TODO BIEN-->

        <!-- INCLUYO LOS ESTILOS-->
        <link type="text/css" rel="stylesheet" href="CSS/EstilosPropios.css"/>


        <!-- INCLUYO EL AJAX-->
        <script type="text/javaScript" src="FRONTEND/ajax.js"> </script>


        <!-- INCLUYO LOS ARCHIVOS DEL VALIDADOR (DEL BOWER) -->
        
        <link rel="stylesheet" href="./librerias/bootstrap/dist/css/bootstrap.css"/>
        <link rel="stylesheet" href="./librerias/bootstrapvalidator/dist/css/bootstrapValidator.css"/>
    
        <script type="text/javascript" src="./librerias/jquery/dist/jquery.min.js"></script>
        <script type="text/javascript" src="./librerias/bootstrap/dist/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="./librerias/bootstrapvalidator/dist/js/bootstrapValidator.js"></script>

        <!-- FUNCIONES PROPIAS DEL VALIDADOR -->
         <script type="text/javascript" src="./app.js"></script>

</head>
<body>

<div class="container center_div"> <!-- container -->

<form class="well form-horizontal" id="loginID">


<div class="text-center">

  <tr>
                  <td>

                  <div id="imagenPropia"> <img src=".\CSS\icon.png" class="rounded"> </div>

                  </td>
  </tr>
</div>


<div class="form-group">     
      <label class="col-md-4 control-label">Email del Usuario</label>

      <div class="col-md-4 inputGroupContainer">

      <div class="input-group">
      <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
      <input type="email" name="nombreEmail" class="form-control" autofocus="true" required="true" placeholder="Email" id="correo" /> <!-- ID: CORREO -->
      </div>

      </div>

</div>


<div class="form-group">
      <label class="col-md-4 control-label">Email del Usuario</label>

      <div class="col-md-4 inputGroupContainer">
        
      <div class="input-group">
      <span class="input-group-addon"><i class="glyphicon glyphicon-asterisk"></i></span>
      <input type="password" name="nombrePassword" class="form-control" required="true" placeholder="Password" id="clave" /> <!-- ID: CLAVE -->
      </div>

      </div>

</div>


<div class="form-group">
      <label class="col-md-4 control-label"></label>

      <div class="col-md-6">
        
      <button type="button" name="Login" value="Login" class="btn btn-primary" onclick="Main.Login()"> Login <span class="glyphicon glyphicon-send"></span></button>

      <input type="button" name="Login" value="Login" class="btn btn-primary" onclick="Main.Login()"> <!-- YO SIEMPRE USE ESTO -->

      <!--  <input type="submit" name="Login" value="Login" class="btn btn-primary" onclick="Main.Login()">  ESTE ES COMO DEBERIA SER-->

      </div>
</div>

</form>

</div> <!-- div container -->


<form class="well form-horizontal" id="loginIDInferior"> 

<tr>
<a href="registro.php" class="irHaciaInferior">¿Desea registrarse?</a>
</tr>

</form>


</body>
</html>











