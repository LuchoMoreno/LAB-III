<?php


//LEO EL ARCHIVO Y LO RETORNO (ES UN ARRAY DE JSON)
$a = fopen("../jsons/autos.json","r");

$linea = '';
while(!feof($a)){

    $linea .= fgets($a);
}

echo $linea;

fclose($a);


