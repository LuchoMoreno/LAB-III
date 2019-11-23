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
                        message: 'El email es requerido para continuar'
                    },
                    stringLength: {
                        min: 3,
                        message: 'El mínimo de caracteres admitidos es de 3'
                    }
                }
            },

            nombrePassword: {
                validators: {
                    notEmpty: {
                        message: 'La contraseña es requerida!'
                    },
                    stringLength: {
                        min: 3,
                        max: 20,
                        message: 'Por favor, ingrese entre 1 y 20 caracteres!'
                    }
                }
            }

        }
    });


    $('#FormRegistro').bootstrapValidator({

        message: 'El valor no es válido',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {

            formRegistroNombre: {
                validators: {
                    notEmpty: {
                        message: 'El nombre es requerido para continuar'
                    },
                    stringLength: {
                        min: 3,
                        max: 20,
                        message: 'Por favor, ingrese entre 3 y 20 caracteres!'
                    }
                }
            },

            formRegistroApellido: {
                validators: {
                    notEmpty: {
                        message: 'El apellido es requerido para continuar'
                    },
                    stringLength: {
                        min: 3,
                        max: 20,
                        message: 'Por favor, ingrese entre 3 y 20 caracteres!'
                    }
                }
            },

            formRegistroCorreo: {
                validators: {
                    notEmpty: {
                        message: 'El email es requerido para continuar'
                    },
                    stringLength: {
                        min: 3,
                        message: 'El mínimo de caracteres admitidos es de 3'
                    }
                }
            },


            formRegistroClave: {
                validators: {
                    notEmpty: {
                        message: 'La contraseña es requerida para continuar'
                    },
                    stringLength: {
                        min: 3,
                        max: 20,
                        message: 'Por favor, ingrese entre 1 y 20 caracteres!'
                    }
                }
            },

            formRegistroPerfil: {
                validators: {
                    notEmpty: {
                        message: 'El perfil es requerido para continuar'
                    },
                    stringLength: {
                        min: 1,
                        max: 2,
                        message: 'Solamente puede elegir entre 1 y 2'
                    }
                }
            }

        }
    });
});


