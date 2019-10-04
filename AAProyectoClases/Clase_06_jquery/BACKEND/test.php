<?php 

$mensaje = isset($_POST["mensaje"]) ? $_POST["mensaje"] : NULL;

$objJson = new stdClass();
$objJson->fecha = date('Y-m-d H:i:s');
$objJson->mensaje = $mensaje;
$objJson->path = $path_foto_subida;

echo json_encode($objJson);

?>