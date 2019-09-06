import { Persona } from "./persona";

export class Empleado extends Persona{


  protected _legajo : number;
  protected _sueldo : number;

  public constructor(nombreParametro:string, apellidoParametro:string, dniParametro:number, sexoParametro:string, legajoParametro:number,  sueldoParametro:number){
    super(nombreParametro, apellidoParametro, dniParametro, sexoParametro);
    this._legajo = legajoParametro;
    this._sueldo = sueldoParametro;
}

public getLegajo():number{return this._legajo;}
public getSueldo():number{return this._sueldo;}


public Hablar(idioma : string) : string
{
  return "El empleado habla: " + idioma
}


public Mostrar():string{
  return super.Mostrar() + " _ " + this._legajo + " _ " + this._sueldo;
}



}
