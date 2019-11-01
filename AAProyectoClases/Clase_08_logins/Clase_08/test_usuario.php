<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require_once './vendor/autoload.php';
include_once ("./usuario.php");
include_once ("./AccesoDatos.php");

$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;

$app = new \Slim\App(["settings" => $config]);

//'existe_bd'  ->   "usuario_login"      JSON(Correo y clave)
//Esta pagina me devuelve otro objeto json(existe(bool))
//Setear la variable de sesion

session_start();


$app->post('/validarQueExista/', function (Request $request, Response $response) {   
    $array = $request->getParsedBody();
    $JSONRecibido = json_decode($array['usuario']);
   
    $usuario = new Usuario();
    $clase = new stdClass();


    $clase = $usuario->ExisteEnBD($JSONRecibido->correo,$JSONRecibido->clave);


    if($clase->existe == true)
    {
        $_SESSION["perfilUsuario"] =$clase->usuario->perfil;
        $nuevaRta = $response->withJson($clase->usuario, 200);
    }

    else
    {
        $nuevaRta = $response->withJson("Ocurrio un error!", 403);
    }

  
    return $nuevaRta;

});

$app->get('/validar/', function (Request $request, Response $response) {

    echo "lalala";

});

$app->run();

?>