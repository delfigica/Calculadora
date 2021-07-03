import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-operador',
  templateUrl: './operador.component.html',
  styleUrls: ['./operador.component.css']
})
export class OperadorComponent  {
  operandoA: number = 0;
  operandoB: number = 0;

  @Output () resuldadoCuenta = new EventEmitter<number>();

  sumar():void{
    let resultado = this.operandoA + this.operandoB;
    this.resuldadoCuenta.emit(resultado);
  }
  restar():void{
    let resultado = this.operandoA - this.operandoB;
    this.resuldadoCuenta.emit(resultado);
  }
  dividir():void{
    let resultado = this.operandoA / this.operandoB;
    this.resuldadoCuenta.emit(resultado);
  }
  multiplicar():void{
    let resultado = this.operandoA * this.operandoB;
    this.resuldadoCuenta.emit(resultado);
  }


}
