
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-venta-page',
  templateUrl: './venta-page.component.html',
  styleUrls: ['./venta-page.component.css']
})
export class VentaPageComponent implements OnInit {

  valor= 0;
  valor2= 0;
  Selected=false;
  constructor( ) { }
  
  cambiar(Cantidad:number, price:number):void{
    this.Selected = true;
    if(this.Selected){
      this.valor = Cantidad;
      this.valor2 = Cantidad * price * 108.66;
      console.log(this.valor);
 
    }
  }
  ngOnInit() {
  }

}
