/// <reference path="node_modules\@types\jquery\index.d.ts" />
// npm install jquery


function Realizar(): void {
    
    let archivo = $("#archivo").prop("file");
    var mensaje : any = $("#mensaje").val();

    let formData : FormData = new FormData();
    formData.append("archivo",archivo[0]);
    formData.append("mensaje", mensaje);

        $.ajax({
            type: 'POST',
            url: 'BACKEND/test.php',
            data: formData,
            dataType: 'json'})

            .done(function(obj){
                console.log(obj);
                $("#divMensaje").html(obj.mensaje + " - " + obj.fecha);

                $("#imagen").attr("src", obj.path);
            })

            .fail(function(error){});

    }