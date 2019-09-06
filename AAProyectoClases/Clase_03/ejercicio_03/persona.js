"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona = /** @class */ (function () {
    function Persona(nombreParametro, apellidoParametro, dniParametro, sexoParametro) {
        this._nombre = nombreParametro;
        this._apellido = apellidoParametro;
        this._dni = dniParametro;
        this._sexo = sexoParametro;
    }
    Persona.prototype.getNombre = function () { return this._nombre; };
    Persona.prototype.getApellido = function () { return this._apellido; };
    Persona.prototype.getDni = function () { return this._dni; };
    Persona.prototype.getSexo = function () { return this._sexo; };
    Persona.prototype.Mostrar = function () {
        return this._nombre + " -- " + this._apellido + " -- " + this._dni.toString() + " -- " + this._sexo;
    };
    return Persona;
}());
exports.Persona = Persona;
//NOTAS:
//1) LOS ACCESORES REQUIEREN QUE SE ESTABLEZCA EL COMPILADOR PARA SALIDA A ECMAScript 5 O SUPERIOR.
//2) LOS ACCESORES SOLO CON GET SE INFIEREN AUTOMATICAMENTE COMO READONLY.
//3) LOS ACCESORES SET, NO PUEDEN LLEVAR TIPO DE RETORNO
//# sourceMappingURL=persona.js.map