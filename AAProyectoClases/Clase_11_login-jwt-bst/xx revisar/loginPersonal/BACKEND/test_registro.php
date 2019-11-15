<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require_once '../vendor/autoload.php';
include_once ("../CLASES/Usuario.php");
include_once ("../CLASES/AccesoDatos.php");

$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;

$app = new \Slim\App(["settings" => $config]);

//'existe_bd'  ->   "usuario_login"      JSON(Correo y clave)
//Esta pagina me devuelve otro objeto json(existe(bool))
//Setear la variable de sesion

session_start();


$app->post('/registrarUsuario/', function (Request $request, Response $response) {   
    $array = $request->getParsedBody();
    $JSONRecibido = json_decode($array['user']);
   
    $usuario = new Usuario();

    $usuario->nombre = $JSONRecibido->nombre;
    $usuario->apellido = $JSONRecibido->apellido;
    $usuario->clave = $JSONRecibido->clave;
    $usuario->correo = $JSONRecibido->correo;
    $usuario->perfil = $JSONRecibido->perfil;
    $usuario->estado = $JSONRecibido->estado;

    $nuevaRta = $usuario->InsertarUsuario();
   
    return $nuevaRta;

});



$app->run();

?>