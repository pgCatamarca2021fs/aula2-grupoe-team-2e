
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-venta-page',
  templateUrl: './venta-page.component.html',
  styleUrls: ['./venta-page.component.css']
})
export class VentaPageComponent implements OnInit {
  rango= 1;
  porcentage= 1;
  valor= 0;
  valor2= 0;
  valor3= 0;
  
  Selected=false;
  constructor( ) { }
  
  cambiar(Cantidad:number, price:number):void{
    this.Selected = true;
    if(this.Selected){
      this.valor = Cantidad;
      this.valor2 = Cantidad * price * 108.66;
      this.valor3 = this.valor2;
      console.log(this.valor);
 
    }
  }
  myValue: any=0;     
    getSliderValue(event:any=0) {
    this.myValue = event.target.value;
    this.valor2 = this.valor3 * this.myValue/100;
    
 }
  ngOnInit() {
  }

}
