import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'argMoney'
})
export class ArgMoneyPipe implements PipeTransform {

  transform(value: number, args?: number): number {
    let pesoarg = value * 107.47;
    pesoarg = pesoarg + pesoarg/20; // IMPUESTOS :'V
    return Math.round(pesoarg);
  }
}
