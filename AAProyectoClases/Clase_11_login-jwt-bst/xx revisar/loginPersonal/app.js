//AL TERMINAR DE CARGAR TODO EL DOM, SE ASIGNAN LOS MANEJADORES DE EVENTOS
$(document).ready(function() {

    $('#loginID').bootstrapValidator({

        message: 'El valor no es válido',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            nombreEmail: {
                validators: {
                    notEmpty: {
                        message: 'El nombre de usuario es requerido!!!'
                    },
                    stringLength: {
                        min: 3,
                        message: 'El mínimo de caracteres admitido es de 3!!!'
                    }
                }
            },
            nombrePassword: {
                validators: {
                    notEmpty: {
                        message: 'La contraseña es requerida!!!'
                    },
                    stringLength: {
                        min: 6,
                        max: 20,
                        message: 'Por favor, ingrese entre 6 y 20 caracteres!!!'
                    }
                }
            }
        }
    });
});


