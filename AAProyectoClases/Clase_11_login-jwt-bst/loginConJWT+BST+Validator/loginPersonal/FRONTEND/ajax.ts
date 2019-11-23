class Main{


    public static Login() // EN CASO QUE HAYA ERROR, LE METO UNA e COMO PARAMETRO.
    {
        let xmlh : XMLHttpRequest = new XMLHttpRequest();

        let correo = (<HTMLInputElement>document.getElementById("correo")).value;
    
        let clave = (<HTMLInputElement>document.getElementById("clave")).value;

        // e.preventDefault(); // en caso que exista un error.

        xmlh.onreadystatechange = () => 
        {
            if (xmlh.readyState == 4 && xmlh.status == 200) 
            {

                let recibido = JSON.parse(xmlh.responseText); // VOY A "DECODEAR" lo que recibi de la respuesta.
    
                if(recibido.exito == true)
                {
                    alert(recibido.jwt);
                    localStorage.setItem("MiClave", recibido.jwt);

                    alert("Esta entrando a la pagina");
                    window.location.href = "principal.php";
                }
                else
                {
                    alert("No se encuentra el usuario");
                }

            }

            if (xmlh.readyState == 4 && xmlh.status == 403) 
            {
                console.log(xmlh.responseText);
            }

        };
        
        xmlh.open("POST","http://localhost/loginPersonal/BACKEND/test_usuario.php/validarQueExista/",true);
        //xmlh.open("POST","localhost/login/test_usuario.php/validarQueExista",true);
    
        xmlh.setRequestHeader("content-type","application/x-www-form-urlencoded");
    
        xmlh.send('usuario={"correo":"' + correo +'", "clave": "'+clave+'"}');
        
    }


    public static Registro()
    {
        let xmlh : XMLHttpRequest = new XMLHttpRequest();

        let nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    
        let apellido = (<HTMLInputElement>document.getElementById("apellido")).value;

        let correo = (<HTMLInputElement>document.getElementById("correo")).value;
    
        let clave = (<HTMLInputElement>document.getElementById("clave")).value;

        let perfil = (<HTMLInputElement>document.getElementById("perfil")).value;

        var estado = 1;

        let foto : any = (<HTMLInputElement> document.getElementById("foto"));

        let form : FormData = new FormData();

        form.append('foto', foto.files[0]);

        form.append('user','{"nombre":"' + nombre +'", "apellido":"' + apellido +'","perfil":'+ perfil +', "correo":"' + correo +'","estado":'+estado+' ,"clave": "'+clave+'"}');

        xmlh.open("POST","http://localhost/loginPersonal/BACKEND/test_registro.php/registrarUsuario/",true);

        xmlh.setRequestHeader("enctype", "multipart/form-data");

        //xmlh.send('user={"nombre":"' + nombre +'", "apellido":"' + apellido +'","perfil":'+ perfil +', "correo":"' + correo +'","estado":'+estado+' ,"clave": "'+clave+'"}');

        xmlh.send(form);
        
        
        xmlh.onreadystatechange = () => 
        {
            if (xmlh.readyState == 4 && xmlh.status == 200) 
            {
               console.log(xmlh.responseText);

               alert("Usuario registrado, volviendo al login principal");
               window.location.href = "index.php";

            }
        };
    
 
    }

}