<?php
$producto = $_POST["producto"];

$productoDecodeado = json_decode($producto);

$productoDecodeado->nombre = "Limon";
$productoDecodeado->precio = 5;

echo json_encode($productoDecodeado);