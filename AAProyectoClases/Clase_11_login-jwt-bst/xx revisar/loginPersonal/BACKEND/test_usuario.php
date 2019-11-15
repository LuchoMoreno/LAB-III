<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

use Firebase\JWT\JWT; // ESTO LO NECESITO PARA GENERAR EL TOKEN.

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


$app->post('/validarQueExista/', function (Request $request, Response $response) {   
    $array = $request->getParsedBody();
    $JSONRecibido = json_decode($array['usuario']);
    $ahora = time();
   
    $usuario = new Usuario();
    $clase = new stdClass();



    $clase = $usuario->ExisteEnBD($JSONRecibido->correo,$JSONRecibido->clave);


    if($clase->existe == true)
    {
        $_SESSION["perfilUsuario"] =$clase->usuario->perfil;

        
        $payload = array(
            'iat' => $ahora,            //CUANDO SE CREO EL JWT (OPCIONAL)
            'exp' => $ahora + (120),     //INDICA EL TIEMPO DE VENCIMIENTO DEL JWT (OPCIONAL)
            'data' => $array,           //DATOS DEL JWT
            'app' => "API REST 2019"    //INFO DE LA APLICACION (PROPIO)
        );
          
        //CODIFICO A JWT
        $token = JWT::encode($payload, "miClaveSecreta");
        
        $estado = new stdClass();
        $estado->exito = true;
        $estado->jwt = $token;

        //$nuevaRta = $response->withJson($clase->usuario, 200);
        // return $response->withJson($token, 200);

        $nuevaRta = $response->withJson($estado, 200);
    }

    else
    {
        $nuevaRta = $response->withJson("Ocurrio un error!", 403);
        echo " -- El usuario no existe!";
    }

  
    return $nuevaRta;

});

$app->get('/validar/', function (Request $request, Response $response) {

    echo "lalala";

});

$app->run();

?>