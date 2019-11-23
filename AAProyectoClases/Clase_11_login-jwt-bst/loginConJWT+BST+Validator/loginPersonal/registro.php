<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    <title>REGISTRO</title>
    
     <!-- INCLUYO EL AJAX-->
     <script type="text/javaScript" src="FRONTEND/ajax.js"> </script>

    <!-- INCLUYO LOS ESTILOS
    <link type="text/css" rel="stylesheet" href="CSS/Estilos.css" />-->

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


<form class="well form-horizontal" id="FormRegistro" >



<div class="form-group">
      <label class="col-md-4 control-label">Nombre</label>

      <div class="col-md-4 inputGroupContainer">
        
      <div class="input-group">
      <span class="input-group-addon"><i class="glyphicon glyphicon-chevron-right"></i></span>
      <input type="text" name="formRegistroNombre" class="form-control" placeholder="Nombre" id="nombre" /> <!-- ID: NOMBRE -->
      </div>

      </div>

</div>



<div class="form-group">
      <label class="col-md-4 control-label">Apellido</label>

      <div class="col-md-4 inputGroupContainer">
        
      <div class="input-group">
      <span class="input-group-addon"><i class="glyphicon glyphicon-chevron-right"></i></span>
      <input type="text" name="formRegistroApellido" class="form-control" placeholder="Apellido" id="apellido" /> <!-- ID: APELLIDO -->
      </div>

      </div>

</div>



<div class="form-group">
      <label class="col-md-4 control-label">Correo</label>

      <div class="col-md-4 inputGroupContainer">
        
      <div class="input-group">
      <span class="input-group-addon"><i class="glyphicon glyphicon-chevron-right"></i></span>
      <input type="email" name="formRegistroCorreo" class="form-control" placeholder="Correo" id="correo" /> <!-- ID: CORREO -->
      </div>

      </div>

</div>



<div class="form-group">
      <label class="col-md-4 control-label">Clave</label>

      <div class="col-md-4 inputGroupContainer">
        
      <div class="input-group">
      <span class="input-group-addon"><i class="glyphicon glyphicon-chevron-right"></i></span>
      <input type="password" name="formRegistroClave" class="form-control" placeholder="Clave" id="clave" /> <!-- ID: CLAVE -->
      </div>

      </div>

</div>



<div class="form-group">
      <label class="col-md-4 control-label">Perfil</label>

      <div class="col-md-4 inputGroupContainer">
        
      <div class="input-group">
      <span class="input-group-addon"><i class="glyphicon glyphicon-chevron-right"></i></span>
      <input type="text" name="formRegistroPerfil" class="form-control" placeholder="Perfil" id="perfil" /> <!-- ID: PERFIL  / SI ACA PONGO UNA LETRA SE ROMPE TODO-->
      </div>

      </div>

</div>



<div class="form-group">
      <label class="col-md-4 control-label">Subir foto</label>

      <div class="col-md-4 inputGroupContainer">
        
      <div class="input-group">
      <span class="input-group-addon"><i class="glyphicon glyphicon-chevron-right"></i></span>
      <input type="file" class="form-control" name="foto" id="foto"> <!-- ID: FOTO -->
      </div>

      </div>

</div>



<div class="form-group">
      <label class="col-md-4 control-label"></label>

      <div class="col-md-6">
      <button type="button" name="Login" value="Login" class="btn btn-primary login-submit" onclick="Main.Registro()"> Registrarse <span class="glyphicon glyphicon-send"></span></button>

      <input type="button" name="Login" value="Registro" class="btn btn-primary login-submit" onclick="Main.Registro()"> 
      </div>
</div>


</form>

</div> <!-- div container -->

<form class="well form-horizontal" id="FormRegistroInferior" >
<tr>
<a href="index.php" class="irHaciaInferior">¿Volver al login?</a>
</tr>
</form>


</body>
</html>