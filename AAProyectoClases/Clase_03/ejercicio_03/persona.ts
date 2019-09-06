export abstract class Persona{

  private _nombre : string;
  private _apellido : string;
  private _dni : number;
  private _sexo : string;

  public constructor(nombreParametro : string, apellidoParametro : string, dniParametro : number, sexoParametro : string){
    this._nombre = nombreParametro;
    this._apellido = apellidoParametro;
    this._dni = dniParametro;
    this._sexo = sexoParametro;
}

public getNombre():string{ return this._nombre;}
public getApellido():string{return this._apellido;}
public getDni():number{return this._dni;}
public getSexo():string{return this._sexo;}

public abstract Hablar(idioma : string) : string

public Mostrar():string
{
  return this._nombre + " -- " + this._apellido + " -- " + this._dni.toString() + " -- " + this._sexo;
}

// return super.Mostrar() + this._precio + this.color;

}
//NOTAS:
//1) LOS ACCESORES REQUIEREN QUE SE ESTABLEZCA EL COMPILADOR PARA SALIDA A ECMAScript 5 O SUPERIOR.
//2) LOS ACCESORES SOLO CON GET SE INFIEREN AUTOMATICAMENTE COMO READONLY.
//3) LOS ACCESORES SET, NO PUEDEN LLEVAR TIPO DE RETORNO
