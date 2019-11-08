<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">


    <!-- bootstrap 4 -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>


    <title>Document</title>
</head>
<body>


            <div class="container-fluid" style="background-color:black">
            <h3></h3>
            </div>

    <h1>SOLAMENTE COLUMNAS </h1>
    <div class="conteiner-fluid">


        <div class="row"> 

                <div class="col-lg-4 col-sm-6" style="background-color:seagreen" >  <h3>Columna 1</h3> </div>
                <div class="col-lg-4 col-sm-3" style="background-color:mediumseagreen"> <h3>Columna 2</h3> </div>
                <div class="col-lg-4 col-sm-3" style="background-color:mediumspringgreen"> <h3>Columna 3</h3> </div> 
        </div>

        <br>
        <br>

        <div class="row"> 

                <div class="col-lg-3 col-sm-2" style="background-color:saddlebrown"> <h3>Columna 1</h3> </div>
                <div class="col-lg-3 col-sm-8" style="background-color:sienna"> <h3>Columna 2</h3> </div>
                <div class="col-lg-3 col-sm-1" style="background-color:peru"> <h3>Columna 3</h3> </div> 
                <div class="col-lg-3 col-sm-1" style="background-color:sandybrown"> <h3>Columna 4</h3> </div> 
        </div>

    </div>

    <br>
    <br>
    <br>
    <br>

    <h1> COLUMNAS + IMAGENES </h1>
    <div class="conteiner-fluid">

        <div class="row"> 

                <div class="col-lg-4 col-sm-6" style="background-color:seagreen" > <img src="./fotos/images.jpg" class="rounded img-responsive"> </div>
                <div class="col-lg-4 col-sm-3" style="background-color:mediumseagreen"> <img src="./fotos/images.jpg" class="rounded-circle"> </div>
                <div class="col-lg-4 col-sm-3" style="background-color:mediumspringgreen"> <img src="./fotos/images.jpg" class="img-thumbnail">  </div> 
        </div>

    </div>


    <br>
    <br>
    <br>
    <br>

    <h1> ALERTS </h1>

    <div class="conteiner-fluid">


    <div class="alert alert-success"> <strong>Exito!</strong> </div>

    <div class="alert alert-info"> <strong>Informacion!</strong> </div>

    <div class="alert alert-warning"> <strong>Peligro!</strong> </div>

    <div class="alert alert-success alert-dismissible"> <button type="button" class="close" data-dismiss="alert">&times; </button>
    <strong>Exito!</strong> Ahora puede cerrar la alerta.
    </div>

    </div>


    <br>
    <br>
    <br>
    <br>

    <h1> VENTANAS MODAL </h1>

    <div class="conteiner-fluid">

        <div class="row"> 
        <div class="col-lg-12 col-sm-12" style="background-color:seagreen" >  
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Abrir ventana modal</button>
        </div>
        </div>


        <div class="modal" id="myModal">
        <div class="modal-dialog">
        <div class="modal-content">


     <!-- Titulo -->
     <div class="modal-header"> <h4 class="modal-title">Titulo de la ventana modal</h4>  <button type="button" class="close" data-dismiss="modal">&times;</button>  </div>

      <!-- Cuerpo -->
      <div class="modal-body"> Cuerpo de la ventana modal </div>

      <!-- Boton de cierre -->
      <div class="modal-footer">  <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>  </div>

         </div>
         </div>
         </div>


    </div>


                
</body>
</html>