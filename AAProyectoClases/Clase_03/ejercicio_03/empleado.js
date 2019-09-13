"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var persona_1 = require("./persona");
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombreParametro, apellidoParametro, dniParametro, sexoParametro, legajoParametro, sueldoParametro) {
        var _this = _super.call(this, nombreParametro, apellidoParametro, dniParametro, sexoParametro) || this;
        _this._legajo = legajoParametro;
        _this._sueldo = sueldoParametro;
        return _this;
    }
    Empleado.prototype.getLegajo = function () { return this._legajo; };
    Empleado.prototype.getSueldo = function () { return this._sueldo; };
    Empleado.prototype.Hablar = function (idioma) {
        return "El empleado habla: " + idioma;
    };
    Empleado.prototype.Mostrar = function () {
        return _super.prototype.Mostrar.call(this) + " _ " + this._legajo + " _ " + this._sueldo;
    };
    return Empleado;
}(persona_1.Persona));
exports.Empleado = Empleado;
//# sourceMappingURL=empleado.js.map