/// <reference path="node_modules\@types\jquery\index.d.ts" />
function Realizar() {
    var archivo = $("#archivo").prop("file");
    var mensaje = $("#mensaje").val();
    var formData = new FormData();
    formData.append("archivo", archivo[0]);
    formData.append("mensaje", mensaje);
    $.ajax({
        type: 'POST',
        url: 'BACKEND/test.php',
        data: formData,
        dataType: 'json'
    })
        .done(function (obj) {
        console.log(obj);
        $("#divMensaje").html(obj.mensaje + " - " + obj.fecha);
        $("#imagen").attr("src", obj.path);
    })
        .fail(function (error) { });
}
